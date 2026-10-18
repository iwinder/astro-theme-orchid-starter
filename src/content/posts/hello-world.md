---
title: 第一篇文章
description: 你的博客的第一篇文章，删掉它开始写作吧。
published: 2026-10-18
pinned: true
image: "api"
tags:
  - 随笔
category: 开始
---

这是你的博客的第一篇文章。

主题以 Astro Integration 形式提供：路由、组件、样式都来自 npm 包，
本仓库只保留配置（`src/config/`）与内容（`src/content/`）。

## 开始写作

- 新建文章：`pnpm new-post "我的新文章"`（在 `src/content/posts/` 下生成骨架）
- 文章 frontmatter 全部字段与增强语法，见主题文档《写作指南》
- frontmatter `image: "api"` 会按 slug 确定性取一张随机封面（`postListConfig.randomCover` 可改）

## 配置你的站点

- `src/config/siteConfig.ts`：站点域名、标题、作者——**域名接入后必改**
- `src/config/profileConfig.ts`：侧栏资料卡的昵称与社交链接
- `src/config/bannerConfig.ts`：换上你的图片后开启首页横幅

每个配置文件只管一个功能，全部文件清单见主题文档《快速开始》。

## 主题文档

配置说明、写作指南、部署与进阶用法，见主题仓库的「主题使用指南」系列文章：

<https://github.com/iwinder/qy-astro-theme-orchid>
