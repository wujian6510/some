import axios from 'axios';
import JSONbig from 'json-bigint';
import { message } from 'antd';
import { getCookie } from './cookie';


// import Qs from 'qs';
// import history from '../routes/history';

// axios 配置
axios.defaults.timeout = 20000;
axios.defaults.baseURL = '/scp-web';
axios.defaults.withCredentials = true;
// axios 处理大数据时会造成精度不准确，使用此方法先转换
axios.defaults.transformResponse = [data => (JSONbig.parse(data))];


// axios.defaults.transformRequest = function (data) {
//   // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
//   return data instanceof FormData ? data : Qs.stringify(data);
// }
// axios.defaults.paramsSerializer = function (data) {
//   return data instanceof FormData ? data : Qs.stringify(data);
// }
// 成功状态码
const successCode = ['0'];

// const redirectLoginCodes = ['000002'];

const redirectCode = [403];

const responseMap = {
  code: 'resultCode',
  msg: 'resultMsg',
  data: 'resultData',
};
// 拦截响应response，并做一些错误处理
axios.interceptors.response.use(response => response,
  (err) => {
  // 失败
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误';
          break;

        case 401:
          err.message = '未授权，请登录';
          break;

        case 403:
          err.message = '拒绝访问';
          break;

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`;
          break;

        case 408:
          err.message = '请求超时';
          break;

        case 500:
          err.message = '服务器内部错误';
          break;

        case 501:
          err.message = '服务未实现';
          break;

        case 502:
          err.message = '网关错误';
          break;

        case 503:
          err.message = '服务不可用';
          break;

        case 504:
          err.message = '网关超时';
          break;

        case 505:
          err.message = 'HTTP版本不受支持';
          break;

        default:
      }
    }

    return Promise.reject(err);
  });

const ajax = (options) => {
  const {
    type, url, data, headers,
  } = Object.assign({
    headers: {
      'content-type': 'application/json',
      token: getCookie('token'), // 头部统一加tocken
    },
  }, options);

  const datas = type === 'get' ? { params: data } : { data };
  const { token } = window;
  if (token && token.key) {
    headers[token.key] = token.value;
  }
  return new Promise((resolve, reject) => axios({
    url,
    method: type,
    ...datas,
    headers,
  }).then((res) => {
    const code = res.data[responseMap.code];
    const msg = res.data[responseMap.msg];
    const repData = res.data[responseMap.data];
    // 判断是否重定向
    // if (typeof redirectCode.find(el => el === code) !== 'undefined') {
    //   window.location.href = repData.redirectUrl;
    //   return;
    // }
    if (typeof successCode.find(el => el === code) !== 'undefined') {
      // succeeCallback(repData);
      return resolve(repData);
    }
    // 调用错误回调
    // const errorMsg = `[${code}]${msg}`;
    // failCallback(errorMsg);
    return Promise.reject(msg);
  }).catch((err) => {
    let errStr = String(err);
    if (typeof err === 'object') {
      if (errStr.match('timeout')) {
        errStr = '请求超时';
      } else if (err.message) {
        errStr = err.message;
      }
    }
    message.error(errStr);
    return Promise.reject(errStr);
  }));
};

const methods = ['get', 'post', 'put', 'delete'];

const Fetch = {};

methods.forEach((n) => {
  Fetch[n] = (url, data) => ajax({
    type: n,
    url,
    data,
  });
});

export default Fetch;

// export default ajax;
