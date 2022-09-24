### 2022 Autumn Front-end Intro

这道题推荐没有开发基础的同学选做。如果您有一定的前端开发基础，建议移步隔壁 RandomCredit~
在这道题中，您需要完成一些开发环境配置并编写一个简单的 Q&A ，最后附上您的感想。我们为您准备了一些文档以供您参考。
[toc]

#### Part 0 引导部分

一般来讲，称`HTML`, `CSS`, `JavaScript`为前端三大件。在前端最传统的阵地——网页上，HTML 构成网页的基础架构，CSS 美化网页，JavaScript 则为网页添加了可交互性和内部逻辑。
三大件的教程有很多，在此列出一些我们推荐阅读的材料，当然，您也可以活用搜索引擎进行自学。

[MDN](https://developer.mozilla.org/zh-CN/): Mozilla 基金会的开发者网络平台。提供了大量关于各种 HTML 、 CSS 和 JavaScript 功能的开放、详细的文档，以及广泛的 Web API 参考资料。
[现代 JavaScript 教程](https://zh.javascript.info/): MDN 中也有提供 JavaScript 相关的教程，您可以凭您的喜好选择。

为达成本题目的要求，您可能需要阅读以下的文档：

##### HTML

- [HTML 介绍](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML)

##### CSS

- [什么是 CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/What_is_CSS)
- [开始 CSS 之<del>折磨</del>旅](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/Getting_started)

##### JavaScript

- [变量](https://zh.javascript.info/)
- [数据类型](https://zh.javascript.info/types)
- [函数表达式](https://zh.javascript.info/function-expressions)
- [数组](https://zh.javascript.info/array)
- [数组方法](https://zh.javascript.info/array-methods)
- [对象](https://zh.javascript.info/object)

我们推荐您着重阅读以下部分：

- [DOM 树](https://zh.javascript.info/dom-nodes)
- [获取 DOM 元素](https://zh.javascript.info/searching-elements-dom)
- [DOM 属性](https://zh.javascript.info/dom-attributes-and-properties)
- [浏览器事件简介](https://zh.javascript.info/introduction-browser-events)
- [JS 修改 DOM](https://zh.javascript.info/modifying-document)

##### Markdown

什么？之前不是一直在讨论前端三大件吗？为什么突然跳出一个 Markdown ？
Markdown 是一种轻量级的标记语言。如您所见，这份教程就是由 Markdown 编写而成。
[Markdown 基础语法](https://markdown.com.cn/basic-syntax/)
这个教程大概能满足您在本题中的文档撰写需求。

#### Part 1 开发配置

##### 任务要点

- 装好 Visual Studio Code
- 安装 Prettier 插件并截图
- 格式化您的代码（这点将在您提交上来的作品中体现）

##### Visual Studio Code

> Visual Studio Code 不是 IDE！不是 IDE！不是 IDE！

前端可用的写代码环境有很多（只要您愿意，记事本也是可以接受的罢）考虑到选做本题的大多都是新手，我们推荐&要求使用 Visual Studio Code （简称：VSCode，VSC）作为您完成本题的开发环境。

[VSCode 官网](https://code.visualstudio.com/)

具体的下载/安装部分就留给您自己探索啦~
在安装完毕之后，进入工作界面，您应该能在左手边的工作栏找到**扩展**选项
在应用商店中搜索扩展**Prettier**,安装，截图
接下来可以在您的编辑区域右键唤出选项中选择“**格式化**”（或者，使用快捷键**Shift+Alt+F**）美化您的代码啦~

#### Part 2 Q&A

在上网冲浪时，我们常常能在网页上看到 Q&A 问答，它们展示一些常见问题的答案以帮助解决用户的困惑。现在，我们希望您自己动手完成一个简单的 Q&A。

##### 示例

![点开前](../Q%26A/2.jpeg)
![点开后](../Q%26A/3.jpeg)
![合上](../Q%26A/1.jpeg)

##### 任务要点

- 左上角（需要与页面有一定边距）有一个 Q&A 的标题（这个写在 HTML 里也无妨）。
- 初始状态只显示问题标题，点击标题后标题框变色，字体颜色也改变，下方的答案展开。再次点击标题，答案收起，标题框变灰。
- 不要把问题、答案的具体文本嵌入到 HTML 中，而是利用 JS ，使用 DOM 操作方法，把它们插入到网页里。
  也就是说，在代码中，这些文本应该是以这样的形式出现的：

```
//具体的数据格式随意，文本内容也可在正常的范畴内自由发挥（不得少于4项，想写成乱码也没问题hhh）
const data = [
        {
            title:"这是问题",
            content:"这是答案",
        },
        {
            title:"浙大最潮的学生组织是?",
            content:"求是潮",
        },
        {
            title:"求是潮的办公室在哪里？",
            content:"小剧场B217"
        },
        {
            title:"想不出问题了随便写点什么吧",
            content:"想不出答案了随便写点什么吧"
        }
    ]
```

- 有一定美化（背景颜色或图片设置，边框字体大小颜色 etc……体现您对 CSS 的理解即可，不必过度美化）。
- 使用外部引入的 CSS/JS 文件。

##### Bonus 加分项

- 点击展开时有平滑的动画效果

#### Part 3 做题感想

##### 任务要点

- 简单写写你做完本题后的收获、心得、遇到的困难……之类的都可以 x
- 把它放在一个 Markdown 文档里，简单地添加一些些格式后随代码一起提交

##### 可选项（不是 Bonus 噢）

- 为您自己挑选一个合适的编辑 Markdown 的环境。

理论上来讲您可以用自带的记事本撰写完文本后，通过修改后缀把它变为一个 Markdown 文档。但是，如果您想要一个更优雅的写文档的环境，我们推荐您为自己安装一款 Markdown 编辑软件（如 Typora）或是编辑插件（如笔者正在使用的 VSCode Markdown 编辑插件）。

#### Part X 友情链接

[2021 秋纳二面题-前端入门指北 by 喵刀](https://github.com/QSCTech/2021-fall-round-two/tree/master/to-frontend-newbie)
您也可以去看看这篇文档中的教程（喵刀姐姐好厉害 QAQ）但是**请不要提交该题中的内容，这并不会计入您的提交成果**。
