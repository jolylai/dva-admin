export default{
  "entry": "src/index.js",
  "proxy": {
    "/api/music/qq": {
      "target": "http://music.qq.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/music/qq" : "" }
    },
    "/api/music/photo": {
      "target": "http://imgcache.qq.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/music/photo" : "/music/photo" }
    }
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    }
  }
}
