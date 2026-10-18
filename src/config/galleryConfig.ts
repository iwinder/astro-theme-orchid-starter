import type { ThemeConfig } from "@windcoder/astro-theme-orchid";

// 画廊（albums.id 对应 public/gallery/<id>/，照片构建期扫描：
// 本地图片文件 + urls.txt 远程 URL）；cover 留空依次取 cover.* / 第一张照片；
// password 非空即加密相册。
// 相册数据示例（照片放 public/gallery/demo/ 下，或 public/gallery/demo/urls.txt 每行一个外链）：
// { id: "demo", name: "相册名", description: "一句话介绍", date: "2026-01-01", location: "地点", tags: ["风光"] }
export const galleryConfig: ThemeConfig["gallery"] = {
	title: "画廊",
	description: "用镜头收藏时间的碎片。",
	columnWidth: 240,
	albums: [],
};
