// ==UserScript==
// @name                    Play-With-MPV
// @name:zh                 使用 MPV 播放
// @description             通过 MPV 播放网页上的视频
// @namespace               https://github.com/LuckyPuppy514
// @version                 1.5.3
// @commit                  v1.2.1 新增 powershell 脚本升级提醒功能
// @commit                  v1.2.2 修复 youtube 标题带 | 导致错误脚本升级提醒
// @commit                  v1.2.3 修改 imomoe 域名
// @commit                  v1.3.0 新增域名：www.6dm.cc, www.dmla.cc（第一线路：大部分支持，其他线路：小部分支持）
// @commit                  v1.3.0 新增域名：www.dm233.me（线路III：大部分支持，其他线路：大部分不支持）
// @commit                  v1.3.0 代码重构，使用继承方便后续添加网站支持
// @commit                  v1.4.0 b站bug修复：标题带数字，解析出错，修复并优化了获取视频链接的速度
// @commit                  v1.4.0 新增对plex支持（本地：*://*/web/index.html*，远程：https://app.plex.tv/desktop/*）
// @commit                  v1.4.1 修复b站番剧播放目录为列表时，无法获取正确集数的bug
// @commit                  v1.4.2 修复b站番剧播放的bug
// @commit                  v1.4.3 修改cdn为unpkg，某些网络无法访问cdn，导致js加载失败（有问题，请自行修改：unpkg.com => cdn.jsdelivr.net/npm）
// @commit                  v1.4.4 www.dmla.cc 域名变更为：www.dmlaa.com
// @commit                  v1.4.5 ddrk.me 域名变更为：ddys.tv
// @commit                  v1.5.0 代码优化，去除 powershell 脚本，只需添加注册表信息即可
// @commit                  v1.5.1 B站添加 cid 参数，配合 https://github.com/itKelis/MPV-Play-BiliBili-Comments 可实现弹幕功能
// @commit                  v1.5.2 注册表代码升级，支持中文标题
// @commit                  v1.5.3 添加低端影视备用域名
// @homepage                https://github.com/LuckyPuppy514/Play-With-MPV
// @updateURL               https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv
// @downloadURL             https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv
// @author                  LuckyPuppy514
// @copyright               2022, Grant LuckyPuppy514 (https://github.com/LuckyPuppy514)
// @license                 MIT
// @icon                    https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/mpv.png
// @match                   *://www.youtube.com/*
// @include                 https://www.youtube.com/watch/*
// @include                 https://www.bilibili.com/bangumi/play/*
// @include                 https://www.bilibili.com/video/*
// @connect                 api.bilibili.com
// @include                 https://ddys.tv/*
// @include                 https://ddys2.me/*
// @include                 https://www.6dm.cc/play/*
// @include                 http://www.dmlaa.com/play/*
// @include                 https://danmu.yhdmjx.com/*
// @include                 https://www.dm233.me/play/*
// @include                 http://www.dmh8.com/player/*
// @include                 https://www.yhdmp.net/vp/*
// @match                   *://*/web/index.html*
// @include                 https://app.plex.tv/desktop/*
// @run-at                  document-end
// @require                 https://unpkg.com/js-base64@3.6.1/base64.js
// @require                 https://unpkg.com/jquery@3.2.1/dist/jquery.min.js
// @grant                   GM_setValue
// @grant                   GM_getValue
// ==/UserScript==

'use strict';

// playwithmpv.reg version
const REGEDIT_VERSION = "v1.5.2";

// using for dev
function debug(data) {
    // console.log(data);
    // alert(data);
}

// Play With MPV CSS
const PWM_CSS = `
#play-with-mpv-button {
  width: 50px;
  height: 50px;
  border: 0px;
  border-radius: 50%;
  background-size: 50px;
  overflow: hidden;
  background-size: cover;
  background-image: url(https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/mpv.png);
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 999
}

#play-with-mpv-div {
  position: fixed;
  left: 15px;
  bottom: 15px;
}
`;

const PWM_DIV_ID = "play-with-mpv-div";
const PWM_BUTTON_ID = "play-with-mpv-button";

const STYLE_VISIABLE = "display: block";
const STYLE_INVISIABLE = "display: none";

// add play with mpv div
function addPlayWithMPVDiv() {
    let pwmCss = document.createElement("style");
    pwmCss.innerHTML = PWM_CSS.trim();
    document.head.appendChild(pwmCss);

    let pwmButton = document.createElement("button");
    pwmButton.id = PWM_BUTTON_ID;
    pwmButton.style = STYLE_INVISIABLE;
    // add event listener
    pwmButton.onclick = function () {
        debug("pwm button click");
        handler.playCurrentVideoWithMPV();
        handler.pauseCurrentVideo();
    }

    let pwmDiv = document.createElement("div");
    pwmDiv.id = PWM_DIV_ID;
    pwmDiv.appendChild(pwmButton);
    document.body.appendChild(pwmDiv);
    debug("add div success");
}

function setVisiable() {
    debug("set visiable: " + currentVideoUrl);
    if (checkVideoUrl(currentVideoUrl)) {
        document.getElementById(PWM_BUTTON_ID).style = STYLE_VISIABLE;
    }
}
function setInvisiable() {
    document.getElementById(PWM_BUTTON_ID).style = STYLE_INVISIABLE;
}

// support domain
const YOUTUBE = "www.youtube.com";
const BILIBILI = "www.bilibili.com";
const DDRK = "ddys.tv";
const DDRK_BACKUP = "ddys2.me";
const DM6CC = "www.6dm.cc";
const DMLACC = "www.dmlaa.com";
const YHDMJX = "danmu.yhdmjx.com";
const DM233 = "www.dm233.me";
const DMH8 = "www.dmh8.com";
const YHDMP = "www.yhdmp.net";
const PLEX_LOCAL = "/web/index.html";
const PLEX = "app.plex.tv";

// api
const BILIBILI_API = 'https://api.bilibili.com'

// playwithmpv protocol
const PWM_PROTOCOL = "PlayWithMPV://";

// video url need play
var currentVideoUrl;
// currentPage info
var currentUrl;
var currentDomain;

var handler;
var ddrkPlayStatus;
var bilibiliCid;

class Handler {
    getProtocolLink() {
        // 添加注册表提示
        let version = GM_getValue("REGEDIT_VERSION");
        if (!version || version != REGEDIT_VERSION) {
            let message =
                  "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n"
                + "🔥 \n"
                + "🔥 请自行添加最新版注册表信息，否则可能无法正常运行\n"
                + "🔥 \n"
                + "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n"
                + "🔥 \n"
                + "🔥 确定：已添加，不再提示此消息\n"
                + "🔥 \n"
                + "🔥 取消：查看如何添加最新版注册表信息\n"
                + "🔥 \n"
                + "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥";
            var result = confirm(message);
            if (result == true) {
                GM_setValue("REGEDIT_VERSION", REGEDIT_VERSION);
            } else {
                window.open("https://github.com/LuckyPuppy514/Play-With-MPV#4-%E6%B7%BB%E5%8A%A0%E6%B3%A8%E5%86%8C%E8%A1%A8%E4%BF%A1%E6%81%AF");
                return;
            }
        }

        let protocolLink = PWM_PROTOCOL
            + '"' + currentVideoUrl + '" '
            + '--force-media-title="' + document.title + '" ';
        if (currentDomain.indexOf("bilibili") != -1) {
            protocolLink = protocolLink + '--http-header-fields=referer:"' + currentUrl + ',user-agent:' + navigator.userAgent + '" --script-opts="cid=' + bilibiliCid + '" ';
        }
        debug(protocolLink);
        return protocolLink;
    }

    getCurrentVideoUrl() { }
    playCurrentVideoWithMPV() { }
    pauseCurrentVideo() { }

    addPlayWithMPVButton() {
        addPlayWithMPVDiv();
    }
    addTimer() {
        // first try to get video url (wait page load)
        setTimeout(refreshCurrentVideoUrl, 600);
        // try to refresh video url (avoid get video url fail)
        setInterval(refreshCurrentVideoUrl, 3000);
        // page change listener
        setInterval(pageChangeListener, 1000);

        function refreshCurrentVideoUrl() {
            debug("refresh current video url: " + currentVideoUrl);
            debug("current url: " + currentUrl);
            if (!checkVideoUrl(currentVideoUrl)) {
                handler.getCurrentVideoUrl();
            }
        }
        function pageChangeListener() {
            let newCurrentUrl = window.location.href;
            if (currentUrl != newCurrentUrl) {
                setInvisiable();
                init();
            }
        }
    }
}

class YoutubeHandler extends Handler {
    getCurrentVideoUrl() {
        currentVideoUrl = currentUrl;
        setVisiable();
    }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("video")[0].pause();
    }
}

class BilibiliHandler extends Handler {
    getCurrentVideoUrl() {
        // video
        let bvIndex = currentUrl.indexOf('/video/BV');
        if (bvIndex != -1) {
            let bvid = currentUrl.substring(bvIndex + 9, bvIndex + 19);
            debug("bvid: " + bvid);
            this.getBilibiliVideoUrlByBvid(bvid);
            return;
        }

        // bangumi
        // get bilibili video epid
        let aElement = document.getElementsByClassName('ep-item cursor visited')[0];
        if (!aElement) {
            aElement = document.getElementsByClassName('ep-item cursor')[0];
        }
        let epid = aElement.getElementsByTagName('a')[0].href;
        epid = epid.substring(epid.indexOf('/ep') + 3);
        epid = epid.substring(0, epid.indexOf('/'));
        debug('epid: ' + epid);

        let eno = document.getElementsByClassName("ep-list-progress")[0];
        if (!eno) {
            return;
        }
        eno = eno.innerHTML;
        eno = eno.substring(0, eno.indexOf('/'));
        debug('eno: ' + eno);
        this.getBilibiliVideoUrlByEpid(epid, eno);
    }

    playCurrentVideoWithMPV() {
        if (currentUrl.indexOf(BILIBILI + "/video") != -1) {
            window.open(this.getProtocolLink(), "_blank");
        } else {
            window.open(this.getProtocolLink(), "_self");
        }
    }

    pauseCurrentVideo() {
        document.getElementsByTagName("video")[0].pause();
    }

    getBilibiliVideoUrlByBvid(bvid) {
        $.ajax({
            type: "GET",
            url: BILIBILI_API + "/x/web-interface/view?bvid=" + bvid,
            xhrFields: {
                // add cookie (CORS ignore cookie)
                withCredentials: true
            },
            success: function (res) {
                debug("get acid and cid by bvid result: ");
                debug(res);
                let avid = res.data.aid;
                let cid = res.data.cid;
                let index = currentUrl.indexOf("?p=");
                if (index != -1 && res.data.pages.length > 1) {
                    let p = currentUrl.substring(index + 3);
                    let endIndex = p.indexOf("&");
                    if (endIndex != -1) {
                        p = p.substring(0, endIndex);
                    }
                    cid = res.data.pages[p - 1].cid;
                }

                debug("avid: " + avid);
                debug("cid: " + cid);
                bilibiliCid = cid;

                let queryBilibiliVideoUrl = "/x/player/playurl?"
                    + "qn=120&otype=json&fourk=1&fnver=0&fnval=0"
                    + "&avid=" + avid
                    + "&cid=" + cid;
                $.ajax({
                    type: "GET",
                    url: BILIBILI_API + queryBilibiliVideoUrl,
                    xhrFields: {
                        // add cookie (CORS ignore cookie)
                        withCredentials: true
                    },
                    success: function (res) {
                        debug("get video url by bvid result: ");
                        debug(res);
                        currentVideoUrl = res.data.durl[0].url;
                        setVisiable();
                    }
                })
            }
        })
    }
    getBilibiliVideoUrlByEpid(epid, eno) {
        if (!epid || !eno) {
            return;
        }

        $.ajax({
            type: "GET",
            url: BILIBILI_API + "/pgc/view/web/season?ep_id=" + epid,
            xhrFields: {
                // add cookie (CORS ignore cookie)
                withCredentials: true
            },
            success: function (res) {
                debug("get acid and cid by epid result: ");
                debug(res);
                var episodes = res.result.episodes;
                if (eno.indexOf('PV') != -1 || eno.indexOf('OP') != -1 || eno.indexOf('ED') != -1) {
                    return;
                }

                // get avid and cid
                var episode = episodes[eno - 1];
                var avid = episode.aid;
                var cid = episode.cid;
                debug("avid: " + avid);
                debug("cid: " + cid);
                bilibiliCid = cid;

                let queryBilibiliVideoUrl = "/pgc/player/web/playurl?"
                    + "qn=120&otype=json&fourk=1&fnver=0&fnval=0"
                    + "&avid=" + avid
                    + "&cid=" + cid;
                $.ajax({
                    type: "GET",
                    url: BILIBILI_API + queryBilibiliVideoUrl,
                    xhrFields: {
                        // add cookie (CORS ignore cookie)
                        withCredentials: true
                    },
                    success: function (res) {
                        debug("get video url by epid result: ");
                        debug(res);
                        currentVideoUrl = res.result.durl[0].url;
                        setVisiable();
                    }
                });
            }
        })
    }
}

class DdrkHandler extends Handler {
    getCurrentVideoUrl() {
        // click play to load video element
        if (ddrkPlayStatus == 0) {
            // alert("start play");
            var playButton = document.getElementsByClassName('vjs-big-play-button')[0];
            if (!playButton) {
                debug("ddrk get play button fail");
                return;
            }
            playButton.click();
            ddrkPlayStatus = 1;
        }

        currentVideoUrl = document.getElementById('vjsp_html5_api').src;
        setVisiable();
    }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("video")[0].pause();
    }
}

class Dm6ccHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            setVisiable();
            window.removeEventListener("message", () => { });
        }, false);
    }
    getCurrentVideoUrl() { }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.postMessage("pause", "https://" + YHDMJX);
    }
}

class DmlaccHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            setVisiable();
            window.removeEventListener("message", () => { });
        }, false);
    }
    getCurrentVideoUrl() { }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.postMessage("pause", "https://" + YHDMJX);
    }
}

class YhdmjxHandler extends Handler {
    constructor() {
        super();
        // listen to pause
        window.addEventListener("message", function (event) {
            if (event.data == "pause") {
                document.getElementsByTagName('video')[0].pause();
            }
        }, false);
    }
    getCurrentVideoUrl() {
        // send current video url to parent iframe
        currentVideoUrl = document.getElementsByTagName('video')[0].src;
        if (checkVideoUrl(currentVideoUrl)) {
            window.parent.postMessage(currentVideoUrl, "*");
        }
    }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() { }
}

class Dm233Handler extends Handler {
    constructor() {
        super();
        this.videoElement = null;
    }
    getCurrentVideoUrl() {
        let iframe = document.getElementById('id_main_playiframe');
        this.videoElement = iframe.contentWindow.document.getElementsByTagName("video")[0];

        let videoUrl = this.videoElement.src;
        if (videoUrl.startsWith("blob:")) {
            videoUrl = iframe.src;
            let startIndex = videoUrl.indexOf('url=http') + 4;
            let endIndex = videoUrl.indexOf('&getplay_url=');
            videoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
        }

        currentVideoUrl = videoUrl;
        setVisiable();
    }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() {
        this.videoElement.pause();
    }
}

class Dmh8Handler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            setVisiable();
            window.removeEventListener("message", () => { });
        }, false);
    }
    getCurrentVideoUrl() {
        let iframe = document.getElementsByTagName('iframe')[2];
        let videoUrl = iframe.src;
        let startIndex = videoUrl.indexOf('url=http') + 4;
        let endIndex = videoUrl.indexOf('m3u8') + 4;
        currentVideoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
        setVisiable();
    }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() { }
}

class YhdmpHandler extends Handler {
    constructor() {
        super();
        this.videoElement = null;
    }
    getCurrentVideoUrl() {
        let iframe = document.getElementById('yh_playfram');
        this.videoElement = iframe.contentWindow.document.getElementsByTagName("video")[0];

        let videoUrl = iframe.src;
        let startIndex = videoUrl.indexOf('url=http') + 4;
        let endIndex = videoUrl.indexOf('&getplay_url=');
        currentVideoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
        setVisiable();
    }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    pauseCurrentVideo() {
        this.videoElement.pause();
    }
}

class PlexHandler extends Handler {
    constructor() {
        super();
    }
    getCurrentVideoUrl() {
        let as = document.getElementsByTagName('a');
        let pwmButton = document.getElementById(PWM_BUTTON_ID);
        if (pwmButton) {
            return;
        }
        for (let a of as) {
            if (a) {
                if (a.target == "downloadFileFrame") {
                    pwmButton = document.createElement("button");
                    pwmButton.id = PWM_BUTTON_ID;
                    // add event listener
                    pwmButton.onclick = function () {
                        debug("pwm button click");
                        handler.playCurrentVideoWithMPV();
                    }
                    pwmButton.innerText = "Play With MPV";
                    pwmButton.className = a.className;
                    a.before(pwmButton);
                    currentVideoUrl = a.href;
                    break;
                }
            }
        }
    }
    playCurrentVideoWithMPV() {
        window.open(this.getProtocolLink(), "_self");
    }
    addPlayWithMPVButton() {
    }
    addTimer() {
        setInterval(this.getCurrentVideoUrl, 500);
    }
}

// check video url valid or not
function checkVideoUrl(videoUrl) {
    if (videoUrl == null || videoUrl == undefined || !videoUrl.startsWith("http")) {
        return false;
    }
    if (YOUTUBE == currentDomain && currentUrl.indexOf("/watch") == -1) {
        debug("not in youtube/watch: " + currentUrl);
        return false;
    }
    // yun.66dm.net return m3u8 as .jpg, mpv play fail
    if (videoUrl.indexOf("yun.66dm.net") != -1) {
        debug("yun.66dm.net: " + videoUrl);
        return false;
    }
    return true;
}

// init
function init() {
    debug("init ......");
    currentUrl = window.location.href;
    currentDomain = window.location.host;
    currentVideoUrl = "";
    ddrkPlayStatus = 0;

    debug("start create handler");
    switch (currentDomain) {
        case YOUTUBE:
            handler = new YoutubeHandler();
            break;
        case BILIBILI:
            handler = new BilibiliHandler();
            break;
        case DDRK:
        case DDRK_BACKUP:
            handler = new DdrkHandler();
            break;
        case DM6CC:
            handler = new Dm6ccHandler();
            break;
        case DMLACC:
            handler = new DmlaccHandler();
            break;
        case YHDMJX:
            handler = new YhdmjxHandler();
            break;
        case DM233:
            handler = new Dm233Handler();
            break;
        case DMH8:
            handler = new Dmh8Handler();
            break;
        case YHDMP:
            handler = new YhdmpHandler();
            break;
        default:
            if (currentUrl.indexOf(PLEX_LOCAL) != -1 || currentDomain == PLEX) {
                handler = new PlexHandler();
            }
    }

    debug("start add button");
    handler.addPlayWithMPVButton();
    debug("start add timer");
    handler.addTimer();
}


debug("Play With MPV");
init();
