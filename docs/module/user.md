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
