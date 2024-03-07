// 导入Express模块
const express = require('express');
// 导入cors中间件
const cors = require('cors');
// 创建一个Express应用
const app = express();

// 配置cors中间件，允许来自所有源的跨域请求
// 您可以根据需要调整此配置，例如限制特定的源或端口
// 使用cors中间件
app.use(cors());

// 定义一个路由，当访问根路径('/')时返回'Hello World'
app.get('/', (req, res) => {
  res.json({name: 'tom111'});
});

// 设置服务器监听3000端口
app.listen(8083, () => {
  console.log('Server is running on http://localhost:8083');
});
