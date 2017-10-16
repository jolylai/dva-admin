## dva-admin
[![React](https://img.shields.io/badge/react-^15.6.1-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^2.11.2-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![dva](https://img.shields.io/badge/dva-^1.2.0-orange.svg?style=flat-square)](https://github.com/dvajs/dva)

### 使用antd
```
yarn add antd babel-plugin-import

// 修改.roadhogrc
  "extraBabelPlugins": [
-    "transform-runtime"
+    "transform-runtime",
+    ["import", { "libraryName": "antd", "style": "css" }]
  ],
```

### dva-loading处理loading状态
```
yarn add dva-loading
// 修改 src/index.js 加载插件，在合适的地方加入下面两句：

+ import createLoading from 'dva-loading';
+ app.use(createLoading());
```

### dva-cli
```
// route
dva g route user
// model
dva g model user
// component 
dva g component Users/Users
```

### mock
```
// mock.config.js
const mock = {}
require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
    Object.assign(mock, require('./mock/' + file))
})
module.exports = mock
```

### request封装

### req.body => undefined
```
npm uninstall roadhog -g
npm install roadhog@0.6.0-beta.3 -g
```

### router (important function)
// index.js
app.router(require('./router'))

// router.js
- const Router = ({ history, app }) => {
  return <Router history={history} routes={routes} >
}
export default Router
- [require.ensure()](http://www.css88.com/doc/webpack2/guides/code-splitting-require/)
```
import { Router } from 'dva/router'
```