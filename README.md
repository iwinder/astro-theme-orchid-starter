# Astro Theme Orchid Starter

基于 [@windcoder/astro-theme-orchid](https://www.npmjs.com/package/@windcoder/astro-theme-orchid) 主题的博客起步模板。

主题以 Astro Integration 形式提供——本仓库只有**配置与内容**，页面、路由、样式全部来自 npm 包，
升级主题只需 `pnpm update`，无需合并模板 diff。

## 快速开始

> 推荐先在 GitHub 上对本仓库点 **Use this template** 生成你自己的仓库，再克隆。

```sh
git clone https://github.com/<你的用户名>/astro-theme-orchid-starter.git my-blog
cd my-blog
pnpm install
pnpm dev          # http://localhost:4321
```

## 必改清单

| 文件 | 改什么 |
|---|---|
| `src/config/siteConfig.ts` | `siteUrl`（域名，必改）、`title`、`author` |
| `src/config/profileConfig.ts` | 昵称与社交链接 |
| `src/config/bannerConfig.ts` | 换上你的图片后开启首页横幅 |
| `public/favicon.svg` | 站点图标 |

配置按功能拆分在 `src/config/` 下，**每个文件只管一个功能**（28 个文件的完整清单与说明见主题文档《快速开始》）。

## 常用命令

| 命令 | 作用 |
|---|---|
| `pnpm dev` | 本地开发 |
| `pnpm build` | 生产构建（含字体子集化 + Pagefind 搜索索引） |
| `pnpm preview` | 本地预览构建产物 |
| `pnpm check` | `astro check` 类型与语法检查 |
| `pnpm new-post "标题"` | 按骨架创建新文章 |
| `pnpm lqip` | 为画廊图片生成 LQIP 占位 |

## 目录结构

```text
├── astro.config.ts          # 声明域名、接入主题
├── src/
│   ├── content.config.ts    # posts / spec 两个内容集合
│   ├── config/              # 全部主题配置（每个文件一个功能）
│   └── content/
│       ├── posts/           # 你的文章
│       └── spec/            # 独立页正文（about / friends / guestbook）
├── public/                  # 静态资源（favicon 等）
└── scripts/                  # 构建辅助（字体子集化 / LQIP / 新建文章）
```

## 进阶

- **启用 MDX**：见 `astro.config.ts` 内注释与主题文档《MDX 指南》（含 `style-to-js` 依赖坑的根治配方，本模板的 `pnpm-workspace.yaml` 已带该 override）
- **评论 / 统计 / 音乐 / 看板娘等**：`src/config/` 下各配置文件按需开启
- **组件覆盖（override）**：`src/overrides/` 镜像主题路径放同名文件即可替换组件
- **从旧博客迁移 URL**：见主题文档《URL 迁移与重定向》

完整文档见主题仓库的「主题使用指南」系列（`site/src/content/posts/`）：
<https://github.com/iwinder/qy-astro-theme-orchid>

## 主题升级

```sh
pnpm update @windcoder/astro-theme-orchid
```

## License

主题与模板均为 [MIT](https://github.com/iwinder/qy-astro-theme-orchid/blob/main/packages/theme/LICENSE)。
