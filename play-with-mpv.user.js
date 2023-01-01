// ==UserScript==
// @name                    Play-With-MPV
// @name:zh                 使用 MPV 播放
// @namespace               https://github.com/LuckyPuppy514
// @version                 3.0.1
// @author                  LuckyPuppy514
// @copyright               2023, Grant LuckyPuppy514 (https://github.com/LuckyPuppy514)
// @license                 MIT
// @description             使用 MPV 播放网页上的视频
// @homepage                https://github.com/LuckyPuppy514/Play-With-MPV
// @icon                    https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/mpv.png
// @updateURL               https://greasyfork.org/scripts/444056-play-with-mpv/code/Play-With-MPV.user.js
// @downloadURL             https://greasyfork.org/scripts/444056-play-with-mpv/code/Play-With-MPV.user.js
// @match                   https://www.bilibili.com/bangumi/play/*
// @match                   https://www.bilibili.com/video/*
// @match                   https://live.bilibili.com/*
// @match                   https://ddys.art/*
// @match                   https://ddys.pro/*
// @match                   https://libvio.fun/play/*
// @match                   https://libvio.me/play/*
// @match                   https://www.libvio.me/play/*
// @match                   https://sh-data-s02.chinaeast2.cloudapp.chinacloudapi.cn/*?url=*
// @match                   https://p.cfnode1.xyz/*?url=*
// @match                   https://www.pkmp4.com/py/*
// @match                   https://www.pkmp4.com/addons/dplayer/?url=*
// @match                   https://www.btnull.org/py/*
// @match                   https://www.btnull.to/py/*
// @match                   https://www.btnull.nu/py/*
// @match                   https://www.btnull.in/py/*
// @match                   *://www.996dm.com/play/*
// @match                   *://www.dmlaa.com/play/*
// @match                   *://www.qdmsh.com/play/*
// @match                   https://danmu.yhdmjx.com/*?url=*
// @match                   https://dick.xfani.com/watch/*
// @match                   https://dick.xfani.com/addons/dp/player/*
// @match                   https://m3.moedot.net/muiplayer/?url=*
// @match                   https://www.mgnacg.com/bangumi/*
// @match                   https://play.mknacg.top:8585/*
// @match                   https://www.omofun.top/index.php/vod/play/id/*
// @match                   https://player.omofun.top/?url=*
// @match                   https://spdcat.net/vodplay/*
// @match                   https://spdcat.net/addons/dp/player/*
// @match                   http://www.dm88.me/player/*
// @match                   https://jianghu.live2008.com/*?url=*
// @match                   https://www.kk151.com/play/*
// @match                   https://jx.m3u8.tv/jiexi/?url=*
// @match                   https://jx.wolongzywcdn.com:65/m3u8.php?url=*
// @match                   https://www.m3u8.tv.cdn.8old.cn/jx.php?url=*
// @match                   https://jx.wujinkk.com/dplayer/?url=*
// @match                   https://www.ikdmjx.com/?url=*
// @match                   https://hls.kuaibofang.com/?url=*
// @match                   https://jx.jxbdzyw.com/m3u8/?url=*
// @match                   https://hdzyk.com/?m=*
// @match                   https://1080zyk1.com/?m=*
// @match                   https://1080zyk2.com/?m=*
// @match                   https://1080zyk3.com/?m=*
// @match                   https://1080zyk4.com/?m=*
// @match                   https://1080zyk5.com/?m=*
// @match                   https://vip.zykbf.com/?url=*
// @match                   https://www.bdys01.com/*
// @match                   *://*/*.mp4
// @match                   *://*/*.mkv
// @match                   https://www.youtube.com/*
// @match                   https://ani.gamer.com.tw/animeVideo.php?sn=*
// @connect                 api.bilibili.com
// @connect                 api.live.bilibili.com
// @require                 https://unpkg.com/jquery@3.2.1/dist/jquery.min.js
// @grant                   GM_setValue
// @grant                   GM_getValue
// @run-at                  document-end
// ==/UserScript==

'use strict';

const INFO = `

▶️🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽◀️
▶️                                                       ◀️
▶️                     Play-With-MPV                     ◀️
▶️                                                       ◀️
▶️    https://github.com/LuckyPuppy514/Play-With-MPV     ◀️
▶️                                                       ◀️
▶️                  © 2023 LuckyPuppy514                 ◀️
▶️                                                       ◀️
▶️🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼◀️

`;
// gm key
const KEY = {
    config: "config"
}
// 默认配置
const DEFAULT_CONFIG = {
    player: "mpv",
    mpvPath: "",
    proxy: "",
    bestQuality: "2160p",
    bilibiliCodecs: 12,
    playAuto: 0,
    syncStartTime: 0,
    regVersion: "20221230",
    version: "20221230"
};
var currentConfig;
// 视频链接匹配正则
const VIDEO_URL_REGEX = /https?:\/\/(?![^"^']*http)[^"^']+(\.|%2e)(m3u8|m3u|mp4|mkv|flv|avi)(|\?[\w&]+)/g;
// 父子页面方法名
const METHOD = {
    pause: "PAUSE",
    report: "REPORT"
};
// 时间 ms
const TIME = {
    out: 3000,
    toast: 3000,
    refresh: 600,
    reportInterval: 600,
    pauseInterval: 2000
}
// 尝试次数
var tryTime = 0;
const TRY_TIME = {
    maxPause: 5,
    maxParse: 8
};
// 播放器配置
const PLAYER = {
    mpv: {
        name: "mpv",
        params: {
            videoUrl: 'mpv://"${videoUrl}" ',
            audioUrl: '--audio-file="${audioUrl}" ',
            title: '--force-media-title="${title}" ',
            startTime: '--start=${startTime} ',
            referer: '--http-header-fields="referer: ${referer}" ',
            origin: '--http-header-fields="origin: ${origin}" ',
            proxy: '--http-proxy=${proxy} --ytdl-raw-options=proxy=[${proxy}] ',
            other: '${other} '
        }
    },
    potplayer: {
        name: "potplayer",
        params: {
            videoUrl: 'potplayer://${videoUrl} /current ',
            title: '/title="${title}" ',
            startTime: '/seek=${startTime} ',
            referer: '/referer="${referer}" ',
            origin: '/headers="origin: ${origin}" ',
            proxy: '/user_agent="${proxy}" '
        }
    }
}
// 页面信息
var page = {
    title: undefined,
    host: undefined,
    url: undefined,
    isFullScreen: false,
};
// 处理器
var handler;
// 前缀
const PREFIX = "pwm";
// 组件 id
const ID = {
    loadingDiv: `${PREFIX}-loading-div`,
    toastDiv: `${PREFIX}-toast-div`,
    buttonDiv: `${PREFIX}-button-div`,
    aboutButton: `${PREFIX}-about-button`,
    playButton: `${PREFIX}-play-button`,
    settingButton: `${PREFIX}-setting-button`,
    settingDiv: `${PREFIX}-setting-div`,
    settingTable: `${PREFIX}-setting-table`,
    playerSelect: `${PREFIX}-player-input`,
    mpvPathInput: `${PREFIX}-mpv-path-input`,
    proxyInput: `${PREFIX}-proxy-input`,
    bestQualitySelect: `${PREFIX}-best-quality-select`,
    bilibiliCodecsSelect: `${PREFIX}-bilibili-codecs-select`,
    saveButton: `${PREFIX}-save-button`,
    downloadButton: `${PREFIX}-download-button`,
    playAutoInput: `${PREFIX}-play-auto-input`,
    syncStartTimeInput: `${PREFIX}-sync-start-time-input`,
    aboutDiv: `${PREFIX}-about-div`,
    aboutTable: `${PREFIX}-about-table`,
}
// 组件 class
const CLASS = {
    button: `${PREFIX}-button`,
    titleSpan: `${PREFIX}-title-span-class`,
    titleTd: `${PREFIX}-title-td-class`,
    closeButton: `${PREFIX}-cloase-button-class`,
    tipSpan: `${PREFIX}-tip-span-class`,
    footerSpan: `${PREFIX}-footer-span-class`,
    switchLabel: `${PREFIX}-footer-label-class`,
    sliderSpan: `${PREFIX}-slider-span-class`,
    roundSpan: `${PREFIX}-round-span-class`,
    customSelect: `${PREFIX}-custom-select-class`,
    readOnly: `${PREFIX}-read-only-class`,
}
// 消息类型
TOAST_TYPE = {
    info: "info",
    warn: "warn",
    error: "error"
}
const CSS = `
#${ID.loadingDiv} {
    display: none;
    position: fixed;
    bottom: 50%;
    left: 50%;
    z-index: 999999;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0);
}
.spinner {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
}
@-webkit-keyframes sk-rotateplane {
    0% {
        -webkit-transform: perspective(120px)
    }

    50% {
        -webkit-transform: perspective(120px) rotateY(180deg)
    }

    100% {
        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
    }
}

@keyframes sk-rotateplane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    }

    50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    }

    100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
}
#${ID.toastDiv} {
    display: none;
    position: fixed;
    bottom: 80%;
    left: 50%;
    max-width: 60%;
    min-width: 150px;
    padding: 0 14px;
    height: 40px;
    color: rgb(255, 255, 255);
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    z-index: 999999;
    background: rgba(0, 255, 0, .9);
    font-size: 14px;
    font-weight: blod;
}
/* 按钮 */
${ID.buttonDiv} {
    display: none;
}
.${CLASS.button} {
    position: fixed;
    cursor: pointer;
    z-index: 99999;
    border: none;
    border-radius: 50%;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0);
}
#${ID.playButton} {
    bottom: 10px;
    left: 16px;
    width: 50px;
    height: 50px;
    background-image: url(data:image/png;base64,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);
}
#${ID.playButton}:hover {
    bottom: 8px;
    left: 14px;
    width: 54px;
    height: 54px;
}
/* 设置 */
#${ID.settingButton} {
    bottom: 50px;
    left: 56px;
    width: 28px;
    height: 28px;
    background-image: url(data:image/png;base64,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);
}
#${ID.settingButton}:hover {
    bottom: 48px;
    left: 52px;
    width: 32px;
    height: 32px;
}
#${ID.settingDiv} {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;

    width: 780px;
    height: 410px;
    border: 6px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 113, 255, 1);
    display: none;
    flex-direction: column;
	border-radius: 6px;
	align-items: center;
    color: rgba(255, 255, 255, 1);
    font-family: "微软雅黑";
}
#${ID.settingTable} {
    margin-top: 10px;
    width: 680px;
    height: 330px;
    border-radius: 5px !important;
    border: 3px solid rgba(255, 255, 255, 1) !important;
    text-align: left;
    border-collapse: unset !important;
}
#${ID.settingTable} td {
    font-size: 14px;
    border: 0px solid rgba(255, 255, 255, 0.5);
    padding-top: 18px;
}
.${CLASS.titleSpan} {
    padding-top: 15px;
    font-size: 16px;
    font-weight: bold;
}
.${CLASS.closeButton} {
    position: absolute;
    top: 4px;
    right: 3px;
    height: 25px;
    width: 40px;
    border: none;
    font-size: 17px;
    background-color: rgba(0, 0, 0, 0);
    line-height: 0px;
    border-radius: 3px;
}
.${CLASS.closeButton}:hover {
    font-size: 20px;
    background-color: rgba(255, 255, 255, .5);
    cursor: pointer;
}
.${CLASS.tipSpan} {
    font-size: xx-small;
    color: yellow;
    position: fixed;
    padding-left: 5px;
    padding-top: 9px;
}
.${CLASS.titleTd} {
    width: 100px;
    height: 30px;
    border: none;
    font-size: 14px;
    padding-right: 15px;
    text-align: right;
}
#${ID.settingTable} input {
    font-size: 12px;
    width: 420px;
    height: 26px;
    border: none;
    outline: none;
    padding-left: 6px;
    border-radius: 2px;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 1);
    cursor: auto;
    display: inline-block !important;
    margin-top: 1px !important;
    margin-bottom: 1px !important;
}
#${ID.settingTable} input::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, .6);
}
#${ID.saveButton} {
    font-size: 14px;
    margin-left: 185px;
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, .6);
}
#${ID.downloadButton} {
    font-size: x-small;
    margin-left: 10px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, .6);
}
#${ID.saveButton}:hover,
#${ID.downloadButton}:hover {
    background-color: rgba(0, 255, 0, .7);
    cursor: pointer;
}
.${CLASS.customSelect} {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 25px;
    border: none;
    outline: none;
    padding-left: 6px;
    border-radius: 3px;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
    font-size: 12px;
}
.${CLASS.footerSpan} {
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 1);
}
.${CLASS.footerSpan} a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 1px;
    display: inline-block;
}
/* switch */
.${CLASS.switchLabel} {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 21px;
}
.${CLASS.switchLabel} input { 
    opacity: 0;
    width: 0 !important;
    height: 0 !important;
}
.${CLASS.sliderSpan} {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .6);
    -webkit-transition: .4s;
    transition: .4s;
}
.${CLASS.sliderSpan}:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 4px;
    background-color: rgba(255, 255, 255, 1);
    -webkit-transition: .4s;
    transition: .4s;
}
input:checked + .${CLASS.sliderSpan} {
    background-color: rgba(0, 255, 0, .7);
}
input:focus + .${CLASS.sliderSpan} {
    box-shadow: 0 0 1px rgba(0, 255, 0, .7);
}
input:checked + .${CLASS.sliderSpan}:before {
    -webkit-transform: translateX(29px);
    -ms-transform: translateX(29px);
    transform: translateX(29px);
}
.${CLASS.sliderSpan}.${CLASS.roundSpan} {
    border-radius: 34px;
}
.${CLASS.sliderSpan}.${CLASS.roundSpan}:before {
    border-radius: 50%;
}
.${CLASS.readOnly} {
    color: rgba(255, 0, 0, .9) !important;
    background-color: rgba(255, 0, 0, .9) !important;
    cursor: default !important;
}
#${ID.aboutButton} {
    bottom: 52px;
    left: 3px;
    width: 25px;
    height: 25px;
    background-image: url(data:image/png;base64,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);
}
#${ID.aboutButton}:hover {
    bottom: 50px;
    left: 1px;
    width: 29px;
    height: 29px;
}
`;
const HTML = `
<div id="${ID.loadingDiv}">
    <div class="spinner"></div>
</div>
<div id="${ID.toastDiv}"></div>

<div id="${ID.buttonDiv}" class="${CLASS.button}">
    <button id="${ID.aboutButton}" class="${CLASS.button}"></button>
    <button id="${ID.playButton}" class="${CLASS.button}"></button>
    <button id="${ID.settingButton}" class="${CLASS.button}"></button>
</div>

<div id="${ID.settingDiv}">
    <span class="${CLASS.titleSpan}"> Play-With-MPV <button class="${CLASS.closeButton}">❌</button></span>
    <table id="${ID.settingTable}">
        <tr>
            <td class="${CLASS.titleTd}">播放软件</td>
            <td>
                <select id="${ID.playerSelect}" class="${CLASS.customSelect}">
                    <option value="${PLAYER.mpv.name}" selected>${PLAYER.mpv.name}</option>
                    <option value="${PLAYER.potplayer.name}">${PLAYER.potplayer.name}</option>
                </select>
                <span class="${CLASS.tipSpan}">选择 potplayer 时：软件路径，最高画质，视频编码无效</span>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">软件路径</td>
            <td colspan="3">
                <input id="${ID.mpvPathInput}" type=text placeholder="请输入软件路径，例如：D://mpvnet//mpvnet.exe">
                <span class="${CLASS.tipSpan}">mpv.exe 完整路径</span>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">代理设置</td>
            <td colspan="3">
                <input id="${ID.proxyInput}" type=text placeholder="请输入代理地址，例如：http://127.0.0.1:10809">
                <span class="${CLASS.tipSpan}">油管和巴哈专属</span>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">最高画质</td>
            <td>
                <select id="${ID.bestQualitySelect}" class="${CLASS.customSelect}">
                    <option value="unlimited" selected>无限制</option>
                    <option value="2160p">2160p</option>
                    <option value="1440p">1440p</option>
                    <option value="1080p">1080p</option>
                    <option value="720p">720p</option>
                    <option value="480p">480p</option>
                </select>
                <span class="${CLASS.tipSpan}">油管和B站专属</span>
            </td>
            <td class="${CLASS.titleTd}">视频编码</td>
            <td>
                <select id="${ID.bilibiliCodecsSelect}" class="${CLASS.customSelect}">
                    <option value="12" selected>HEVC</option>
                    <option value="13">AV1</option>
                    <option value="7">AVC</option>
                </select>
                <span class="${CLASS.tipSpan}">B站专属</span>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">自动播放</td>
            <td>
                <label class="${CLASS.switchLabel}">
                    <input type="checkbox" id="${ID.playAutoInput}">
                    <span class="${CLASS.sliderSpan} ${CLASS.roundSpan}"></span>
                </label>
                <span class="${CLASS.tipSpan}">解析成功自动播放</span>
            </td>
            <td class="${CLASS.titleTd}">同步时间</td>
            <td>
                <label class="${CLASS.switchLabel}">
                    <input type="checkbox" id="${ID.syncStartTimeInput}">
                    <span class="${CLASS.sliderSpan} ${CLASS.roundSpan}"></span>
                </label>
                <span class="${CLASS.tipSpan}">同步网页播放时间</span>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <button id="${ID.saveButton}">保存设置</button>
                <button id="${ID.downloadButton}">下载注册表</button>
            </td>
        </tr>
    </table>
    <span class="${CLASS.footerSpan}">
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank"> © 2023 LuckyPuppy514 </a>
        <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank"> 🆕 </a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV/issues/new" target="_blank"> 👻 </a>
    </span>
</div>
`;
const REG =
    `Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Google\\Chrome]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Edge]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001

[HKEY_CLASSES_ROOT\\mpv]
@="mpv Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\\mpv\\DefaultIcon]
@=""

[HKEY_CLASSES_ROOT\\mpv\\shell]
@=""

[HKEY_CLASSES_ROOT\\mpv\\shell\\open]
@=""

[HKEY_CLASSES_ROOT\\mpv\\shell\\open\\command]
@="cmd /V:ON /C \\"FOR /F \\"tokens=* USEBACKQ\\" %%F IN (\`C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe -command \\"Add-Type -AssemblyName System.Web;[System.Web.HTTPUtility]::UrlDecode('%1')\\"\`) DO (SET param=%%F) & SET param=!param:mpv://=! & start /min \${MPV_PATH} !param!\\""
`
function appendCSS() {
    let css = document.createElement("style");
    css.innerHTML = CSS.trim();
    document.head.appendChild(css);
}
function appendHTML() {
    let div = document.createElement("div");
    div.innerHTML = HTML.trim();
    document.body.appendChild(div);
}
function loading(visiable) {
    let loadingDiv = document.getElementById(ID.loadingDiv);
    if (visiable) {
        loadingDiv.style.display = "flex";
        setTimeout(() => {
            if (loadingDiv.style.display == "flex") {
                document.getElementById(ID.loadingDiv).style.display = "none";
                toast("超时辣 ...... 😓", TOAST_TYPE.error);
            }
        }, TIME.out);
    } else {
        loadingDiv.style.display = "none";
    }
}
function toast(message, type, duration) {
    type = type ? type : TOAST_TYPE.info;
    duration = isNaN(duration) ? TIME.toast : duration;
    let toastDiv = document.getElementById(ID.toastDiv);
    toastDiv.innerHTML = message;
    toastDiv.style.display = "block";
    if (type == TOAST_TYPE.info) {
        toastDiv.style.backgroundColor = "rgba(75, 180 ,54, 1)";
    } else if (type == TOAST_TYPE.warn) {
        toastDiv.style.backgroundColor = "rgba(190, 190, 70, 1)";
    } else if (type == TOAST_TYPE.error) {
        toastDiv.style.backgroundColor = "rgba(210, 51, 35, 1)";
    }
    setTimeout(() => {
        toastDiv.style.display = "none";
    }, duration);
}
function addListener() {
    let buttonDiv = document.getElementById(ID.buttonDiv);
    let playButton = document.getElementById(ID.playButton);
    let settingButton = document.getElementById(ID.settingButton);
    let settingDiv = document.getElementById(ID.settingDiv);
    let playerSelect = document.getElementById(ID.playerSelect);
    let mpvPathInput = document.getElementById(ID.mpvPathInput);
    let proxyInput = document.getElementById(ID.proxyInput);
    let bestQualitySelect = document.getElementById(ID.bestQualitySelect);
    let bilibiliCodecsSelect = document.getElementById(ID.bilibiliCodecsSelect);
    let playAutoInput = document.getElementById(ID.playAutoInput);
    let syncStartTimeInput = document.getElementById(ID.syncStartTimeInput);
    let downloadButton = document.getElementById(ID.downloadButton);
    let saveButton = document.getElementById(ID.saveButton);
    let closeButtons = document.getElementsByClassName(CLASS.closeButton);
    let aboutButton = document.getElementById(ID.aboutButton);
    switchStatus(downloadButton, false);
    // 播放按钮
    playButton.onclick = function () {
        if (currentConfig.player == PLAYER.mpv.name) {
            let message = undefined;
            if (!currentConfig.mpvPath) {
                message = "请先进行设置";
            } else if (!currentConfig.regVersion) {
                message = "请先下载注册表";
            } else if (currentConfig.regVersion != DEFAULT_CONFIG.regVersion) {
                message = "注册表有更新，请重新下载注册表";
            }
            if (message) {
                toast(message, TOAST_TYPE.warn);
                settingDiv.style.display = "none";
                settingButton.click();
                return;
            }
        }
        loading(true);
        try {
            playButtonClickLimit();
            handler.play();
            handler.pause();
        } catch (error) {
            toast("出错辣 ...... 😓", TOAST_TYPE.error);
            console.log(error);
        }
        loading(false);
    }
    // 设置按钮
    settingButton.onclick = function () {
        let display = settingDiv.style.display;
        if (display == "flex") {
            settingDiv.style.display = "none";
        } else {
            settingDiv.style.display = "flex";
            // 加载配置
            playerSelect.value = currentConfig.player;
            mpvPathInput.value = currentConfig.mpvPath;
            proxyInput.value = currentConfig.proxy;
            bestQualitySelect.value = currentConfig.bestQuality;
            bilibiliCodecsSelect.value = currentConfig.bilibiliCodecs;
            playAutoInput.checked = currentConfig.playAuto == 1 ? true : false;
            syncStartTimeInput.checked = currentConfig.syncStartTime == 1 ? true : false;
            switchPlayer(playerSelect.value);
        }
    }
    // 播放器选择框
    playerSelect.onchange = function () {
        switchPlayer(this.value);
    }
    // 保存按钮
    saveButton.onclick = function () {
        let oldMpvPath = currentConfig.mpvPath;
        let newMpvPath = mpvPathInput.value;
        if (playerSelect.value == PLAYER.mpv.name) {
            if (!newMpvPath) {
                toast("软件路径不能为空", TOAST_TYPE.error);
                return;
            }
            if (/.*[\u4e00-\u9fa5 ]+.*/g.test(newMpvPath)) {
                toast("软件路径不能包含中文或空格", TOAST_TYPE.error);
                return;
            }
            newMpvPath = newMpvPath.replace(/[\\|/]+/g, "//");
            if (!newMpvPath.endsWith(".com") && !newMpvPath.endsWith(".exe")) {
                if (!newMpvPath.endsWith("//")) {
                    newMpvPath = newMpvPath + "//";
                }
                if (newMpvPath.toLowerCase().indexOf("mpvnet") != -1 || newMpvPath.toLowerCase().indexOf("mpv.net") != -1) {
                    newMpvPath = newMpvPath + "mpvnet.exe";
                } else {
                    newMpvPath = newMpvPath + "mpv.exe";
                }
            }
            mpvPathInput.value = newMpvPath;
            currentConfig.mpvPath = newMpvPath;
            currentConfig.bestQuality = bestQualitySelect.value;
            currentConfig.bilibiliCodecs = bilibiliCodecsSelect.value;
            switchStatus(downloadButton, mpvPathInput.value ? true : false);
        }
        currentConfig.proxy = proxyInput.value;
        currentConfig.player = playerSelect.value;
        currentConfig.playAuto = playAutoInput.checked ? 1 : 0;
        currentConfig.syncStartTime = syncStartTimeInput.checked ? 1 : 0;
        GM_setValue(KEY.config, currentConfig);
        if (oldMpvPath != newMpvPath) {
            toast("软件路径已修改，请重新下载注册表", TOAST_TYPE.warn);
        } else {
            toast("保存成功");
        }
        playButtonClickLimit();
        init();
    }
    // 下载按钮
    downloadButton.onclick = function () {
        currentConfig.regVersion = DEFAULT_CONFIG.regVersion;
        GM_setValue(KEY.config, currentConfig);
        console.log(DEFAULT_CONFIG);
        console.log(currentConfig);
        var a = document.createElement('a');
        var blob = new Blob([REG.replace("${MPV_PATH}", currentConfig.mpvPath)], { 'type': 'application/octet-stream' });
        a.href = window.URL.createObjectURL(blob);
        a.download = "mpv.reg";
        a.click();
    }
    // 关闭按钮
    for (let closeButton of closeButtons) {
        closeButton.onclick = function () {
            settingDiv.style.display = "none";
        }
    }
    // 关于按钮
    aboutButton.onclick = function () {
        window.open("https://www.lckp.top/play-with-mpv/index.html", "_blank");
    }
    // 切换播放器
    function switchPlayer(player) {
        if (player == PLAYER.mpv.name) {
            switchStatus(mpvPathInput, true);
            switchStatus(bestQualitySelect, true);
            switchStatus(bilibiliCodecsSelect, true);
            if (mpvPathInput.value) {
                switchStatus(downloadButton, true);
            }
        } else if (player == PLAYER.potplayer.name) {
            switchStatus(mpvPathInput, false);
            switchStatus(bestQualitySelect, false);
            switchStatus(bilibiliCodecsSelect, false);
            switchStatus(downloadButton, false);
        }
    }
    // 全屏
    document.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement) {
            page.isFullScreen = true;
            buttonDiv.style.display = "none";
        } else {
            page.isFullScreen = false;
            if (handler.media.videoUrl) {
                buttonDiv.style.display = "flex";
            }
        }
    });
    // 限制播放按钮点击频率
    function playButtonClickLimit() {
        playButton.disabled = true;
        setTimeout(() => {
            playButton.disabled = false;
        }, TIME.pauseInterval);
    }
}
// 切换元素状态
function switchStatus(element, flag) {
    if (flag) {
        element.readOnly = false;
        element.disabled = false;
        element.classList.remove(CLASS.readOnly);
    } else {
        element.readOnly = true;
        element.disabled = true;
        element.classList.add(CLASS.readOnly);
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// 加载配置
function loadConfig() {
    let oldConifg = GM_getValue(KEY.config);
    if (!oldConifg) {
        currentConfig = copy(DEFAULT_CONFIG);
        currentConfig.regVersion = "";
        GM_setValue(KEY.config, currentConfig);
    } else {
        if (oldConifg.version != DEFAULT_CONFIG.version) {
            currentConfig = copy(DEFAULT_CONFIG);
            for (const key in oldConifg) {
                config[key] = oldConifg[key];
            }
            currentConfig.version = DEFAULT_CONFIG.version;
            GM_setValue(KEY.config, currentConfig);
        } else {
            currentConfig = oldConifg;
            GM_setValue(KEY.config, currentConfig);
        }
    }
}
// 复制
function copy(oldBean) {
    let newBean = {};
    for (const key in oldBean) {
        newBean[key] = oldBean[key];
    }
    return newBean;
}
class Media {
    constructor() {
        this.title = "";
        this.videoUrl = "";
        this.audioUrl = "";
        this.startTime = "";
        this.referer = "";
        this.origin = "";
        this.proxy = "";
        this.other = "";
    }
    setTitle(title) {
        this.title = title;
    }
    setVideoUrl(videoUrl) {
        if (this.check(videoUrl)) {
            this.videoUrl = videoUrl;
            if (document.getElementById(ID.buttonDiv)) {
                document.getElementById(ID.buttonDiv).style.display = "flex";
                if (currentConfig.playAuto == 1) {
                    document.getElementById(ID.playButton).click();
                }
            }
        }
    }
    setAudioUrl(audioUrl) {
        this.audioUrl = audioUrl;
    }
    setStartTime(startTime) {
        this.startTime = Math.floor(startTime);
    }
    setReferer(referer) {
        this.referer = referer;
    }
    setOrigin(origin) {
        this.origin = origin;
    }
    setProxy(proxy) {
        this.proxy = proxy;
    }
    setOther(other) {
        this.other = other;
    }
    // 检查视频链接是否有效
    check(videoUrl) {
        if (videoUrl && videoUrl.startsWith("http")) {
            if (videoUrl.match(/(\.m3u|\.m3u8)/g)) {
                let m3u8 = "";
                $.ajax({
                    type: "GET",
                    url: videoUrl,
                    async: false,
                    success: function (res) {
                        m3u8 = res;
                    }
                });
                if (m3u8 && m3u8.indexOf("png") != -1) {
                    console.log("m3u8 链接无法播放：" + videoUrl);
                    return false;
                }
            }
            if (videoUrl.startsWith("https://www.mp4")) {
                return false;
            }
            return true;
        }
        console.log(`链接无效：${videoUrl}`);
        return false;
    }
}
class BaseHandler {
    constructor() {
        loadConfig();
        this.media = new Media();
        for (const key in PLAYER) {
            if (PLAYER[key].name == currentConfig.player) {
                this.player = PLAYER[key];
                break;
            }
        }
        this.media.setTitle(document.title);
        if (window.self == window.top) {
            if (!document.getElementById(ID.buttonDiv)) {
                console.log(INFO);
                appendCSS();
                appendHTML();
                addListener();
            }
            document.getElementById(ID.buttonDiv).style.display = "none";
        }
    }
    async parse() { }
    pause() {
        let videos = document.getElementsByTagName("video");
        if (videos && videos.length > 0) {
            let i = 0;
            while (i < TRY_TIME.maxPause) {
                setTimeout(function () {
                    for (let video of videos) {
                        video.pause();
                    }
                }, TIME.pauseInterval * i);
                i++;
            }
        } else if (this.iframe) {
            this.iframe.postMessage({ method: METHOD.pause }, "*");
        }
    }
    play() {
        let link = "";
        for (let key in this.player.params) {
            if (key == "title") {
                continue;
            }
            if (key == "startTime") {
                if (currentConfig.syncStartTime != 1) {
                    continue;
                } else if (!this.media.startTime) {
                    let video = document.getElementsByTagName("video")[0];
                    if (video) {
                        this.media.setStartTime(video.currentTime);
                    }
                }
            }
            let value = this.media[key];
            if (value) {
                let param = this.player.params[key];
                do {
                    param = param.replace('${' + key + '}', value);
                } while (param.indexOf('${' + key + '}') != -1)
                link = link + param;
            }
        }
        if (this.media.title) {
            let maxLength = 2000 - link.length;
            let title = encodeURIComponent(this.media.title);
            if (title.length > maxLength) {
                title = title.substring(0, maxLength) + '...';
            }
            link = link + this.player.params.title.replace('${title}', title);
        }
        window.open(link, "_self");
    }
    // 监听子页面事件
    addIframeListener() {
        let that = this;
        window.addEventListener("message", function (event) {
            that.iframe = event.source;
            if (event.data.method == METHOD.pause) {
                that.pause();
            } else if (event.data.method == METHOD.report) {
                that.media.setStartTime(event.data.media.startTime);
                if (!that.media.videoUrl) {
                    that.media.setVideoUrl(event.data.media.videoUrl);
                }
            }
        }, false);
    }
    // 监听顶层页面事件
    addTopListener() {
        let that = this;
        window.addEventListener("message", function (event) {
            if (event.data.method == METHOD.pause) {
                that.pause();
            }
        }, false);
        // 定时上报当前视频信息
        setInterval(() => {
            let video = document.getElementsByTagName("video")[0];
            if (video) {
                this.media.setStartTime(video.currentTime);
            }
            window.top.postMessage({ method: METHOD.report, media: that.media }, "*");
        }, TIME.reportInterval);
    }
    // yt-dlp 支持网站解析器
    ytDlpParser() {
        return page.url;
    }
    // video 元素解析器
    videoParser() {
        let videos = document.getElementsByTagName("video");
        for (let video of videos) {
            let url = video.src;
            if (url && url.startsWith("http")) {
                return url;
            }
        }
    }
    // iframe 元素解析器
    iframeParser() {
        let iframes = document.getElementsByTagName("iframe");
        for (let iframe of iframes) {
            let urls = iframe.src.match(VIDEO_URL_REGEX);
            if (urls && urls.length > 0) {
                return urls[0];
            }
        }
    }
    // html 解析器
    htmlParser() {
        let urls = document.body.innerHTML.match(VIDEO_URL_REGEX);
        if (urls && urls.length > 0) {
            return urls[0];
        }
    }
    // script 解析器
    scriptParser() {
        for (let script of document.scripts) {
            let urls = script.innerHTML.match(VIDEO_URL_REGEX);
            if (urls && urls.length > 0) {
                return urls[0];
            }
        }
    }
    // url 解析器
    urlParser() {
        let urls = page.url.match(VIDEO_URL_REGEX);
        if (urls && urls.length > 0) {
            return urls[0];
        }
    }
}
// 获取B站视频播放链接
function getBilibiliPlayUrl(avid, cid) {
    let fnval = 128;
    if (handler.player.params.audioUrl) {
        fnval = 4048;
    }
    $.ajax({
        type: "GET",
        url: `https://api.bilibili.com/x/player/playurl?qn=120&otype=json&fourk=1&fnver=0&fnval=${fnval}&avid=${avid}&cid=${cid}`,
        xhrFields: {
            withCredentials: true
        },
        async: false,
        success: function (res) {
            handler.media.setOther(`--script-opts="cid=${cid}"`);
            if (handler.player.params.audioUrl) {
                let videoUrl = undefined;
                let audioUrl = undefined;
                let dash = res.data.dash;
                let hiRes = dash.flac;
                let dolby = dash.dolby;
                if (hiRes && hiRes.audio) {
                    audioUrl = hiRes.audio.baseUrl;
                } else if (dolby && dolby.audio) {
                    audioUrl = dolby.audio[0].base_url;
                } else {
                    audioUrl = dash.audio[0].baseUrl;
                }
                let i = 0;
                while (i < dash.video.length && dash.video[i].id > BEST_QUALITY.bilibili[currentConfig.bestQuality]) {
                    i++;
                }
                videoUrl = dash.video[i].baseUrl;
                let id = dash.video[i].id;
                while (i < dash.video.length) {
                    if (dash.video[i].id != id) {
                        break;
                    }
                    if (dash.video[i].codecid == currentConfig.bilibiliCodecs) {
                        videoUrl = dash.video[i].baseUrl;
                        break;
                    }
                    i++;
                }
                handler.media.setAudioUrl(audioUrl);
                handler.media.setVideoUrl(videoUrl);
            } else {
                handler.media.setVideoUrl(res.data.durl[0].url);
            }
        }
    });
}
// function getBilibiliSubtitle(aid, cid) {
//     $.ajax({
//         type: "GET",
//         url: `https://api.bilibili.com/x/player/v2?aid=${aid}&cid=${cid}`,
//         xhrFields: {
//             withCredentials: true
//         },
//         async: true,
//         success: function (res) {
//             let subtitleUrl = res.data.subtitle.subtitles[0].subtitle_url;
//             console.log(subtitleUrl);
//         }
//     });
// }
const BEST_QUALITY = {
    bilibili: {
        "unlimited": 127,
        "2160p": 126,
        "1440p": 116,
        "1080p": 116,
        "720p": 74,
        "480p": 32
    },
    bilibiliLive: {
        "unlimited": 4,
        "2160p": 4,
        "1440p": 4,
        "1080p": 4,
        "720p": 3,
        "480p": 2
    },
    youtube: {
        "unlimited": "",
        "2160p": "--ytdl-format=bestvideo[height<=?2160]%2Bbestaudio/best",
        "1440p": "--ytdl-format=bestvideo[height<=?1440]%2Bbestaudio/best",
        "1080p": "--ytdl-format=bestvideo[height<=?1080]%2Bbestaudio/best",
        "720p": "--ytdl-format=bestvideo[height<=?720]%2Bbestaudio/best",
        "480p": "--ytdl-format=bestvideo[height<=?480]%2Bbestaudio/best"
    }
}
var websiteList = [
    {
        // ✅ https://www.bilibili.com/bangumi/play/ep508404
        name: "B站影视",
        home: [
            "https://www.bilibili.com"
        ],
        regex: /^https:\/\/www\.bilibili\.com\/bangumi\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.media.setReferer("https://www.bilibili.com");
            }
            async parse() {
                let epid = undefined;
                let epidElement = document.getElementsByClassName("ep-item cursor visited")[0];
                if (!epidElement) {
                    epidElement = document.getElementsByClassName('ep-item cursor')[0];
                }
                if (epidElement) {
                    epid = epidElement.getElementsByTagName('a')[0].href.match(/ep(\d+)/)[1];
                } else {
                    epidElement = document.getElementsByClassName("squirtle-pagelist-select-item active squirtle-blink")[0];
                    if (epidElement) {
                        epid = epidElement.dataset.value;
                    }
                }
                if (!epid) {
                    return;
                }
                $.ajax({
                    type: "GET",
                    url: `https://api.bilibili.com/pgc/view/web/season?ep_id=${epid}`,
                    xhrFields: {
                        withCredentials: true
                    },
                    async: false,
                    success: function (res) {
                        let currentEpisode;
                        let section = res.result.section;
                        if (!section) {
                            section = new Array();
                        }
                        section.push({ episodes: res.result.episodes });
                        for (let i = section.length - 1; i >= 0; i--) {
                            let episodes = section[i].episodes;
                            for (const episode of episodes) {
                                if (episode.id == epid) {
                                    currentEpisode = episode;
                                    break;
                                }
                            }
                            if (currentEpisode) {
                                break;
                            }
                        }
                        getBilibiliPlayUrl(currentEpisode.aid, currentEpisode.cid);
                    }
                })
            }
        },
    },
    {
        // ✅ https://www.bilibili.com/video/BV1Hd4y1k7Vb
        // ✅ https://www.bilibili.com/video/av2
        name: "B站投稿",
        home: [
            "https://www.bilibili.com"
        ],
        regex: /^https:\/\/www\.bilibili\.com\/video\/(BV|av).*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.media.setReferer("https://www.bilibili.com");
            }
            async parse() {
                let param = undefined;
                let videoId = page.url.substring(31);
                if (videoId.startsWith("BV")) {
                    param = "bvid=" + videoId.match(/BV([0-9a-zA-Z]+)/)[1];
                } else {
                    param = "aid=" + videoId.match(/av([0-9]+)/)[1];
                }
                $.ajax({
                    type: "GET",
                    url: `https://api.bilibili.com/x/web-interface/view?${param}`,
                    xhrFields: {
                        withCredentials: true
                    },
                    async: false,
                    success: function (res) {
                        let aid = res.data.aid;
                        let cid = res.data.cid;
                        let index = page.url.indexOf("?p=");
                        if (index != -1 && res.data.pages.length > 1) {
                            let p = page.url.substring(index + 3);
                            let endIndex = p.indexOf("&");
                            if (endIndex != -1) {
                                p = p.substring(0, endIndex);
                            }
                            cid = res.data.pages[p - 1].cid;
                        }
                        getBilibiliPlayUrl(aid, cid);
                    }
                })
            }
        },
    },
    {
        // ✅ https://live.bilibili.com/7777
        name: "B站直播",
        home: [
            "https://live.bilibili.com"
        ],
        regex: /^https:\/\/live\.bilibili\.com\/.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let iframe = document.getElementsByTagName("iframe")[0];
                if (!iframe) {
                    return;
                }
                let url = iframe.src;
                let index = url.indexOf("roomid=");
                if (index == -1) {
                    return;
                }
                let roomid = url.substring(index + 7);
                roomid = roomid.substring(0, roomid.indexOf("&"));
                let that = this;
                $.ajax({
                    type: "GET",
                    url: `https://api.live.bilibili.com/room/v1/Room/playUrl?quality=${BEST_QUALITY.bilibiliLive[currentConfig.bestQuality]}&cid=${roomid}`,
                    async: false,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (res) {
                        that.media.setVideoUrl(res.data.durl[0].url);
                    }
                });
            }
        },
    },
    {
        // ✅ https://ddys.art/bleach-thousand-year-blood-war
        name: "低端影视",
        home: [
            "https://ddys.art",
            "https://ddys.pro"
        ],
        regex: /^https:\/\/(ddys\.art|ddys\.pro)\/.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let video = document.getElementsByTagName("video")[0];
                if (video.paused) {
                    document.getElementsByClassName('vjs-big-play-button')[0].click();
                }
                this.media.setVideoUrl(this.videoParser());
                let playing = document.getElementsByClassName("wp-playlist-playing")[0];
                if (playing) {
                    let episode = playing.textContent.replace(/(\n|\t|\d\.)/g, "");
                    if (episode != " 全") {
                        this.media.title = document.getElementsByClassName("post-title")[0].textContent + episode + " - 低端影视";
                    }
                }
            }
        },
    },
    {
        // ✅ https://libvio.fun/play/714634-1-11.html
        name: "LIBVIO",
        home: [
            "https://libvio.fun",
            "https://libvio.me",
            "https://www.libvio.me"
        ],
        regex: /^https:\/\/(libvio\.fun|libvio\.me|www\.libvio\.me)\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "LIBVIO播放器",
        regex: /^https:\/\/(sh-data-s02\.chinaeast2\.cloudapp\.chinacloudapi\.cn|p\.cfnode1\.xyz)\/.*php\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(urls);
            }
        }
    },
    {
        // ✅ https://www.pkmp4.com/py/268677-2-11.html
        name: "片库",
        home: [
            "https://www.pkmp4.com",
        ],
        regex: /^https:\/\/www\.pkmp4\.com\/py\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
            async parse() {
                this.media.setVideoUrl(player_aaaa.url);
            }
        }
    },
    {
        name: "片库播放器",
        regex: /^https:\/\/www\.pkmp4\.com\/addons\/dplayer\/\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
        }
    },
    {
        // ✅ https://www.btnull.org/py/BBnLd_9.html?167094
        name: "无名小站",
        home: [
            "https://www.btnull.org",
            "https://www.btnull.to",
            "https://www.btnull.nu",
            "https://www.btnull.in",
        ],
        regex: /^https:\/\/(www.btnull.org|www.btnull.to|www.btnull.nu|www.btnull.in)\/py\/.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setVideoUrl(this.htmlParser());
            }
        }
    },
    {
        // ✅ https://www.996dm.com/play/6792-1-91.html
        // ✅ http://www.996dm.com/play/7800-1-10.html
        // ✅ http://www.dmlaa.com/play/7696-1-10.html
        // ✅ http://www.qdmsh.com/play/7663-1-10.html
        name: "樱花动漫网",
        home: [
            "https://www.996dm.com",
            "http://www.996dm.com",
            "http://www.dmlaa.com",
            "http://www.qdmsh.com"
        ],
        regex: /^https?:\/\/(www\.996dm\.com|www\.dmlaa\.com|www\.qdmsh\.com)\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "樱花动漫网播放器",
        regex: /^https:\/\/danmu\.yhdmjx\.com\/.*php\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(this.videoParser());
            }
        }
    },
    {
        // ✅ https://dick.xfani.com/watch/582/1/11.html
        name: "稀饭动漫",
        home: [
            "https://dick.xfani.com"
        ],
        regex: /^https:\/\/dick\.xfani\.com\/watch\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "稀饭动漫播放器",
        regex: /(^https:\/\/dick\.xfani\.com\/addons\/dp\/player\/.*|^https:\/\/m3\.moedot\.net\/muiplayer\/\?url=.*)/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                if (config.url.indexOf(".m3u8") > 0 || config.url.indexOf(".mp4") > 0 || config.url.indexOf(".flv") > 0) {
                    this.media.setVideoUrl(config.url);
                } else {
                    let that = this;
                    $.ajax({
                        type: "POST",
                        url: "api_currentConfig.php",
                        data: { "url": config.url, "time": config.time, "key": config.key, "title": config.title },
                        async: false,
                        success: function (res) {
                            if (res.code == "200") {
                                that.media.setVideoUrl(res.url);
                            }
                        }
                    });
                }
            }
        }
    },
    {
        // ✅ https://www.mgnacg.com/bangumi/426-6-12
        name: "橘子动漫",
        home: [
            "https://www.mgnacg.com"
        ],
        regex: /^https:\/\/www\.mgnacg\.com\/bangumi\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
                this.media.setReferer("https://play.mknacg.top:8585");
            }
        }
    },
    {
        name: "橘子动漫播放器",
        regex: /^https:\/\/play\.mknacg\.top:8585\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(this.urlParser());
            }
        }
    },
    {
        // ✅ https://www.omofun.top/index.php/vod/play/id/17295/sid/2/nid/7.html
        name: "OmoFun",
        home: [
            "https://www.omofun.top"
        ],
        regex: /^https:\/\/www\.omofun\.top\/index.php\/vod\/play\/id\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "OmoFun播放器",
        regex: /^https:\/\/player\.omofun\.top\/\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(this.urlParser());
            }
        }
    },
    {
        // ✅ https://spdcat.net/vodplay/135443-1-23
        name: "迅猫动漫",
        home: [
            "https://spdcat.net"
        ],
        regex: /^https:\/\/spdcat\.net\/vodplay\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "迅猫动漫播放器",
        regex: /^https:\/\/spdcat\.net\/addons\/dp\/player\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(config.url);
                setTimeout(() => {
                    let conplay = document.getElementsByClassName("conplay-jump")[0];
                    if (conplay) {
                        conplay.click();
                    }
                }, 1000);
            }
        }
    },
    {
        // ✅ http://www.dm88.me/player/8480-0-11.html
        name: "樱花动漫",
        home: [
            "http://www.dm88.me"
        ],
        regex: /^http:\/\/www\.dm88\.me\/player\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "樱花动漫播放器",
        regex: /^https:\/\/jianghu\.live2008\.com\/.*\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(url);
            }
        }
    },
    {
        // ✅ https://www.kk151.com/play/15257-2-11.html
        name: "动漫之家",
        home: [
            "https://www.kk151.com"
        ],
        regex: /^https:\/\/www\.kk151\.com\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "动漫之家播放器",
        regex: /^https:\/\/(www\.ikdmjx\.com\/|jx\.wolongzywcdn\.com:65\/m3u8\.php|hls\.kuaibofang\.com\/|jx\.jxbdzyw\.com\/m3u8\/|www\.m3u8\.tv\.cdn\.8old\.cn\/m3u8tv1127\/api\.php|jx\.wujinkk\.com\/dplayer\/|jx\.m3u8\.tv\/jiexi\/)\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(this.urlParser());
            }
        }
    },
    {
        // ✅ https://hdzyk.com/?m=vod-play-id-27537-src-2-num-11.html
        // ✅ https://1080zyk2.com/?m=vod-play-id-27537-src-2-num-11.html
        name: "优质资源库",
        home: [
            "https://hdzyk.com",
            "https://1080zyk1.com",
            "https://1080zyk2.com",
            "https://1080zyk3.com",
            "https://1080zyk4.com",
            "https://1080zyk5.com"
        ],
        regex: /^https:\/\/(hdzyk\.com|1080zyk[1-5]\.com)\/\?m=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "优质资源库播放器",
        regex: /^https:\/\/vip\.zykbf\.com\/\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(this.urlParser());
            }
        }
    },
    {
        // ✅ https://www.bdys01.com/play/22729-8.htm
        name: "哔嘀影视",
        home: [
            "https://www.bdys01.com"
        ],
        regex: /^https:\/\/www\.bdys01\.com\/.*play\/.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setVideoUrl(this.videoParser());
                if (!this.media.videoUrl) {
                    this.media.setVideoUrl(this.htmlParser());
                    if (!this.media.videoUrl) {
                        this.media.setVideoUrl(this.scriptParser());
                    }
                }
            }
        }
    },
    {
        name: "AList",
        regex: /^https?:\/\/(alist[^\/]+|[^\/]+:5244)\/.*\.(mp4|mkv)/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let url = this.videoParser();
                let index = url.indexOf("?");
                if (index != -1) {
                    url = url.substring(0, index + 1) + encodeURIComponent(url.substring(index + 1));
                }
                this.media.setVideoUrl(url);
                this.media.setTitle(document.title);
            }
        }
    },
    {
        // ✅ https://www.youtube.com/watch?v=IkGuTYaTsLo
        name: "YouTube",
        home: [
            "https://www.youtube.com"
        ],
        regex: /^https:\/\/www\.youtube\.com\/(watch|playlist)\?.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                if (page.url != "https://www.youtube.com/") {
                    this.media.setTitle("");
                    this.media.setProxy(currentConfig.proxy);
                    this.media.setOther(BEST_QUALITY.youtube[currentConfig.bestQuality]);
                    this.media.setVideoUrl(this.ytDlpParser());
                }
            }
        },
    },
    {
        // ✅ https://ani.gamer.com.tw/animeVideo.php?sn=32227
        name: "巴哈姆特",
        home: [
            "https://ani.gamer.com.tw"
        ],
        regex: /^https:\/\/ani\.gamer\.com\.tw\/animeVideo.php\?sn=.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setOrigin("https://ani.gamer.com.tw");
                let index = page.url.indexOf("sn=") + 3;
                if (index == -1) {
                    return;
                }
                let sn = page.url.substring(index);
                index = sn.indexOf("&");
                if (index != -1) {
                    sn = sn.substring(0, index);
                }
                let device = localStorage.ANIME_deviceid;
                let that = this;
                let res;
                $.ajax({
                    type: "GET",
                    url: `https://ani.gamer.com.tw/ajax/m3u8.php?sn=${sn}&device=${device}`,
                    async: false,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (json) {
                        res = JSON.parse(json);
                    }
                })
                if (res.error) {
                    if (res.error.code == 1015) {
                        let oldDuration = document.getElementsByClassName("vjs-duration-display")[0].innerHTML;
                        let newDuration = oldDuration;
                        while (oldDuration == newDuration) {
                            await sleep(1000);
                            newDuration = document.getElementsByClassName("vjs-duration-display")[0].innerHTML;
                        }
                        tryTime = 0;
                    }
                } else {
                    that.media.setProxy(currentConfig.proxy);
                    that.media.setVideoUrl(res.src);
                }
            }
        },
    },
];
// 初始化
async function init() {
    // 加载页面信息
    page = {
        title: document.title,
        host: window.location.host,
        url: window.location.href,
        isFullScreen: false
    };
    // 生成 handler
    for (let i = 0; i < websiteList.length; i++) {
        if (page.url.match(websiteList[i].regex)) {
            handler = new websiteList[i].handler();
            break;
        }
    }
    // 尝试解析页面视频
    if (handler) {
        tryTime = 0;
        while (tryTime < TRY_TIME.maxParse) {
            await sleep(tryTime * 1000 + 700);
            if (!handler.media.videoUrl) {
                try {
                    await handler.parse();
                } catch (error) {
                    console.log('解析失败：' + error);
                }
            }
            tryTime++;
        }
    }
}
// 开始执行
init();
setInterval(() => {
    if (window.location.href != page.url) {
        init();
    }
}, TIME.refresh);
