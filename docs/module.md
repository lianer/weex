# Module 设计文档

## Monitor Module <sup>`1.0+`</sup>

### 概述

埋点相关功能

### 用法

`const monitor = weex.require('monitor')`

### API

#### visit([data])

页面访问埋点，pv 埋点

##### 参数

- `data {string}` 跟随 PV 一起上报的数据，可选

#### click(name[, data])

点击时间埋点，click 埋点

##### 参数

- `name {string}` 点击位名称，必填
- `data {Object}` 随点击埋点一起上报的数据，可选

---

## Share Module <sup>`1.0+`</sup>

### 概述

分享相关配置

### 用法

`const share = require('share')`

### API

#### showShareView()

显示分享弹窗

#### shareTo(options)

分享到指定渠道，用于通过页面中的点击位直接触发分享行为

##### 参数

- `options {Object}` 必填
  - `shareTo {string}` 分享渠道，必填，格式如下：
    - 朋友圈 `timeline`
    - 微信好友 `weixin`
    - QQ空间 `qqzone`
  - `title {string}` 标题，可选，默认微医通用标题
  - `desc {string}` 描述，可选，默认微医通用描述
  - `link {string}` 分享链接，分享图标，必须使用 `https` 绝对路径，可选，默认当前页面链接
  - `imgUrl {string}` 分享图标，必须使用 `https` 绝对路径，可选，默认微医通用 logo

#### showShareButton()

显示导航栏分享按钮

#### hideShareButton()

隐藏导航栏分享按钮

---

## User Module <sup>`1.0+`</sup>

### 概述

用户模块

### 用法

`const user = weex.requireModule('user')`

### API

#### getToken(callback)

获取用户 token

##### 参数

- `callback {function (data)}` 回调函数，必填，格式如下：
  - `data {Object}`
    - `token {string}` 用户 token，若用户未登录，返回空字符串`""`

#### gotoLogin(callback)

唤起登录弹窗

##### 参数

- `callback {function (data)}` 回调函数，必填，格式如下：
  - `data {Object}`
    - `token {string}` 用户 token，若登录失败，返回空字符串`""`

<!-- #### gotoVerify([options, callback])

前往实名认证

##### 参数

- `options {Object}` 可选
  - `backTo {string}` 返回到指定页面，可选值如下：
    - `current` - 关闭实名认证流程，返回当前页面
    - `home` - 关闭所有页面，返回微医首页
    - `url` - 关闭所有页面，并跳转到指定 URL 页面，该值需配合 `url` 参数使用
  - `url {string}` 实名认证结束后跳转的页面，当 `backTo` 为 `url` 时，该项必填
- `callback {function (data)}` 回调函数，可选，格式如下：
  - `data {Object}`
    - `success {string}` "true" or "false" -->

#### gotoVerify(callback)

前往实名认证

##### 参数

- `callback {function (data)}` 回调函数，必填，格式如下：
  - `data {Object}`
    - `success {string}` "true" or "false"，实名认证是否成功
