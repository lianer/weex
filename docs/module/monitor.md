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
