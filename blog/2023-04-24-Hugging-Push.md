---
slug: Hugging-Push
title: 发布一个开源小项目 - Hugging Push
authors: [backendcloud]
tags: 
- CICD
---

Hugging Push的Github市场的URL： https://github.com/marketplace/actions/hugging-push

Hugging Push项目的代码仓库： https://github.com/backendcloud/hugging-push

或者直接在Github市场搜索项目名称 Hugging Push

![](https://cdn.jsdelivr.net/gh/filess/img11@main/2023/04/24/1682337591710-bd51f152-164f-480b-9165-d39cd1d66a44.png)

![](https://cdn.jsdelivr.net/gh/filess/img19@main/2023/04/24/1682337613153-9ec1a337-4dfa-4d96-9be5-dd71a650cd06.png)

![](https://cdn.jsdelivr.net/gh/filess/img4@main/2023/04/24/1682337591712-4b9ad01c-5580-4e37-b925-4f6dae6b90d2.png)


## 需求背景

做通用人工智能相关的项目的开发，往往需要用到hugging face，hugging face为人工智能项目提供免费的2核cpu算力，收费的GPU算力和更多核的CPU算力。需要将项目代码放到hugging face的代码仓库，才能在hugging face平台编译运行。但一般代码都是习惯于托管在Github上，所以需要一个CICD工作流，同步两边的代码仓库。

## Hugging Push实现的功能

Hugging Push 这个GitHub action 完成的事情是将Action所执行的github的代码仓库同步到hugging face space 的代码仓库。不需要手工同步，只要维护好Github一份代码仓库即可。



## 使用方法

首先用自己的账户登陆并在Hugging Face的后台管理界面创建一个token，赋予有可写的权限并将其作为GitHub Secret。

```yaml
name: Deploy to huggingface

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: backendcloud/hugging-push@v0.2.3
        with:
          # The Hugging Face repo id you want to sync to.
          # A repo with this name will be created if it doesn't exist. Required.
          # The github username is not included. ex: not like this 'username/reponame', but like this: 'reponame'
          # the key of huggingface_repo can be omitted. If the key is commented out, it defaults to the same name as the Github repository. 
          # huggingface_repo: 'ChatGPT'

          # Hugging Face token with write access. Required.
          # Here, we provide a token that we called `HF_TOKEN` when we added the secret to our GitHub repo.
          hf_token: ${{ secrets.HF_TOKEN }}

          # The type of repo you are syncing to: model, dataset, or space.
          # Defaults to space.
          repo_type: 'space'
  
          # If true and the Hugging Face repo doesn't already exist, it will be created
          # as a private repo.
          #
          # Note: this param has no effect if the repo already exists.
          private: false

          # If repo type is space, specify a space_sdk. One of: streamlit, gradio, or static
          #
          # This option is especially important if the repo has not been created yet.
          # It won't really be used if the repo already exists.
          space_sdk: 'gradio'
```

> `- uses: actions/checkout@v2`这个对仓库的checkout的action不需要，因为这个步骤已经包含在Action: backendcloud/hugging-push 当中。