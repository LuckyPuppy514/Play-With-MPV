# Play-With-MPV

- [Play-With-MPV](#play-with-mpv)
  - [🌟 简介](#-简介)
  - [🐳 安装](#-安装)
    - [1. 💡 安装 mpv](#1--安装-mpv)
    - [2. 🐵 安装油猴插件](#2--安装油猴插件)
    - [3. 📺 安装油猴脚本](#3--安装油猴脚本)
    - [4. ⚙️ 设置](#4-️-设置)
  - [✅ 效果展示](#-效果展示)
  - [👏 相关仓库](#-相关仓库)
  - [👏 特别感谢](#-特别感谢)
  - [😘 如何贡献](#-如何贡献)
  - [🃏 使用许可](#-使用许可)

## 🌟 简介

使用 MPV 播放网页中的视频

- 支持的系统：Windows
- 支持浏览器：Edge, Chrome, Firefox, 360极速浏览器X 等

![20221019063400](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/20221019063400.png)

| 网站名称 | 网址 | 支持率 | 资源 | 画质 | 是否需要代理 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| B站 | [www.bilibili.com](https://www.bilibili.com) | 🤗 绝大部分 🤗 | 投稿，番剧，电影，电视剧，直播 | 高 | 否 |
| 低端影视 | [ddys.tv](https://ddys2.me) | 🤗 绝大部分 🤗 | 电影，电视剧，动漫 | 高 | 否 |
| Youtube | [www.youtube.com](https://www.youtube.com) | 🤗 绝大部分 🤗 | 投稿，电视剧，电影，动漫 | 高 | 是 |
| 巴哈姆特 | [ani.gamer.com.tw](https://ani.gamer.com.tw) | 🤗 绝大部分 🤗 | 动漫 | 高 | 是 |
| LIBVIO | [libvio.fun](https://libvio.fun) | 🤗 绝大部分 🤗 | 电影，电视剧，动漫 | 高 | 否 |
| 樱花动漫 | [www.6dm.cc](https://www.996dm.com/) | 🤗 绝大部分 🤗 | 动漫 | 高 | 否 |
| 动漫之家 | [www.kk151.com](https://www.kk151.com) | 🤗 绝大部分 🤗 | 动漫，电视剧，综艺 | 中 | 否 |
| 优质资源库 | [hdzyk.com](https://hdzyk.com) | 🤗 绝大部分 🤗 | 电影，电视剧，综艺，动漫 | 低 | 否 |
| Alist | [alist.nn.ci](https://github.com/alist-org/alist) | 🤗 绝大部分 🤗 | Alist 网盘视频 | - | 否 |
| 无名小站 | [www.btnull.org](https://www.btnull.org) | 🤗 大部分 🤗 | 电影，电视剧，动漫 | 高 | 否 |
| 哔嘀影视 | [www.bdys01.com](https://www.bdys01.com) | 🤗 大部分 🤗 | 电影，电视剧，动漫，综艺 | 高 | 否 |
| 风车动漫 | [www.dmla.cc](http://www.dmla.cc) | 🙂 第一线路 🙂 | 动漫 | 高 | 否 |
| 233动漫网 | [www.dm233.me](https://www.dm233.me) | 🙂 线路Ⅲ 🙂 | 动漫 | 中 | 否 |
| 樱花动漫 | [www.dmh8.com](http://www.dmh8.com) | 😢 小部分 😢 | 动漫 | 中 | 否 |
| 樱花动漫 | [www.yhdmp.net](https://www.yhdmp.net) | 😢 小部分 😢 | 动漫 | 中 | 否 |

## 🐳 安装

### 1. 💡 安装 mpv

- 选项一：[🌟 mpv](https://github.com/mpv-player/mpv) + [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- 选项二：[🌟🌟 mpv-lazy](https://www.lckp.top/archives/mpv-lazy)
- 选项三：[🌟🌟🌟 mpv.net_CM](https://www.lckp.top/archives/mpvnetcm)

### 2. 🐵 安装油猴插件

- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)  
- [Google Chrome](https://chrome.google.com/extensions/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
- [360极速浏览器X](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
- [其他 Chromium 内核浏览器](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

### 3. 📺 安装油猴脚本

- [Play-With-MPV](https://greasyfork.org/zh-CN/scripts/444056-play-with-mpv)

### 4. ⚙️ 设置

1. 打开一个支持的网页，比如：[打工吧！魔王大人 第二季](https://www.bilibili.com/bangumi/play/ep674708)  

2. 点击设置按钮，输入你的软件路径，并保存设置  
   ⚠️ **不要包含中文或空格等特殊字符，不要漏掉最后面的 `mpv.com` 或 `mpvnet.com`** ⚠️

   ```text
   # mpv 或 mpv-lazy
   D:/daily/mpv-lazy/mpv.com

   # mpvnet 或 mpvnet_CM
   D:/daily/mpvnet/mpvnet.com
   ```

3. 下载注册表 `mpv.reg` 到本地，鼠标双击添加即可  

![20221019042901](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/20221019042901.png)

⚠️ **注意** ⚠️

- **使用 v2rayN 或 clash 客户端科学上网，要看油管和巴哈请手动添加代理设置**
- **v2rayN 默认：`http://127.0.0.1:10809`**
- **clash 默认：`http://127.0.0.1:7890`**

![20221019043009](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/20221019043009.png)

## ✅ 效果展示

![bilibili_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/bilibili_tuya.jpg)

![ddrk_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/ddrk_tuya.jpg)

![youtube_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/youtube_tuya.jpg)

![gamer_tuya](https://cdn.jsdelivr.net/gh/LuckyPuppy514/pic-bed/common/gamer_tuya.jpg)

## 👏 相关仓库

- [mpv](https://github.com/mpv-player/mpv) — mpv 播放器
- [mpv-lazy](https://github.com/hooke007/MPV_lazy) — mpv 播放器懒人版
- [mpv.net_CM](https://github.com/hooke007/mpv.net_CM) — `mpv.net` 汉化版
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) — 视频下载
- [Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved) - B站增强脚本
- [Anime4K](https://github.com/bloc97/Anime4K) — 动漫画质增强
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) — B站接口整理
- [MPV-Play-BiliBili-Comments](https://github.com/itKelis/MPV-Play-BiliBili-Comments) — mpv B站弹幕脚本

## 👏 特别感谢

- 谷歌插件：[ff2mpv](https://github.com/woodruffw/ff2mpv)

- 油猴脚本：[play-with-mpv](https://greasyfork.org/zh-CN/scripts/416271-play-with-mpv)

- 油猴脚本：[Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved) + [playwithmpv](https://github.com/videoanywhere/playwithmpv)

## 😘 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/LuckyPuppy514/Play-With-MPV/issues/new) 或者提交一个 Pull Request。

## 🃏 使用许可

[MIT](https://github.com/LuckyPuppy514/Play-With-MPV/blob/main/LICENSE) © LuckyPuppy514
