# 实验任务教程

这是华工开源俱乐部的实验任务教程文档。

***此仓库现已存档，请移步 [SCUTOSC/Lab](https://github.com/SCUTOSC/Lab) 仓库***

> ~~MSC这飘渺一生，将在OSC时代得到新生~~

## 构建文档

### 安装依赖

1. 首先您需要在本地安装 [Node.js](https://nodejs.org/en/) 和 [Git](https://git-scm.com/)
2. 更换npm源：`npm config set registry https://registry.npmmirror.com/`
3. 安装依赖的npm包：`npm install`

### 构建

1. `npm run docs:dev` 构建并启动本地服务器，用于实时预览
2. `npm run docs:build` 构建文档，用于发布. 构建好的文档在 `docs/.vuepress/dist` 目录下