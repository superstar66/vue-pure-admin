import axios from "axios";
const instance = axios.create({
  baseURL: '/cors',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 获取课题审批列表
export const getTopicAppList = () => {
  return instance.get('/allproject')
}

// 获取课题申报列表
export const getTopicDecList = (userName) => {
  return instance.get(`/project-by-name?name=${userName}`)
}

// 提交课题申报
export const subTopicDec = (data) => {
  return instance.post('/project-create', data)
}