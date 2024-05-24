import{_ as a,c as t,o as e,a4 as s}from"./chunks/framework.C3LL8OvZ.js";const b=JSON.parse('{"title":"MARKDOWN基本语法","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/introduction/start.md","filePath":"markdown/introduction/start.md"}'),i={name:"markdown/introduction/start.md"},l=s(`<h1 id="markdown基本语法" tabindex="-1">MARKDOWN基本语法 <a class="header-anchor" href="#markdown基本语法" aria-label="Permalink to &quot;MARKDOWN基本语法&quot;">​</a></h1><blockquote><p>引用自<a href="https://github.com/guodongxiaren/README" target="_blank" rel="noreferrer">https://github.com/guodongxiaren/README</a></p></blockquote><p>该文件用来测试和展示书写README的各种markdown语法。GitHub的markdown语法在标准的markdown语法基础上做了扩充，称之为<code>GitHub Flavored Markdown</code>。简称<code>GFM</code>，GFM在GitHub上有广泛应用，除了README文件外，issues和wiki均支持markdown语法。</p><hr><table><thead><tr><th>作者</th><th>果冻虾仁</th></tr></thead><tbody><tr><td>知乎</td><td><a href="https://www.zhihu.com/people/guodongxiaren" title="我的知乎，欢迎关注" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/dynamic/json?color=0084ff&amp;logo=zhihu&amp;label=%E6%9E%9C%E5%86%BB%E8%99%BE%E4%BB%81&amp;query=%24.data.totalSubs&amp;url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dguodongxiaren" alt="zhihu-shield"></a></td></tr><tr><td>公众号</td><td>编程往事</td></tr></tbody></table><hr><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#横线">横线</a></li><li><a href="#标题">标题</a></li><li><a href="#文本">文本</a><ul><li>普通文本</li><li>单行文本</li><li>多行文本</li><li>文字高亮</li><li>换行</li><li>斜体</li><li>粗体</li><li>删除线</li></ul></li><li><a href="#图片">图片</a><ul><li>来源于网络的图片</li><li>GitHub仓库中的图片</li></ul></li><li><a href="#链接">链接</a><ul><li>文字超链接 <ul><li>链接外部URL</li><li>链接本仓库里的URL</li></ul></li><li>锚点</li><li><a href="#图片链接">图片链接</a></li></ul></li><li><a href="#列表">列表</a><ul><li>无序列表</li><li>有序列表</li><li>复选框列表</li></ul></li><li><a href="#块引用">块引用</a></li><li><a href="#代码高亮">代码高亮</a></li><li><a href="#表格">表格</a></li><li><a href="#表情">表情</a></li><li><a href="#diff语法">diff语法</a></li><li><a href="#常用HTML语法">常用HTML语法</a><ul><li><a href="#折叠">折叠</a></li><li><a href="#居中">居中</a></li></ul></li><li><a href="#其他">其他</a><ul><li><a href="#徽章">徽章</a></li><li><a href="#star历史">star历史</a></li></ul></li></ul><h3 id="横线" tabindex="-1">横线 <a class="header-anchor" href="#横线" aria-label="Permalink to &quot;横线&quot;">​</a></h3><hr><p>***、---、___可以显示横线效果</p><hr><hr><hr><h2 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-label="Permalink to &quot;标题&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 一级标题</span></span>
<span class="line"><span>## 二级标题</span></span>
<span class="line"><span>### 三级标题</span></span>
<span class="line"><span>#### 四级标题</span></span>
<span class="line"><span>##### 五级标题</span></span>
<span class="line"><span>###### 六级标题</span></span></code></pre></div><p>效果如下：</p><h1 id="一级标题" tabindex="-1">一级标题 <a class="header-anchor" href="#一级标题" aria-label="Permalink to &quot;一级标题&quot;">​</a></h1><h2 id="二级标题" tabindex="-1">二级标题 <a class="header-anchor" href="#二级标题" aria-label="Permalink to &quot;二级标题&quot;">​</a></h2><h3 id="三级标题" tabindex="-1">三级标题 <a class="header-anchor" href="#三级标题" aria-label="Permalink to &quot;三级标题&quot;">​</a></h3><h4 id="四级标题" tabindex="-1">四级标题 <a class="header-anchor" href="#四级标题" aria-label="Permalink to &quot;四级标题&quot;">​</a></h4><h5 id="五级标题" tabindex="-1">五级标题 <a class="header-anchor" href="#五级标题" aria-label="Permalink to &quot;五级标题&quot;">​</a></h5><h6 id="六级标题" tabindex="-1">六级标题 <a class="header-anchor" href="#六级标题" aria-label="Permalink to &quot;六级标题&quot;">​</a></h6><h2 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-label="Permalink to &quot;文本&quot;">​</a></h2><h3 id="普通文本" tabindex="-1">普通文本 <a class="header-anchor" href="#普通文本" aria-label="Permalink to &quot;普通文本&quot;">​</a></h3><p>这是一段普通的文本</p><h3 id="单行文本" tabindex="-1">单行文本 <a class="header-anchor" href="#单行文本" aria-label="Permalink to &quot;单行文本&quot;">​</a></h3><pre><code>Hello,大家好，我是果冻虾仁。
</code></pre><p>在一行开头加入1个Tab或者4个空格。</p><h3 id="文本块" tabindex="-1">文本块 <a class="header-anchor" href="#文本块" aria-label="Permalink to &quot;文本块&quot;">​</a></h3><h4 id="语法1" tabindex="-1">语法1 <a class="header-anchor" href="#语法1" aria-label="Permalink to &quot;语法1&quot;">​</a></h4><p>在连续几行的文本开头加入1个Tab或者4个空格。</p><pre><code>欢迎到访
很高兴见到您
祝您，早上好，中午好，下午好，晚安
</code></pre><h4 id="语法2" tabindex="-1">语法2 <a class="header-anchor" href="#语法2" aria-label="Permalink to &quot;语法2&quot;">​</a></h4><p>使用一对各三个的反引号：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>欢迎到访</span></span>
<span class="line"><span>我是C++码农</span></span>
<span class="line"><span>你可以在知乎、CSDN、简书搜索【果冻虾仁】找到我</span></span></code></pre></div><p>该语法也可以实现代码高亮，见<a href="#代码高亮">代码高亮</a></p><h3 id="文字高亮" tabindex="-1">文字高亮 <a class="header-anchor" href="#文字高亮" aria-label="Permalink to &quot;文字高亮&quot;">​</a></h3><p>文字高亮功能能使行内部分文字高亮，使用一对反引号。 语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`linux\` \`网络编程\` \`socket\` \`epoll\`</span></span></code></pre></div><p>效果：<code>linux</code> <code>网络编程</code> <code>socket</code> <code>epoll</code></p><p>也适合做一篇文章的tag</p><h4 id="换行" tabindex="-1">换行 <a class="header-anchor" href="#换行" aria-label="Permalink to &quot;换行&quot;">​</a></h4><p>直接回车不能换行， 可以在上一行文本后面补两个空格， 这样下一行的文本就换行了。</p><p>或者就是在两行文本直接加一个空行。</p><p>也能实现换行效果，不过这个行间距有点大。</p><h4 id="斜体、粗体、删除线" tabindex="-1">斜体、粗体、删除线 <a class="header-anchor" href="#斜体、粗体、删除线" aria-label="Permalink to &quot;斜体、粗体、删除线&quot;">​</a></h4><table><thead><tr><th>语法</th><th>效果</th></tr></thead><tbody><tr><td><code>*斜体1*</code></td><td><em>斜体1</em></td></tr><tr><td><code>_斜体2_</code></td><td><em>斜体2</em></td></tr><tr><td><code>**粗体1**</code></td><td><strong>粗体1</strong></td></tr><tr><td><code>__粗体2__</code></td><td><strong>粗体2</strong></td></tr><tr><td><code>这是一个 ~~删除线~~</code></td><td>这是一个 <s>删除线</s></td></tr><tr><td><code>***斜粗体1***</code></td><td><em><strong>斜粗体1</strong></em></td></tr><tr><td><code>___斜粗体2___</code></td><td><em><strong>斜粗体2</strong></em></td></tr><tr><td><code>***~~斜粗体删除线1~~***</code></td><td><em><strong><s>斜粗体删除线1</s></strong></em></td></tr><tr><td><code>~~***斜粗体删除线2***~~</code></td><td><s><em><strong>斜粗体删除线2</strong></em></s></td></tr></tbody></table><pre><code>斜体、粗体、删除线可混合使用
</code></pre><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>基本格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>![alt](URL title)</span></span></code></pre></div><p>alt和title即对应HTML中的alt和title属性（都可省略）：</p><ul><li>alt表示图片显示失败时的替换文本</li><li>title表示鼠标悬停在图片时的显示文本（注意这里要加引号）</li></ul><p>URL即图片的url地址，如果引用本仓库中的图片，直接使用<strong>相对路径</strong>就可了，如果引用其他github仓库中的图片要注意格式，即：<code>仓库地址/raw/分支名/图片路径</code>，如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://github.com/guodongxiaren/ImageCache/raw/master/Logo/foryou.gif</span></span></code></pre></div><table><thead><tr><th>#</th><th>语法</th><th>效果</th></tr></thead><tbody><tr><td>1</td><td><code>![baidu](http://www.baidu.com/img/bdlogo.gif &quot;百度logo&quot;)</code></td><td><img src="http://www.baidu.com/img/bdlogo.gif" alt="baidu" title="百度logo"></td></tr><tr><td>2</td><td><code>![][code-past]</code></td><td><img src="https://github.com/guodongxiaren/README/blob/master/img/codepast-logo.jpg" alt="" title="公众号：编程往事"></td></tr></tbody></table><p>注意例2的写法使用了<strong>URL标识符</strong>的形式，在<a href="#链接">链接</a>一节有介绍。</p><blockquote><p>在文末有code-past的定义：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[code-past]:/img/codepast-logo.jpg &quot;公众号：编程往事&quot;</span></span></code></pre></div><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><h3 id="链接外部url" tabindex="-1">链接外部URL <a class="header-anchor" href="#链接外部url" aria-label="Permalink to &quot;链接外部URL&quot;">​</a></h3><table><thead><tr><th>#</th><th>语法</th><th>效果</th></tr></thead><tbody><tr><td>1</td><td><code>[我的博客](http://blog.csdn.net/guodongxiaren &quot;悬停显示&quot;)</code></td><td><a href="http://blog.csdn.net/guodongxiaren" title="悬停显示" target="_blank" rel="noreferrer">我的博客</a></td></tr><tr><td>2</td><td><code>[我的知乎][zhihu] </code></td><td><a href="https://www.zhihu.com/people/guodongxiaren" title="我的知乎，欢迎关注" target="_blank" rel="noreferrer">我的知乎</a></td></tr></tbody></table><p>语法2由两部分组成：</p><ul><li>第一部分使用两个中括号，[ ]里的标识符（本例中zhihu），可以是数字，字母等的组合，标识符上下对应就行了（<strong>姑且称之为URL标识符</strong>）</li><li>第二部分标记实际URL。</li></ul><blockquote><p>使用URL标识符能达到复用的目的，一般把全文所有的URL标识符统一放在文章末尾，这样看起来比较干净。除了干净之外，它还能达到复用的目的，比如你在多个地方想使用同一个链接，那么文内使用标识符，只在最底部给标识符定义出实际的URL链接即可，类似编程语言中的变量。</p><blockquote><p>URL标识符是我起的名字，不知道是否准确。囧。。</p></blockquote></blockquote><h3 id="链接本仓库里的url" tabindex="-1">链接本仓库里的URL <a class="header-anchor" href="#链接本仓库里的url" aria-label="Permalink to &quot;链接本仓库里的URL&quot;">​</a></h3><table><thead><tr><th>语法</th><th>效果</th></tr></thead><tbody><tr><td><code>[我的简介](/examples/about/team.md)</code></td><td><a href="/my-vitepress-i18n/examples/about/team">我的简介</a></td></tr><tr><td><code>[example](./examples)</code></td><td><a href="https://github.com/guodongxiaren/README/blob/master/example" target="_blank" rel="noreferrer">example</a></td></tr></tbody></table><h3 id="图片链接" tabindex="-1">图片链接 <a class="header-anchor" href="#图片链接" aria-label="Permalink to &quot;图片链接&quot;">​</a></h3><p>给图片加链接的本质是混合图片显示语法和普通的链接语法。普通的链接中[ ]内部是链接要显示的文本，而图片链接[ ]里面则是要显示的图片。 直接混合两种语法当然可以，但是十分啰嗦，为此我们可以使用URL标识符的形式。</p><table><thead><tr><th>#</th><th>语法</th><th style="text-align:center;">效果</th></tr></thead><tbody><tr><td>1</td><td><code>[![weibo-logo]](http://weibo.com/linpiaochen)</code></td><td style="text-align:center;"><a href="http://weibo.com/linpiaochen" target="_blank" rel="noreferrer"><img src="https://github.com/guodongxiaren/README/raw/master/img/weibo.png" alt="weibo-logo" title="点击图片进入我的微博"></a></td></tr><tr><td>2</td><td><code>[![](/img/zhihu.png &quot;我的知乎，欢迎关注&quot;)][zhihu]</code></td><td style="text-align:center;"><a href="https://www.zhihu.com/people/guodongxiaren" title="我的知乎，欢迎关注" target="_blank" rel="noreferrer"><img src="https://github.com/guodongxiaren/README/raw/master/img/zhihu.png" alt="" title="我的知乎，欢迎关注"></a></td></tr><tr><td>3</td><td><code>[![csdn-logo]][csdn]</code></td><td style="text-align:center;"><a href="http://blog.csdn.net/guodongxiaren" title="我的博客" target="_blank" rel="noreferrer"><img src="https://github.com/guodongxiaren/README/raw/master/img/csdn.png" alt="csdn-logo" title="我的CSDN博客"></a></td></tr></tbody></table><p>因为图片本身和链接本身都支持URL标识符的形式，所以图片链接也可以很简洁（见例3）。 注意，此时鼠标悬停时显示的文字是图片的title，而非链接本身的title了。</p><blockquote><p>本文URL标识符都放置于文末</p></blockquote><h3 id="锚点" tabindex="-1">锚点 <a class="header-anchor" href="#锚点" aria-label="Permalink to &quot;锚点&quot;">​</a></h3><p>其实呢，每一个标题都是一个锚点，和HTML的锚点（<code>#</code>）类似，比如我们</p><table><thead><tr><th>语法</th><th>效果</th></tr></thead><tbody><tr><td><code>[回到顶部](#readme)</code></td><td><a href="#readme">回到顶部</a></td></tr></tbody></table><p>不过要注意，标题中的英文字母都被转化为<strong>小写字母</strong>了。</p><blockquote><p>以前GitHub对中文支持的不好，所以中文标题不能正确识别为锚点，但是现在已经没问题啦！</p></blockquote><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><h3 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-label="Permalink to &quot;无序列表&quot;">​</a></h3><h4 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* 昵称：果冻虾仁</span></span>
<span class="line"><span>- 别名：隔壁老王</span></span>
<span class="line"><span>* 英文名：Jelly</span></span></code></pre></div><h4 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h4><ul><li>昵称：果冻虾仁</li></ul><ul><li>别名：隔壁老王</li></ul><ul><li>英文名：Jelly</li></ul><h3 id="多级无序列表" tabindex="-1">多级无序列表 <a class="header-anchor" href="#多级无序列表" aria-label="Permalink to &quot;多级无序列表&quot;">​</a></h3><h4 id="语法-1" tabindex="-1">语法 <a class="header-anchor" href="#语法-1" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* 编程语言</span></span>
<span class="line"><span>    * 脚本语言</span></span>
<span class="line"><span>        * Python</span></span></code></pre></div><h4 id="效果-1" tabindex="-1">效果 <a class="header-anchor" href="#效果-1" aria-label="Permalink to &quot;效果&quot;">​</a></h4><ul><li>编程语言 <ul><li>脚本语言 <ul><li>Python</li></ul></li></ul></li></ul><h3 id="一级有序列表" tabindex="-1">一级有序列表 <a class="header-anchor" href="#一级有序列表" aria-label="Permalink to &quot;一级有序列表&quot;">​</a></h3><h4 id="语法-2" tabindex="-1">语法 <a class="header-anchor" href="#语法-2" aria-label="Permalink to &quot;语法&quot;">​</a></h4><p>就是在数字后面加一个点，再加一个空格。不过看起来起来可能不够明显。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>面向对象的三个基本特征：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 封装</span></span>
<span class="line"><span>2. 继承</span></span>
<span class="line"><span>3. 多态</span></span></code></pre></div><h4 id="效果-2" tabindex="-1">效果 <a class="header-anchor" href="#效果-2" aria-label="Permalink to &quot;效果&quot;">​</a></h4><p>面向对象的三个基本特征：</p><ol><li>封装</li><li>继承</li><li>多态</li></ol><h3 id="多级有序列表" tabindex="-1">多级有序列表 <a class="header-anchor" href="#多级有序列表" aria-label="Permalink to &quot;多级有序列表&quot;">​</a></h3><p>和无序列表一样，有序列表也有多级结构。</p><h4 id="语法-3" tabindex="-1">语法 <a class="header-anchor" href="#语法-3" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 这是一级的有序列表，数字1还是1</span></span>
<span class="line"><span>   1. 这是二级的有序列表，阿拉伯数字在显示的时候变成了罗马数字</span></span>
<span class="line"><span>      1. 这是三级的有序列表，数字在显示的时候变成了英文字母</span></span></code></pre></div><h4 id="效果-3" tabindex="-1">效果 <a class="header-anchor" href="#效果-3" aria-label="Permalink to &quot;效果&quot;">​</a></h4><ol><li>这是一级的有序列表，数字1还是1 <ol><li>这是二级的有序列表，阿拉伯数字在显示的时候变成了罗马数字 <ol><li>这是三级的有序列表，数字在显示的时候变成了英文字母</li></ol></li></ol></li></ol><h3 id="复选框列表" tabindex="-1">复选框列表 <a class="header-anchor" href="#复选框列表" aria-label="Permalink to &quot;复选框列表&quot;">​</a></h3><h4 id="语法-4" tabindex="-1">语法 <a class="header-anchor" href="#语法-4" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- [x] 需求分析</span></span>
<span class="line"><span>- [x] 系统设计</span></span>
<span class="line"><span>- [x] 详细设计</span></span>
<span class="line"><span>- [ ] 编码</span></span>
<span class="line"><span>- [ ] 测试</span></span>
<span class="line"><span>- [ ] 交付</span></span></code></pre></div><h4 id="效果-4" tabindex="-1">效果 <a class="header-anchor" href="#效果-4" aria-label="Permalink to &quot;效果&quot;">​</a></h4><ul><li>[x] 需求分析</li><li>[x] 系统设计</li><li>[x] 详细设计</li><li>[ ] 编码</li><li>[ ] 测试</li><li>[ ] 交付</li></ul><p>您可以使用这个功能来标注某个项目各项任务的完成情况。</p><blockquote><p>Tip:</p><blockquote><p>在GitHub的<strong>issue</strong>中使用该语法是可以实时点击复选框来勾选或解除勾选的，而无需修改issue原文。</p></blockquote></blockquote><h2 id="块引用" tabindex="-1">块引用 <a class="header-anchor" href="#块引用" aria-label="Permalink to &quot;块引用&quot;">​</a></h2><h3 id="常用于引用文本" tabindex="-1">常用于引用文本 <a class="header-anchor" href="#常用于引用文本" aria-label="Permalink to &quot;常用于引用文本&quot;">​</a></h3><h4 id="文本摘自《深入理解计算机系统》p27" tabindex="-1">文本摘自《深入理解计算机系统》P27 <a class="header-anchor" href="#文本摘自《深入理解计算机系统》p27" aria-label="Permalink to &quot;文本摘自《深入理解计算机系统》P27&quot;">​</a></h4><p>令人吃惊的是，在哪种字节顺序是合适的这个问题上，人们表现得非常情绪化。实际上术语“little endian”（小端）和“big endian”（大端）出自Jonathan Swift的《格利佛游记》一书，其中交战的两个派别无法就应该从哪一端打开一个半熟的鸡蛋达成一致。因此，争论沦为关于社会政治的争论。只要选择了一种规则并且始终如一的坚持，其实对于哪种字节排序的选择都是任意的。</p><blockquote><p><strong>“端”（endian）的起源</strong> 以下是Jonathan Swift在1726年关于大小端之争历史的描述： “……下面我要告诉你的是，Lilliput和Blefuscu这两大强国在过去36个月里一直在苦战。战争开始是由于以下的原因：我们大家都认为，吃鸡蛋前，原始的方法是打破鸡蛋较大的一端，可是当今的皇帝的祖父小时候吃鸡蛋，一次按古法打鸡蛋时碰巧将一个手指弄破了，因此他的父亲，当时的皇帝，就下了一道敕令，命令全体臣民吃鸡蛋时打破较小的一端，违令者重罚。”</p></blockquote><h3 id="块引用有多级结构" tabindex="-1">块引用有多级结构 <a class="header-anchor" href="#块引用有多级结构" aria-label="Permalink to &quot;块引用有多级结构&quot;">​</a></h3><h4 id="语法-5" tabindex="-1">语法 <a class="header-anchor" href="#语法-5" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; 数据结构</span></span>
<span class="line"><span>&gt;&gt; 树</span></span>
<span class="line"><span>&gt;&gt;&gt; 二叉树</span></span>
<span class="line"><span>&gt;&gt;&gt;&gt; 平衡二叉树</span></span>
<span class="line"><span>&gt;&gt;&gt;&gt;&gt; 满二叉树</span></span></code></pre></div><h4 id="效果-5" tabindex="-1">效果 <a class="header-anchor" href="#效果-5" aria-label="Permalink to &quot;效果&quot;">​</a></h4><blockquote><p>数据结构</p><blockquote><p>树</p><blockquote><p>二叉树</p><blockquote><p>平衡二叉树</p><blockquote><p>满二叉树</p></blockquote></blockquote></blockquote></blockquote></blockquote><h2 id="代码高亮" tabindex="-1">代码高亮 <a class="header-anchor" href="#代码高亮" aria-label="Permalink to &quot;代码高亮&quot;">​</a></h2><h3 id="语法-6" tabindex="-1">语法 <a class="header-anchor" href="#语法-6" aria-label="Permalink to &quot;语法&quot;">​</a></h3><p>在三个反引号后面加上编程语言的名字，另起一行开始写代码，最后一行再加上三个反引号。</p><h3 id="效果-6" tabindex="-1">效果 <a class="header-anchor" href="#效果-6" aria-label="Permalink to &quot;效果&quot;">​</a></h3><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]args){} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//Java</span></span></code></pre></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //C</span></span></code></pre></div><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello GitHub&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #Bash</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myH1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).innerHTML</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Welcome to my Homepage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//javascipt</span></span></code></pre></div><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //cpp</span></span></code></pre></div><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><table><thead><tr><th>表头1</th><th>表头2</th></tr></thead><tbody><tr><td>表格单元</td><td>表格单元</td></tr><tr><td>表格单元</td><td>表格单元</td></tr></tbody></table><table><thead><tr><th>表头1</th><th>表头2</th></tr></thead><tbody><tr><td>表格单元</td><td>表格单元</td></tr><tr><td>表格单元</td><td>表格单元</td></tr></tbody></table><h3 id="对齐" tabindex="-1">对齐 <a class="header-anchor" href="#对齐" aria-label="Permalink to &quot;对齐&quot;">​</a></h3><p>表格可以指定对齐方式</p><table><thead><tr><th style="text-align:left;">左对齐</th><th style="text-align:center;">居中</th><th style="text-align:right;">右对齐</th></tr></thead><tbody><tr><td style="text-align:left;">col 3 is</td><td style="text-align:center;">some wordy text</td><td style="text-align:right;">$1600</td></tr><tr><td style="text-align:left;">col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td style="text-align:left;">zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h3 id="混合其他语法" tabindex="-1">混合其他语法 <a class="header-anchor" href="#混合其他语法" aria-label="Permalink to &quot;混合其他语法&quot;">​</a></h3><p>表格单元中的内容可以和其他大多数GFM语法配合使用，如：</p><h4 id="使用普通文本的删除线-斜体等效果" tabindex="-1">使用普通文本的删除线，斜体等效果 <a class="header-anchor" href="#使用普通文本的删除线-斜体等效果" aria-label="Permalink to &quot;使用普通文本的删除线，斜体等效果&quot;">​</a></h4><table><thead><tr><th>名字</th><th>描述</th></tr></thead><tbody><tr><td>Help</td><td><s>Display the</s> help window.</td></tr><tr><td>Close</td><td><em>Closes</em> a window</td></tr></tbody></table><h4 id="表格中嵌入图片-链接" tabindex="-1">表格中嵌入图片（链接） <a class="header-anchor" href="#表格中嵌入图片-链接" aria-label="Permalink to &quot;表格中嵌入图片（链接）&quot;">​</a></h4><p>其实前面介绍图片显示、图片链接的时候为了清晰就是放在在表格中显示的。</p><table><thead><tr><th>图片</th><th>描述</th></tr></thead><tbody><tr><td><img src="http://www.baidu.com/img/bdlogo.gif" alt="baidu" title="百度logo"></td><td>百度</td></tr></tbody></table><h2 id="表情" tabindex="-1">表情 <a class="header-anchor" href="#表情" aria-label="Permalink to &quot;表情&quot;">​</a></h2><p>Github的Markdown语法支持添加emoji表情，输入不同的符号码（两个冒号包围的字符）可以显示出不同的表情。</p><p>比如<code>:blush:</code>，可以显示😊。</p><p>具体每一个表情的符号码，可以查询GitHub的官方网页<a href="http://www.emoji-cheat-sheet.com" target="_blank" rel="noreferrer">http://www.emoji-cheat-sheet.com</a>。</p><p>但是这个网页每次都打开<strong>奇慢</strong>。。所以我整理到了本repo中，大家可以直接在此查看<a href="https://github.com/guodongxiaren/README/blob/master/emoji.md" target="_blank" rel="noreferrer">emoji</a>。</p><h2 id="diff语法" tabindex="-1">diff语法 <a class="header-anchor" href="#diff语法" aria-label="Permalink to &quot;diff语法&quot;">​</a></h2><p>版本控制的系统中都少不了diff的功能，即展示一个文件内容的增加与删除。 GFM中可以显示的展示diff效果。使用绿色表示新增，红色表示删除。</p><h4 id="语法-7" tabindex="-1">语法 <a class="header-anchor" href="#语法-7" aria-label="Permalink to &quot;语法&quot;">​</a></h4><p>其语法与代码高亮类似，只是在三个反引号后面写diff， 并且其内容中，可以用 <code>+ </code>开头表示新增，<code>- </code>开头表示删除。 另外还有有 <code>!</code>和<code>#</code>的语法。</p><h4 id="效果-7" tabindex="-1">效果 <a class="header-anchor" href="#效果-7" aria-label="Permalink to &quot;效果&quot;">​</a></h4><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ 人闲桂花落，</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- 夜静春山空。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">! 月出惊山鸟，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 时鸣春涧中。</span></span></code></pre></div><h2 id="常用html语法" tabindex="-1">常用HTML语法 <a class="header-anchor" href="#常用html语法" aria-label="Permalink to &quot;常用HTML语法&quot;">​</a></h2><p>markdown是支持HTML语法的，虽然不鼓励大量使用HTML语法，毕竟那样就丧失了markdown的意义，但是有一些HTML语法在写README的时候是很少的补充。</p><h3 id="折叠" tabindex="-1">折叠 <a class="header-anchor" href="#折叠" aria-label="Permalink to &quot;折叠&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;details&gt;</span></span>
<span class="line"><span>&lt;summary&gt;Linux环境&lt;/summary&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##### 编译</span></span>
<span class="line"><span>xxxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##### 安装</span></span>
<span class="line"><span>xxxx</span></span>
<span class="line"><span>&lt;/details&gt;</span></span></code></pre></div><details><summary>Linux环境</summary><h5 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h5><p>xxxx</p><h5 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h5><p>xxxx</p></details><h3 id="居中" tabindex="-1">居中 <a class="header-anchor" href="#居中" aria-label="Permalink to &quot;居中&quot;">​</a></h3><p>很多地方都会用到居中的效果，比如如下内容将会把一个表格在页面中居中展示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div align=&quot;center&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 表头1  | 表头2|</span></span>
<span class="line"><span>| ---------- | -----------|</span></span>
<span class="line"><span>| 表格单元   | 表格单元   |</span></span>
<span class="line"><span>| 表格单元   | 表格单元   |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><div align="center"><table><thead><tr><th>表头1</th><th>表头2</th></tr></thead><tbody><tr><td>表格单元</td><td>表格单元</td></tr><tr><td>表格单元</td><td>表格单元</td></tr></tbody></table></div><p>其他任意需要居中展示的语法，都可以放在其中。</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>还有一些非markdown语法，但是在README文件中也很实用的组件。</p><h3 id="徽章" tabindex="-1">徽章 <a class="header-anchor" href="#徽章" aria-label="Permalink to &quot;徽章&quot;">​</a></h3><p>绘制徽章，首选就是<a href="https://shields.io/" target="_blank" rel="noreferrer">shields.io</a> 具体语法去官网探索。</p><p><img src="https://img.shields.io/badge/license-MIT-green" alt="LICENSE"><img src="https://img.shields.io/badge/Author-guodongxiaren-blue.svg" alt="Author"><img src="https://img.shields.io/badge/dynamic/json?color=0084ff&amp;logo=zhihu&amp;label=%E6%9E%9C%E5%86%BB%E8%99%BE%E4%BB%81&amp;query=%24.data.totalSubs&amp;url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dguodongxiaren" alt="zhihu-shield"></p><p>其次有些第三方平台也提供方便的徽章，比如gitter：</p><p><a href="https://gitter.im/guodongxiaren/README?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge" target="_blank" rel="noreferrer"><img src="https://badges.gitter.im/guodongxiaren/README.svg" alt="Join the chat at https://gitter.im/guodongxiaren/README"></a></p><h3 id="star历史" tabindex="-1">star历史 <a class="header-anchor" href="#star历史" aria-label="Permalink to &quot;star历史&quot;">​</a></h3><p>star历史可以使用这个网站<a href="https://star-history.com/" target="_blank" rel="noreferrer">star-history.com</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[![Star History Chart](https://api.star-history.com/svg?repos=guodongxiaren/README&amp;type=Date)](https://star-history.com/#guodongxiaren/README&amp;Date)</span></span></code></pre></div><p>这段代码的显示效果如下：</p><p><a href="https://star-history.com/#guodongxiaren/README&amp;Date" target="_blank" rel="noreferrer"><img src="https://api.star-history.com/svg?repos=guodongxiaren/README&amp;type=Date" alt="Star History Chart"></a></p><hr>`,177),n=[l];function o(h,r,d,p,c,u){return e(),t("div",null,n)}const k=a(i,[["render",o]]);export{b as __pageData,k as default};
