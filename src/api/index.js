// 目的将登录请求axios.post封装到一个方法中
import axios from 'axios'
// 设置基准路径，目的是为了给所有的请求都加上基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// export const login = (obj) => {
//   // axios的ppost方法执行完成以后得到的一个promise对象，必须将这个promise对象return回去
//   return axios.post('login', obj)
// }
export const login = obj => axios.post('login', obj)
