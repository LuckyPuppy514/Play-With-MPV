// ==UserScript==
// @name                    Play-With-MPV
// @name:zh                 使用 MPV 播放
// @namespace               https://github.com/LuckyPuppy514
// @version                 3.6.7
// @author                  LuckyPuppy514
// @copyright               2023, Grant LuckyPuppy514 (https://github.com/LuckyPuppy514)
// @license                 MIT
// @description             使用 mpv 播放网页中的视频，并支持 potplayer 及自定义播放器
// @homepage                https://github.com/LuckyPuppy514/Play-With-MPV
// @icon                    https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/mpv.png
// @updateURL               https://greasyfork.org/scripts/444056-play-with-mpv/code/Play-With-MPV.user.js
// @downloadURL             https://greasyfork.org/scripts/444056-play-with-mpv/code/Play-With-MPV.user.js
// @match                   https://www.bilibili.com/bangumi/play/*
// @match                   https://www.bilibili.com/video/*
// @match                   https://www.bilibili.com/festival/*
// @match                   https://www.bilibili.com/list/*
// @match                   https://live.bilibili.com/*
// @match                   https://www.ixigua.com/*
// @match                   https://yun.nxflv.com/?url=*
// @match                   https://ddys.art/*
// @match                   https://ddys.pro/*
// @include                 *://*.libvio.*
// @match                   https://*.chinaeast2.cloudapp.chinacloudapi.cn/*?url=*
// @match                   https://*.cfnode1.xyz/*?url=*
// @match                   https://www.nivod.tv/*
// @match                   https://www.pkmkv.com/py/*
// @match                   https://www.pkmkv.com/addons/dplayer/?url=*
// @match                   https://www.btnull.org/py/*
// @match                   https://www.btnull.to/py/*
// @match                   https://www.btnull.nu/py/*
// @match                   https://www.btnull.in/py/*
// @match                   *://www.956dm.com/play/*
// @match                   *://www.dmlaa.com/play/*
// @match                   *://www.qdmsh.com/play/*
// @match                   *://www.ntdm8.com/play/*
// @match                   https://danmu.yhdmjx.com/*?url=*
// @match                   https://dick.xfani.com/watch/*
// @match                   https://dick.xfani.com/addons/dp/player/*
// @match                   https://player.moedot.net/player/*
// @match                   https://m3.moedot.net/muiplayer/?url=*
// @match                   https://www.mgnacg.com/bangumi/*
// @match                   https://play.mknacg.top:8585/*
// @match                   https://www.omofun.top/index.php/vod/play/id/*
// @match                   https://*.omofun.top/?url=*
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
// @match                   https://*.yzzy-tv1.com/*
// @match                   https://*.yzzy-tv-cdn.com/*
// @match                   https://www.bdys10.com/*
// @match                   https://www.haitu.tv/*
// @include                 *://*alist*
// @include                 *://*:5244*
// @match                   *://*/*.mp4
// @match                   *://*/*.mkv
// @match                   https://www.dora-family.com/Resource:TV
// @match                   https://www.olehdtv.com/*
// @match                   *://tkznp.com/vodplay/*
// @match                   *://www.tkznp.com/vodplay/*
// @match                   *://www.tkznp1.com/vodplay/*
// @match                   *://www.tkznp2.com/vodplay/*
// @match                   *://www.tkznp3.com/vodplay/*
// @match                   *://www.tkznp4.com/vodplay/*
// @match                   *://www.tkznp5.com/vodplay/*
// @match                   *://www.tkznp6.com/vodplay/*
// @match                   https://vip.ckllk.com/?url=*
// @match                   https://www.hdmoli.com/*
// @match                   https://play.qwertwe.top/xplay/?url=*
// @match                   https://www.anfuns.cc/play/*
// @match                   https://www.anfuns.cc/vapi/*
// @match                   https://www.youtube.com/*
// @match                   https://odysee.com/*
// @match                   https://rumble.com/*
// @match                   https://www.bitchute.com/*
// @match                   https://ani.gamer.com.tw/animeVideo.php?sn=*
// @match                   https://hanime1.me/watch?v=*
// @match                   https://jable.tv/videos/*
// @match                   https://ok.ru/*
// @match                   https://tver.jp/*
// @match                   https://www.lckp.top/play-with-mpv/index.html
// @match                   https://www.douyin.com/
// @match                   https://www.douyin.com/video/*
// @match                   https://www.douyin.com/discover?modal_id=*
// @match                   https://www.mengfan.tv/play/*
// @match                   https://video1.beijcloud.com/player/?url=*
// @match                   https://www.tucao.cam/play/*
// @match                   https://mypikpak.com/drive/*
// @connect                 api.bilibili.com
// @connect                 api.live.bilibili.com
// @require                 https://unpkg.com/jquery@3.2.1/dist/jquery.min.js
// @require                 https://unpkg.com/md5@2.3.0/dist/md5.min.js
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
    mpv: {
        path: "",
        regVersion: "20230514",
    },
    potplayer: {
        path: "",
        regVersion: "20230514",
    },
    proxy: "",
    bestQuality: "2160p",
    bilibiliCodecs: 12,
    playAuto: 0,
    syncStartTime: 0,
    subtitlePrefer: "zh-Hans",
    customPlayer: {
        name: "custom",
        params: {
            videoUrl: 'iina://weblink?url=${EvideoUrl}',
            audioUrl: '',
            subtitleUrl: '',
            title: '',
            startTime: '',
            referer: '',
            origin: '',
            proxy: '',
            other: ''
        }
    },
    version: "20230118"
};
var currentConfig;
// 视频链接匹配正则
const VIDEO_URL_REGEX = /https?:\/\/(?![^"^']*http)[^"^']+(\.|%2e)(m3u8|m3u|mp4|mkv|flv|avi)(\?[\w&=-]+|)/g;
// 父子页面方法名
const METHOD = {
    pause: "PAUSE",
    report: "REPORT"
};
// 时间 ms
const TIME = {
    out: 3000,
    toast: 3500,
    refresh: 600,
    reportInterval: 600,
    pauseInterval: 2000,
    showButton: 5000,
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
            videoUrl: 'mpv://"${videoUrl}"',
            audioUrl: ' --audio-file="${audioUrl}"',
            subtitleUrl: ' --sub-file="${subtitleUrl}"',
            title: ' --force-media-title="${title}"',
            startTime: ' --start=${startTime}',
            referer: ' --http-header-fields="referer: ${referer}"',
            origin: ' --http-header-fields="origin: ${origin}"',
            proxy: ' --http-proxy=${proxy} --ytdl-raw-options=proxy=[${proxy}]',
            other: ' ${other}'
        }
    },
    potplayer: {
        name: "potplayer",
        params: {
            videoUrl: 'potplayer://${videoUrl} /current',
            subtitleUrl: ' /sub="${subtitleUrl}"',
            title: ' /title="${title}"',
            startTime: ' /seek=${startTime}',
            referer: ' /referer="${referer}"',
            origin: ' /headers="origin: ${origin}"',
            proxy: ' /user_agent="${proxy}"'
        }
    },
    custom: {
        name: "custom",
        params: undefined
    }
}
// 页面信息
var page = {
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
    infoButton: `${PREFIX}-info-button`,
    infoDiv: `${PREFIX}-info-div`,
    infoTable: `${PREFIX}-info-table`,
    playButton: `${PREFIX}-play-button`,
    settingButton: `${PREFIX}-setting-button`,
    settingDiv: `${PREFIX}-setting-div`,
    settingTable: `${PREFIX}-setting-table`,
    playerRadio: `${PREFIX}-player-radio`,
    softwarePathInput: `${PREFIX}-software-path-input`,
    proxyInput: `${PREFIX}-proxy-input`,
    bestQualityRadio: `${PREFIX}-best-quality-radio`,
    bilibiliCodecsRadio: `${PREFIX}-bilibili-codecs-radio`,
    saveButton: `${PREFIX}-save-button`,
    downloadButton: `${PREFIX}-download-button`,
    deleteButton: `${PREFIX}-delete-button`,
    playAutoInput: `${PREFIX}-play-auto-input`,
    syncStartTimeInput: `${PREFIX}-sync-start-time-input`,
    syncStartTimeSpan: `${PREFIX}-sync-start-time-span`,
    infoDiv: `${PREFIX}-info-div`,
    infoTable: `${PREFIX}-info-table`,
    subtitlePreferRadio: `${PREFIX}-subtitle-prefer-radio`,
    customPlayerButton: `${PREFIX}-custom-player-button`,
    customPlayerTable: `${PREFIX}-custom-player-table`,
    videoUrlParamInput: `${PREFIX}-video-url-param-input`,
    audioUrlParamInput: `${PREFIX}-audio-url-param-input`,
    subtitleUrlParamInput: `${PREFIX}-subtitle-url-param-input`,
    titleParamInput: `${PREFIX}-title-param-input`,
    startTimeParamInput: `${PREFIX}-start-time-param-input`,
    proxyParamInput: `${PREFIX}-proxy-param-input`,
    refererParamInput: `${PREFIX}-referer-param-input`,
    originParamInput: `${PREFIX}-origin-param-input`,
    nxParserIframe: `${PREFIX}-nx-parser-iframe`
}
// 组件 class
const CLASS = {
    button: `${PREFIX}-button`,
    titleSpan: `${PREFIX}-title-span-class`,
    titleTd: `${PREFIX}-title-td-class`,
    closeButton: `${PREFIX}-cloase-button-class`,
    tipSpan: `${PREFIX}-tip-span-class`,
    footerSpan: `${PREFIX}-footer-span-class`,
    switchLabel: `${PREFIX}-switch-label-class`,
    sliderSpan: `${PREFIX}-slider-span-class`,
    roundSpan: `${PREFIX}-round-span-class`,
    readOnly: `${PREFIX}-read-only-class`,
    footerA: `${PREFIX}-footer-a-class`,
    infoInput: `${PREFIX}-info-input-class`,
}
// 消息类型
const TOAST_TYPE = {
    info: "info",
    warn: "warn",
    error: "error"
}
// 图标
const ICON_BASE64 = {
    custom: "url('data:image/png;base64,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')",
    back: "url('data:image/png;base64,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')",
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
#${ID.loadingDiv} .spinner {
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
#${ID.buttonDiv} {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;
    z-index: 99999;
    width: 90px;
    height: 90px;
}
#${ID.buttonDiv}:hover .${CLASS.button} {
    visibility: visible !important;
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
#${ID.settingDiv},
#${ID.infoDiv} {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;

    width: 900px;
    height: 520px;
    background-color: rgb(65, 146, 247);
    display: none;
    flex-direction: column;
	border-radius: 6px;
	align-items: center;
    color: rgba(0, 0, 0, .7);
    font-family: "微软雅黑";
}
#${ID.infoDiv} {
    background-color: rgb(234, 122, 153) !important;
}
#${ID.infoTable},
#${ID.settingTable},
#${ID.customPlayerTable} {
    width: 800px;
    height: 460px;
    border-radius: 5px !important;
    border: 3px solid rgba(255, 255, 255, 1) !important;
    text-align: left;
    border-collapse: unset !important;
    display: flex;
    justify-content: center;
    padding-top: 3px;
    padding-bottom: 12px;
    line-height: 20px !important;
    font-weight: normal !important;
}
#${ID.customPlayerTable} {
    display: none;
}
#${ID.infoTable} td,
#${ID.settingTable} td,
#${ID.customPlayerTable} td {
    font-size: 14px;
    border: 0px solid rgba(255, 255, 255, 0.5);
    padding: 19px 0px 0px 0px !important;
}
#${ID.infoTable} td {
    padding-top: 16.5px !important;
}
.${CLASS.titleSpan} {
    padding-top: 12.5px !important;;
    padding-bottom: 12.5px !important;;
    font-size: 16px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1) !important;
}
.${CLASS.closeButton} {
    position: absolute;
    top: 4px;
    right: 8px;
    height: 25px;
    width: 25px;
    border: none;
    font-size: 17px !important;
    font-weight: normal !important;
    background-color: rgba(0, 0, 0, 0);
    line-height: 0px;
    border-radius: 3px;
    transform: scale(1.32, 1);
    color: rgba(255, 255, 255, 1);
}
.${CLASS.closeButton}:hover {
    font-size: 20px;
    background-color: rgba(255, 255, 255, .5);
    cursor: pointer;
}
.${CLASS.tipSpan} {
    font-size: 12px;
    color: yellow;
    position: fixed;
}
.${CLASS.titleTd} {
    position: relative;
    width: 80px;
    height: 30px;
    border: none;
    font-size: 14px;
    text-align: center;
    color: rgba(255, 255, 255, 1) !important;
    cursor: default;
}
#${ID.infoTable} input,
#${ID.settingTable} input,
#${ID.customPlayerTable} input {
    font-size: 12px !important;
    width: 500px;
    height: 26px;
    border: none;
    outline: none;
    text-indent: 5px;
    padding: 0px !important;
    border-radius: 0px !important;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 1);
    cursor: auto;
    display: flex !important;
    margin-top: 1px !important;
    margin-bottom: 1px !important;
    border-collapse: unset !important;
}
#${ID.infoTable} input:hover,
#${ID.settingTable} input:hover,
#${ID.customPlayerTable} input:hover,
#${ID.infoTable} input:focus-visible,
#${ID.settingTable} input:focus-visible,
#${ID.customPlayerTable} input:focus-visible {
    box-shadow: none;
}
#${ID.settingTable} input::placeholder,
#${ID.customPlayerTable} input::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, .3);
}
#${ID.saveButton} {
    font-size: 14px;
    margin-left: 83px;
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 255, 0, .7);
}
#${ID.downloadButton} {
    font-size: x-small;
    margin-left: 10px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 255, 0, .7);
}
#${ID.deleteButton} {
    text-decoration: none;
    font-size: x-small;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0,0,0,0);
}
#${ID.saveButton}:hover,
#${ID.downloadButton}:hover {
    opacity: .8;
    background-color: rgba(0, 255, 0, .8);
    cursor: pointer;
}
#${ID.deleteButton}:hover {
    opacity: .8;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
}
.${CLASS.footerSpan} {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
    color: rgba(255, 255, 255, 1);
}
#${ID.infoDiv} a,
.${CLASS.footerSpan} a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-size: 14px !important;
    font-weight: normal !important;
    margin-bottom: 1px;
    display: inline-block;
}
/* switch */
.${CLASS.switchLabel} {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 21px;
    margin-top: 3px;
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
#${ID.settingDiv} input:checked + .${CLASS.sliderSpan} {
    background-color: rgba(0, 255, 0, .7);
}
#${ID.settingDiv} input:focus + .${CLASS.sliderSpan} {
    box-shadow: 0 0 1px rgba(0, 255, 0, .7);
}
#${ID.settingDiv} input:checked + .${CLASS.sliderSpan}:before {
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
    color: rgba(255, 255, 255, .3) !important;
    background-color: rgba(0, 0, 0, .3) !important;
    cursor: default !important;
    opacity: 1 !important;
}
.${CLASS.readOnly}::placeholder {
    color: rgba(255, 255, 255, .3) !important;
}
#${ID.infoButton} {
    bottom: 52px;
    left: 3px;
    width: 25px;
    height: 25px;
    background-image: url(data:image/png;base64,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);
}
#${ID.infoButton}:hover {
    bottom: 50px;
    left: 1px;
    width: 29px;
    height: 29px;
}
#${ID.settingDiv} .tabs {
    display: flex;
    width: 501px;
    height: 28px;
}
#${ID.settingDiv} .tabs>.tab {
    flex: 1;
    display: flex;
    border: 1px solid rgb(65,146,247);
    margin: 0;
}
#${ID.settingDiv} .tabs>.tab:after {
    background: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0) !important;
}
#${ID.settingDiv} .tab>.tab-input {
    width: 0 !important;
    height: 0 !important;
    margin: 0 !important;
    display: none !important;
}
#${ID.settingDiv} .tab>.tab-box {
    padding: 4px 0px 0.5px 0px;
    width: 100%;
    height: 22px;
    text-align: center;
    transition: 0.3s;
    background: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: normal !important;
    display: table !important;
    color: #000000B3;
}
#${ID.settingDiv} .tab>.tab-box:hover {
    opacity: .8;
    cursor: pointer;
}
#${ID.settingDiv} .tab>.tab-input:checked+.tab-box {
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 255, 0, .7);
}
#${ID.customPlayerButton}:hover:after,
#${ID.settingDiv} .${CLASS.titleTd}:hover:after,
.${CLASS.footerA}:hover:after {
    position: absolute;
    font-size: 12px;
    left: 0px;
    top: -3px;
    padding: 5px 5px 5px 5px !important;
    background-color: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 1);
    content: attr(data-tip);
    text-align: center;
    z-index: 999999;
    width: auto !important;
    height: auto !important;
    white-space: nowrap;
}
#${ID.customPlayerButton}:hover:after {
    left: -10px !important;
    top: -28px !important;
}
.${CLASS.footerA} {
    position: relative;
}
.${CLASS.footerA}:hover:after {
    left: 0px !important;
    top: -27px !important;
}
#${ID.customPlayerButton} {
    position: absolute;
    right: 122px;
    top: 76px;
    width: 22px;
    height: 22px;
    border: none;
    cursor: pointer;
    background-image: ${ICON_BASE64.custom};
    z-index: 999999;
}
`;
const HTML = `
<div id="${ID.loadingDiv}">
    <div class="spinner"></div>
</div>
<div id="${ID.toastDiv}"></div>

<div id="${ID.buttonDiv}">
    <button id="${ID.infoButton}" class="${CLASS.button}"></button>
    <button id="${ID.playButton}" class="${CLASS.button}"></button>
    <button id="${ID.settingButton}" class="${CLASS.button}"></button>
</div>

<div id="${ID.infoDiv}">
    <span class="${CLASS.titleSpan}">Play-With-MPV<button class="${CLASS.closeButton}">X</button></span>
    <table id="${ID.infoTable}">
        <tr>
            <td colspan="4" style="text-align: center; color: white; font-size: 16px;">本 页 视 频 信 息</td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">视频标题</td>
            <td colspan="3">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">视频链接</td>
            <td colspan="3">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">音频链接</td>
            <td colspan="3">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">字幕链接</td>
            <td colspan="3">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">referer</td>
            <td colspan="3">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">origin</td>
            <td colspan="3">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr><td></td></tr>
        <tr>
            <td style="text-align: right;">
                <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank">🆕 升级 🆕</a>
            </td>
            <td style="text-align: right;">
                <a href="https://www.lckp.top/play-with-mpv/index.html" target="_blank">🧭 网站导航 🧭</a>
            </td>
            <td style="text-align: right;">
                <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank">🌟 项目源码 🌟</a>
            </td>
            <td style="text-align: right;">
                <a href="https://github.com/LuckyPuppy514/Play-With-MPV/issues/new" target="_blank">👻 反馈 👻</a>
            </td>
        </tr>
    </table>
    <span class="${CLASS.footerSpan}">
        <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank" class="${CLASS.footerA}" data-tip="版本升级"> 🆕 </a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank" class="${CLASS.footerA}" data-tip="项目源码"> © 2023 LuckyPuppy514 </a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV/issues/new" target="_blank" class="${CLASS.footerA}" data-tip="问题反馈"> 👻 </a>
    </span>
</div>

<div id="${ID.settingDiv}">
    <span class="${CLASS.titleSpan}">Play-With-MPV<button class="${CLASS.closeButton}">X</button></span>
    <button id="${ID.customPlayerButton}" class="${CLASS.button}" data-tip="设置自定义播放器"></button>
    <table id="${ID.settingTable}">
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选择 mpv 以外播放器时，部分功能无效">播放软件</td>
            <td colspan="3">
                <div class="tabs">
                    <label class="tab">
                        <input type="radio" name="${ID.playerRadio}" value="${PLAYER.mpv.name}" class="tab-input">
                        <div class="tab-box">mpv</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.playerRadio}" value="${PLAYER.potplayer.name}" class="tab-input">
                        <div class="tab-box">potplayer</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.playerRadio}" value="${PLAYER.custom.name}" class="tab-input">
                        <div class="tab-box">自定义</div>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="mpv.exe 或 PotPlayerMini64.exe 的完整路径">软件路径</td>
            <td colspan="3">
                <div>
                    <input id="${ID.softwarePathInput}" type=text placeholder="请输入软件路径，例如：D://mpvnet//mpvnet.exe">
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}"  data-tip="旁路由网关实现代理一般不需要设置">代理设置</td>
            <td colspan="3">
                <div>
                    <input id="${ID.proxyInput}" type=text placeholder="请输入代理地址，例如：http://127.0.0.1:10809">
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="仅适用于B站或使用 yt-dlp 解析的网站，例如：油管，OK，TVer 等">最高画质</td>
            <td colspan="3">
                <div class="tabs">
                    <label class="tab">
                        <input type="radio" name="${ID.bestQualityRadio}" value="unlimited" class="tab-input">
                        <div class="tab-box" name="${ID.bestQualityRadio}">无限制</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.bestQualityRadio}" value="2160p" class="tab-input">
                        <div class="tab-box" name="${ID.bestQualityRadio}">2160p</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.bestQualityRadio}" value="1440p" class="tab-input">
                        <div class="tab-box" name="${ID.bestQualityRadio}">1440p</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.bestQualityRadio}" value="1080p" class="tab-input">
                        <div class="tab-box" name="${ID.bestQualityRadio}">1080p</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.bestQualityRadio}" value="720p" class="tab-input">
                        <div class="tab-box" name="${ID.bestQualityRadio}">720p</div>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="仅适用于B站">视频编码</td>
            <td colspan="3">
                <div class="tabs">
                    <label class="tab">
                        <input type="radio" name="${ID.bilibiliCodecsRadio}" value="12" class="tab-input">
                        <div class="tab-box" name="${ID.bilibiliCodecsRadio}">HEVC</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.bilibiliCodecsRadio}" value="13" class="tab-input">
                        <div class="tab-box" name="${ID.bilibiliCodecsRadio}">AV1</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.bilibiliCodecsRadio}" value="7" class="tab-input">
                        <div class="tab-box" name="${ID.bilibiliCodecsRadio}">AVC</div>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="仅适用于B站">首选字幕</td>
            <td colspan="3">
                <div class="tabs">
                    <label class="tab">
                        <input type="radio" name="${ID.subtitlePreferRadio}" value="zh-Hans" class="tab-input">
                        <div class="tab-box" name="${ID.subtitlePreferRadio}">简体</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.subtitlePreferRadio}" value="zh-Hant" class="tab-input">
                        <div class="tab-box" name="${ID.subtitlePreferRadio}">繁体</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.subtitlePreferRadio}" value="en-US" class="tab-input"=>
                        <div class="tab-box" name="${ID.subtitlePreferRadio}">英语</div>
                    </label>
                    <label class="tab">
                        <input type="radio" name="${ID.subtitlePreferRadio}" value="off" class="tab-input"=>
                        <div class="tab-box" name="${ID.subtitlePreferRadio}">关闭</div>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="解析成功自动播放">自动播放</td>
            <td>
                <div>
                    <label class="${CLASS.switchLabel}">
                        <input type="checkbox" id="${ID.playAutoInput}">
                        <span class="${CLASS.sliderSpan} ${CLASS.roundSpan}"></span>
                    </label>
                </div>
            </td>
            <td class="${CLASS.titleTd}" data-tip="同步网页播放时间">同步时间</td>
            <td>
                <div>
                    <label class="${CLASS.switchLabel}">
                        <input type="checkbox" id="${ID.syncStartTimeInput}">
                        <span class="${CLASS.sliderSpan} ${CLASS.roundSpan}" id="${ID.syncStartTimeSpan}"></span>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <button id="${ID.saveButton}">保存设置</button>
                <button id="${ID.downloadButton}">下载注册表</button>
                <button id="${ID.deleteButton}">删除注册表</button>
            </td>
        </tr>
    </table>
    <table id="${ID.customPlayerTable}">
        <tr>
            <td class="${CLASS.titleTd}" data-tip="必填（视频格式：yt-dlp / m3u8 / flv / m4s / mp4 / mkv ... 播放器不支持则无法播放对应格式视频）">视频参数</td>
            <td colspan="3">
                <div>
                    <input id="${ID.videoUrlParamInput}" type=text placeholder='请输入视频参数，例如：mpv://"$\{videoUrl\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则不支持最高画质和视频编码）">音频参数</td>
            <td colspan="3">
                <div>
                    <input id="${ID.audioUrlParamInput}" type=text placeholder='请输入音频参数，例如： --audio-file="$\{audioUrl\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法加载B站外挂字幕）">字幕参数</td>
            <td colspan="3">
                <div>
                    <input id="${ID.subtitleUrlParamInput}" type=text placeholder='请输入字幕参数，例如： --sub-file="$\{subtitleUrl\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法传递标题）">标题参数</td>
            <td colspan="3">
                <div>
                    <input id="${ID.titleParamInput}" type=text placeholder='请输入标题参数，例如： --force-media-title="$\{title\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则不支持同步时间）">时间参数</td>
            <td colspan="3">
                <div>
                    <input id="${ID.startTimeParamInput}" type=text placeholder='请输入时间参数，例如： --start=$\{startTime\}'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则不支持代理设置）">代理参数</td>
            <td colspan="3">
                <div>
                    <input id="${ID.proxyParamInput}" type=text placeholder='请输入代理参数，例如： --http-proxy=$\{proxy\} --ytdl-raw-options=proxy=[$\{proxy\}]'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法观看B站和橘子动漫）">referer</td>
            <td colspan="3">
                <div>
                    <input id="${ID.refererParamInput}" type=text placeholder='请输入 referer，例如： --http-header-fields="referer: $\{referer\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法观看巴哈姆特）">origin</td>
            <td colspan="3">
                <div>
                    <input id="${ID.originParamInput}" type=text placeholder='请输入 origin，例如： --http-header-fields="origin: $\{origin\}" '>
                </div>
            </td>
        </tr>
    </table>
    <span class="${CLASS.footerSpan}">
        <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank" class="${CLASS.footerA}" data-tip="版本升级"> 🆕 </a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank" class="${CLASS.footerA}" data-tip="项目源码"> © 2023 LuckyPuppy514 </a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV/issues/new" target="_blank" class="${CLASS.footerA}" data-tip="问题反馈"> 👻 </a>
    </span>
</div>
`;
const REG =
    `Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Google\\Chrome]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Edge]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001

[HKEY_CLASSES_ROOT\\\${PLAYER_NAME}]
@="\${PLAYER_NAME} Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\\\${PLAYER_NAME}\\DefaultIcon]
@=""

[HKEY_CLASSES_ROOT\\\${PLAYER_NAME}\\shell]
@=""

[HKEY_CLASSES_ROOT\\\${PLAYER_NAME}\\shell\\open]
@=""

[HKEY_CLASSES_ROOT\\\${PLAYER_NAME}\\shell\\open\\command]
@="C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe -WindowStyle Hidden -Command \\"& {Add-Type -AssemblyName System.Web;$PARAMS=([System.Web.HTTPUtility]::UrlDecode('%1') -replace '^\${PLAYER_NAME}://'); Start-Process -FilePath \\\\\\\"\${SOFTWARE_PATH}\\\\\\\" -ArgumentList $PARAMS}\\""
`
const REG_DELETE =
    `Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT\\\${PLAYER_NAME}]
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
    let settingTable = document.getElementById(ID.settingTable);
    let softwarePathInput = document.getElementById(ID.softwarePathInput);
    let proxyInput = document.getElementById(ID.proxyInput);
    let playAutoInput = document.getElementById(ID.playAutoInput);
    let syncStartTimeInput = document.getElementById(ID.syncStartTimeInput);
    let syncStartTimeSpan = document.getElementById(ID.syncStartTimeSpan);
    let downloadButton = document.getElementById(ID.downloadButton);
    let deleteButton = document.getElementById(ID.deleteButton);
    let saveButton = document.getElementById(ID.saveButton);
    let closeButtons = document.getElementsByClassName(CLASS.closeButton);
    let infoButton = document.getElementById(ID.infoButton);
    let infoDiv = document.getElementById(ID.infoDiv);
    let customPlayerTable = document.getElementById(ID.customPlayerTable);
    let customPlayerButton = document.getElementById(ID.customPlayerButton);
    let videoUrlParamInput = document.getElementById(ID.videoUrlParamInput);
    let audioUrlParamInput = document.getElementById(ID.audioUrlParamInput);
    let subtitleUrlParamInput = document.getElementById(ID.subtitleUrlParamInput);
    let titleParamInput = document.getElementById(ID.titleParamInput);
    let startTimeParamInput = document.getElementById(ID.startTimeParamInput);
    let proxyParamInput = document.getElementById(ID.proxyParamInput);
    let refererParamInput = document.getElementById(ID.refererParamInput);
    let originParamInput = document.getElementById(ID.originParamInput);
    let infoInputs = document.getElementsByClassName(CLASS.infoInput);
    switchStatus(downloadButton, false);
    // 播放按钮
    playButton.onclick = function () {
        if (currentConfig.player == PLAYER.mpv.name || currentConfig.player == PLAYER.potplayer.name) {
            let message = undefined;
            if (!currentConfig[currentConfig.player].path) {
                message = "请先进行设置";
            } else if (!currentConfig[currentConfig.player].regVersion) {
                message = "请先下载注册表";
            } else if (currentConfig[currentConfig.player].regVersion != DEFAULT_CONFIG[currentConfig.player].regVersion) {
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
    // 播放快捷键 CTRL + P
    window.onkeydown = async function () {
        if (event.ctrlKey && event.keyCode === 80 && !event.shiftKey) {
            event.preventDefault();
            playButton.click();
        }
    }
    // 设置按钮
    settingButton.onclick = function () {
        let display = settingDiv.style.display;
        if (display == "flex") {
            settingDiv.style.display = "none";
        } else {
            infoDiv.style.display = "none";
            settingDiv.style.display = "flex";
            // 加载配置
            softwarePathInput.value = currentConfig[currentConfig.player].path;
            proxyInput.value = currentConfig.proxy;
            $(`input:radio[name="${ID.bestQualityRadio}"][value="${currentConfig.bestQuality}"]`).prop('checked', true);
            $(`input:radio[name="${ID.bilibiliCodecsRadio}"][value="${currentConfig.bilibiliCodecs}"]`).prop('checked', true);
            $(`input:radio[name="${ID.playerRadio}"][value="${currentConfig.player}"]`).prop('checked', true);
            playAutoInput.checked = currentConfig.playAuto == 1 ? true : false;
            syncStartTimeInput.checked = currentConfig.syncStartTime == 1 ? true : false;
            $(`input:radio[name="${ID.subtitlePreferRadio}"][value="${currentConfig.subtitlePrefer}"]`).prop('checked', true);
            switchPlayer($(`input:radio[name="${ID.playerRadio}"]:checked`).val());
        }
    }
    // 播放器选择框
    $(`input:radio[name="${ID.playerRadio}"]`).change(function () {
        switchPlayer(this.value);
    });
    // 保存按钮
    saveButton.onclick = function () {
        let playerChecked = $(`input:radio[name="${ID.playerRadio}"]:checked`).val();
        if (playerChecked == PLAYER.mpv.name || playerChecked == PLAYER.potplayer.name) {
            let oldSoftwarePath = currentConfig[playerChecked].path;
            let newSoftwarePath = softwarePathInput.value;
            if (!newSoftwarePath) {
                toast("软件路径不能为空", TOAST_TYPE.error);
                return;
            }
            if (/.*[\u4e00-\u9fa5]+.*/g.test(newSoftwarePath)) {
                toast("软件路径不能包含中文", TOAST_TYPE.error);
                return;
            }
            newSoftwarePath = newSoftwarePath.replace(/[\\|/]+/g, "//");
            if (!newSoftwarePath.endsWith(".com") && !newSoftwarePath.endsWith(".exe")) {
                if (!newSoftwarePath.endsWith("//")) {
                    newSoftwarePath = newSoftwarePath + "//";
                }
                if (playerChecked == PLAYER.mpv.name) {
                    if (newSoftwarePath.toLowerCase().indexOf("mpvnet") != -1 || newSoftwarePath.toLowerCase().indexOf("mpv.net") != -1) {
                        newSoftwarePath = newSoftwarePath + "mpvnet.exe";
                    } else {
                        newSoftwarePath = newSoftwarePath + "mpv.exe";
                    }
                } else if (playerChecked == PLAYER.potplayer.name) {
                    newSoftwarePath = newSoftwarePath + "PotPlayerMini64.exe";
                }
            }
            softwarePathInput.value = newSoftwarePath;
            currentConfig[playerChecked].path = newSoftwarePath;
            switchStatus(downloadButton, softwarePathInput.value ? true : false);
            if (oldSoftwarePath != newSoftwarePath) {
                currentConfig[playerChecked].regVersion = "00000000";
            }
        }
        currentConfig.proxy = proxyInput.value;
        currentConfig.bestQuality = $(`input:radio[name="${ID.bestQualityRadio}"]:checked`).val();
        currentConfig.bilibiliCodecs = $(`input:radio[name="${ID.bilibiliCodecsRadio}"]:checked`).val();
        currentConfig.player = playerChecked;
        currentConfig.subtitlePrefer = $(`input:radio[name="${ID.subtitlePreferRadio}"]:checked`).val();
        currentConfig.playAuto = playAutoInput.checked ? 1 : 0;
        currentConfig.syncStartTime = syncStartTimeInput.checked ? 1 : 0;
        GM_setValue(KEY.config, currentConfig);
        toast("保存成功");
        if (currentConfig.playAuto == 1) {
            playButtonClickLimit();
        }
        if (document.getElementById("iptv") && localStorage.category == "iptv") {
            localStorage.player = JSON.stringify(PLAYER[currentConfig.player]);
            document.getElementById("iptv").click();
        }
        init();
    }
    // 下载按钮
    downloadButton.onclick = function () {
        let playerChecked = $(`input:radio[name="${ID.playerRadio}"]:checked`).val();
        currentConfig[playerChecked].regVersion = DEFAULT_CONFIG[playerChecked].regVersion;
        GM_setValue(KEY.config, currentConfig);
        let reg = REG.replace("${SOFTWARE_PATH}", currentConfig[playerChecked].path);
        reg = reg.replace(/\$\{PLAYER_NAME\}/g, playerChecked);
        let a = document.createElement('a');
        let blob = new Blob([reg], { 'type': 'application/octet-stream' });
        a.href = window.URL.createObjectURL(blob);
        a.download = `${playerChecked}-install.reg`;
        a.click();
    }
    deleteButton.onclick = function () {
        let playerChecked = $(`input:radio[name="${ID.playerRadio}"]:checked`).val();
        currentConfig[playerChecked].regVersion = "00000000";
        GM_setValue(KEY.config, currentConfig);
        let reg = REG_DELETE.replace(/\$\{PLAYER_NAME\}/g, playerChecked);
        let a = document.createElement('a');
        let blob = new Blob([reg], { 'type': 'application/octet-stream' });
        a.href = window.URL.createObjectURL(blob);
        a.download = `${playerChecked}-delete.reg`;
        a.click();
    }
    // 关闭按钮
    for (let closeButton of closeButtons) {
        closeButton.onclick = function () {
            settingDiv.style.display = "none";
            infoDiv.style.display = "none";
        }
    }
    // 信息按钮
    infoButton.onclick = function () {
        let display = infoDiv.style.display;
        if (display == "flex") {
            infoDiv.style.display = "none";
        } else {
            settingDiv.style.display = "none";
            infoDiv.style.display = "flex";
            let title = handler.media.title;
            infoInputs[0].value = title ? title : document.title;
            infoInputs[1].value = handler.media.videoUrl;
            infoInputs[2].value = handler.media.audioUrl;
            infoInputs[3].value = handler.media.subtitleUrl;
            infoInputs[4].value = handler.media.referer;
            infoInputs[5].value = handler.media.origin;
            for (const infoInput of infoInputs) {
                if (infoInput.value) {
                    infoInput.style.cursor = "pointer";
                    infoInput.onclick = function () {
                        this.select();
                        navigator.clipboard.writeText(this.value);
                        toast("已复制到剪贴板");
                    }
                }
            }
        }
    }
    let bestQualityRadios = document.getElementsByName(ID.bestQualityRadio);
    let bilibiliCodecsRadios = document.getElementsByName(ID.bilibiliCodecsRadio);
    let subtitlePreferRadios = document.getElementsByName(ID.subtitlePreferRadio);
    // 切换播放器
    function switchPlayer(player) {
        player = PLAYER[player];
        // mpv 和 potplayer 专属
        if (player.name == PLAYER.mpv.name || player.name == PLAYER.potplayer.name) {
            switchStatus(softwarePathInput, true);
            softwarePathInput.value = currentConfig[player.name].path;
            if (softwarePathInput.value) {
                switchStatus(downloadButton, true);
            } else {
                switchStatus(downloadButton, false);
            }
        } else {
            switchStatus(softwarePathInput, false);
            switchStatus(downloadButton, false);
        }
        // 代理
        let flag = player.params.proxy ? true : false;
        switchStatus(proxyInput, flag);
        // 音频
        flag = player.params.audioUrl ? true : false;
        for (const radio of bestQualityRadios) {
            switchStatus(radio, flag);
        }
        for (const radio of bilibiliCodecsRadios) {
            switchStatus(radio, flag);
        }
        // 字幕
        flag = player.params.subtitleUrl ? true : false;
        for (const radio of subtitlePreferRadios) {
            switchStatus(radio, flag);
        }
        // 时间
        flag = player.params.startTime ? true : false;
        switchStatus(syncStartTimeSpan, flag);
        switchStatus(syncStartTimeInput, flag);
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
    // 自定义播放器按钮
    customPlayerButton.onclick = function () {
        if (customPlayerTable.style.display == "flex") {
            if (!videoUrlParamInput.value) {
                toast("视频参数不能为空", TOAST_TYPE.error);
                return;
            }
            currentConfig.customPlayer.params.videoUrl = videoUrlParamInput.value;
            currentConfig.customPlayer.params.audioUrl = audioUrlParamInput.value;
            currentConfig.customPlayer.params.subtitleUrl = subtitleUrlParamInput.value;
            currentConfig.customPlayer.params.title = titleParamInput.value;
            currentConfig.customPlayer.params.startTime = startTimeParamInput.value;
            currentConfig.customPlayer.params.proxy = proxyParamInput.value;
            currentConfig.customPlayer.params.referer = refererParamInput.value;
            currentConfig.customPlayer.params.origin = originParamInput.value;
            PLAYER.custom = currentConfig.customPlayer;
            GM_setValue(KEY.config, currentConfig);
            switchPlayer($(`input:radio[name="${ID.playerRadio}"]:checked`).val());
            settingTable.style.display = "flex";
            customPlayerTable.style.display = "none";
            customPlayerButton.style.backgroundImage = ICON_BASE64.custom;
            customPlayerButton.dataset.tip = "设置自定义播放器";
        } else {
            videoUrlParamInput.value = currentConfig.customPlayer.params.videoUrl;
            audioUrlParamInput.value = currentConfig.customPlayer.params.audioUrl;
            subtitleUrlParamInput.value = currentConfig.customPlayer.params.subtitleUrl;
            titleParamInput.value = currentConfig.customPlayer.params.title;
            startTimeParamInput.value = currentConfig.customPlayer.params.startTime;
            proxyParamInput.value = currentConfig.customPlayer.params.proxy;
            refererParamInput.value = currentConfig.customPlayer.params.referer;
            originParamInput.value = currentConfig.customPlayer.params.origin;
            settingTable.style.display = "none";
            customPlayerTable.style.display = "flex";
            customPlayerButton.style.backgroundImage = ICON_BASE64.back;
            customPlayerButton.dataset.tip = "保存并返回";
        }
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
    currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    currentConfig.mpv.regVersion = "";
    currentConfig.potplayer.regVersion = "";
    if (!oldConifg) {
        GM_setValue(KEY.config, currentConfig);
    } else {
        if (oldConifg.version != DEFAULT_CONFIG.version) {
            for (const key in oldConifg) {
                currentConfig[key] = oldConifg[key];
            }
            if (!currentConfig.mpv.path && currentConfig.mpvPath) {
                currentConfig.mpv.path = currentConfig.mpvPath;
                delete currentConfig['mpvPath'];
            }
            currentConfig.version = DEFAULT_CONFIG.version;
            GM_setValue(KEY.config, currentConfig);
        } else {
            currentConfig = oldConifg;
            GM_setValue(KEY.config, currentConfig);
        }
    }
    PLAYER.custom = currentConfig.customPlayer;
}
class Media {
    constructor() {
        this.title = "";
        this.videoUrl = "";
        this.audioUrl = "";
        this.subtitleUrl = "";
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
            if (!this.title) {
                this.setTitle(document.title);
            }
            let nxParserIframe = document.getElementById(ID.nxParserIframe);
            if (nxParserIframe) {
                document.body.removeChild(nxParserIframe);
            }
            if (document.getElementById(ID.buttonDiv)) {
                document.getElementById(ID.buttonDiv).style.display = "flex";
                if (currentConfig.playAuto == 1) {
                    document.getElementById(ID.playButton).click();
                }
                document.getElementById(ID.infoButton).style.visibility = "visible";
                document.getElementById(ID.settingButton).style.visibility = "visible";
                document.getElementById(ID.playButton).style.visibility = "visible";
                setTimeout(() => {
                    document.getElementById(ID.infoButton).style.visibility = "hidden";
                    document.getElementById(ID.settingButton).style.visibility = "hidden";
                    document.getElementById(ID.playButton).style.visibility = "hidden";
                }, TIME.showButton);
            }
        }
    }
    setAudioUrl(audioUrl) {
        this.audioUrl = audioUrl;
    }
    setSubtitleUrl(subtitleUrl) {
        this.subtitleUrl = subtitleUrl;
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
            if (videoUrl.match(/(\.m3u|\.m3u8)/g) && videoUrl != localStorage.iptvUrl) {
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
                    console.log("Play-With-MPV：m3u8 链接无法播放：" + videoUrl);
                    return false;
                }
            }
            if (videoUrl.startsWith("https://www.mp4")) {
                return false;
            }
            return true;
        }
        console.log(`Play-With-MPV：链接无效：${videoUrl}`);
        return false;
    }
}
class BaseHandler {
    constructor() {
        loadConfig();
        this.media = new Media();
        this.media.setProxy(currentConfig.proxy);
        for (const key in PLAYER) {
            if (PLAYER[key].name == currentConfig.player) {
                this.player = PLAYER[key];
                break;
            }
        }
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
    initCheck() {
        return window.location.href != page.url;
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
                } else {
                    let videos = document.getElementsByTagName("video");
                    for (let i = 0; i < videos.length; i++) {
                        if (videos[i].currentTime != 0) {
                            this.media.setStartTime(videos[i].currentTime);
                            break;
                        }
                    }
                }
            }
            let value = this.media[key];
            if (value) {
                let param = this.player.params[key];
                let matchKey = '${' + key + '}';
                while (param.indexOf(matchKey) != -1) {
                    param = param.replace(matchKey, value);
                }
                matchKey = '${E' + key + '}';
                while (param.indexOf(matchKey) != -1) {
                    param = param.replace(matchKey, encodeURIComponent(value));
                }
                matchKey = '${D' + key + '}';
                while (param.indexOf(matchKey) != -1) {
                    param = param.replace(matchKey, decodeURIComponent(value));
                }
                link = link + param;
            }
        }
        if (this.media.title) {
            let maxLength = 1950 - link.length;
            let title = encodeURIComponent(this.media.title);
            if (title.length > maxLength) {
                title = title.substring(0, maxLength) + '...';
            }
            let param = this.player.params.title;
            param = param.replace('${title}', title);
            link = link + param;
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
    // 诺讯解析
    nxParser() {
        handler.addIframeListener();
        let nxParserIframe = document.getElementById(ID.nxParserIframe);
        if (!nxParserIframe) {
            nxParserIframe = document.createElement("iframe");
            nxParserIframe.id = ID.nxParserIframe;
            nxParserIframe.src = `https://yun.nxflv.com/?url=${page.url}`;
            document.body.appendChild(nxParserIframe);
        }
    }
}
// 获取B站视频播放链接
async function getBilibiliPlayUrl(avid, cid) {
    if (handler.player.name == PLAYER.mpv.name) {
        handler.media.setOther(`--script-opts="cid=${cid}"`);
    }
    if (!handler.player.params.audioUrl || await getBilibiliVideoDash(avid, cid) == -1) {
        getBilibiliVideoDurl(avid, cid);
    }
    if (currentConfig.subtitlePrefer != "off") {
        getBilibiliVideoSubtitle(avid, cid);
    }
}
// 获取B站 DASH 格式视频
async function getBilibiliVideoDash(avid, cid) {
    let result = 0;
    await $.ajax({
        type: "GET",
        url: `https://api.bilibili.com/x/player/playurl?qn=120&otype=json&fourk=1&fnver=0&fnval=4048&avid=${avid}&cid=${cid}`,
        xhrFields: {
            withCredentials: true
        },
        async: false,
        success: function (res) {
            if (!res.data) {
                toast("Play-With-MPV 获取视频失败，如未登录请先登录并刷新页面", TOAST_TYPE.error);
                tryTime = TRY_TIME.maxParse;
                return;
            }
            let videoUrl = undefined;
            let audioUrl = undefined;
            let dash = res.data.dash;
            if (!dash) {
                result = -1;
                return;
            }
            let hiRes = dash.flac;
            let dolby = dash.dolby;
            if (hiRes && hiRes.audio) {
                audioUrl = hiRes.audio.baseUrl;
            } else if (dolby && dolby.audio) {
                audioUrl = dolby.audio[0].base_url;
            } else if (dash.audio) {
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
            result = 1;
        }
    });
    return result;
}
// 获取B站 FLV / MP4 格式视频
function getBilibiliVideoDurl(avid, cid) {
    $.ajax({
        type: "GET",
        url: `https://api.bilibili.com/x/player/playurl?qn=120&otype=json&fourk=1&fnver=0&fnval=128&avid=${avid}&cid=${cid}`,
        xhrFields: {
            withCredentials: true
        },
        async: false,
        success: function (res) {
            if (!res.data) {
                toast("Play-With-MPV 获取视频失败，如未登录请先登录并刷新页面", TOAST_TYPE.error);
                tryTime = TRY_TIME.maxParse;
                return;
            }
            handler.media.setVideoUrl(res.data.durl[0].url);
        }
    });
}
// 获取B站视频字幕
function getBilibiliVideoSubtitle(avid, cid) {
    $.ajax({
        type: "GET",
        url: `https://api.bilibili.com/x/player/v2?aid=${avid}&cid=${cid}`,
        xhrFields: {
            withCredentials: true
        },
        async: false,
        success: function (res) {
            if (res.code == 0 && res.data.subtitle && res.data.subtitle.subtitles.length > 0) {
                let subtitles = res.data.subtitle.subtitles;
                let url = "https:" + subtitles[0].subtitle_url;
                let lan = subtitles[0].lan;
                for (const subtitle of subtitles) {
                    if (currentConfig.subtitlePrefer.startsWith("zh") && subtitle.lan.startsWith("zh")) {
                        url = "https:" + subtitle.subtitle_url;
                        lan = subtitle.lan;
                    }
                    if (subtitle.lan == currentConfig.subtitlePrefer) {
                        url = "https:" + subtitle.subtitle_url;
                        lan = subtitle.lan;
                        break;
                    }
                }
                handler.media.setSubtitleUrl(`https://www.lckp.top/common/bilibili/jsonToSrt/?url=${url}&lan=${lan}`);
            }
        }
    });
}
// 获取B站视频 aid 和 cid
function getBilibiliVideoId() {
    let hasInitialState = false;
    try {
        if (__INITIAL_STATE__) {
            hasInitialState = true;
        }
    } catch (error) {
        hasInitialState = false;
    }
    if (!hasInitialState) {
        return undefined;
    }
    let video = undefined;
    if (__INITIAL_STATE__.epInfo) {
        video = __INITIAL_STATE__.epInfo;
    } else if (__INITIAL_STATE__.videoData) {
        video = __INITIAL_STATE__.videoData;
    } else if (__INITIAL_STATE__.videoInfo) {
        video = __INITIAL_STATE__.videoInfo;
    }
    let aid = video.aid;
    let cid = video.cid;
    let p = __INITIAL_STATE__.p;
    if (p && p > 1) {
        cid = __INITIAL_STATE__.cidMap[aid].cids[p];
    }
    let videoId = {
        aid: aid,
        cid: cid
    };
    return videoId;
}
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
    ytdlp: {
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
        // ✅ https://www.bilibili.com/bangumi/play/ep319063
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
                // 直接从数据中获取 aid 和 cid
                let videoId = getBilibiliVideoId();
                if (videoId && videoId.aid && videoId.cid) {
                    getBilibiliPlayUrl(videoId.aid, videoId.cid);
                    return;
                }

                // 从元素提取 epid 请求接口获取 aid 和 cid
                let epid = page.url.match(/ep(\d+)/);
                if (epid && epid[1]) {
                    epid = epid[1];
                } else {
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
        // ✅ https://www.bilibili.com/video/BV17Z4y117Qm
        // ✅ https://www.bilibili.com/list/ml1806211634?oid=822115390&bvid=BV1Fg4y1p7Qe
        name: "B站投稿",
        regex: /^https:\/\/www\.bilibili\.com\/(video\/|list.*)(BV|av).*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.media.setReferer("https://www.bilibili.com");
            }
            initCheck() {
                if (super.initCheck()) {
                    let newPageUrl = window.location.href;
                    let oldPageUrl = page.url;
                    let regex = /(&|\?)vd_source=\w+/;
                    if (regex.test(newPageUrl.replace(oldPageUrl, ""))) {
                        page.url = newPageUrl;
                        return false;
                    }
                    return true;
                }
                return false;
            }
            async parse() {
                // 直接从数据中获取 aid 和 cid
                let videoId = getBilibiliVideoId();
                if (videoId && videoId.aid && videoId.cid) {
                    getBilibiliPlayUrl(videoId.aid, videoId.cid);
                    return;
                }

                // 通过 bvid/avid 请求接口获取 aid 和 cid
                let param = undefined;
                let bvid = page.url.match(/BV([0-9a-zA-Z]+)/);
                if (bvid && bvid[1]) {
                    param = `bvid=${bvid[1]}`;
                } else {
                    let avid = page.url.match(/av([0-9]+)/);
                    if (avid && avid[1]) {
                        param = `aid=${avid[1]}`;
                    }
                }
                if (!param) {
                    return;
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
        // ✅ https://www.bilibili.com/festival/2023bnj?bvid=BV17G4y1X7vQ
        name: "B站节日",
        regex: /^https:\/\/www\.bilibili\.com\/festival\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.media.setReferer("https://www.bilibili.com");
            }
            initCheck() {
                if (super.initCheck()) {
                    return true;
                }
                let oldvideoId = this.videoId;
                let newvideoId = getBilibiliVideoId();
                if (oldvideoId && oldvideoId.cid != newvideoId.cid) {
                    return true;
                }
                return false;
            }
            async parse() {
                let videoId = getBilibiliVideoId();
                if (videoId && videoId.aid && videoId.cid) {
                    this.videoId = videoId;
                    getBilibiliPlayUrl(videoId.aid, videoId.cid);
                    return;
                } else {
                    toast("Play-With-MPV 读取视频数据失败，请尝试清理B站缓存后刷新重试", TOAST_TYPE.error, 5000);
                    tryTime = TRY_TIME.maxParse;
                }
            }
        },
    },
    {
        // ✅ https://live.bilibili.com/7777
        name: "B站直播",
        home: [
            "https://live.bilibili.com"
        ],
        regex: /^https:\/\/live\.bilibili\.com\/\d+.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let iframes = document.getElementsByTagName("iframe");
                let roomid = undefined;
                for (let iframe of iframes) {
                    let roomids = iframe.src.match(/^https:\/\/live\.bilibili\.com.*(roomid=\d+|blanc\/\d+).*/);
                    if (roomids && roomids[1]) {
                        roomid = roomids[1].match(/\d+/)[0];
                        break;
                    }
                }
                if (!roomid) {
                    console.log("Play-With-MPV：找不到 roomid：" + roomid);
                    return;
                }

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
        // ✅ https://www.ixigua.com/
        name: "西瓜视频",
        home: [
            "https://www.ixigua.com"
        ],
        regex: /^https:\/\/www\.ixigua\.com\/\d.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.media.setReferer("https://www.ixigua.com/");
            }
            async parse() {
                let that = this;
                $.ajax({
                    type: "GET",
                    url: page.url,
                    async: false,
                    success: function (res) {
                        try {
                            let _SSR_HYDRATED_DATA = (new Function("return " + res.match(/<script id="SSR_HYDRATED_DATA"[^<]*window._SSR_HYDRATED_DATA=({[^<]*})[^<]*<\/script>/)[1]))();
                            let packerData = _SSR_HYDRATED_DATA.anyVideo.gidInformation.packerData;
                            let main_url = undefined;
                            if (packerData.video) {
                                let videoList = packerData.video.videoResource.normal.video_list;
                                if (videoList) {
                                    let video = undefined;
                                    for (const key in videoList) {
                                        if (!video || videoList[key].vheight > video.vheight) {
                                            video = videoList[key];
                                        }
                                    }
                                    main_url = video.main_url;
                                }
                                that.media.setVideoUrl(window.atob(main_url).replace("http://", "https://"));
                                return;
                            }
                        } catch (error) {
                            console.error("解析出错：" + error);
                        }
                        that.nxParser();
                    }
                });
            }
        },
    },
    {
        // ✅ https://yun.nxflv.com/?url=https://www.ixigua.com/7186534626612118071
        name: "诺讯解析",
        regex: /^https:\/\/yun\.nxflv\.com\/\?url=.+/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                let url = this.videoParser();
                if (url.startsWith("blob")) {
                    for (let index = 0; index < sessionStorage.key.length; index++) {
                        url = sessionStorage.key(index);
                        url = url.match(/http[^#]*/g);
                        if (url && url.length > 0) {
                            url = url[0];
                        }
                    }
                }
                this.media.setVideoUrl(url);
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
                let url = this.videoParser();
                if (url) {
                    let index = url.indexOf("?");
                    if (index != -1) {
                        url = url.substring(0, index + 1) + encodeURIComponent(url.substring(index + 1));
                    }
                    this.media.setVideoUrl(url);
                    let playing = document.getElementsByClassName("wp-playlist-playing")[0];
                    if (playing) {
                        let episode = playing.textContent.replace(/(\n|\t|\d\.)/g, "");
                        if (episode != " 全") {
                            this.media.title = document.getElementsByClassName("post-title")[0].textContent + episode + " - 低端影视";
                        }
                    }
                }
            }
        },
    },
    {
        // ✅ https://www.libvio.cc/play/714634-1-11.html
        name: "LIBVIO",
        home: [
            "https://www.libvio.cc",
            "https://libvio.fun",
            "https://libvio.me",
            "https://www.libvio.me"
        ],
        regex: /^https?:\/\/.*\.libvio\..*\/play.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "LIBVIO播放器",
        regex: /^https:\/\/(.*\.chinaeast2\.cloudapp\.chinacloudapi\.cn|.*\.cfnode1\.xyz)\/.*php\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                let url = urls;
                let index = url.indexOf("?");
                if (index != -1) {
                    url = url.substring(0, index + 1) + encodeURIComponent(url.substring(index + 1));
                }
                this.media.setVideoUrl(url);
            }
        }
    },
    {
        // ✅ https://www.nivod.tv/UXEwMmLqnUjHG5e4MwmlvmVnWiAJ9rIQ-RofV7wPhhed3uoi50mYsftLPq4mYyIhB-720-0-0-play.html?x=1
        name: "泥视频",
        home: [
            "https://www.nivod.tv",
        ],
        regex: /^https:\/\/www\.nivod\.tv\/.*play\.html?.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setVideoUrl(__dp.options.video.url);
                this.media.setTitle(document.title);
            }
        }
    },
    {
        // ✅ https://www.pkmkv.com/py/268677-2-11.html
        name: "片库",
        home: [
            "https://www.pkmkv.com",
        ],
        regex: /^https:\/\/www\.pkmkv\.com\/py\/.*/g,
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
        regex: /^https:\/\/www\.pkmkv\.com\/addons\/dplayer\/\?url=.*/g,
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
        // ✅ https://www.956dm.com/play/6792-1-91.html
        // ✅ http://www.956dm.com/play/7800-1-10.html
        // ✅ http://www.dmlaa.com/play/7696-1-10.html
        // ✅ http://www.qdmsh.com/play/7663-1-10.html
        // ✅ http://www.ntdm8.com/play/4973-1-1.html
        name: "樱花动漫网",
        home: [
            "https://www.956dm.com",
            "http://www.956dm.com",
            "http://www.dmlaa.com",
            "http://www.qdmsh.com",
            "http://www.ntdm8.com"
        ],
        regex: /^https?:\/\/www\.(956dm|dmlaa|qdmsh|ntdm8)\.com\/play\/.*/g,
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
        name: "稀饭动漫播放器",
        regex: /^https:\/\/player\.moedot\.net\/player\/.*/g,
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
                this.media.setReferer("https://play.mknacg.top:8585/");
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
                this.media.setVideoUrl(art.option.url);
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
        regex: /^https:\/\/.*\.omofun\.top\/(player\/|)\?url=.*/g,
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
        name: "优质资源库播放器",
        regex: /^https:\/\/.*\.(yzzy-tv1|yzzy-tv-cdn)\.com\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl("https://" + location.host + main);
            }
        }
    },
    {
        // ✅ https://www.bdys10.com/play/22729-8.htm
        name: "哔嘀影视",
        home: [
            "https://www.bdys10.com"
        ],
        regex: /^https:\/\/www\.bdys10\.com\/.*play\/.*/g,
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
        // ✅ https://www.dora-family.com/Resource:TV
        name: "哆啦A梦新番",
        home: [
            "https://www.dora-family.com/Resource:TV"
        ],
        regex: /^https:\/\/www\.dora-family\.com\/Resource:TV/g,
        handler: class Handler extends BaseHandler {
            initCheck() {
                if (super.initCheck()) {
                    return true;
                }
                let oldVideoUrl = this.media.videoUrl;
                let newVideoUrl = this.videoParser();
                if (oldVideoUrl && oldVideoUrl != newVideoUrl) {
                    return true;
                }
                return false;
            }
            async parse() {
                this.media.setVideoUrl(this.videoParser());
            }
        }
    },
    {
        // ✅ https://mypikpak.com/drive/all
        name: "PikPak",
        home: [
            "https://mypikpak.com/drive/all"
        ],
        regex: /^https:\/\/mypikpak\.com\/drive\/.*/g,
        handler: class Handler extends BaseHandler {
            initCheck() {
                if (super.initCheck()) {
                    return true;
                }
                let oldVideoUrl = this.media.videoUrl;
                let newVideoUrl = this.videoParser();
                if (oldVideoUrl && oldVideoUrl != newVideoUrl) {
                    return true;
                }
                return false;
            }
            async parse() {
                while (document.getElementsByTagName("video").length == 0) {
                    await sleep(1000);
                }
                this.media.setVideoUrl(this.videoParser());
                this.media.setTitle(document.getElementsByClassName("player-title")[0].textContent);
            }
        }
    },
    {
        // ✅ https://www.olehdtv.com/player/vod/1/43671/1
        name: "欧乐影院",
        home: [
            "https://www.olehdtv.com/"
        ],
        regex: /^https:\/\/www\.olehdtv\.com\/player\/vod\/\d+\/\d+\/\d+/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let ids = page.url.match(/^https:\/\/www\.olehdtv\.com\/player\/vod\/(\d+)\/(\d+)\/(\d+)/);
                let id = ids[2];
                let index = ids[3];
                let t = Date.parse(new Date) / 1e3, r = t % 20;
                let _vv = MD5(t - r + "new.olelive.com");
                let that = this;
                $.ajax({
                    type: "GET",
                    url: `https://api.olelive.com/v1/pub/vod/detail?id=${id}&play=true&_vv=${_vv}`,
                    async: false,
                    success: function (res) {
                        if (res.code == 0) {
                            that.media.setVideoUrl(res.data.urls[index - 1].url);
                        }
                    }
                })
            }
            play() {
                this.media.setTitle(document.title);
                super.play();
            }
        }
    },
    {
        // ✅ https://www.olehdtv.com/player/live/tv/CCTV5HD/49
        name: "欧乐影院直播",
        home: [
            "https://www.olehdtv.com/"
        ],
        regex: /^https:\/\/www\.olehdtv\.com\/player\/live\/tv\/[^/]+\/\d+/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let ids = page.url.match(/^https:\/\/www\.olehdtv\.com\/player\/live\/tv\/([^/]+)\/(\d+)/);
                let id = ids[2];
                let streamId = ids[1];
                let today = new Date();
                let year = today.getFullYear();
                let month = today.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let day = today.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                let date = year + "-" + month + "-" + day;
                let t = Date.parse(today) / 1e3, r = t % 20;
                let _vv = MD5(t - r + "new.olelive.com");
                let that = this;
                $.ajax({
                    type: "GET",
                    url: `https://api.olelive.com/v1/pub/live/info?date=${date}&streamId=${streamId}&type=tv&id=${id}&_vv=${_vv}`,
                    async: false,
                    success: function (res) {
                        if (res.code == 0) {
                            that.media.setVideoUrl(res.data.detail.hls.replace("_360", ""));
                        }
                    }
                })
            }
            play() {
                this.media.setTitle(document.title);
                super.play();
            }
        }
    },
    {
        // ✅ https://tkznp.com/vodplay/337990-1-2.html
        name: "天空影视",
        home: [
            "https://tkznp.com/",
            "https://www.tkznp1.com/",
            "https://www.tkznp2.com/",
            "https://www.tkznp3.com/",
            "https://www.tkznp4.com/",
            "https://www.tkznp5.com/",
            "https://www.tkznp6.com/",
        ],
        regex: /^https?:\/\/(|www\.)tkznp(|1|2|3|4|5|6)\.com\/vodplay\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "天空影视播放器",
        regex: /^https?:\/\/vip\.ckllk\.com\/\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(config.url);
                this.media.setTitle(config.title);
            }
        }
    },
    {
        // ✅ https://www.hdmoli.com/play/1630-1-0.html
        // ✅ https://www.hdmoli.com/play/1630-0-0.html
        name: "HDmoli",
        home: [
            "https://www.hdmoli.com"
        ],
        regex: /^https:\/\/www\.hdmoli\.com\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "HDmoli 线路1",
        regex: /^https:\/\/www\.hdmoli\.com\/js\/player\/dplayer\/dplayer\.html\?.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
                setTimeout(() => {
                    let closeclick = document.getElementsByClassName("closeclick")[0];
                    if (closeclick) {
                        closeclick.click();
                    }
                }, TIME.refresh);
            }
            async parse() {
                this.media.setVideoUrl(this.videoParser());
            }
        }
    },
    {
        name: "HDmoli 线路2",
        regex: /^https:\/\/www\.hdmoli\.com\/js\/player\/duoduozy.html\?v=[\d\.]+/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                setTimeout(() => {
                    let closeclick = document.getElementsByClassName("closeclick")[0];
                    if (closeclick) {
                        closeclick.click();
                    }
                }, TIME.refresh);
            }
        }
    },
    {
        name: "HDmoli 线路2",
        regex: /^https:\/\/play\.qwertwe\.top\/xplay\/\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                let that = this;
                $.ajax({
                    url: '555tZ4pvzHE3BpiO838.php',
                    type: 'GET',
                    dataType: 'JSON',
                    timeout: 3000,
                    data: {
                        tm: (new Date().getTime()),
                        url: config.url,
                        vkey: config.vkey,
                        token: config.token,
                        sign: 'F4penExTGogdt6U8'
                    },
                    success: function (data) {
                        if (data.code === 200) {
                            that.media.setVideoUrl(getVideoInfo(data.url));
                        }
                    }
                });
            }
        }
    },
    {
        // ✅ https://www.anfuns.cc/play/1572-1-1.html
        name: "AnFuns",
        home: [
            "https://www.anfuns.cc"
        ],
        regex: /^https:\/\/www\.anfuns\.cc\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "AnFuns播放器",
        regex: /^https:\/\/www\.anfuns\.cc\/vapi\/(A0EPlayer|eden)\/\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                let url = config.url;
                if (url) {
                    if (!url.startsWith("https://fata.peizq.online/cache/") && !url.startsWith("https://media-oss.anfuns.cn/m3u8/")) {
                        this.media.setVideoUrl(config.url);
                    } else {
                        tryTime = TRY_TIME.maxParse;
                    }
                }
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
                this.media.setOther(BEST_QUALITY.ytdlp[currentConfig.bestQuality]);
                this.media.setVideoUrl(this.ytDlpParser());
                this.media.setTitle("");
            }
        },
    },
    {
        // ✅ https://odysee.com/@jjlin:8/%E6%9E%97%E4%BF%8A%E5%82%91-jj-lin%E3%80%8Ajj20%E4%B8%96%E7%95%8C%E5%B7%A1%E8%BF%B4%E6%BC%94%E5%94%B1%E6%9C%83%E3%80%8B-2:8
        name: "Odysee",
        home: [
            "https://odysee.com"
        ],
        regex: /^https:\/\/odysee\.com\/[^$].+/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setOther(BEST_QUALITY.ytdlp[currentConfig.bestQuality]);
                this.media.setVideoUrl(this.ytDlpParser());
                this.media.setTitle("");
            }
        },
    },
    {
        // ✅ https://rumble.com/v2mfr78-valheim-viking-survival-w-chaos-tricks-you-can-affect-my-game-chat-opinions.html
        name: "Rumble",
        home: [
            "https://rumble.com"
        ],
        regex: /^https:\/\/rumble\.com\/v.+\.html/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setOther(BEST_QUALITY.ytdlp[currentConfig.bestQuality]);
                this.media.setVideoUrl(this.ytDlpParser());
                this.media.setTitle("");
            }
        },
    },
    {
        // ✅ https://www.bitchute.com/video/NoodZjmfKHXS/
        name: "BitChute",
        home: [
            "https://www.bitchute.com"
        ],
        regex: /^https:\/\/www\.bitchute\.com\/video\/.+/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setOther(BEST_QUALITY.ytdlp[currentConfig.bestQuality]);
                this.media.setVideoUrl(this.ytDlpParser());
                this.media.setTitle("");
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
    {
        // ✅ https://hanime1.me/watch?v=26262
        name: "Hanime1.me",
        home: [
            "https://hanime1.me"
        ],
        regex: /^https:\/\/hanime1\.me\/watch\?v=.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let url = this.videoParser();
                if (!url) {
                    url = this.iframeParser();
                }
                if (!url) {
                    url = page.url;
                }
                this.media.setVideoUrl(url);
            }
        },
    },
    {
        // ✅ https://jable.tv/videos/fsdss-484/
        name: "Jable.TV",
        home: [
            "https://jable.tv"
        ],
        regex: /^https:\/\/jable\.tv\/videos\/.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let url = hls.url;
                url = url ? url : hlsUrl;
                url = url ? url : page.url;
                this.media.setVideoUrl(url);
            }
        },
    },
    {
        // ✅ https://ok.ru/video/2035990725937
        name: "OK",
        home: [
            "https://ok.ru/video"
        ],
        regex: /^https:\/\/ok\.ru\/video\/\d+/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setOther(BEST_QUALITY.ytdlp[currentConfig.bestQuality]);
                this.media.setVideoUrl(this.ytDlpParser());
                this.media.setTitle("");
            }
        },
    },
    {
        // ✅ https://tver.jp/episodes/epsta1xs0z
        name: "TVer",
        home: [
            "https://tver.jp"
        ],
        regex: /^https:\/\/tver\.jp\/episodes\/\w+/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setOther(BEST_QUALITY.ytdlp[currentConfig.bestQuality]);
                this.media.setVideoUrl(this.ytDlpParser());
                this.media.setTitle("");
            }
        },
    },
    {
        // ✅ https://www.lckp.top/play-with-mpv/index.html
        name: "电视直播",
        home: [
            "https://www.lckp.top/play-with-mpv/index.html"
        ],
        regex: /^https?:\/\/(www.lckp.top\/play-with-mpv|127.0.0.1:5502\/web\/tampermonkey\/Play-With-MPV)\/index.html/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setVideoUrl(localStorage.iptvUrl);
                localStorage.player = JSON.stringify(this.player);
                this.media.setTitle("");
            }
        },
    },
    {
        // ✅ https://www.douyin.com/
        name: "抖音",
        home: [
            "https://www.douyin.com/"
        ],
        regex: /^https?:\/\/www\.douyin\.com\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.index = 0;
            }
            initCheck() {
                if (super.initCheck()) {
                    return true;
                }
                let oldVideoUrl = this.media.videoUrl;
                let newVideoUrl = this.videoParser();
                if (oldVideoUrl && oldVideoUrl != newVideoUrl) {
                    return true;
                }
                return false;
            }
            async parse() {
                this.media.setVideoUrl(this.videoParser());
            }
            videoParser() {
                let videos = document.getElementsByTagName("video");
                if (videos && videos.length > 0) {
                    this.index = videos.length > 2 ? 1 : 0;
                }
                let url = document.getElementsByTagName("video")[this.index].getElementsByTagName("source")[0].src;
                if (url) {
                    return url;
                }
            }
        },
    },
    {
        // ✅ https://www.mengfan.tv/play/kx666U/1/3/
        name: "萌番",
        home: [
            "https://www.mengfan.tv"
        ],
        regex: /^https:\/\/www\.mengfan\.tv\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "萌番播放器",
        regex: /^https:\/\/video1\.beijcloud\.com\/player\/\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(this.scriptParser());
            }
        }
    },
    {
        // ✅ https://www.haitu.tv/vod/play/id/47100/sid/1/nid/4.html
        name: "海兔影院",
        home: [
            "https://www.haitu.tv"
        ],
        regex: /^https:\/\/www\.haitu\.tv\/vod\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "海兔影院播放器",
        regex: /^https:\/\/www\.haitu\.tv\/static\/dmku\/player\/index\.php/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(config.url);
            }
        }
    },
    {
        // ✅ https://www.tucao.cam/play/h4092670/#1
        name: "吐槽弹幕网",
        regex: /^https:\/\/www\.tucao\.cam\/play\/.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setVideoUrl(this.videoParser());
            }
        }
    },
    {
        name: "AList",
        regex: /^https?:\/\/[^\/]+\/.*\.(mp4|mkv)/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let url = this.videoParser();
                if (!url && tryTime < 3) {
                    $.ajax({
                        type: "POST",
                        url: `/api/fs/get`,
                        data: {
                            password: "",
                            path: decodeURIComponent(location.pathname)
                        },
                        xhrFields: {
                            withCredentials: true
                        },
                        async: false,
                        success: function (res) {
                            if (res.code == 200) {
                                url = res.data.raw_url;
                            }
                        }
                    });
                }
                if (url) {
                    let index = url.indexOf("?");
                    if (index != -1) {
                        url = url.substring(0, index + 1) + encodeURIComponent(url.substring(index + 1));
                    }
                    this.media.setVideoUrl(url);
                    this.media.setTitle(document.title);
                }
            }
        }
    }
];
// 初始化
async function init(flag) {
    // 加载页面信息
    page = {
        host: window.location.host,
        url: window.location.href,
        isFullScreen: false
    };
    // 清除 handler
    if (handler) {
        handler = undefined;
        if (document.getElementById(ID.buttonDiv)) {
            document.getElementById(ID.buttonDiv).style.display = "none";
        }
    }
    // 生成 handler
    for (let i = 0; i < websiteList.length; i++) {
        if (page.url.match(websiteList[i].regex)) {
            handler = new websiteList[i].handler();
            break;
        }
    }
    if (flag && window.location.host.indexOf('bilibili') != -1) {
        await sleep(1000);
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
                    console.log('Play-With-MPV：解析失败：' + error);
                }
            }
            tryTime++;
        }
    } else {
        console.log("Play-With-MPV：暂无此网页解析器");
    }
}
// 开始执行
init();
setInterval(() => {
    if (handler) {
        if (handler.initCheck()) {
            init(true);
        }
    } else if (window.location.href != page.url) {
        init();
    }
}, TIME.refresh);
