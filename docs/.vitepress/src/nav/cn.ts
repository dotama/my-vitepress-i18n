import type { DefaultTheme } from "vitepress";

export default function getNav(): DefaultTheme.NavItem[] {
    return [
        { text: "主页", link: "/" },
        { text: "VitePress", link: "/pages/vitepress/introduction/start", activeMatch: "^/pages/vitepress/introduction" },
        { text: "Markdown", link: "/pages/markdown/introduction/start", activeMatch: "^/pages/markdown/introduction" },
        {
            text: "关于",
            items: [
                {
                    text: "团队",
                    link: "/pages/examples/about/team",
                    activeMatch: "/about/team",
                },
                {
                    text: "常见问题",
                    link: "/pages/examples/about/problem",
                    activeMatch: "/about/problem",
                },
            ],
            activeMatch: "/pages/examples/about/",
        },
    ];
}
