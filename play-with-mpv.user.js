// ==UserScript==
// @name                    Play-With-MPV
// @name:zh                 使用 MPV 播放
// @namespace               https://github.com/LuckyPuppy514
// @version                 3.9.2
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
// @include                 *://www.*dm.com/play/*
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
// @match                   *://*/*.flv
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
// @match                   https://www.icourse163.org/learn/*
// @match                   https://www.iole.tv/*
// @match                   https://www.zhihu.com/zvideo/*
// @match                   *://www.susudm8.com/*
// @match                   *://susudyy.com/*
// @match                   *://buding3.com/*
// @match                   *://buding6.com/*
// @match                   *://v2.shenjw.com:*/wap.php?url=*
// @match                   *://u88.xigua88ok.com:*/wap.php?url=*
// @match                   *://test3.gqyy8.com:*/f/aliplayer.php?url=*
// @match                   *://v.mksec.cn/*
// @match                   https://tgbook.coolkv.com/*play*
// @include                 *://*dsh*.com/*
// @match                   https://www.twitch.tv/*
// @match                   https://jiohub.top/watch/*
// @match                   https://www.agemys.org/play/*
// @include                 https://vip.sp-flv.com:*?url=*
// @match                   https://anime.girigirilove.com/*
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
    closeAuto: 0,
    syncStartTime: 0,
    subtitlePrefer: "zh-Hans",
    customplayer: {
        name: "customplayer",
        path: "",
        params: {
            videoUrl: 'iina://weblink?url=${EvideoUrl}',
            audioUrl: '',
            subtitleUrl: '',
            title: '',
            startTime: '',
            referer: '',
            origin: '&mpv_http-header-fields=origin%3A%20${Eorigin}',
            proxy: '',
            other: ''
        }
    },
    transform: {
        xOffset: 0,
        yOffset: 0
    },
    version: "20230922"
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
    customplayer: {
        name: "customplayer",
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
    mpvPlayButton: `${PREFIX}-mpv-play-button`,
    potplayerPlayButton: `${PREFIX}-potplayer-play-button`,
    customplayerPlayButton: `${PREFIX}-customplayer-play-button`,
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
    closeAutoInput: `${PREFIX}-close-auto-input`,
    syncStartTimeInput: `${PREFIX}-sync-start-time-input`,
    syncStartTimeSpan: `${PREFIX}-sync-start-time-span`,
    infoDiv: `${PREFIX}-info-div`,
    infoTable: `${PREFIX}-info-table`,
    subtitlePreferRadio: `${PREFIX}-subtitle-prefer-radio`,
    customplayerSettingButton: `${PREFIX}-customplayer-setting-button`,
    customplayerSettingTable: `${PREFIX}-customplayer-setting-table`,
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
    customplayer: "url('data:image/png;base64,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')",
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
    z-index: 9999999999;
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
    cursor: move;
    z-index: 99999;
    width: 190px;
    height: 90px;
}
#${ID.buttonDiv}:hover .${CLASS.button} {
    visibility: visible !important;
}
.${CLASS.button} {
    position: absolute;
    cursor: pointer;
    z-index: 99999;
    border: none;
    border-radius: 50%;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0);
}
#${ID.potplayerPlayButton} {
    bottom: 11px;
    left: 16px;
    width: 42px;
    height: 42px;
    background-image: url(data:image/png;base64,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)
}
#${ID.mpvPlayButton} {
    bottom: 6px;
    left: 66px;
    width: 50px;
    height: 50px;
    background-image: url(data:image/png;base64,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);
}
#${ID.customplayerPlayButton} {
    bottom: 8px;
    left: 123px;
    width: 46px;
    height: 46px;
    background-image: url(data:image/png;base64,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)
}
#${ID.potplayerPlayButton}:hover {
    bottom: 9px;
    left: 14px;
    width: 46px;
    height: 46px;
}
#${ID.mpvPlayButton}:hover {
    bottom: 4px;
    left: 64px;
    width: 54px;
    height: 54px;
}
#${ID.customplayerPlayButton}:hover {
    bottom: 6px;
    left: 121px;
    width: 50px;
    height: 50px;
}
/* 设置 */
#${ID.settingButton} {
    bottom: 50px;
    left: 160px;
    width: 28px;
    height: 28px;
    background-image: url(data:image/png;base64,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);
}
#${ID.settingButton}:hover {
    bottom: 48px;
    left: 158px;
    width: 32px;
    height: 32px;
}
#${ID.settingDiv},
#${ID.infoDiv} {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999999;
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
#${ID.customplayerSettingTable} {
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
#${ID.customplayerSettingTable} {
    display: none;
}
#${ID.infoTable} td,
#${ID.settingTable} td,
#${ID.customplayerSettingTable} td {
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
#${ID.customplayerSettingTable} input {
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
#${ID.customplayerSettingTable} input:hover,
#${ID.infoTable} input:focus-visible,
#${ID.settingTable} input:focus-visible,
#${ID.customplayerSettingTable} input:focus-visible {
    box-shadow: none;
}
#${ID.settingTable} input::placeholder,
#${ID.customplayerSettingTable} input::placeholder {
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
#${ID.customplayerSettingButton}:hover:after,
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
#${ID.customplayerSettingButton}:hover:after {
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
#${ID.customplayerSettingButton} {
    position: absolute;
    right: 122px;
    top: 76px;
    width: 22px;
    height: 22px;
    border: none;
    cursor: pointer;
    background-image: ${ICON_BASE64.customplayer};
    z-index: 999999;
}
`;
const HTML = `
<div id="${ID.loadingDiv}">
    <div class="spinner"></div>
</div>
<div id="${ID.toastDiv}"></div>

<div id="${ID.buttonDiv}" draggable="true">
    <button id="${ID.infoButton}" class="${CLASS.button}"></button>
    <button id="${ID.potplayerPlayButton}" class="${CLASS.button}"></button>
    <button id="${ID.mpvPlayButton}" class="${CLASS.button}"></button>
    <button id="${ID.customplayerPlayButton}" class="${CLASS.button}"></button>
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
            <td colspan="8">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">视频链接</td>
            <td colspan="8">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">音频链接</td>
            <td colspan="8">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">字幕链接</td>
            <td colspan="8">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">referer</td>
            <td colspan="8">
                <input type="text" readonly class="${CLASS.infoInput}">
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}">origin</td>
            <td colspan="8">
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
    <button id="${ID.customplayerSettingButton}" class="${CLASS.button}" data-tip="设置自定义播放器"></button>
    <table id="${ID.settingTable}">
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选择 mpv 以外播放器时，部分功能无效">播放软件</td>
            <td colspan="8">
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
                        <input type="radio" name="${ID.playerRadio}" value="${PLAYER.customplayer.name}" class="tab-input">
                        <div class="tab-box">自定义</div>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="mpv.exe 或 PotPlayerMini64.exe 的完整路径">软件路径</td>
            <td colspan="8">
                <div>
                    <input id="${ID.softwarePathInput}" type=text placeholder="请输入软件路径，例如：D://mpvnet//mpvnet.exe">
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}"  data-tip="旁路由网关实现代理一般不需要设置">代理设置</td>
            <td colspan="8">
                <div>
                    <input id="${ID.proxyInput}" type=text placeholder="请输入代理地址，例如：http://127.0.0.1:10809">
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="仅适用于B站或使用 yt-dlp 解析的网站，例如：油管，OK，TVer 等">最高画质</td>
            <td colspan="8">
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
            <td colspan="8">
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
            <td colspan="8">
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
            <td colspan="2">
                <div>
                    <label class="${CLASS.switchLabel}">
                        <input type="checkbox" id="${ID.playAutoInput}">
                        <span class="${CLASS.sliderSpan} ${CLASS.roundSpan}"></span>
                    </label>
                </div>
            </td>
            <td class="${CLASS.titleTd}" data-tip="播放时自动关闭页面（和自动播放一起开启时修改配置请前往导航页）">自动关闭</td>
            <td colspan="2">
                <div>
                    <label class="${CLASS.switchLabel}">
                        <input type="checkbox" id="${ID.closeAutoInput}">
                        <span class="${CLASS.sliderSpan} ${CLASS.roundSpan}"></span>
                    </label>
                </div>
            </td>
            <td class="${CLASS.titleTd}" data-tip="同步网页播放时间">同步时间</td>
            <td colspan="2">
                <div>
                    <label class="${CLASS.switchLabel}">
                        <input type="checkbox" id="${ID.syncStartTimeInput}">
                        <span class="${CLASS.sliderSpan} ${CLASS.roundSpan}" id="${ID.syncStartTimeSpan}"></span>
                    </label>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="9">
                <button id="${ID.saveButton}">保存设置</button>
                <button id="${ID.downloadButton}">下载注册表</button>
                <button id="${ID.deleteButton}">删除注册表</button>
            </td>
        </tr>
    </table>
    <table id="${ID.customplayerSettingTable}">
        <tr>
            <td class="${CLASS.titleTd}" data-tip="必填（视频格式：yt-dlp / m3u8 / flv / m4s / mp4 / mkv ... 播放器不支持则无法播放对应格式视频）">视频参数</td>
            <td colspan="8">
                <div>
                    <input id="${ID.videoUrlParamInput}" type=text placeholder='请输入视频参数，例如：mpv://"$\{videoUrl\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则不支持最高画质和视频编码）">音频参数</td>
            <td colspan="8">
                <div>
                    <input id="${ID.audioUrlParamInput}" type=text placeholder='请输入音频参数，例如： --audio-file="$\{audioUrl\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法加载B站外挂字幕）">字幕参数</td>
            <td colspan="8">
                <div>
                    <input id="${ID.subtitleUrlParamInput}" type=text placeholder='请输入字幕参数，例如： --sub-file="$\{subtitleUrl\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法传递标题）">标题参数</td>
            <td colspan="8">
                <div>
                    <input id="${ID.titleParamInput}" type=text placeholder='请输入标题参数，例如： --force-media-title="$\{title\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则不支持同步时间）">时间参数</td>
            <td colspan="8">
                <div>
                    <input id="${ID.startTimeParamInput}" type=text placeholder='请输入时间参数，例如： --start=$\{startTime\}'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则不支持代理设置）">代理参数</td>
            <td colspan="8">
                <div>
                    <input id="${ID.proxyParamInput}" type=text placeholder='请输入代理参数，例如： --http-proxy=$\{proxy\} --ytdl-raw-options=proxy=[$\{proxy\}]'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法观看B站和橘子动漫）">referer</td>
            <td colspan="8">
                <div>
                    <input id="${ID.refererParamInput}" type=text placeholder='请输入 referer，例如： --http-header-fields="referer: $\{referer\}"'>
                </div>
            </td>
        </tr>
        <tr>
            <td class="${CLASS.titleTd}" data-tip="选填（为空则无法观看巴哈姆特）">origin</td>
            <td colspan="8">
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
function playButtonClick(player) {
    if (playDisabled) {
        return;
    }
    if (currentConfig.player != player) {
        let playAuto = currentConfig.playAuto;
        currentConfig.player = player;
        currentConfig.playAuto = 1;
        GM_setValue(KEY.config, currentConfig);
        setTimeout(() => {
            currentConfig.playAuto = playAuto;
            GM_setValue(KEY.config, currentConfig);
        }, TIME.pauseInterval);
        init();
        return;
    }
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
        playLimit();
        handler.play();
        if (currentConfig.closeAuto == 1 && page.url !== "https://www.lckp.top/play-with-mpv/index.html") {
            setTimeout(() => {
                if (history.length === 1) {
                    window.location.href = "about:blank";
                    window.top.close();
                } else {
                    history.back();
                }
            }, 1000);
        } else {
            handler.pause();
        }
    } catch (error) {
        toast("出错辣 ...... 😓", TOAST_TYPE.error);
        console.log(error);
    }
    loading(false);
}
// 限制播放按钮点击频率
var playDisabled = false;
function playLimit() {
    playDisabled = true;
    setTimeout(() => {
        playDisabled = false;
    }, TIME.pauseInterval);
}
//拖动状态
let isDragging = false;
//设置悬浮窗位置
function setPosOffset(xOffset, yOffset, el) {
    el.style.left = xOffset + "px";
    el.style.bottom = yOffset + "px";
}
function addListener() {
    let buttonDiv = document.getElementById(ID.buttonDiv);
    let mpvPlayButton = document.getElementById(ID.mpvPlayButton);
    let potplayerPlayButton = document.getElementById(ID.potplayerPlayButton);
    let customplayerPlayButton = document.getElementById(ID.customplayerPlayButton);
    let settingButton = document.getElementById(ID.settingButton);
    let settingDiv = document.getElementById(ID.settingDiv);
    let settingTable = document.getElementById(ID.settingTable);
    let softwarePathInput = document.getElementById(ID.softwarePathInput);
    let proxyInput = document.getElementById(ID.proxyInput);
    let playAutoInput = document.getElementById(ID.playAutoInput);
    let closeAutoInput = document.getElementById(ID.closeAutoInput);
    let syncStartTimeInput = document.getElementById(ID.syncStartTimeInput);
    let syncStartTimeSpan = document.getElementById(ID.syncStartTimeSpan);
    let downloadButton = document.getElementById(ID.downloadButton);
    let deleteButton = document.getElementById(ID.deleteButton);
    let saveButton = document.getElementById(ID.saveButton);
    let closeButtons = document.getElementsByClassName(CLASS.closeButton);
    let infoButton = document.getElementById(ID.infoButton);
    let infoDiv = document.getElementById(ID.infoDiv);
    let customplayerSettingTable = document.getElementById(ID.customplayerSettingTable);
    let customplayerSettingButton = document.getElementById(ID.customplayerSettingButton);
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

    //处理窗口拖动事件
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let dragStart = (e) => {
        initialX = e.offsetX;
        initialY = e.offsetY;
        isDragging = true;
        // 拖动过程中不隐藏面板
        showPanelForDuration();
        console.log("开始拖动");
    }
    let dragEnd = (e) => {
        currentX = e.clientX - initialX;
        currentY = document.body.clientHeight - (e.clientY - initialY) - buttonDiv.clientHeight;
        setPosOffset(currentX, currentY, buttonDiv);
        currentConfig.transform = {
            xOffset: currentX,
            yOffset: currentY
        }
        GM_setValue(KEY.config, currentConfig);
        console.log("存储偏移量：xOffset " + currentConfig.transform.xOffset + " yOffset " + currentConfig.transform.yOffset)
        isDragging = false;
    }
    //修改拖动过程中的光标为可放置的样式，但可能会破坏原有的交互
    //document.addEventListener('dragover', (event) => {
    //    event.preventDefault();
    //});
    buttonDiv.addEventListener('dragstart', dragStart);
    buttonDiv.addEventListener('dragend', dragEnd);

    // 播放按钮
    mpvPlayButton.onclick = function () {
        playButtonClick(PLAYER.mpv.name);
    };
    potplayerPlayButton.onclick = function () {
        playButtonClick(PLAYER.potplayer.name);
    }
    customplayerPlayButton.onclick = function () {
        playButtonClick(PLAYER.customplayer.name);
    }
    // 播放快捷键 CTRL + P
    window.onkeydown = async function () {
        if (event.ctrlKey && event.keyCode === 80 && !event.shiftKey) {
            event.preventDefault();
            playButtonClick(currentConfig.player);
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
            closeAutoInput.checked = currentConfig.closeAuto == 1 ? true : false;
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
        currentConfig.closeAuto = closeAutoInput.checked ? 1 : 0;
        currentConfig.syncStartTime = syncStartTimeInput.checked ? 1 : 0;
        GM_setValue(KEY.config, currentConfig);
        if (playAutoInput.checked && closeAutoInput.checked) {
            toast("保存成功，如需修改配置请前往导航页");
        } else {
            toast("保存成功");
        }
        if (currentConfig.playAuto == 1) {
            playLimit();
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
    // 自定义播放器按钮
    customplayerSettingButton.onclick = function () {
        if (customplayerSettingTable.style.display == "flex") {
            if (!videoUrlParamInput.value) {
                toast("视频参数不能为空", TOAST_TYPE.error);
                return;
            }
            currentConfig.customplayer.params.videoUrl = videoUrlParamInput.value;
            currentConfig.customplayer.params.audioUrl = audioUrlParamInput.value;
            currentConfig.customplayer.params.subtitleUrl = subtitleUrlParamInput.value;
            currentConfig.customplayer.params.title = titleParamInput.value;
            currentConfig.customplayer.params.startTime = startTimeParamInput.value;
            currentConfig.customplayer.params.proxy = proxyParamInput.value;
            currentConfig.customplayer.params.referer = refererParamInput.value;
            currentConfig.customplayer.params.origin = originParamInput.value;
            PLAYER.customplayer = currentConfig.customplayer;
            GM_setValue(KEY.config, currentConfig);
            switchPlayer($(`input:radio[name="${ID.playerRadio}"]:checked`).val());
            settingTable.style.display = "flex";
            customplayerSettingTable.style.display = "none";
            customplayerSettingButton.style.backgroundImage = ICON_BASE64.customplayer;
            customplayerSettingButton.dataset.tip = "设置自定义播放器";
        } else {
            videoUrlParamInput.value = currentConfig.customplayer.params.videoUrl;
            audioUrlParamInput.value = currentConfig.customplayer.params.audioUrl;
            subtitleUrlParamInput.value = currentConfig.customplayer.params.subtitleUrl;
            titleParamInput.value = currentConfig.customplayer.params.title;
            startTimeParamInput.value = currentConfig.customplayer.params.startTime;
            proxyParamInput.value = currentConfig.customplayer.params.proxy;
            refererParamInput.value = currentConfig.customplayer.params.referer;
            originParamInput.value = currentConfig.customplayer.params.origin;
            settingTable.style.display = "none";
            customplayerSettingTable.style.display = "flex";
            customplayerSettingButton.style.backgroundImage = ICON_BASE64.back;
            customplayerSettingButton.dataset.tip = "保存并返回";
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
    PLAYER.customplayer = currentConfig.customplayer;
}
function showPanelForDuration() {
    document.getElementById(ID.infoButton).style.visibility = "visible";
    document.getElementById(ID.settingButton).style.visibility = "visible";
    document.getElementById(ID.mpvPlayButton).style.visibility = "visible";
    document.getElementById(ID.potplayerPlayButton).style.visibility = "visible";
    document.getElementById(ID.customplayerPlayButton).style.visibility = "visible";
    var hiddenInterval = setInterval(() => {
        if(!isDragging){ //拖动时不隐藏
            clearInterval(hiddenInterval)
            document.getElementById(ID.infoButton).style.visibility = "hidden";
            document.getElementById(ID.settingButton).style.visibility = "hidden";
            document.getElementById(ID.mpvPlayButton).style.visibility = "hidden";
            document.getElementById(ID.potplayerPlayButton).style.visibility = "hidden";
            document.getElementById(ID.customplayerPlayButton).style.visibility = "hidden";
        }
    }, TIME.showButton);
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
                if (currentConfig.playAuto == 1 && page.url !== "https://www.lckp.top/play-with-mpv/index.html") {
                    playButtonClick(currentConfig.player);
                }
                showPanelForDuration();
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
                console.log("加载偏移量：xOffset " + currentConfig.transform.xOffset + " yOffset " + currentConfig.transform.yOffset);
                setPosOffset(currentConfig.transform.xOffset, currentConfig.transform.yOffset, document.getElementById(ID.buttonDiv));
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
                // let videoId = getBilibiliVideoId();
                // if (videoId && videoId.aid && videoId.cid) {
                //     getBilibiliPlayUrl(videoId.aid, videoId.cid);
                //     return;
                // }

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
                // let videoId = getBilibiliVideoId();
                // if (videoId && videoId.aid && videoId.cid) {
                //     getBilibiliPlayUrl(videoId.aid, videoId.cid);
                //     return;
                // }

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
        regex: /^https:\/\/(.*\.chinaeast2\.cloudapp\.chinacloudapi\.cn|.*\.cfnode1\.xyz)\/.*\?url=.*/g,
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
        // ✅ https://tgbook.coolkv.com/play/1048-0-4.html
        name: "韩剧看看",
        regex: /^https:\/\/tgbook\.coolkv\.com\/play\/.*\.html/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
                this.media.setReferer("https://tgbook.coolkv.com/");
            }
        }
    },
    {
        // https://tgbook.coolkv.com/js/player/dm.html
        name: "韩剧看看播放器外层",
        regex: /^https:\/\/tgbook\.coolkv\.com\/js\/player\/dm\.html/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
                this.addIframeListener();
            }
        }
    },
    {
        // https://tgbook.coolkv.com/js/player/dmplayer/player/index.php?url=https://99vv.yandex.com/file/bz2022/2021/yyyx/yyyx05/playlist.m3u8&next=/play/1048-0-5.html&vid=1048-0-4&nextdz=https://99vv.yandex.com/file/bz2022/2021/yyyx/yyyx06/playlist.m3u8
        name: "韩剧看看播放器",
        regex: /^https:\/\/tgbook\.coolkv\.com\/js\/player\/dmplayer\/player\/index\.php\?url=.*/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                if (config.url.indexOf(".m3u8") > 0 || config.url.indexOf(".mp4") > 0 || config.url.indexOf(".flv") > 0) {
                    this.media.setVideoUrl(config.url);
                }
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
        // ✅ https://www.916dm.com/play/6792-1-91.html
        // ✅ http://www.916dm.com/play/7800-1-10.html
        // ✅ http://www.dmlaa.com/play/7696-1-10.html
        // ✅ http://www.qdmsh.com/play/7663-1-10.html
        // ✅ http://www.ntdm8.com/play/4973-1-1.html
        name: "樱花动漫网",
        home: [
            "https://www.916dm.com",
            "http://www.916dm.com",
            "http://www.dmlaa.com",
            "http://www.qdmsh.com",
            "http://www.ntdm8.com"
        ],
        regex: /^https?:\/\/www\.(\d+dm|dmlaa|qdmsh|ntdm8)\.com\/play\/.*/g,
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
                let urls = page.url.split(',');
                for (let item of urls){
                    let matches = item.match(VIDEO_URL_REGEX);
                    if (matches && matches.length > 0) {
                        this.media.setVideoUrl(matches[0]);
                        break;
                    }
                }
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
        // ✅ https://www.icourse163.org/learn/ZJU-200001?tid=1470096517#/learn/content?type=detail&id=1254347726&cid=1285600901
        name: "中国大学MOOC",
        regex: /^https:\/\/www\.icourse163\.org\/learn\/.*\/learn\/content\?type=detail.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let res = this.htmlParser();
                if (!res) return;
                this.media.setVideoUrl(res);
                this.media.setTitle(document.querySelector('.current > .unit-name').innerText);
            }
        }
    },
    {
        // ✅ https://www.iole.tv/vodplay/23711-1-1.html
        name: "ioleTV",
        regex: /^https:\/\/www\.iole\.tv\/vodplay\/.+/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "ioleTV播放器",
        regex: /^https:\/\/www\.iole\.tv\/static\/player\/.*\.html/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                this.media.setVideoUrl(parent.MacPlayer.PlayUrl);
            }
        }
    },
    {
        // ✅ https://www.zhihu.com/zvideo/1650574385558937600
        name: "知乎视频",
        regex: /^https:\/\/www\.zhihu\.com\/zvideo\/.+/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                let that = this;
                this.currentUrl = "";
                //拦截请求以更新Url
                const originOpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
                    originOpen.apply(this, arguments);
                    if (url.match(VIDEO_URL_REGEX)) {
                        that.currentUrl = url;
                    }
                };
            }
            async parse() {
                this.media.setVideoUrl(this.currentUrl);
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
        // ✅ http://www.susudm8.com/acg/69815/3.html
        name: "速速电影院",
        regex: /^https?:\/\/(www\.susudm8\.com|susudyy\.com|buding3\.com|buding6\.com)\/.+\.html/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "速速电影院播放器",
        regex: /^https?:\/\/(v2\.shenjw\.com:\d+|u88\.xigua88ok\.com:\d+)\/wap\.php\?url=.+/g,
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
        name: "速速电影院播放器",
        regex: /^https?:\/\/test3\.gqyy8\.com:\d+\/f\/aliplayer\.php\?url=.+/g,
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
        // ✅ https://v.mksec.cn/index.php/vod/play/id/165438/sid/2/nid/1.html
        name: "小见子的视频站",
        regex: /^https?:\/\/v\.mksec\.cn\/index\.php\/vod\/play\/.+\.html/g,
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
        name: "小见子的视频站播放器",
        regex: /^https?:\/\/v\.mksec\.cn\/static\/player\/dplayer\.html/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                tryTime = TRY_TIME.maxParse;
            }
        }
    },
    {
        // ✅ https://jh642t.dshryadqp.com/index.php/vod/play/id/51434/sid/1/nid/1.html
        name: "大师兄电影网",
        regex: /^https?:\/\/.*dsh.*\.com\/index\.php\/vod\/play\/.+\.html/g,
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
        name: "大师兄电影网播放器",
        regex: /^https?:\/\/.*dsh.*\.com\/static\/player\/dplayer\.html/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addTopListener();
            }
            async parse() {
                tryTime = TRY_TIME.maxParse;
            }
        }
    },
    {
        // ✅ https://www.twitch.tv/yulihong22
        name: "Twitch",
        home: [
            "https://www.twitch.tv"
        ],
        regex: /^https:\/\/www\.twitch\.tv\/\w+/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                if (page.url.indexOf("/directory") != -1) {
                    tryTime = TRY_TIME.maxParse;
                    return;
                }
                this.media.setOther(BEST_QUALITY.ytdlp[currentConfig.bestQuality]);
                this.media.setVideoUrl(this.ytDlpParser());
                this.media.setTitle("");
            }
        },
    },
    {
        // ✅ https://jiohub.top/watch/264
        name: "JOJO",
        home: [
            "https://jiohub.top"
        ],
        regex: /^https:\/\/jiohub\.top\/watch\/.*/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                this.media.setVideoUrl(this.videoParser());
            }
        },
    },
    {
        // ✅ https://www.agemys.org/play/20220403/1/1
        name: "AGE动漫",
        regex: /^https?:\/\/www\.agemys\.org\/play\/.+/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "AGE动漫播放器",
        regex: /^https?:\/\/vip\.sp-flv\.com:\d+\/\?url=.+/g,
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
        // ✅ https://anime.girigirilove.com/playGV25353-1-1/
        name: "girigiri爱动漫",
        regex: /^https:\/\/anime\.girigirilove\.com\/play.+/g,
        handler: class Handler extends BaseHandler {
            constructor() {
                super();
                this.addIframeListener();
            }
        }
    },
    {
        name: "girigiri爱动漫播放器",
        regex: /^https:\/\/anime\.girigirilove\.com\/addons\/dp\/player\/dp\.php\?.+/g,
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
        name: "AList",
        regex: /^https?:\/\/[^\/]+\/.*\.(mp4|mkv|flv)/g,
        handler: class Handler extends BaseHandler {
            async parse() {
                let url = this.videoParser();
                let data = {
                    path: decodeURIComponent(location.pathname),
                    password: ""
                };
                if (!url && tryTime < 3) {
                    $.ajax({
                        type: "POST",
                        url: `/api/fs/get`,
                        dataType: "json",
                        data: JSON.stringify(data),
                        xhrFields: {
                            withCredentials: true
                        },
                        headers: {
                            "Authorization": localStorage.getItem("token")
                        },
                        async: false,
                        contentType: "application/json",
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
    if (flag && page.url.startsWith("https://www.bilibili.com/festival/")) {
        await sleep(1500);
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
        console.log("Play-With-MPV：暂无此网页解析器（" + page.url + "）");
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
