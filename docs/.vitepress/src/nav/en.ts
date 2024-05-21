import type { DefaultTheme } from "vitepress";

export default function getNav() {
    return [
        { text: "Home", link: "/" },
        { text: "VitePress", link: "/en/vitepress/introduction/start", activeMatch: "^/en/vitepress/introduction" },
        { text: "Markdown", link: "/en/markdown/introduction/start", activeMatch: "^/en/markdown/introduction" },
        {
            text: "About",
            items: [
                {
                    text: "Team",
                    link: "/en/about/team",
                    activeMatch: "/en/about/team",
                },
                {
                    text: "Q&A",
                    link: "/en/about/problem",
                    activeMatch: "/en/about/problem",
                },
            ],
            activeMatch: "/en/examples/about/", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
        },
    ]

};
