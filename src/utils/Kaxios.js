import axios from "axios"

const K_axios=axios.create({
    baseURL: "http://localhost:27617",
    withCredentials: true
})
// 添加请求拦截器
K_axios.interceptors.request.use(
    function (config) {
        config.headers={
            Authorization: ' '
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
// 添加响应拦截器
K_axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (error.response.status == 400) {
            console.log("请求参数不正确")
            return Promise.resolve(400)
        }else if(error.response.status == 401){
            console.log("跳转登陆页面")
            return Promise.resolve(401)
        }else if(error.response.status == 404){
            console.log("资源未找到")
            return Promise.resolve(404)               
        }else if(error.response.status == 500){
            console.log("服务器错误")
            return Promise.resolve(500)               
        }
        return Promise.reject(error)
    }
)

export default K_axios