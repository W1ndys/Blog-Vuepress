import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "W1ndys小屋",
  description: "W1ndys的VuePress博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
