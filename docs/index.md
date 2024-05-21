---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VitePress"
  text: "由 Vite 和 Vue 驱动的静态站点生成器"
  tagline: 将 Markdown 变成优雅的文档，只需几分钟
  actions:
    - theme: brand
      text: Markdown Examples
      link: /cn/examples/markdown-examples
    - theme: alt
      text: API Examples
      link: /cn/examples/api-examples

features:
  - icon: 🌊
    title: 专注内容
    details: 只需 Markdown 即可轻松创建美观的文档站点。
  - icon: ⚡
    title: 享受 Vite 无可比拟的体验
    details: 服务器即时启动，闪电般的热更新，还可以使用基于 Vite 生态的插件。
  - icon: 💕
    title: 使用 Vue 自定义
    details: 直接在 Markdown 中使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题。
  - icon: 🚀
    title: 速度真的很快！
---

## Markdown Part

You can get started using Markdown right away under '---'!

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```