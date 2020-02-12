
const http = require('http');
// 导入解析 URL 地址的核心模块
const urlModule = require('url');

const server = http.createServer();
// 监听 服务器的 request 请求事件，处理每个请求
server.on('request', (req, res) => {
  const url = req.url;

  // 解析客户端请求的URL地址
  var info = urlModule.parse(url, true);

  // 如果请求的 URL 地址是 /getjsonp ，则表示要获取JSONP类型的数据
  if (info.pathname === '/getjsonp') {
    // 获取客户端指定的回调函数的名称
    var cbName = info.query.callback;
    // 手动拼接要返回给客户端的数据对象
    var data = {
      stutas: 0,
      message: [
        { id: 1, name: '奥迪', ctime: new Date(), },
        { id: 2, name: '玛莎拉蒂', ctime: new Date(), },
        { id: 3, name: '奔驰', ctime: new Date(), },
        { id: 4, name: '宝马', ctime: new Date(), },
        { id: 5, name: '路虎', ctime: new Date(), },
        { id: 6, name: '五菱宏光', ctime: new Date(), },
        { id: 7, name: '比亚迪', ctime: new Date(), },
        { id: 8, name: '本田', ctime: new Date(), },
        { id: 9, name: '丰田', ctime: new Date(), },
      ]
    }
    console.log(data.message)
    // 拼接出一个方法的调用，在调用这个方法的时候，把要发送给客户端的数据，序列化为字符串，作为参数传递给这个调用的方法：
    var result = `${cbName}(${JSON.stringify(data)})`;
    // 将拼接好的方法的调用，返回给客户端去解析执行
    res.end(result);
  } else {
    res.end('404');
  }
});

server.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000');
});