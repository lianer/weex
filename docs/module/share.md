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
