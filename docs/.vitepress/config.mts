import { defineConfig } from "vitepress";
import { docsConfig } from "./src/docs";
import { themeConfig } from "./src/theme";
import { head } from "./src/head";
//配置的英文文档设置
import { enConfig } from './src/configs/en'
//配置的中文文档设置
import { cnConfig } from './src/configs/cn'

export default defineConfig({
    /* 文档配置 */
    ...docsConfig,
    /* 标头配置 */
    head,
    /* 主题配置 */
    themeConfig,
    /* 语言配置 */
    cleanUrls: true,
    locales: {
        root: { label: '简体中文', lang: 'cn', link: '/', ...cnConfig },
        en: { label: 'English', lang: 'en', link: '/en/', ...enConfig },
    },
});
