// ==UserScript==
// @name                    Play-With-MPV
// @name:zh                 使用 MPV 播放
// @namespace               https://github.com/LuckyPuppy514
// @version                 2.3.1
// @author                  LuckyPuppy514
// @copyright               2022, Grant LuckyPuppy514 (https://github.com/LuckyPuppy514)
// @license                 MIT
// @description             使用 MPV 播放网页上的视频
// @homepage                https://github.com/LuckyPuppy514/Play-With-MPV
// @icon                    https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/mpv.png
// @updateURL               https://greasyfork.org/scripts/444056-play-with-mpv/code/Play-With-MPV.user.js
// @downloadURL             https://greasyfork.org/scripts/444056-play-with-mpv/code/Play-With-MPV.user.js
// @match                   *://www.youtube.com/*
// @include                 https://www.youtube.com/watch/*
// @include                 https://www.bilibili.com/bangumi/play/*
// @include                 https://www.bilibili.com/video/*
// @include                 https://live.bilibili.com/*
// @connect                 api.bilibili.com
// @connect                 api.live.bilibili.com
// @include                 https://ddys.tv/*
// @include                 https://ddys2.me/*
// @include                 https://www.996dm.com/play/*
// @include                 http://www.996dm.com/play/*
// @include                 http://www.dmlaa.com/play/*
// @include                 https://danmu.yhdmjx.com/*
// @include                 https://www.dm233.me/play/*
// @include                 http://www.dmh8.com/player/*
// @include                 https://www.yhdmp.net/vp/*
// @include                 https://ani.gamer.com.tw/animeVideo.php?*
// @include                 http*://*.mp4
// @include                 http*://*.mkv
// @include                 http*://*.avi
// @include                 http*://*.rmvb
// @include                 http*://alist.*
// @include                 http*://*:5244*
// @include                 https://hdzyk.com/?m=*
// @include                 https://1080zyk*.com/?m=*
// @include                 https://vip.zykbf.com/?url=*
// @include                 https://www.kk151.com/play/*
// @include                 https://jx.m3u8.tv/jiexi/?url=*
// @include                 https://jx.wolongzywcdn.com:65/m3u8.php?url=*
// @include                 https://www.m3u8.tv.cdn.8old.cn/jx.php?url=*
// @include                 https://jx.wujinkk.com/dplayer/?url=*
// @include                 https://www.ikdmjx.com/?url=*
// @include                 https://hls.kuaibofang.com/?url=*
// @include                 https://jx.jxbdzyw.com/m3u8/?url=*
// @include                 https://libvio.fun/play/*
// @include                 https://libvio.me/play/*
// @include                 https://www.libvio.me/play/*
// @include                 https://sh-data-s02.chinaeast2.cloudapp.chinacloudapi.cn/*.php?url=*
// @include                 https://p.cfnode1.xyz/*.php?url=*
// @include                 https://www.bdys01.com/*play/*
// @include                 https://www.btnull.org/py/*
// @include                 https://www.pkmp4.com/py/*
// @run-at                  document-end
// @require                 https://unpkg.com/jquery@3.2.1/dist/jquery.min.js
// @grant                   GM_setValue
// @grant                   GM_getValue
// ==/UserScript==

'use strict';
// 注册表版本
const REG_VERSION = "20220907";
// 不输出控制台信息
const NO_TERMINAL = true;

// const IS_DEBUG = true;
// function debug(data) {
//     if (IS_DEBUG) {
//         console.log(data);
//     }
// }

const DIV =
    `
<div id="pwmpv-button-div">
    <button id="pwmpv-about-button"></button>
    <button id="pwmpv-play-button"></button>
    <button id="pwmpv-setting-button"></button>
</div>

<div id="pwmpv-about-div">
    <span class="pwmpv-title-span">✨ 关于 Play-With-MPV ✨ <button class="pwmpv-close-button">❌</button></span>
    <table id="pwmpv-about-table">
        <tr>
            <td colspan="6" class="pwmpv-title-td">使用 MPV 播放网页中的视频（解码 ⬆️ 补帧 ✅ 着色器 ✅ 更多💡）</td>
        </tr>
        <tr>
            <td colspan="2"><a href="https://github.com/LuckyPuppy514/Play-With-MPV#-%E7%AE%80%E4%BB%8B" target="_blank">支持网站</a></td>
            <td colspan="4">
                <a href="https://www.lckp.top/play-with-mpv/index.html" target="_blank">👆 请前往导航页查看 👆</a>
            </td>
        </tr>
        <tr>
            <td colspan="2"><a href="https://www.lckp.top/archives/mpvnetcm">支持软件</a></td>
            <td colspan="2">
                <a href="https://www.lckp.top/archives/mpvnetcm" target="_blank"><img class="pwmpv-support-url-icon" src="https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/mpvnet.png" /></a>
            </td>
            <td colspan="2">
                <a href="https://www.lckp.top/archives/mpv-lazy" target="_blank"><img class="pwmpv-support-url-icon-large" src="https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/mpv.png" /></a>
            </td>
        </tr>
        <tr>
            <td colspan="2"><a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank">脚本相关</a></td>
            <td colspan="2"><a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank">🆕 版本更新 🆕</a></td>
            <td colspan="2"><a href="https://github.com/LuckyPuppy514/Play-With-MPV/issues/new" target="_blank">👻 问题反馈 👻</a></td>
        </tr>
    </table>
    <span class="pwmpv-footer-span">
        <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank"><img class="pwmpv-footer-icon" src="https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/tampermonkey.png"/></a>
        <a href="https://www.lckp.top" target="_blank">2022 © LuckyPuppy514</a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank"><img class="pwmpv-footer-icon" src="https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/github.png"/></a>
    </span>
</div>

<div id="pwmpv-setting-div">
    <span class="pwmpv-title-span">🌟 Play-With-MPV 设置 🌟 <button class="pwmpv-close-button">❌</button></span>
    <table id="pwmpv-setting-table">
        <tr>
            <td class="pwmpv-title-td">软件路径</td>
            <td colspan="3"><input id="pwmpv-mpv-path-input" type=text placeholder="请输入你的 mpv.com 路径，例如：D://daily//mpvnet//mpvnet.com"></td>
        </tr>
        <tr>
            <td class="pwmpv-title-td">代理设置</td>
            <td colspan="3"><input id="pwmpv-proxy-input" type=text placeholder="请输入你的 http 或 socks 代理，例如：http://127.0.0.1:10809"></td>
        </tr>
        <tr>
            <td class="pwmpv-title-td">最高画质</td>
            <td>
                <select id="pwmpv-best-quality-select">
                    <option value="unlimited" selected>无限制</option>
                    <option value="2160p">2160p</option>
                    <option value="1440p">1440p</option>
                    <option value="1080p">1080p</option>
                    <option value="720p">720p</option>
                    <option value="480p">480p</option>
                </select>
                <span class="tip-span">限B站和油管</span>
            </td>
            <td class="pwmpv-title-td">视频编码</td>
            <td>
                <select id="pwmpv-bilibili-codecs-select">
                    <option value="12" selected>HEVC</option>
                    <option value="13">AV1</option>
                    <option value="7">AVC</option>
                </select>
                <span class="tip-span">限B站</span>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <button id="pwmpv-save-button">保存设置</button>
                <button id="pwmpv-download-button" data-tip="请先输入 MPV 路径，并保存设置">下载注册表</button>
            </td>
        </tr>
    </table>
    <span class="pwmpv-footer-span">
        <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank"><img class="pwmpv-footer-icon" src="https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/tampermonkey.png"/></a>
        <a href="https://www.lckp.top" target="_blank">2022 © LuckyPuppy514</a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank"><img class="pwmpv-footer-icon" src="https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/github.png"/></a>
    </span>
</div>

<iframe id="firefox-iframe" src="about:blank" style="display:none;"></iframe>
`
const CSS =
    `
.pwmpv-close-button {
    position: absolute;
    top: 3px;
    right: 3px;
    height: 25px;
    width: 40px;
    border: none;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0);
    line-height: 0px;
}
.pwmpv-close-button:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
#pwmpv-button-div {
    display: none;
}
.pwmpv-title-span {
    padding-top: 15px;
    font-size: 15px;
}
#pwmpv-about-button {
    position: fixed;
    bottom: 58px;
    left: 8px;
    z-index: 999998;

    width: 25px;
    height: 25px;
    border: none;
    border-radius: 50%;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0);
    background-image: url(https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/about-pink.png);
}
#pwmpv-about-button:hover {
    bottom: 56px;
    left: 6px;
    z-index: 999999;

    width: 27px;
    height: 27px;
	cursor: pointer;
}
#pwmpv-about-div {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999;

    width: 600px;
    height: 320px;
    border: 6px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(234, 122, 153, 1);
    display: none;
    flex-direction: column;
	border-radius: 6px;
	align-items: center;
    color: rgba(255, 255, 255, 1);
}
#pwmpv-about-table {
    margin-top: 10px;
    width: 570px;
    height: 240px;
    border-radius: 5px !important;
    border: 3px solid rgba(255, 255, 255, 1) !important;
    text-align: center;
}
#pwmpv-about-table td {
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 0px 15px 0px 15px;
}
#pwmpv-about-div a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
}

#pwmpv-play-button {
    position: fixed;
    bottom: 16px;
    left: 20px;
    z-index: 999999;

    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-size: cover;
    background-image: url(https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/mpvnet.png);
    cursor: pointer;
}
#pwmpv-play-button:hover {
    bottom: 14px;
    left: 18px;

    width: 54px;
    height: 54px;
	cursor: pointer;
}

#pwmpv-setting-button {
    position: fixed;
    bottom: 56px;
    left: 58px;
    z-index: 999998;

    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0);
    background-image: url(https://www.lckp.top/gh/LuckyPuppy514/pic-bed/common/lx-setting.png);
}
#pwmpv-setting-button:hover {
    bottom: 54px;
    left: 56px;
    z-index: 999999;

    width: 32px;
    height: 32px;
	cursor: pointer;
}
#pwmpv-setting-div {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999;

    width: 600px;
    height: 320px;
    border: 6px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(65, 146, 247, 1);
    display: none;
    flex-direction: column;
	border-radius: 6px;
	align-items: center;
    color: rgba(255, 255, 255, 1);
}
#pwmpv-setting-table {
    margin-top: 10px;
    width: 570px;
    height: 240px;
    border-radius: 5px !important;
    border: 3px solid rgba(255, 255, 255, 1) !important;
    text-align: left;
}
#pwmpv-setting-table td {
    font-size: 14px;
    border: 0px solid rgba(255, 255, 255, 0.5);
    padding-top: 18px;
}
.tip-span {
    font-size: xx-small;
    color: yellow;
    position: fixed;
    padding-left: 5px;
    padding-top: 9px;
}
.pwmpv-title-td {
    width: 90px;
    height: 30px;
    border: none;
    font-size: 14px;
    padding-left: 12px;
    text-align: center;
}
#pwmpv-setting-table input {
    font-size: 14px;
    width: 430px;
    height: 26px;
    border: none;
    outline: none;
    padding-left: 6px;
    border-radius: 2px;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 0.9);
}
#pwmpv-bilibili-codecs-select,
#pwmpv-best-quality-select {
    width: 90px;
    height: 25px;
    border: none;
    outline: none;
    padding-left: 6px;
    border-radius: 2px;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 0.9);
}
#pwmpv-save-button {
    font-size: 14px;
    margin-left: 105px;
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 255, 50, 0.6);
}
#pwmpv-save-button:hover {
    background-color: rgba(0, 255, 0, 0.8);
    cursor: pointer;
}
.pwmpv-download-enable:hover {
    background-color: rgba(0, 255, 0, 0.8);
    cursor: pointer;
}
.pwmpv-download-disable:hover {
    cursor: pointer;
}
.pwmpv-download-enable {
    font-size: x-small;
    margin-left: 10px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 255, 50, 0.6);

}
.pwmpv-download-disable {
    font-size: x-small;
    margin-left: 10px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.5);
}
.pwmpv-tips-td {
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
}
.pwmpv-footer-span {
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 1);
}
.pwmpv-footer-span a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 1px;
    display: inline-block;
}
.pwmpv-footer-icon {
    width: 18px;
    height: 18px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: -2px;
}
.pwmpv-support-url-icon {
    width: 30px;
    height: 30px;
    margin-left: 8px;
    margin-right: 8px;
}
.pwmpv-support-url-icon-small {
    width: 25px;
    height: 25px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 2px;
}
.pwmpv-support-url-icon-large {
    width: 37px;
    height: 37px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: -4px;
}
`

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
@="cmd /V:ON /C \\"FOR /F \\"tokens=* USEBACKQ\\" %%F IN (\`C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe -command \\"Add-Type -AssemblyName System.Web;[System.Web.HTTPUtility]::UrlDecode('%1')\\"\`) DO (SET param=%%F) & SET param=!param:mpv://=! & start /min MPV_PATH !param!\\""
`

// element id
const BUTTON_DIV = "pwmpv-button-div";
const ABOUT_BUTTON_ID = "pwmpv-about-button";
const ABOUT_DIV_ID = "pwmpv-about-div";
const PLAY_BUTTON_ID = "pwmpv-play-button";
const SETTING_BUTTON_ID = "pwmpv-setting-button";
const SETTING_DIV_ID = "pwmpv-setting-div";
const MPV_PATH_INPUT_ID = "pwmpv-mpv-path-input";
const PROXY_INPUT_ID = "pwmpv-proxy-input";
const BILIBILI_CODECS_SELECT_ID = "pwmpv-bilibili-codecs-select";
const BEST_QUALITY_SELECT_ID = "pwmpv-best-quality-select";
const SAVE_BUTTON_ID = "pwmpv-save-button";
const DOWNLOAD_BUTTON_ID = "pwmpv-download-button";
// display
const DISPLAY_NONE = "none";
const DISPLAY_FLEX = "flex";
// GM value key
const KEY_MPV_PATH = "MPV_PATH";
const KEY_PROXY = "PROXY";
const KEY_REG_VERSION = "REG_VERSION";
const KEY_BILIBILI_CODECS = "BILIBILI_CODECS";
const BILIBILI_CODECS_HEVC = "12";
const KEY_BEST_QUALITY = "BEST_QUALITY";
const BEST_QUALITY_UNLIMITED = "unlimited";

function appendHTML() {
    var div = document.createElement("div");
    div.innerHTML = DIV.trim();
    document.body.appendChild(div);
}
function appendCSS() {
    var css = document.createElement("style");
    css.innerHTML = CSS.trim();
    document.head.appendChild(css);
}
var bilibiliCodecs;
var bestQuality;
var isFullScreen = false;
function addListener() {
    // 关于
    var aboutButton = document.getElementById(ABOUT_BUTTON_ID);
    var aboutDiv = document.getElementById(ABOUT_DIV_ID);
    aboutButton.onclick = function () {
        if (aboutDiv.style.display != DISPLAY_FLEX) {
            aboutDiv.style.display = DISPLAY_FLEX;
            settingDiv.style.display = DISPLAY_NONE;
        } else {
            aboutDiv.style.display = DISPLAY_NONE;
        }
    };

    // 播放
    var playButton = document.getElementById(PLAY_BUTTON_ID);
    playButton.onclick = function () {
        let regVersion = GM_getValue(KEY_REG_VERSION);
        if (!regVersion || regVersion != REG_VERSION) {
            showSettingDiv();
            Toast("🆕 注册表配置有更新，请重新下载并添加注册表信息 🆕");
            return;
        }
        handler.playCurrentVideoWithMPV();
    }

    // 设置
    var settingButton = document.getElementById(SETTING_BUTTON_ID);
    var bilibiliCodecsSelect = document.getElementById(BILIBILI_CODECS_SELECT_ID);
    var bestQualitySelect = document.getElementById(BEST_QUALITY_SELECT_ID);
    var saveButton = document.getElementById(SAVE_BUTTON_ID);
    var downloadButton = document.getElementById(DOWNLOAD_BUTTON_ID);
    var settingDiv = document.getElementById(SETTING_DIV_ID);
    var mpvPathInput = document.getElementById(MPV_PATH_INPUT_ID);
    var proxyInput = document.getElementById(PROXY_INPUT_ID);
    settingButton.onclick = function () {
        if (settingDiv.style.display != DISPLAY_FLEX) {
            showSettingDiv();
            aboutDiv.style.display = DISPLAY_NONE;
        } else {
            settingDiv.style.display = DISPLAY_NONE;
        }
    };
    bilibiliCodecs = GM_getValue(KEY_BILIBILI_CODECS);
    if (!bilibiliCodecs) {
        bilibiliCodecs = BILIBILI_CODECS_HEVC;
        GM_setValue(KEY_BILIBILI_CODECS, bilibiliCodecs);
    }
    bilibiliCodecsSelect.onchange = function () {
        bilibiliCodecs = this.value;
    };
    bestQuality = GM_getValue(KEY_BEST_QUALITY);
    if (!bestQuality) {
        bestQuality = BEST_QUALITY_UNLIMITED;
        GM_setValue(KEY_BEST_QUALITY, bestQuality);
    }
    bestQualitySelect.onchange = function () {
        bestQuality = this.value;
    };
    saveButton.onclick = function () {
        let oldMpvPath = GM_getValue(KEY_MPV_PATH);
        let mpvPath = mpvPathInput.value;
        let proxy = proxyInput.value;
        if (!mpvPath) {
            downloadButton.className = "pwmpv-download-disable";
            Toast("⚠️ 软件路径不能为空 ⚠️", 2000);
            return;
        }
        if (/.*[\u4e00-\u9fa5]+.*$/.test(mpvPath)) {
            downloadButton.className = "pwmpv-download-disable";
            Toast("⚠️ 软件路径不能包含中文 ⚠️", 2000);
            return;
        }
        mpvPath = mpvPath.replace(/[\\|/]+/g, "//");
        if (!mpvPath.endsWith(".com")) {
            if (!mpvPath.endsWith("//")) {
                mpvPath = mpvPath + "//";
            }
            if (mpvPath.endsWith("mpvnet//")) {
                mpvPath = mpvPath + "mpvnet.com";
            } else if (mpvPath.endsWith("mpv//") || mpvPath.endsWith("mpv-lazy//")) {
                mpvPath = mpvPath + "mpv.com";
            } else {
                Toast("⚠️ 软件路径错误，正确示例：D:/daily/mpvnet/mpvnet.com ⚠️", 3000)
                return;
            }
        }
        mpvPathInput.value = mpvPath;
        GM_setValue(KEY_MPV_PATH, mpvPath);
        GM_setValue(KEY_PROXY, proxy);
        if (bilibiliCodecs != GM_getValue(KEY_BILIBILI_CODECS) || bestQuality != GM_getValue(KEY_BEST_QUALITY)) {
            GM_setValue(KEY_BILIBILI_CODECS, bilibiliCodecs);
            GM_setValue(KEY_BEST_QUALITY, bestQuality);
            // 重新获取视频链接
            initCurrentPageInfo();
            refreshCurrentVideoUrl();
        }
        // debug(proxy);
        downloadButton.className = "pwmpv-download-enable";
        if (oldMpvPath != mpvPath) {
            Toast("🔥 请重新添加注册表信息 🔥", 3000);
            downloadButton.click();
        } else {
            Toast("✅  保存成功  ✅", 2000);
        }
    };
    downloadButton.onclick = function () {
        // 生成注册表信息
        var a = document.createElement('a');
        var blob = new Blob([REG.replace(KEY_MPV_PATH, GM_getValue(KEY_MPV_PATH))], { 'type': 'application/octet-stream' });
        a.href = window.URL.createObjectURL(blob);
        a.download = "mpv.reg";
        a.click();
        GM_setValue(KEY_REG_VERSION, REG_VERSION);
    }
    var closeButtons = document.getElementsByClassName("pwmpv-close-button");
    for (let closeButton of closeButtons) {
        closeButton.onclick = function () {
            aboutDiv.style.display = DISPLAY_NONE;
            settingDiv.style.display = DISPLAY_NONE;
        }
    }
    // 全屏
    document.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement) {
            isFullScreen = true;
            document.getElementById(BUTTON_DIV).style.display = DISPLAY_NONE;
        } else {
            isFullScreen = false;
            handler.checkCurrentVideoUrl();
        }
    });
}
// 显示设置窗口
function showSettingDiv() {
    var downloadButton = document.getElementById(DOWNLOAD_BUTTON_ID);
    var settingDiv = document.getElementById(SETTING_DIV_ID);
    var bilibiliCodecsSelect = document.getElementById(BILIBILI_CODECS_SELECT_ID);
    var bestQualitySelect = document.getElementById(BEST_QUALITY_SELECT_ID);
    var mpvPathInput = document.getElementById(MPV_PATH_INPUT_ID);
    var proxyInput = document.getElementById(PROXY_INPUT_ID);
    let mpvPath = GM_getValue(KEY_MPV_PATH);
    let proxy = GM_getValue(KEY_PROXY);
    bilibiliCodecs = GM_getValue(KEY_BILIBILI_CODECS);
    bestQuality = GM_getValue(KEY_BEST_QUALITY);
    if (mpvPath) {
        mpvPathInput.value = mpvPath;
        downloadButton.className = "pwmpv-download-enable";
    } else {
        downloadButton.className = "pwmpv-download-disable";
    }
    if (proxy) {
        proxyInput.value = proxy;
    }
    bilibiliCodecsSelect.value = bilibiliCodecs;
    bestQualitySelect.value = bestQuality;
    settingDiv.style.display = DISPLAY_FLEX;
}
// 显示消息
function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 15%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0, 0.9);font-size: 14px;";
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.opacity = '0';
        setTimeout(function () { document.body.removeChild(m) }, d * 1000);
    }, duration);
}

// mpv urlprotocol
const MPV_URLPROTOCOL = "mpv://";
// mpv urlprotocol link
class UrlProtocol {
    constructor() {
        this.link = MPV_URLPROTOCOL + '"' + currentVideoUrl + '"';
        this.appendNoTerminal();
        this.needAppendTitle = false;
    }
    // 添加参数
    append(param) {
        this.link = this.link + ' ' + param;
    }
    // 禁止命令行输出及控制
    appendNoTerminal() {
        if (NO_TERMINAL) {
            this.append('--no-terminal');
        }
    }
    // 开始时间（如果 mpv 开启了退出时记住播放状态，则记住状态优先级更高）
    appendStartTime() {
        let startTime = handler.getStartTime();
        if (startTime) {
            this.append('--ss="' + startTime + '"');
        }
    }
    // 标题
    appendTitle() {
        this.needAppendTitle = true;
    }
    // 代理
    appendProxy() {
        let proxy = GM_getValue(KEY_PROXY);
        if (proxy) {
            this.append('--http-proxy=' + proxy + ' --ytdl-raw-options=proxy=[' + proxy + ']');
        }
    }
    // 最终链接
    getLink() {
        if (this.needAppendTitle) {
            // 限制标题长度（url 有长度限制）
            let maxLength = 1900 - this.link.length;
            let title = encodeURIComponent(document.title);
            if (title.length > maxLength) {
                title = title.substring(0, maxLength) + '...';
            }
            this.append('--force-media-title="' + title + '"');
        }
        return this.link;
    }
}

// 网页处理器
var handler;
class Handler {
    // 获取当前视频链接
    getCurrentVideoUrl() { }
    // 获取开始时间
    getStartTime() { return null; }
    // 暂停网页视频
    pauseCurrentVideo() { document.getElementsByTagName("video")[0].pause(); }
    // 获取调用 mpv 链接
    getUrlProtocolLink() {
        let urlProtocol = new UrlProtocol;
        urlProtocol.appendStartTime();
        urlProtocol.appendTitle();
        return urlProtocol.getLink();
    }
    // 校验视频链接是否有效
    checkCurrentVideoUrl() {
        if (this.baseCheckCurrentVideoUrl()) {
            if (!isFullScreen) {
                document.getElementById(BUTTON_DIV).style.display = DISPLAY_FLEX;
            }
            return true;
        }
        return false;
    }

    // 调用 mpv 播放
    playCurrentVideoWithMPV() {
        window.open(this.getUrlProtocolLink(), "_self");
        let i = 0;
        while (i < 3) {
            i++;
            setTimeout(function () {
                handler.pauseCurrentVideo();
            }, 2000 * i);
        }
    }
    // 根据 class name 获取播放时间
    getStartTimeByClassName(className) {
        let startTimeElements = document.getElementsByClassName(className);
        let length = startTimeElements.length;
        if (length > 0) {
            return startTimeElements[length - 1].innerHTML;
        }
        return null;
    }
    // 视频链接基础校验
    baseCheckCurrentVideoUrl() {
        // debug("current video url: " + currentVideoUrl);
        if (!currentVideoUrl || !currentVideoUrl.startsWith("http")
            || currentVideoUrl.indexOf("yun.66dm.net") != -1
            || currentVideoUrl.indexOf("www.xmfans.me") != -1
            || currentVideoUrl.indexOf("sod.bunediy.com") != -1
            || currentVideoUrl.indexOf("c2.monidai.com") != -1) {
            return false;
        }
        return true;
    }
}

// 油管
const YOUTUBE = "www.youtube.com";
const YOUTUBE_QN = {
    "unlimited": "",
    "2160p": "--ytdl-format=bestvideo[height<=?2160]%2Bbestaudio/best",
    "1440p": "--ytdl-format=bestvideo[height<=?1440]%2Bbestaudio/best",
    "1080p": "--ytdl-format=bestvideo[height<=?1080]%2Bbestaudio/best",
    "720p": "--ytdl-format=bestvideo[height<=?720]%2Bbestaudio/best",
    "480p": "--ytdl-format=bestvideo[height<=?480]%2Bbestaudio/best",
};
class YoutubeHandler extends Handler {
    getCurrentVideoUrl() {
        currentVideoUrl = currentUrl;
        this.checkCurrentVideoUrl();
    }
    getStartTime() {
        return this.getStartTimeByClassName("ytp-time-current");
    }
    getUrlProtocolLink() {
        let urlProtocol = new UrlProtocol;
        urlProtocol.appendStartTime();
        urlProtocol.appendProxy();
        if (bestQuality) {
            urlProtocol.append(YOUTUBE_QN[bestQuality]);
        }
        return urlProtocol.getLink();
    }
    checkCurrentVideoUrl() {
        if (currentUrl.indexOf("/watch") == -1 && currentUrl.indexOf("/playlist") == -1) {
            return false;
        }
        return super.checkCurrentVideoUrl();
    }
}

// B站
const BILIBILI = "www.bilibili.com";
// B站 API
const BILIBILI_API = 'https://api.bilibili.com';
// cid 用于传递给 mpv 获取弹幕
var bilibiliCid;
const BILIBILI_QN = {
    "unlimited": 127,
    "2160p": 126,
    "1440p": 116,
    "1080p": 116,
    "720p": 74,
    "480p": 32,
};
class BilibiliHandler extends Handler {
    getCurrentVideoUrl() {
        let index = currentUrl.indexOf('/video/');
        if (index != -1) {
            // 投稿视频
            let param = "";
            let videoId = currentUrl.substring(index + 7);
            if (videoId.startsWith("BV")) {
                param = "bvid=" + videoId.match(/BV([0-9a-zA-Z]+)/)[1];
            } else if (videoId.startsWith("av")) {
                param = "aid=" + videoId.match(/av([0-9]+)/)[1];
            } else {
                // debug("bilibili video id invalid: " + videoId);
                return;
            }
            // debug("bilibili video id: " + param);
            getBilibiliVideoUrl(param);

        } else {
            // 番剧
            let visitedLi = document.getElementsByClassName("ep-item cursor visited")[0];
            visitedLi = visitedLi ? visitedLi : document.getElementsByClassName('ep-item cursor')[0];
            let epid = visitedLi.getElementsByTagName('a')[0].href.match(/ep(\d+)/)[1];
            let className = visitedLi.parentElement.parentElement.className;
            getBilibiliBangumiUrl(epid, className);
        }
    }
    getStartTime() {
        let startTime = this.getStartTimeByClassName("bpx-player-ctrl-time-current");
        if (!startTime) {
            startTime = this.getStartTimeByClassName("squirtle-video-time-now");
        }
        return startTime;
    }
    getUrlProtocolLink() {
        let urlProtocol = new UrlProtocol;
        urlProtocol.appendStartTime();
        urlProtocol.appendTitle();
        urlProtocol.append('--audio-file="' + currentAudioUrl + '"');
        urlProtocol.append('--http-header-fields="referer: https://www.bilibili.com, user-agent: ' + navigator.userAgent + '"');
        urlProtocol.append('--script-opts="cid=' + bilibiliCid + '"');
        return urlProtocol.getLink();
    }
}
// 获取B站投稿视频链接
function getBilibiliVideoUrl(param) {
    $.ajax({
        type: "GET",
        url: BILIBILI_API + "/x/web-interface/view?" + param,
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            // debug("get acid and cid by avid/bvid result: ");
            // debug(res);
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
            getBilibiliPlayUrl(avid, cid);
        }
    })
}
// 获取B站番剧视频链接
function getBilibiliBangumiUrl(epid, className) {
    // debug('epid: ' + epid);
    // debug('className: ' + className);
    $.ajax({
        type: "GET",
        url: BILIBILI_API + "/pgc/view/web/season?ep_id=" + epid,
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            // debug("get acid and cid by epid result: ");
            // debug(res);
            var currentEpisode;
            var section = new Array;
            if (className.indexOf("list-wrapper") != -1) {
                section[0] = { episodes: res.result.episodes };
            } else {
                section = res.result.section;
            }
            for (let i = 0; i < section.length; i++) {
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
// 获取B站视频播放链接
function getBilibiliPlayUrl(avid, cid) {
    // debug("avid: " + avid);
    // debug("cid: " + cid);
    bilibiliCid = cid;

    let queryBilibiliVideoUrl = "/x/player/playurl?"
        + "qn=&otype=json&fourk=1&fnver=0&fnval=4048"
        + "&avid=" + avid
        + "&cid=" + cid;
    $.ajax({
        type: "GET",
        url: BILIBILI_API + queryBilibiliVideoUrl,
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            // debug(res);
            let dash = res.data.dash;
            let hiRes = dash.flac;
            let dolby = dash.dolby;
            if (hiRes && hiRes.audio) {
                // debug("hi-res: on");
                currentAudioUrl = hiRes.audio.baseUrl;
            } else if (dolby && dolby.audio) {
                // debug("dolby: on");
                currentAudioUrl = dolby.audio[0].base_url;
            } else {
                // debug(dash.audio[0].id);
                currentAudioUrl = dash.audio[0].baseUrl;
            }
            let i = 0;
            // 限制画质
            let qn = BILIBILI_QN[bestQuality];
            while (i < dash.video.length && dash.video[i].id > qn) {
                i++;
            }
            let baseUrl = dash.video[i].baseUrl;
            let id = dash.video[i].id;
            while (i < dash.video.length) {
                if (dash.video[i].id != id) {
                    break;
                }
                if (dash.video[i].codecid == bilibiliCodecs) {
                    baseUrl = dash.video[i].baseUrl;
                    break;
                }
                i++;
            }
            currentVideoUrl = baseUrl;
            handler.checkCurrentVideoUrl();
        }
    });
}

// B站直播
const BILIBILI_LIVE = "live.bilibili.com";
// B站直播 API
const BILIBILI_LIVE_API = 'https://api.live.bilibili.com';

const BILIBILI_LIVE_QN = {
    "unlimited": 4,
    "2160p": 4,
    "1440p": 4,
    "1080p": 4,
    "720p": 3,
    "480p": 2,
};
class BilibiliLiveHandler extends Handler {
    getCurrentVideoUrl() {
        let url = document.getElementsByTagName("iframe")[0].src;
        let index = url.indexOf("roomid=");
        if (index == -1) {
            return;
        }
        let roomid = url.substring(index + 7);
        roomid = roomid.substring(0, roomid.indexOf("&"));
        let queryBilibiliLiveVideoUrl = "/room/v1/Room/playUrl?"
            + "quality=" + BILIBILI_LIVE_QN[bestQuality]
            + "&cid=" + roomid;
        $.ajax({
            type: "GET",
            url: BILIBILI_LIVE_API + queryBilibiliLiveVideoUrl,
            xhrFields: {
                withCredentials: true
            },
            success: function (res) {
                currentVideoUrl = res.data.durl[0].url;
                handler.checkCurrentVideoUrl();
            }
        });
    }
    getUrlProtocolLink() {
        let urlProtocol = new UrlProtocol;
        urlProtocol.appendTitle();
        urlProtocol.append('--http-header-fields="referer: https://live.bilibili.com, user-agent: ' + navigator.userAgent + '"');
        return urlProtocol.getLink();
    }
}

// 低端影视
const DDRK = "ddys.tv, ddys2.me";
// 低端影视播放状态
var ddrkPlayStatus;

class DdrkHandler extends Handler {
    getCurrentVideoUrl() {
        // 点击播放按钮加载 video 元素
        if (!ddrkPlayStatus) {
            let ddrkPlayButton = document.getElementsByClassName('vjs-big-play-button')[0];
            if (!ddrkPlayButton) {
                // debug("ddrk get play button fail");
                return;
            }
            ddrkPlayButton.click();
            ddrkPlayStatus = true;
        }
        currentVideoUrl = document.getElementById('vjsp_html5_api').src;
        this.checkCurrentVideoUrl();
    }
    getStartTime() {
        return this.getStartTimeByClassName("vjs-time-tooltip");
    }
}

// 樱花动漫网
const DM6CC = "www.6dm.cc, www.996dm.com";

class Dm6ccHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            this.checkCurrentVideoUrl();
            window.removeEventListener("message", () => { });
        }, false);
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.postMessage("pause", "https://" + YHDMJX);
    }
}

// 风车动漫
const DMLACC = "www.dmlaa.com";

class DmlaccHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            this.checkCurrentVideoUrl();
            window.removeEventListener("message", () => { });
        }, false);
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.postMessage("pause", "https://" + YHDMJX);
    }
}

// 樱花动漫网和风车动漫实际播放地址
const YHDMJX = "danmu.yhdmjx.com";

class YhdmjxHandler extends Handler {
    constructor() {
        super();
        window.addEventListener("message", function (event) {
            if (event.data == "pause") {
                document.getElementsByTagName('video')[0].pause();
            }
        }, false);
    }
    getCurrentVideoUrl() {
        currentVideoUrl = document.getElementsByTagName('video')[0].src;
        if (this.checkCurrentVideoUrl()) {
            window.parent.postMessage(currentVideoUrl, "*");
        }
    }
    checkCurrentVideoUrl() {
        return this.baseCheckCurrentVideoUrl();
    }
}

// 233动漫网
const DM233 = "www.dm233.me";

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
        this.checkCurrentVideoUrl();
    }
    getStartTime() {
        return this.getStartTimeByClassName("dplayer-ptime");
    }
    pauseCurrentVideo() {
        this.videoElement.pause();
    }
}

// 樱花动漫
const DMH8 = "www.dmh8.com";

class Dmh8Handler extends Handler {
    getCurrentVideoUrl() {
        let iframe = document.getElementsByTagName('iframe')[2];
        let videoUrl = iframe.src;
        let startIndex = videoUrl.indexOf('url=http') + 4;
        let endIndex = videoUrl.indexOf('m3u8') + 4;
        currentVideoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
        this.checkCurrentVideoUrl();
    }
    getStartTime() {
        return this.getStartTimeByClassName("dplayer-ptime");
    }
}

// 樱花动漫
const YHDMP = "www.yhdmp.net";

class YhdmpHandler extends Handler {
    constructor() {
        super();
        this.videoElement = null;
    }
    getCurrentVideoUrl() {
        let iframe = document.getElementById('yh_playfram');
        if (!iframe) {
            return;
        }
        this.videoElement = iframe.contentWindow.document.getElementsByTagName("video")[0];
        let videoUrl = iframe.src;
        let startIndex = videoUrl.indexOf('url=http') + 4;
        let endIndex = videoUrl.indexOf('&getplay_url=');
        currentVideoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
        this.checkCurrentVideoUrl();
    }
    getStartTime() {
        return this.getStartTimeByClassName("dplayer-ptime");
    }
    pauseCurrentVideo() {
        this.videoElement.pause();
    }
}

// 巴哈姆特
const GAMER = "ani.gamer.com.tw";
// 巴哈姆特 API
const GAMER_API = "https://ani.gamer.com.tw/ajax/m3u8.php";

class GamerHandler extends Handler {
    getCurrentVideoUrl() {
        let index = currentUrl.indexOf("sn=") + 3;
        if (index == -1) {
            return;
        }
        let sn = currentUrl.substring(index);
        index = sn.indexOf("&");
        if (index != -1) {
            sn = sn.substring(0, index);
        }
        let device = localStorage.ANIME_deviceid;
        // debug("sn: " + sn + ", device: " + device);
        $.ajax({
            type: "GET",
            url: GAMER_API + "?sn=" + sn + "&device=" + device,
            xhrFields: {
                withCredentials: true
            },
            success: function (res) {
                // debug(res);
                currentVideoUrl = JSON.parse(res).src;
                handler.checkCurrentVideoUrl();
            }
        })
    }
    getStartTime() {
        return this.getStartTimeByClassName("vjs-current-time-display");
    }
    getUrlProtocolLink() {
        let urlProtocol = new UrlProtocol;
        urlProtocol.appendStartTime();
        urlProtocol.appendTitle();
        urlProtocol.appendProxy();
        urlProtocol.append('--http-header-fields="origin: https://ani.gamer.com.tw"');
        return urlProtocol.getLink();
    }
}

// alist
const ALIST = "alist";

class AlistHandler extends Handler {
    getCurrentVideoUrl() {
        let videoElement = document.getElementsByTagName("video")[0];
        if (!videoElement) {
            return;
        }
        let src = videoElement.src;
        let index = src.indexOf("?");
        if (index != -1) {
            currentVideoUrl = src.substring(0, index + 1) + encodeURIComponent(src.substring(index + 1));
        } else {
            currentVideoUrl = src;
        }
        handler.checkCurrentVideoUrl();
    }
}

// 优质资源库
const HDZYK = "hdzyk.com, 1080zyk1.com, 1080zyk1.com, 1080zyk1.com, 1080zyk1.com, 1080zyk1.com";

class HdzykHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            this.checkCurrentVideoUrl();
            window.removeEventListener("message", () => { });
        }, false);
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[1].contentWindow.postMessage("pause", "https://" + ZYKBF);
    }
}

// 优质资源库实际播放地址
const ZYKBF = "vip.zykbf.com";

class ZykbfHandler extends Handler {
    constructor() {
        super();
        // 监听父页面暂停指令
        window.addEventListener("message", function (event) {
            if (event.data == "pause") {
                document.getElementsByTagName('video')[0].pause();
            }
        }, false);
    }
    getCurrentVideoUrl() {
        let startIndex = currentUrl.indexOf('url=http') + 4;
        let endIndex = currentUrl.indexOf('m3u8') + 4;
        currentVideoUrl = decodeURIComponent(currentUrl.substring(startIndex, endIndex));
        if (this.checkCurrentVideoUrl()) {
            window.parent.postMessage(currentVideoUrl, "*");
        }
    }
    checkCurrentVideoUrl() {
        return this.baseCheckCurrentVideoUrl();
    }
}

// 动漫之家
const KK151 = "www.kk151.com";

class Kk151Handler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            handler.checkCurrentVideoUrl();
            window.removeEventListener("message", () => { });
        }, false);
    }
}

// 动漫之家实际播放地址
const JXM3U8TV = "jx.m3u8.tv, jx.wolongzywcdn.com:65, www.m3u8.tv.cdn.8old.cn, jx.wujinkk.com, www.ikdmjx.com, hls.kuaibofang.com, jx.jxbdzyw.com";

class Jxm3u8tvHandler extends Handler {
    getCurrentVideoUrl() {
        let startIndex = currentUrl.indexOf('url=http') + 4;
        if (startIndex == 3) {
            startIndex = currentUrl.indexOf('url=%20http') + 7;
        }
        let endIndex = currentUrl.lastIndexOf('m3u8') + 4;
        currentVideoUrl = decodeURIComponent(currentUrl.substring(startIndex, endIndex));
        if (this.checkCurrentVideoUrl()) {
            window.top.postMessage(currentVideoUrl, "*");
        }
    }
    checkCurrentVideoUrl() {
        return this.baseCheckCurrentVideoUrl();
    }
}

// LIBVIO
const LIBVIO = "libvio.fun, www.libvio.me, libvio.me";

class LibvioHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            handler.checkCurrentVideoUrl();
            window.removeEventListener("message", () => { });
        }, false);
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.postMessage("pause", "https://" + LIBVIO_PLAYER);
    }
}

// LIBVIO 实际播放地址
const LIBVIO_PLAYER = "sh-data-s02.chinaeast2.cloudapp.chinacloudapi.cn, p.cfnode1.xyz";

class LibvioPlayerHandler extends Handler {
    constructor() {
        super();
        // 监听父页面暂停指令
        window.addEventListener("message", function (event) {
            if (event.data == "pause") {
                document.getElementsByTagName('video')[0].pause();
            }
        }, false);
    }
    getCurrentVideoUrl() {
        currentVideoUrl = urls;
        if (this.checkCurrentVideoUrl()) {
            window.top.postMessage(currentVideoUrl, "*");
        }
    }
    checkCurrentVideoUrl() {
        return this.baseCheckCurrentVideoUrl();
    }
}

// 哔嘀影视
const BDYS01 = "www.bdys01.com";

class Bdys01Handler extends Handler {
    getCurrentVideoUrl() {
        currentVideoUrl = document.getElementsByTagName("video")[0].src;
        this.checkCurrentVideoUrl();
    }
    getStartTime() {
        return this.getStartTimeByClassName("dplayer-ptime");
    }
}

// 无名小站
const BTNULL = "www.btnull.org";

class BtnullHandler extends Handler {
    getCurrentVideoUrl() {
        let html = document.documentElement.outerHTML;
        let index = html.indexOf("_BT.PC.player({url:'http") + 20;
        html = html.substring(index);
        index = html.indexOf("m3u8") + 4;
        currentVideoUrl = html.substring(0, index);
        handler.checkCurrentVideoUrl();
    }
}

// 片库
const PKMP4 = "www.pkmp4.com";

class Pkmp4Handler extends Handler {
    getCurrentVideoUrl() {
        currentVideoUrl = player_aaaa.url;
        handler.checkCurrentVideoUrl();
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.document.getElementsByTagName("video")[0].pause();
    }
}

// 最大尝试次数
const MAX_TRY_TIME = 8;
// 定时器
var timers;
// 当前页面链接
var currentUrl;
// 当前页面域名
var currentDomain;
// 当前页面视频链接
var currentVideoUrl;
// 当前页面音频链接
var currentAudioUrl;
// 巴哈姆特视频时长
var gamerDurationTime;

// 初始化当前页信息
function initCurrentPageInfo() {
    // debug("init current page info ......");
    document.getElementById(BUTTON_DIV).style.display = DISPLAY_NONE;
    if (timers) {
        for (let timer of timers) {
            // debug("clear timer");
            clearTimeout(timer);
        }
    }
    currentUrl = window.location.href;
    currentDomain = window.location.host;
    currentVideoUrl = "";
    ddrkPlayStatus = false;
}
// 创建处理器
function createHandler() {
    // debug("start create handler: " + currentDomain);
    if (BILIBILI.indexOf(currentDomain) != -1) {
        handler = new BilibiliHandler();
    } else if (BILIBILI_LIVE.indexOf(currentDomain) != -1) {
        handler = new BilibiliLiveHandler();
    } else if (DDRK.indexOf(currentDomain) != -1) {
        handler = new DdrkHandler();
    } else if (YOUTUBE.indexOf(currentDomain) != -1) {
        handler = new YoutubeHandler();
    } else if (DM6CC.indexOf(currentDomain) != -1) {
        handler = new Dm6ccHandler();
    } else if (DMLACC.indexOf(currentDomain) != -1) {
        handler = new DmlaccHandler();
    } else if (YHDMJX.indexOf(currentDomain) != -1) {
        handler = new YhdmjxHandler();
    } else if (DM233.indexOf(currentDomain) != -1) {
        handler = new Dm233Handler();
    } else if (DMH8.indexOf(currentDomain) != -1) {
        handler = new Dmh8Handler();
    } else if (YHDMP.indexOf(currentDomain) != -1) {
        handler = new YhdmpHandler();
    } else if (GAMER.indexOf(currentDomain) != -1) {
        handler = new GamerHandler();
    } else if (HDZYK.indexOf(currentDomain) != -1) {
        handler = new HdzykHandler();
    } else if (ZYKBF.indexOf(currentDomain) != -1) {
        handler = new ZykbfHandler();
    } else if (KK151.indexOf(currentDomain) != -1) {
        handler = new Kk151Handler();
    } else if (JXM3U8TV.indexOf(currentDomain) != -1) {
        handler = new Jxm3u8tvHandler();
    } else if (LIBVIO.indexOf(currentDomain) != -1) {
        handler = new LibvioHandler();
    } else if (LIBVIO_PLAYER.indexOf(currentDomain) != -1) {
        handler = new LibvioPlayerHandler();
    } else if (BDYS01.indexOf(currentDomain) != -1) {
        handler = new Bdys01Handler();
    } else if (BTNULL.indexOf(currentDomain) != -1) {
        handler = new BtnullHandler();
    } else if (PKMP4.indexOf(currentDomain) != -1) {
        handler = new Pkmp4Handler();
    } else {
        if (document.title.toLowerCase().indexOf(ALIST) != -1) {
            handler = new AlistHandler();
        }
    }
}
// 刷新视频链接
function refreshCurrentVideoUrl() {
    // debug("refresh current video url: " + currentVideoUrl);
    // debug("current url: " + currentUrl);
    timers = new Array();
    let tryTime = 0;
    while (tryTime < MAX_TRY_TIME) {
        timers[tryTime] = setTimeout(function () {
            if (!handler.checkCurrentVideoUrl()) {
                handler.getCurrentVideoUrl();
            }
            // debug("timer done");
        }, tryTime * 2000 + 700);
        tryTime = tryTime + 1;
    }
}
// 页面变更监听器
function pageChangeListener() {
    // debug("page change listener");
    let needRefresh = false;
    let newCurrentUrl = window.location.href;
    if (currentUrl != newCurrentUrl) {
        needRefresh = true;
    }
    // 巴哈姆特
    if (!needRefresh && GAMER.indexOf(currentDomain) != -1) {
        let oldGamerDurationTime = gamerDurationTime;
        let durationDiv = document.getElementsByClassName("vjs-duration-display")[0];
        if (durationDiv) {
            gamerDurationTime = durationDiv.innerHTML;
            if (oldGamerDurationTime && oldGamerDurationTime != gamerDurationTime) {
                needRefresh = true;
            }
        }
    }
    if (needRefresh) {
        // debug("page change");
        initCurrentPageInfo();
        refreshCurrentVideoUrl();
    }
}
// 初始化
function init() {
    console.log("Play-With-MPV ......");
    currentUrl = window.location.href;
    currentDomain = window.location.host;
    if (currentUrl.startsWith("https://live.bilibili.com/p/html/live-web-mng/index.html")) {
        console.log("排除页面：" + currentUrl);
    } else {
        // 创建处理器
        createHandler();
        if (handler) {
            // 添加组件和监听器
            appendHTML();
            appendCSS();
            addListener();

            // 初始化页面信息
            initCurrentPageInfo();
            // 刷新视频链接
            refreshCurrentVideoUrl();
            // 定时监听页面变化
            setInterval(pageChangeListener, 700);
        } else {
            console.log("create handler fail");
        }
    }
}
init();
