---
outline: deep
---

# 运行时 API 示例

此页面展示了一些 VitePress 提供的运行时 API 的用法。

主要的 `useData()` API 可用于访问当前页面的站点、主题和页面数据。它可以在 `.md` 和 `.vue` 文件中使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前言
<pre>{{ frontmatter }}</pre>


## 更多

请查阅文档获取[完整的运行时API列表](https://vitepress.dev/reference/runtime-api#usedata)。
