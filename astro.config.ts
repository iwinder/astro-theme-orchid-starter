// @ts-check

import orchidTheme from "@windcoder/astro-theme-orchid";
import { defineConfig } from "astro/config";

import { siteConfig, themeConfig } from "./src/config";

// 站点只做三件事：声明域名、接入主题、传入配置。
// 页面、样式引擎、路由全部由 @windcoder/astro-theme-orchid 提供；
// 具体配置项按模块拆分在 src/config/ 下，此处仅做组装。
//
// 启用 MDX（可选）：pnpm add @astrojs/mdx，然后
//   1. import mdx from "@astrojs/mdx"
//   2. integrations 改为 [mdx(), orchidTheme(themeConfig)]（与主题顺序无关）
//   3. src/content.config.ts 的 posts loader 扩为 "**/*.{md,mdx}"
// 详见主题文档《MDX 指南》
export default defineConfig({
	site: siteConfig.siteUrl,
	integrations: [orchidTheme(themeConfig)],
});
