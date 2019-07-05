const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  // 测试环境接口
  app.use(proxy('/scp-web', {
    target: 'http://10.45.47.54:18080',
  }));
};
