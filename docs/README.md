# 实验任务教程

这是华工开源俱乐部的实验任务教程文档。

::: warning
本网站托管旧的 MSCTutorial，不再更新。

新网址：[https://lab.scutosc.cn/](https://lab.scutosc.cn/)

新的仓库地址：[https://github.com/SCUTOSC/Lab](https://github.com/SCUTOSC/Lab)
:::

## 导航

- [任务书](tasks/)

## 构建文档

### 安装依赖

1. 首先您需要在本地安装 [Node.js](https://nodejs.org/en/) 和 [Git](https://git-scm.com/)
2. 更换npm源：`npm config set registry https://registry.npmmirror.com/`
3. 安装依赖的npm包：`npm install`

### 构建

1. `npm run docs:dev` 构建并启动本地服务器，用于实时预览
2. `npm run docs:build` 构建文档，用于发布. 构建好的文档在 `docs/.vuepress/dist` 目录下


## 联系我们

如果您对本文档有任何问题，可以通过以下方式联系本文档网站管理者：

- 龙进 <longjin@dragonos.org>
- 池克俭 <chikejian@dragonos.org>
- 何懿聪 <heyicong@dragonos.org>
