// ==UserScript==
// @name                    Play-With-MPV
// @name:zh                 使用 MPV 播放
// @description             使用 MPV 播放网页上的视频
// @namespace               https://github.com/LuckyPuppy514
// @version                 2.0.3
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
// @commit                  v2.0.0 代码重构：1. 新增对B站av号视频支持；2. B站，油管，低端影视同步网页播放时间；3. 新增MPV路径设置，方便生成注册表；4. 新增Youtube代理设置；5. 减少暂停失败情况；
// @commit                  v2.0.1 更新 mpv.net_CM 安装教程链接
// @commit                  v2.0.2 更新 www.6dm.cc 域名为 www.996dm.com
// @commit                  v2.0.3 B站接口变更，画质上限：4K => 8K HDR，音质上限：192K => Dolby Hi-Res
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
// @include                 https://www.996dm.com/play/*
// @include                 http://www.996dm.com/play/*
// @include                 http://www.dmlaa.com/play/*
// @include                 https://danmu.yhdmjx.com/*
// @include                 https://www.dm233.me/play/*
// @include                 http://www.dmh8.com/player/*
// @include                 https://www.yhdmp.net/vp/*
// @run-at                  document-end
// @require                 https://unpkg.com/js-base64@3.6.1/base64.js
// @require                 https://unpkg.com/jquery@3.2.1/dist/jquery.min.js
// @grant                   GM_setValue
// @grant                   GM_getValue
// ==/UserScript==

'use strict';

const REG_VERSION = "20220907";

// const IS_DEBUG = false;
const NO_TERMINAL = false;
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
            <td colspan="3" class="pwmpv-title-td">使用 MPV 播放网页中的视频（解码 ⬆️ 补帧 ✅ 着色器 ✅ 更多💡）</td>
        </tr>
        <tr>
            <td><a href="https://github.com/LuckyPuppy514/Play-With-MPV#%E4%BD%BF%E7%94%A8-mpv-%E6%92%AD%E6%94%BE%E7%BD%91%E9%A1%B5%E4%B8%AD%E7%9A%84%E8%A7%86%E9%A2%91" target="_blank">🔗 支持网址 🔗</a></td>
            <td colspan="2">
                <a href="https://www.bilibili.com/" target="_blank"><img class="pwmpv-support-url-icon" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/bilibili.ico"/></a>
                <a href="https://ddys2.me/" target="_blank"><img class="pwmpv-support-url-icon-small" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/ddrk.webp"/></a>
                <a href="https://www.youtube.com/" target="_blank"><img class="pwmpv-support-url-icon" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/youtube.png"/></a>
                <a href="https://www.996dm.com/" target="_blank"><img class="pwmpv-support-url-icon" style="width: 80px;" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/logo_f.png"/></a>
                <a href="http://www.dmlaa.com/" target="_blank"><img class="pwmpv-support-url-icon-small" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/fengchedongman.jpg"/></a>
                <a href="https://www.dm233.me/" target="_blank"><img class="pwmpv-support-url-icon-small" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/dm233.ico"/></a>
                <a href="https://github.com/LuckyPuppy514/Play-With-MPV#%E4%BD%BF%E7%94%A8-mpv-%E6%92%AD%E6%94%BE%E7%BD%91%E9%A1%B5%E4%B8%AD%E7%9A%84%E8%A7%86%E9%A2%91" target="_blank">......</a>
            </td>
        </tr>
        <tr>
            <td><a href="https://www.lckp.top/archives/mpvnetcm">🤖 软件安装 🤖</a></td>
            <td>
                <a href="https://www.lckp.top/archives/mpvnetcm"><img class="pwmpv-support-url-icon" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/mpvnet.png" /></a>
            </td>
            <td>
                <a href="https://www.lckp.top/archives/mpv-lazy"><img class="pwmpv-support-url-icon-large" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/mpv.png" /></a>
            </td>
        </tr>
        <tr>
            <td><a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank">🆕 版本更新 🆕</a></td>
            <td><a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank">🐳 项目源码 🐳</a></td>
            <td><a href="https://github.com/LuckyPuppy514/Play-With-MPV/issues/new" target="_blank">👻 问题反馈 👻</a></td>
        </tr>
    </table>
    <span class="pwmpv-footer-span">
        <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank"><img class="pwmpv-footer-icon" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/tampermonkey.png"/></a>
        <a href="https://www.lckp.top" target="_blank">2022 © LuckyPuppy514</a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank"><img class="pwmpv-footer-icon" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/github.png"/></a>
    </span>
</div>

<div id="pwmpv-setting-div">
    <span class="pwmpv-title-span">🌟 Play-With-MPV 设置 🌟 <button class="pwmpv-close-button">❌</button></span>
    <table id="pwmpv-setting-table">
        <tr>
            <td class="pwmpv-title-td">🔥 MPV路径 🔥</td>
            <td><input id="mpv-path-input" type=text placeholder="请输入你的 mpv.com 路径，例如：D:\\daily\\mpv\\mpv.com"></td>
        </tr>
        <tr>
            <td colspan="2" class="pwmpv-tips-td">🩸 如果使用 v2rayN 或 Clash 客户端科学上网，要看油管需要手动添加代理设置 🩸</td>
        </tr>
        <tr>
            <td class="pwmpv-title-td">🌐 代理设置 🌐</td>
            <td><input id="proxy-input" type=text placeholder="请输入你的 http 或 socks 代理，例如：http://127.0.0.1:10809"></td>
        </tr>
        <tr>
            <td class="pwmpv-title-td">📺 B站编码 📺</td>
            <td>
                <select id="pwmpv-bilibili-codecs-select">
                    <option value="12" selected>HEVC 体积中，硬件要求中，网络要求中</option>
                    <option value="13">AV1 体积小，硬件要求高，网络要求低</option>
                    <option value="7">AVC 体积大，硬件要求低，网络要求高</option>
                </select>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <button id="pwmpv-save-button">保存设置</button>
                <button id="download-button" data-tip="请先输入 MPV 路径，并保存设置">下载注册表</button>
            </td>
        </tr>
    </table>
    <span class="pwmpv-footer-span">
        <a href="https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv" target="_blank"><img class="pwmpv-footer-icon" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/tampermonkey.png"/></a>
        <a href="https://www.lckp.top" target="_blank">2022 © LuckyPuppy514</a>
        <a href="https://github.com/LuckyPuppy514/Play-With-MPV" target="_blank"><img class="pwmpv-footer-icon" src="https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/github.png"/></a>
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
}
.pwmpv-close-button:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
#pwmpv-button-div {
    display: none;
}
.pwmpv-title-span {
    padding-top: 10px;
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
    background-image: url(https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/about-pink.png);
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
    height: 300px;
    border: 6px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(234, 122, 153, 0.9);
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
}
#pwmpv-about-div a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-size: 14px;
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
    background-image: url(https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/mpvnet.png);
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
    background-image: url(https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/lx-setting.png);    
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
    height: 300px;
    border: 6px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(65, 146, 247, 0.9);
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
    text-align: center;
    padding: 10px;
}
#pwmpv-setting-table td {
    border: 0px solid rgba(255, 255, 255, 0.5);
    padding-top: 10px;
}
.pwmpv-title-td{
    width: 120px;
    height: 30px;
    border: none;
    font-size: 14px;
}
#pwmpv-setting-table input {
    width: 400px;
    height: 30px;
    border: none;
    outline: none;
    padding-left: 6px;
    border-radius: 3px;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 0.9);
}
#pwmpv-bilibili-codecs-select {
    width: 406px;
    height: 30px;
    border: none;
    outline: none;
    padding-left: 6px;
    border-radius: 3px;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 0.9);
}
#pwmpv-save-button {
    margin-left: 80px;
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
    margin-left: 10px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 255, 50, 0.6);
    
}
.pwmpv-download-disable {
    margin-left: 10px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.5);
}
.pwmpv-tips-td {
    color: rgba(255, 0, 0, 1);
    font-size: 14px;
    font-weight: bold;
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
@="cmd /V:ON /C \\"FOR /F \\"tokens=* USEBACKQ\\" %%F IN (\`powershell -command \\"Add-Type -AssemblyName System.Web;[System.Web.HTTPUtility]::UrlDecode('%1')\\"\`) DO (SET param=%%F) & SET param=!param:mpv://=! & start /min MPV_PATH !param!\\""
`

// element id
const BUTTON_DIV = "pwmpv-button-div";
const ABOUT_BUTTON_ID = "pwmpv-about-button";
const ABOUT_DIV_ID = "pwmpv-about-div";
const PLAY_BUTTON_ID = "pwmpv-play-button";
const SETTING_BUTTON_ID = "pwmpv-setting-button";
const SETTING_DIV_ID = "pwmpv-setting-div";
const MPV_PATH_INPUT_ID = "mpv-path-input";
const PROXY_INPUT_ID = "proxy-input";
const BILIBILI_CODECS_SELECT_ID = "pwmpv-bilibili-codecs-select";
const SAVE_BUTTON_ID = "pwmpv-save-button";
const DOWNLOAD_BUTTON_ID = "download-button";
const FIREFOX_IFRAME = "firefox-iframe";
// display
const DISPLAY_NONE = "none";
const DISPLAY_FLEX = "flex";
// GM value key
const KEY_MPV_PATH = "MPV_PATH";
const KEY_PROXY = "PROXY";
const KEY_REG_VERSION = "REG_VERSION";
const KEY_BILIBILI_CODECS = "BILIBILI_CODECS";
const BILIBILI_CODECS_HEVC = "12";

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
function addListener() {
    // 关于
    var aboutButton = document.getElementById(ABOUT_BUTTON_ID);
    var aboutDiv = document.getElementById(ABOUT_DIV_ID);
    aboutButton.onclick = function () {
        if (aboutDiv.style.display == DISPLAY_NONE) {
            aboutDiv.style.display = DISPLAY_FLEX;
            settingDiv.style.display = DISPLAY_NONE;
        } else {
            aboutDiv.style.display = DISPLAY_NONE;
        }
    };

    // 播放
    var playButton = document.getElementById(PLAY_BUTTON_ID);
    playButton.onclick = function () {
        handler.playCurrentVideoWithMPV();
    }

    // 设置
    var settingButton = document.getElementById(SETTING_BUTTON_ID);
    var bilibiliCodecsSelect = document.getElementById(BILIBILI_CODECS_SELECT_ID);
    var saveButton = document.getElementById(SAVE_BUTTON_ID);
    var downloadButton = document.getElementById(DOWNLOAD_BUTTON_ID);
    var settingDiv = document.getElementById(SETTING_DIV_ID);
    var mpvPathInput = document.getElementById(MPV_PATH_INPUT_ID);
    var proxyInput = document.getElementById(PROXY_INPUT_ID);
    settingButton.onclick = function () {
        if (settingDiv.style.display == DISPLAY_NONE) {
            showSettingDiv();
            aboutDiv.style.display = DISPLAY_NONE;
        } else {
            settingDiv.style.display = DISPLAY_NONE;
        }
    };
    bilibiliCodecs = GM_getValue(KEY_BILIBILI_CODECS);
    if (!bilibiliCodecs){
        bilibiliCodecs = BILIBILI_CODECS_HEVC;
        GM_setValue(KEY_BILIBILI_CODECS, bilibiliCodecs);
    }
    bilibiliCodecsSelect.onchange = function(){
        bilibiliCodecs = this.value;
        Toast("💡 保存设置后，请刷新当前页面以更新编码 💡", 1500);
    };
    saveButton.onclick = function () {
        let oldMpvPath = GM_getValue(KEY_MPV_PATH);
        let mpvPath = mpvPathInput.value;
        let proxy = proxyInput.value;
        if (!mpvPath) {
            downloadButton.className = "pwmpv-download-disable";
            Toast("⚠️ MPV路径不能为空 ⚠️", 1500);
            return;
        }
        if (/.*[\u4e00-\u9fa5]+.*$/.test(mpvPath)) {
            downloadButton.className = "pwmpv-download-disable";
            Toast("⚠️ MPV路径不能包含中文 ⚠️", 1500)
            return;
        }
        mpvPath = mpvPath.replaceAll("/", "\\");
        mpvPath = mpvPath.replaceAll("\\\\", "\\");
        mpvPath = mpvPath.replaceAll("\\", "\\\\");
        GM_setValue(KEY_MPV_PATH, mpvPath);
        GM_setValue(KEY_PROXY, proxy);
        GM_setValue(KEY_BILIBILI_CODECS, bilibiliCodecs);
        // debug(proxy);
        downloadButton.className = "pwmpv-download-enable";
        if (oldMpvPath != mpvPath) {
            Toast("🔥 请重新添加注册表信息 🔥", 2500);
            downloadButton.click();
        } else {
            Toast("✅  保存成功  ✅", 1500);
        }
    };
    downloadButton.onclick = function () {
        generateRegFile();
    }
    var closeButtons = document.getElementsByClassName("pwmpv-close-button");
    for (let closeButton of closeButtons) {
        closeButton.onclick = function () {
            aboutDiv.style.display = DISPLAY_NONE;
            settingDiv.style.display = DISPLAY_NONE;
        }
    }
}
// 显示设置窗口
function showSettingDiv() {
    var downloadButton = document.getElementById(DOWNLOAD_BUTTON_ID);
    var settingDiv = document.getElementById(SETTING_DIV_ID);
    var bilibiliCodecsSelect = document.getElementById(BILIBILI_CODECS_SELECT_ID);
    var mpvPathInput = document.getElementById(MPV_PATH_INPUT_ID);
    var proxyInput = document.getElementById(PROXY_INPUT_ID);
    let mpvPath = GM_getValue(KEY_MPV_PATH);
    let proxy = GM_getValue(KEY_PROXY);
    bilibiliCodecs = GM_getValue(KEY_BILIBILI_CODECS);
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
    settingDiv.style.display = DISPLAY_FLEX;
}

// 显示消息
function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 15%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0, 0.6);font-size: 14px;";
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.opacity = '0';
        setTimeout(function () { document.body.removeChild(m) }, d * 1000);
    }, duration);
}

// domain
const YOUTUBE = "www.youtube.com";
const BILIBILI = "www.bilibili.com";
const DDRK = "ddys.tv, ddys2.me";
const DM6CC = "www.6dm.cc, www.996dm.com";
const DMLACC = "www.dmlaa.com";
const YHDMJX = "danmu.yhdmjx.com";
const DM233 = "www.dm233.me";
const DMH8 = "www.dmh8.com";
const YHDMP = "www.yhdmp.net";

// api
const BILIBILI_API = 'https://api.bilibili.com'

// mpv urlprotocol
const MPV_URLPROTOCOL = "mpv://";

// try time
const MAX_TRY_TIME = 3;
var tryTime;
var timers;

// current page info
var currentUrl;
var currentDomain;
var currentVideoUrl;
var currentAudioUrl;

// video url handler
var handler;

var ddrkPlayStatus;
var bilibiliCid;

// 通过 URLProtocol 调用 mpv 播放
function playWithMPV(protocolLink) {
    let regVersion = GM_getValue(KEY_REG_VERSION);
    if (!regVersion || regVersion != REG_VERSION) {
        showSettingDiv();
        Toast("🆕 注册表配置有更新，请重新下载并添加注册表信息 🆕");
        return;
    }
    window.open(protocolLink, "_self");
}
// 生成注册表信息
function generateRegFile() {
    var a = document.createElement('a');
    var blob = new Blob([REG.replace(KEY_MPV_PATH, GM_getValue(KEY_MPV_PATH))], { 'type': 'application/octet-stream' });
    a.href = window.URL.createObjectURL(blob);
    a.download = "mpv.reg";
    a.click();
    GM_setValue(KEY_REG_VERSION, REG_VERSION);
}

class Handler {
    // 获取当前视频链接
    getCurrentVideoUrl() { }
    // 获取开始时间
    getStartTime() {
        return null;
    }
    // 调用 MPV 播放
    playCurrentVideoWithMPV() {
        // 携带视频链接
        let protocolLink = MPV_URLPROTOCOL + '"' + currentVideoUrl + '"';
        // 开始时间，如果 mpv 开启了退出时记住播放状态，则记住状态优先级更高
        let startTime = handler.getStartTime();
        if (startTime) {
            protocolLink = protocolLink + ' --ss="' + startTime + '"';
        }
        // 禁用命令行输出及控制
        if (NO_TERMINAL) {
            protocolLink = protocolLink + ' --no-terminal';
        }
        // B站
        if (BILIBILI.indexOf(currentDomain) != -1) {
            // 音频链接
            protocolLink = protocolLink + ' --audio-file="' + currentAudioUrl + '"';
            // 请求头
            protocolLink = protocolLink + ' --http-header-fields=referer:"' + currentUrl + ',user-agent:' + navigator.userAgent + '"';
            // cid（支持弹幕）
            protocolLink = protocolLink + ' --script-opts="cid=' + bilibiliCid + '"';
        }
        if (YOUTUBE.indexOf(currentDomain) != -1) {
            // 油管代理
            let proxy = GM_getValue(KEY_PROXY);
            if(proxy) {
                protocolLink = protocolLink + ' --http-proxy=' + proxy + ' --ytdl-raw-options=proxy=[' + proxy + ']';
            }
        } else {
            // 携带标题
            let maxLength = 1900 - protocolLink.length;
            let title = encodeURIComponent(document.title);
            if (title.length > maxLength) {
                title = title.substring(0, maxLength) + '...';
            }
            protocolLink = protocolLink + ' --force-media-title="' + title + '"';
        }
        playWithMPV(protocolLink);
        this.pauseCurrentVideo();
    }
    // 暂停网页视频
    pauseCurrentVideo() {
        let i = 0;
        while (i < MAX_TRY_TIME) {
            i++;
            setTimeout(function () {
                document.getElementsByTagName("video")[0].pause();
            }, 2000 * i);
        }
    }
}
// 油管
class YoutubeHandler extends Handler {
    getStartTime() {
        let startTimeElements = document.getElementsByClassName("ytp-time-current");
        if (startTimeElements) {
            let length = startTimeElements.length;
            if (length > 0 && startTimeElements[length - 1]) {
                return startTimeElements[length - 1].innerHTML;
            }
        }
        return null;
    }
    getCurrentVideoUrl() {
        currentVideoUrl = currentUrl;
        checkCurrentVideoUrl();
    }
}
// B站
class BilibiliHandler extends Handler {
    getStartTime() {
        let startTimeElement = document.getElementsByClassName("bpx-player-ctrl-time-current")[0];
        if (!startTimeElement) {
            startTimeElement = document.getElementsByClassName("squirtle-video-time-now")[0];
        }
        if (startTimeElement) {
            return startTimeElement.innerHTML;
        }
        return null;
    }
    getCurrentVideoUrl() {
        // 投稿视频
        let index = currentUrl.indexOf('/video/');
        if (index != -1) {
            let param = "";
            let videoId = currentUrl.substring(index + 7);
            if (videoId.startsWith("BV")) {
                param = "bvid=" + videoId.substring(2, 12);
            } else if (videoId.startsWith("av")) {
                param = "aid=" + videoId.substring(2, 10);
            } else {
                // debug("bilibili video id invalid: " + videoId);
                return;
            }
            // debug("bilibili video id: " + param);
            this.getBilibiliVideoUrl(param);
            return;
        }

        // 番剧
        let aElement = document.getElementsByClassName('ep-item cursor visited')[0];
        if (!aElement) {
            aElement = document.getElementsByClassName('ep-item cursor')[0];
        }
        let epid = aElement.getElementsByTagName('a')[0].href;
        epid = epid.substring(epid.indexOf('/ep') + 3);
        epid = epid.substring(0, epid.indexOf('/'));
        // debug('epid: ' + epid);

        let eno = document.getElementsByClassName("ep-list-progress")[0];
        if (!eno) {
            return;
        }
        eno = eno.innerHTML;
        eno = eno.substring(0, eno.indexOf('/'));
        // debug('eno: ' + eno);
        this.getBilibiliBangumiUrl(epid, eno);
    }
    // 获取B站投稿视频链接
    getBilibiliVideoUrl(param) {
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
    getBilibiliBangumiUrl(epid, eno) {
        if (!epid || !eno) {
            return;
        }
        $.ajax({
            type: "GET",
            url: BILIBILI_API + "/pgc/view/web/season?ep_id=" + epid,
            xhrFields: {
                withCredentials: true
            },
            success: function (res) {
                // debug("get acid and cid by epid result: ");
                // debug(res);
                let episodes = res.result.episodes;
                if (eno.indexOf('PV') != -1 || eno.indexOf('OP') != -1 || eno.indexOf('ED') != -1) {
                    return;
                }
                let episode = episodes[eno - 1];
                getBilibiliPlayUrl(episode.aid, episode.cid);
            }
        })
    }
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
            let dolby = dash.dolby;
            if (dolby) {
                // debug("dolby: on");
                currentAudioUrl = dolby.audio[0].base_url;
            } else {
                // debug(dash.audio[0].id);
                currentAudioUrl = dash.audio[0].baseUrl;
            }
            let baseUrl = dash.video[0].baseUrl;
            let id = dash.video[0].id;
            let i = 1;
            while(i < dash.video.length){
                if(dash.video[i].id != id) {
                    break;
                }
                if(dash.video[i].codecid == bilibiliCodecs){
                    baseUrl = dash.video[i].baseUrl;
                    break;
                }
                i++;
            }
            currentVideoUrl = baseUrl;
            checkCurrentVideoUrl();
        }
    });
}
// 低端影视
class DdrkHandler extends Handler {
    getStartTime() {
        let startTimeElements = document.getElementsByClassName("vjs-time-tooltip");
        if (startTimeElements) {
            let length = startTimeElements.length;
            if (length > 0 && startTimeElements[length - 1]) {
                return startTimeElements[length - 1].innerHTML;
            }
        }
        return null;
    }
    getCurrentVideoUrl() {
        // 点击播放按钮加载 video 元素
        if (ddrkPlayStatus == 0) {
            let ddrkPlayButton = document.getElementsByClassName('vjs-big-play-button')[0];
            if (!ddrkPlayButton) {
                // debug("ddrk get play button fail");
                return;
            }
            ddrkPlayButton.click();
            ddrkPlayStatus = 1;
        }
        currentVideoUrl = document.getElementById('vjsp_html5_api').src;
        checkCurrentVideoUrl();
    }
}
// dm6cc 樱花动漫网
class Dm6ccHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            checkCurrentVideoUrl();
            window.removeEventListener("message", () => { });
        }, false);
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.postMessage("pause", "https://" + YHDMJX);
    }
}
// 风车动漫
class DmlaccHandler extends Handler {
    constructor() {
        super();
        window.addEventListener('message', function (event) {
            currentVideoUrl = event.data;
            checkCurrentVideoUrl();
            window.removeEventListener("message", () => { });
        }, false);
    }
    pauseCurrentVideo() {
        document.getElementsByTagName("iframe")[2].contentWindow.postMessage("pause", "https://" + YHDMJX);
    }
}
class YhdmjxHandler extends Handler {
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
        // 发送视频链接到父页面（DmlaccHandler/DmlaccHandler）
        currentVideoUrl = document.getElementsByTagName('video')[0].src;
        if (checkCurrentVideoUrl()) {
            window.parent.postMessage(currentVideoUrl, "*");
        }
    }
}
// 233动漫网
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
        checkCurrentVideoUrl();
    }
    pauseCurrentVideo() {
        this.videoElement.pause();
    }
}
// 樱花动漫
class Dmh8Handler extends Handler {
    getCurrentVideoUrl() {
        let iframe = document.getElementsByTagName('iframe')[2];
        let videoUrl = iframe.src;
        let startIndex = videoUrl.indexOf('url=http') + 4;
        let endIndex = videoUrl.indexOf('m3u8') + 4;
        currentVideoUrl = decodeURIComponent(videoUrl.substring(startIndex, endIndex));
        checkCurrentVideoUrl();
    }
}
// 樱花动漫
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
        checkCurrentVideoUrl();
    }
    pauseCurrentVideo() {
        this.videoElement.pause();
    }
}

// 校验视频链接是否有效
function checkCurrentVideoUrl() {
    if (!currentVideoUrl || !currentVideoUrl.startsWith("http")) {
        // debug("current video url is invalid: " + currentVideoUrl);
        return false;
    }
    if (YOUTUBE.indexOf(currentDomain) != -1) {
        if (currentUrl.indexOf("/watch") == -1 && currentUrl.indexOf("/playlist") == -1) {
            // debug("not /watch|/playlist: " + currentUrl);
            return false;
        }
    }
    // yun.66dm.net 无法播放
    if (currentVideoUrl.indexOf("yun.66dm.net") != -1) {
        // debug("yun.66dm.net: " + currentVideoUrl);
        return false;
    }
    // debug("current video url: " + currentVideoUrl);
    if (YHDMJX.indexOf(currentDomain) == -1) {
        document.getElementById(BUTTON_DIV).style.display = DISPLAY_FLEX;
    }
    return true;
}
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
    ddrkPlayStatus = 0;
    tryTime = 0;
}
// 创建处理器
function createHandler() {
    // debug("start create handler: " + currentDomain);
    if (BILIBILI.indexOf(currentDomain) != -1) {
        handler = new BilibiliHandler();
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
    }
}
// 页面变更监听器
function pageChangeListener() {
    let newCurrentUrl = window.location.href;
    if (currentUrl != newCurrentUrl) {
        initCurrentPageInfo();
        refreshCurrentVideoUrl();
    }
}
// 刷新视频链接
function refreshCurrentVideoUrl() {
    // debug("refresh current video url: " + currentVideoUrl);
    // debug("current url: " + currentUrl);
    timers = new Array();
    while (tryTime < MAX_TRY_TIME) {
        timers[tryTime] = setTimeout(function () {
            if (!checkCurrentVideoUrl()) {
                handler.getCurrentVideoUrl();
            }
            // debug("timer done");
        }, tryTime * 2000 + 700);
        tryTime = tryTime + 1;
    }
}
// 初始化
function init() {
    // 添加组件和监听器
    appendHTML();
    appendCSS();
    addListener();

    // 初始化页面信息
    initCurrentPageInfo();
    // 创建处理器
    createHandler();
    // 刷新视频链接
    refreshCurrentVideoUrl();
    // 定时监听页面变化
    setInterval(pageChangeListener, 700);
}

// 初始化
init();