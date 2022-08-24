# 使用 MPV 播放网页中的视频

支持的系统：Windows
支持浏览器：Edge, Chrome, Firefox, 360极速浏览器X 等

| 支持网址 | 支持率 | 说明 |
| :---: | :---: | :---: |
| [www.bilibili.com/video](https://www.bilibili.com) | 🤗 绝大部分 🤗 | B站普通视频 |
| [www.bilibili.com/bangumi](https://www.bilibili.com) | 🤗 绝大部分 🤗 | B站番剧 |
| [ddys.tv](https://ddys.tv) | 🤗 绝大部分 🤗 | 低端影视 |
| [www.youtube.com](https://www.youtube.com) | 🤗 绝大部分 🤗 | 油管非会员视频 |
| [app.plex.tv](https://app.plex.tv) | 🤗 绝大部分 🤗 | PLEX |
| [www.dmla.cc](http://www.dmla.cc) | 🙂 大部分 🙂 | 风车动漫 |
| [www.dm233.me](https://www.dm233.me) | 🙂 大部分 🙂 | 233动漫网 |
| [www.dmh8.com](http://www.dmh8.com) | 😢 小部分 😢 | 樱花动漫 |
| [www.yhdmp.net](https://www.yhdmp.net) | 😢 小部分 😢 | 樱花动漫 |

## 内容列表

- [使用 MPV 播放网页中的视频](#使用-mpv-播放网页中的视频)
  - [内容列表](#内容列表)
  - [背景](#背景)
    - [特别感谢](#特别感谢)
  - [安装](#安装)
    - [1. 安装 mpv 或 mpv-lazy](#1-安装-mpv-或-mpv-lazy)
    - [2. 安装油猴插件](#2-安装油猴插件)
    - [3. 安装 Play-With-MPV 油猴脚本](#3-安装-play-with-mpv-油猴脚本)
    - [4. 添加注册表信息](#4-添加注册表信息)
  - [效果展示](#效果展示)
  - [徽章](#徽章)
  - [相关仓库](#相关仓库)
  - [维护者](#维护者)
  - [如何贡献](#如何贡献)
  - [使用许可](#使用许可)

## 背景

最近在使用 MPV + Anime4K 播放动漫，效果显著，但是每次都需要下载播放比较麻烦，所以找了不少插件或脚本，但是不太适合自己，所以自己写了这个项目

### 特别感谢

使用过的插件或脚本：

1. 谷歌插件：[ff2mpv](https://github.com/woodruffw/ff2mpv)

> 支持 youtube，其他不清楚，应该是支持 youtube-dl 的网站都可以
> 安装过程很详细，要仔细安装，但是我只有 youtube 能用上 🤣

2. 油猴脚本：[play-with-mpv](https://greasyfork.org/zh-CN/scripts/416271-play-with-mpv)
支持：
clips.twitch.tv
www.bilibili.com/video
www.youtube.com
m.youtube.com

> 安装了没用上，主要不支持b站番剧/bangumi，难受 🤣

3. 油猴脚本：[Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved) + [playwithmpv](https://github.com/videoanywhere/playwithmpv)

> 一开始在用的版本，就是要点几次按钮，稍微有点麻烦，教程可以参看我的 [B站视频](https://www.bilibili.com/video/BV1zY41137uX)

这几个项目大概思路

```text
ff2mpv 和 play-with-mpv
1. 通过谷歌插件或油猴脚本获取当前网页链接
2. 通过自定义 URL Protocol 调用脚本（py，ps1等）解析参数
3. 通过脚本（py，ps1等）调用 MPV 播放

但是许多网址无法直接通过 MPV + yt-dlp 解析播放

Bilibili-Evolved + playwithmpv
1. 通过B站接口获取 flv地址
2. 通过 playwithmpv 服务，传递 flv地址给 mpv 进行播放

点击功能-选集-开始播放-播放，稍微有点麻烦 🤣，这个是写这个项目的原因之一
```

本项目思路结合以上方式，以及通过抓取视频地址，添加了一些自己常用的网址

```text
1. 通过油猴脚本抓取网页视频 mp4，m3u8，flv 等真实地址，其中：
   a. youtube 直接获取当前网页地址，通过 yt-dlp 解析
   b. bilibili 通过B站 api 获取视频 flv地址
   c. ddys.tv，www.dmla.cc，www.dm233.me 等抓取网页中的视频链接

2. 通过自定义 URL Protocol 调用 MPV 播放视频
```

## 安装

### 1. 安装 mpv 或 mpv-lazy

- 选项一：[🌟 mpv](https://github.com/mpv-player/mpv) + [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- 选项二：[🌟🌟 mpv-lazy](https://www.bilibili.com/read/cv16736410)

### 2. 安装油猴插件

- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)  
- [Google Chrome](https://chrome.google.com/extensions/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
- [360极速浏览器X](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
- [其他 Chromium 内核浏览器](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

### 3. 安装 Play-With-MPV 油猴脚本

- [Play-With-MPV](https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv)

### 4. 添加注册表信息

```text
Windows Registry Editor Version 5.00  
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001

[HKEY_CLASSES_ROOT\PlayWithMPV]
@="PlayWithMPV Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\PlayWithMPV\DefaultIcon]
@=""

[HKEY_CLASSES_ROOT\PlayWithMPV\shell]
@=""

[HKEY_CLASSES_ROOT\PlayWithMPV\shell\open]
@=""

[HKEY_CLASSES_ROOT\PlayWithMPV\shell\open\command]
@="cmd /min /V:ON /C \"SET param=\"%1\" & SET param=!param:%%20= ! & SET param=!param:%%22=^\"! & SET param=!param:^\"playwithmpv://=! & D:\\daily\\mpv-lazy\\mpv.com !param:^\"^\"=^\"!\""
```

复制上面的注册表信息，粘贴到记事本，修改最后一行中的

```text
D:\\daily\\mpv-lazy\\mpv.com
```

为你的 mpv 路径，保存为 playwithmpv.reg，双击 playwithmpv.reg 添加到注册表即可

## 效果展示

![work_on_bilibili_video_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/work_on_bilibili_video_tuya.jpg)

![work_on_bilibili_bangumi_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/work_on_bilibili_bangumi_tuya.jpg)

![work_on_ddrk_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/work_on_ddrk_tuya.jpg)

![work_on_youtube_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/work_on_youtube_tuya.jpg)

![work_on_plex_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/work_on_plex_tuya.jpg)

![work_on_6dmcc_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/work_on_6dmcc_tuya.jpg)

![work_on_dm233_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/work_on_dm233_tuya.jpg)

## 徽章

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 相关仓库

- [mpv](https://github.com/mpv-player/mpv) — mpv播放器。
- [mpv-lazy](https://github.com/hooke007/MPV_lazy) — mpv播放器懒人版。
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) — 视频下载。
- [ff2mpv](https://github.com/woodruffw/ff2mpv) — 谷歌 MPV 插件。
- [Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved) - B站增强脚本
- [playwithmpv](https://github.com/videoanywhere/playwithmpv) — B站增强脚本 MPV 播放插件
- [Anime4K](https://github.com/bloc97/Anime4K) — 动漫画质增强
- [Glsl_Running_Mode_Cache](https://github.com/LuckyPuppy514/MPV_Glsl_Running_Mode_Cache) — MPV 着色器运行模式缓存

## 维护者

[@LuckyPuppy514](https://github.com/LuckyPuppy514)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/LuckyPuppy514/Play-With-MPV/issues/new) 或者提交一个 Pull Request。

## 使用许可

[MIT](https://github.com/LuckyPuppy514/Play-With-MPV/blob/main/LICENSE) © LuckyPuppy514
