export const sidebar = {
    // VitePress 相关侧边栏
    '/pages/vitepress/': [
        {
            text: "VitePress 简介",
            items: [
                { text: "开始", link: "/pages/vitepress/introduction/start" },
                { text: "功能", link: "/pages/vitepress/introduction/features" },
                { text: "配置", link: "/pages/vitepress/introduction/config" },
            ],
            collapsed: false,
        },
        {
            text: "VitePress 指南",
            items: [
                { text: "Markdown 扩展", link: "/pages/vitepress/guide/markdown" },
                { text: "主题配置", link: "/pages/vitepress/guide/theme" },
                { text: "部署", link: "/pages/vitepress/guide/deployment" },
            ],
            collapsed: false,
        },
    ],
    // Markdown 相关侧边栏
    '/pages/markdown/': [
        {
            text: "Markdown 简介",
            items: [
                { text: "开始", link: "/pages/markdown/introduction/start" },
                { text: "功能", link: "/pages/markdown/introduction/features" },
                { text: "配置", link: "/pages/markdown/introduction/config" },
            ],
            collapsed: false,
        },
        {
            text: "Markdown 指南",
            items: [
                { text: "类型系统", link: "/pages/markdown/guide/types" },
                { text: "编译选项", link: "/pages/markdown/guide/compiler" },
                { text: "高级用法", link: "/pages/markdown/guide/advanced" },
            ],
            collapsed: false,
        },
    ],
    // 关于相关侧边栏
    '/pages/examples/about/': [
        {
            text: "关于我们",
            items: [
                { text: "团队", link: "/pages/examples/about/team" },
                { text: "常见问题", link: "/pages/examples/about/problem" },
            ],
            collapsed: false,
        },
    ],
};
