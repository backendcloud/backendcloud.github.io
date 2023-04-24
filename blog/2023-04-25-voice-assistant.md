---
slug: voice-assistant
title: 发布一个开源小项目 - 语音助手
authors: [backendcloud]
tags: 
- CICD
---

实现的功能：语音助手。通过调用OpenAI官方API实现。

在线demo： https://huggingface.co/spaces/AutoGeneralAI/voice-assistant

代码仓库： https://github.com/AutoGeneralAI/voice-assistant

## 使用方法

将自己的OpenAI API KEY https://platform.openai.com/ 放入key输入框，然后就可以愉快的语音对话了。

> 初次使用，浏览器，比如Chrome会询问是否允许打开麦克风，选择允许。

> 可以保存对话记录。目前只实现了对话。人类的角色可以语音，AI角色还是以文字输出。文字朗读出来的功能留待下次实现或者欢迎提pr。

![image](https://user-images.githubusercontent.com/105260427/234028574-eeb218f9-363a-4fee-88bf-8170b677e2e1.png)

**input:**

点击开始录音，然后说话，说完点击停止录音，点击发送按钮，然后AI会回复。再次录制语音，AI会继续回复。（再次录制语音，要点击叉按钮后才可以录下一条语音）

**output:**

```txt
user: How to be a qualified programmer?

assistant: Get an education, learn different programming languages, build projects, and practice coding regularly. Also, stay up-to-date with industry trends and technology advancements.

user: 你好,你会说中文吗?

assistant: 是的，我能说中文。
```