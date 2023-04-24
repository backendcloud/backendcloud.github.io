---
slug: GUI-ChatGPT
title: 发布一个开源小项目 - GUI版的ChatGPT API 
authors: [backendcloud]
tags: 
- 通用人工智能
---

# 发布一个开源小项目 - GUI版的ChatGPT API 

代码放在： https://github.com/AutoGeneralAI/ChatGPT/

在线体验： https://huggingface.co/spaces/AutoGeneralAI/ChatGPT

> 本项目不是web版的ChatGPT，而是调用ChatGPT(OpenAI)官方API的GUI for ChatGPT API。

## 背景
自从ChatGPT开放了官方API后，调用API的产品层出不穷，各种软件，各种Chrome插件，各种IDE插件，各种网站，各种小程序，各种APP，各种聊天机器人。

于是自己也开发了些调用ChatGPT API的小项目，比如：
* https://github.com/AutoGeneralAI/gpt-pdf
* https://github.com/AutoGeneralAI/poem2picture

但这些项目都是命令行的，不够直观和界面友好，于是就想做一个GUI版的ChatGPT API，于是就有了这个项目。

可以在线体验 https://huggingface.co/spaces/AutoGeneralAI/ChatGPT


## 使用方法
将自己的OpenAI API KEY 获取地址： https://platform.openai.com/
放入界面的`key`输入框，然后就可以愉快的使用ChatGPT，愉快的和ChatGPT对话了。

> 放心，这个项目不会上传你的API KEY到任何地方，因为这个项目是完全开源的。

在线体验的界面如下：

![](https://user-images.githubusercontent.com/130114082/233837074-a260c2ff-4d93-4efd-ad3f-b97da7db82e7.png)

## 代码

代码很简单，就是两个简单的函数，一个调用的openai官方库，一个调用了Gradio前端框架。

```python
def openai_chat(prompt):
    completions = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=1024,
        n=1,
        temperature=0.5,
    )
```

```python
def chatbot(key, input, history=[]):
    openai.api_key = key
    output = openai_chat(input)
    history.append((input, output))
    return history, history

gr.Interface(fn = chatbot,
             inputs = ["text","text",'state'],
             outputs = ["chatbot",'state']).launch(debug = True)
```