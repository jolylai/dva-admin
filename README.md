## dva-admin
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

### router
[require.ensure()](http://www.css88.com/doc/webpack2/guides/code-splitting-require/)