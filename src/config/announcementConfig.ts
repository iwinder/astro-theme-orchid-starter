import type { ThemeConfig } from "@windcoder/astro-theme-orchid";

// 侧栏公告（P1-17）：content 留空则整卡不渲染；closable 仅前台隐藏
export const announcementConfig: ThemeConfig["announcement"] = {
	title: "公告",
	content: "欢迎来到我的小站，内容持续更新中。",
	link: { text: "了解更多", url: "/about/", external: false },
	closable: true,
};
