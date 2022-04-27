// ==UserScript==
// @name                    Play-With-MPV
// @namespace               https://github.com/LuckyPuppy514
// @version                 1.2.1
// @commit                  v1.2.1 新增 powershell 脚本升级提醒功能
// @commit:en-US            v1.2.1 add powershell scripts update remind
// @description             通过MPV播放网页上的视频（支持：youtube，bilibili，ddrk；部分支持：imomoe，yhdmp(一小部分，m3u8返回jpg后缀，mpv播放报错)），需要安装powershell脚本以支持浏览器打开mpv，详细说明见github
// @description:en-US       play website video using MPV(support:youtube,bilibili,ddrk; partial support: imomoe,yhdmp(a little part, m3u8 return .jpg, mpv play error)), need powershell ps1 to support browser run mpv, details see github
// @homepage                https://github.com/LuckyPuppy514/Play-With-MPV
// @updateURL               https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv
// @downloadURL             https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv
// @author                  LuckyPuppy514
// @copyright               2022, Grant LuckyPuppy514 (https://github.com/LuckyPuppy514)
// @license                 MIT
// @icon                    data:image/png;base64,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
// @match                   *://www.youtube.com/*
// @include                 https://www.youtube.com/watch/*
// @include                 https://www.bilibili.com/bangumi/play/*
// @include                 https://www.bilibili.com/video/*
// @connect                 api.bilibili.com
// @include                 http://www.imomoe.live/player/*
// @include                 https://www.yhdmp.net/vp/*
// @include                 https://ddrk.me/*
// @run-at                  document-end
// @require                 https://cdn.jsdelivr.net/npm/js-base64@3.6.1/base64.min.js
// @require                 https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// ==/UserScript==

'use strict';

// using for dev
function debug(data) {
    // console.log(data);
    // alert(data);
}

const CURRENT_VERSION = "v1.2.1";

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
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
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

// support domain
const YOUTUBE = "www.youtube.com";
const BILIBILI = "www.bilibili.com";
const IMOMOE = "www.imomoe.live";
const YHDMP = "www.yhdmp.net";
const DDRK = "ddrk.me";

const BILIBILI_API = 'https://api.bilibili.com'

// playwithmpv protocol
const PWM_PROTOCOL = "PlayWithMPV://";
// split char
const PWM_PT_SPLIT_CHAR = "|";

// video url need play
var currentVideoUrl;

// currentPage info
var currentUrl;
var currentDomain;

var ddrkPlayStatus = 0;

// add play with mpv div
function addPlayWithMPVDiv() {
    let pwmCss = document.createElement("style");
    pwmCss.innerHTML = PWM_CSS.trim();
    document.head.appendChild(pwmCss);

    let pwmButton = document.createElement("button");
    pwmButton.id = PWM_BUTTON_ID;
    // set invisiable
    pwmButton.style = STYLE_INVISIABLE;
    // add event listener
    pwmButton.onclick = function () {
        debug("pwm button click");
        playCurrentVideoWithMPV();
        pauseCurrentVideo();
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

// pause current video
function pauseCurrentVideo() {
    debug("pause current video");

    // bilibili/video
    if (currentUrl.indexOf(BILIBILI + "/video") != -1) {
        let playButton = document.getElementsByClassName("bilibili-player-iconfont")[0];
        playButton.click();
        return;
    }

    // youtube or bilibili/bangumi: get video element to pause
    if (currentDomain == YOUTUBE || currentDomain == BILIBILI || currentDomain == DDRK) {
        let videoElement = document.getElementsByTagName("video")[0];
        if (videoElement) {
            videoElement.pause();
        }
        return;
    }

    // yhdmp: key space to pause
    if (currentDomain == YHDMP || currentDomain == IMOMOE) {
        let keySpace = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, keyCode: 32 });
        document.body.dispatchEvent(keySpace);
        return;
    }
}

// play current video with mpv
function playCurrentVideoWithMPV() {
    debug("play current video with mpv");
    if (!checkVideoUrl(currentVideoUrl)) {
        alert("视频链接错误, 请刷新页面或稍后再试: video url invalid");
        return;
    }
    let protocolLink = PWM_PROTOCOL + Base64.encode(
        currentDomain + PWM_PT_SPLIT_CHAR +
        currentVideoUrl + PWM_PT_SPLIT_CHAR +
        document.title + PWM_PT_SPLIT_CHAR +
        CURRENT_VERSION
    );

    // bilibili/video pause will cause the page error(need to refresh), open in another page is ok.
    if (currentUrl.indexOf(BILIBILI + "/video") != -1) {
        window.open(protocolLink, "_blank");
    } else {
        window.open(protocolLink, "_self");
    }
}

// check video url valid or not
function checkVideoUrl(videoUrl) {
    let newCurrentUrl = window.location.href;
    if (currentUrl != newCurrentUrl) {
        changePage();
        return false;
    }
    if (YOUTUBE == currentDomain && currentUrl.indexOf("/watch") == -1) {
        debug("not in youtube/watch: " + currentUrl);
        return false;
    }

    if (videoUrl == null || videoUrl == undefined || !videoUrl.startsWith("http")) {
        return false;
    }
    return true;
}

function getCurrentVideoUrl() {
    debug("get current video url: " + currentUrl);
    // youtube
    if (YOUTUBE == currentDomain) {
        getYoutubeVideoUrl();
        return;
    }

    // bilibili
    if (BILIBILI == currentDomain) {
        getBilibiliVideoUrl();
        return;
    }

    // imomoe
    if (IMOMOE == currentDomain) {
        getImomoeVideoUrl()
        return;
    }

    // yhdmp
    if (YHDMP == currentDomain) {
        getYhdmpVideoUrl();
        return;
    }

    // ddrk
    if (DDRK == currentDomain) {
        getDdrkVideoUrl();
        return;
    }
}

function getYoutubeVideoUrl() {
    currentVideoUrl = currentUrl;
    setVisiable();
}

function getBilibiliVideoUrl() {
    // video
    let bvIndex = currentUrl.indexOf('/video/BV');
    if (bvIndex != -1) {
        let bvid = currentUrl.substring(bvIndex + 9, bvIndex + 19);
        debug("bvid: " + bvid);
        getBilibiliVideoUrlByBvid(bvid);
        return;
    }

    // bangumi
    // get bilibili video epid
    let aElement = document.getElementsByClassName('ep-item cursor visited')[0];
    let epid = aElement.getElementsByTagName('a')[0].href;
    epid = epid.substring(epid.indexOf('/ep') + 3);
    epid = epid.substring(0, epid.indexOf('/'));
    debug('epid: ' + epid);
    getBilibiliVideoUrlByEpid(epid);
}

function getImomoeVideoUrl() {
    let videoUrlElement = document.getElementsByTagName('iframe')[2];
    debug(videoUrlElement);
    let videoUrl = videoUrlElement.src;
    let startIndex = videoUrl.indexOf('url=http') + 4;
    let endIndex = videoUrl.indexOf('m3u8') + 4;
    currentVideoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
    setVisiable();
}

function getYhdmpVideoUrl() {
    let videoUrlElement = document.getElementById('yh_playfram');
    let videoUrl = videoUrlElement.src;
    let startIndex = videoUrl.indexOf('url=http') + 4;
    let endIndex = videoUrl.indexOf('&getplay_url=');
    currentVideoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
    setVisiable();
}

function getDdrkVideoUrl() {
    // click play to load video element
    if (ddrkPlayStatus == 0) {
        // alert("start play");
        var playButton = document.getElementsByClassName('vjs-big-play-button')[0];
        if (!playButton) {
            debug("ddrk get play button fail");
            return "";
        }
        playButton.click();
        ddrkPlayStatus = 1;
    }

    currentVideoUrl = document.getElementById('vjsp_html5_api').src;
    setVisiable();
}

function getBilibiliVideoUrlByBvid(bvid) {
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
            if (index != -1) {
                let p = currentUrl.substring(index + 3);
                let endIndex = p.indexOf("&");
                if(endIndex != -1){
                    p = p.substring(0, endIndex);
                }
                cid = res.data.pages[p - 1].cid;
            }

            debug("avid: " + avid);
            debug("cid: " + cid);

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

function getBilibiliVideoUrlByEpid(epid) {
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
            var num;
            // get episode num from title
            var playerTitle = document.getElementById('player-title');
            num = playerTitle.innerHTML;
            debug("bilibili player title: " + num);
            if (num.indexOf('PV') != -1 || num.indexOf('OP') != -1 || num.indexOf('ED') != -1) {
                return;
            }

            // only single episode
            if (episodes.length == 1) {
                num = 1;

            } else {
                num = num.replace(/[^0-9]/ig, "");
            }
            if (num.length < 1) {
                return;
            }

            // get avid and cid
            var episode = episodes[num - 1];
            var avid = episode.aid;
            var cid = episode.cid;
            debug("avid: " + avid);
            debug("cid: " + cid);

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

// init
function init() {
    debug("init ......");
    currentUrl = window.location.href;
    currentDomain = window.location.host;

    // first try to get video url after 1s(wait page load)
    setTimeout(refreshCurrentVideoUrl, 1000);
    // try to refresh video url every 2s(avoid get video url fail)
    setInterval(refreshCurrentVideoUrl, 2000);
    // page change listener
    setInterval(pageChangeListener, 500);
}
function refreshCurrentVideoUrl() {
    debug("refresh current video url: " + currentVideoUrl);
    debug("current url: " + currentUrl);
    if (!checkVideoUrl(currentVideoUrl)) {
        getCurrentVideoUrl();
    }
}
function pageChangeListener() {
    let newCurrentUrl = window.location.href;
    if (currentUrl != newCurrentUrl) {
        changePage(newCurrentUrl);
    }
}
function changePage() {
    debug("page change");
    document.getElementById(PWM_BUTTON_ID).style = STYLE_INVISIABLE;
    currentVideoUrl = "";
    currentUrl = window.location.href;
    currentDomain = window.location.host;
    ddrkPlayStatus = 0;
}

debug("Play With MPV");
addPlayWithMPVDiv();
init();
