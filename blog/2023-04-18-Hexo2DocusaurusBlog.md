---
slug: Hexo2DocusaurusBlog
title: 发布一个开源小工具 Hexo2DocusaurusBlog
authors: [backendcloud]
tags: 
- 后端云发布的开源小项目
---

# Hexo2DocusaurusBlog

> 源码放在： https://github.com/backendcloud/Hexo2DocusaurusBlog

> 发布的可执行文件放在： https://github.com/backendcloud/Hexo2DocusaurusBlog/releases

## 需求背景

网站准备从Hexo迁移到Docusaurus了。但是原来Hexo的博客不能直接迁移到Docusaurus，需要做一些转换。这类博文有286篇，若量不多可以手工处理下，但是量大的话，就需要写个工具来处理了。

本着不重复造轮子的原则，先去Github上搜了下，相关的项目只有2个，一个golang写的工具，一个ruby写的工具，star数都为0。看了下代码，发现无法使用，无法使用的原因是作者是根据自己博客代码项目的结构写的转换工具，和我的不一样，比如其中一个作者是将自己的Obsidian笔记用在了hexo上，后来再次转换为Docusaurus博客。格式，目录结构差异较大，没法直接用。我的是按照官方文档推荐的目录结构，文件命名方式，内容结构。别人现成的工具无法直接拿来用。于是重新开发了个工具。


## 简介

此工具用于将 Hexo 博客转换为 Docusaurus 博客。

## 用法

```bash
Hexo2DocusaurusBlog.exe -h
  -author string
        blog author name
  -docusaurus string
        docusaurus blog directory
  -dry-run
        perform a trial run with no changes made
  -hexo string
        hexo blog directory
```

## 例子

### Input

Hexo 博客的markdown文件位于: input/hexo-blog-for-test.md:

```bash
Hexo2DocusaurusBlog.exe -hexo ./input -docusaurus ./output -author backendcloud -dry-run
INFO: Convert Hexo Blog [hexo-blog-for-test] to Docusaurus Blogs Success!
INFO: [DRY-RUN] Write Docusaurus Blog [hexo-blog-for-test] Success!
```

> -dry-run : perform a trial run with no changes made


### Output


```bash
Hexo2DocusaurusBlog.exe -hexo ./input -docusaurus ./output -author backendcloud
INFO: Convert Hexo Blog [hexo-blog-for-test] to Docusaurus Blogs Success!
INFO: Write Docusaurus Blog [hexo-blog-for-test] Success!
```

执行工具，转换后的 Docusaurus 博客的markdown文件位于: output/2023-04-17-hexo-blog-for-test.md