const http = require('http');
// 导入解析 URL 地址的核心模块
const urlModule = require('url');

// 创建一个 http 服务器
const server = http.createServer();

// 监听服务器 request 请求
server.on('request', (req, res) => {
    // const url = req.url;
    // ES6结构赋值，把请求的 url 解析成一个对象的形式
    const {pathname : url, query} = urlModule.parse(req.url, true);

    if(url === '/getscript'){
        // var scriptStr = 'show()';

        var data = {
            name: 'zs',
            age: 22,
            gender: '男',
            hobby: ['吃饭', '睡觉', '运动']
          }

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`;

        res.end(scriptStr);


    }else{
        res.end('404')
    }
})



server.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000');
  });