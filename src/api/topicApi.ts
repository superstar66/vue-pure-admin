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
  return instance.get('/updatestatus', { headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAwMSwiZXhwIjoxNzMzNzI4NTkwLCJpYXQiOjE3MzM2NDIxOTB9.wchXTcmFU44Vqnnz7t9gV2qE7A2ICC-Jbp6p7dBD62Y' } })
}

// 获取课题申报列表
export const getTopicDecList = (userName) => {
  return instance.get(`/project-by-name?name=${userName}`)
}

// 登录
export const getLogin = (data) => {
  return instance.post('/login', data)
}

// 返回用户信息
export const getUserInfo = () => {
  return instance.get('/personinfo', {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAwMSwiZXhwIjoxNzMzNzI4NTkwLCJpYXQiOjE3MzM2NDIxOTB9.wchXTcmFU44Vqnnz7t9gV2qE7A2ICC-Jbp6p7dBD62Y'
    }
  })
}

// 删除课题申报
export const delTopicDec = (title) => {
  return instance.delete(`/delete-project?title=${title}`, {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAwMSwiZXhwIjoxNzMzNzI4NTkwLCJpYXQiOjE3MzM2NDIxOTB9.wchXTcmFU44Vqnnz7t9gV2qE7A2ICC-Jbp6p7dBD62Y'
    }
  })
}

// 添加课题申报
export const subTopicDec = (data) => {
  return instance.post('/project-create', {
    ...data,
    "status": "进行中",
    "start_date": "2024-01-01",
    "end_date": "2024-12-31",
  }, {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDAwMSwiZXhwIjoxNzMzNzI4NTkwLCJpYXQiOjE3MzM2NDIxOTB9.wchXTcmFU44Vqnnz7t9gV2qE7A2ICC-Jbp6p7dBD62Y'
    },
  })
}