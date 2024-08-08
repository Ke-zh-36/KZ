<style scoped>
.Login,
.Register {
    width: 350px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 5%;
    box-shadow: 15px 10px 20px rgba(14, 13, 13, 0.4);
    margin: 200px 100px 0 0;
    float: inline-end;
}

h1 {
    width: 100px;
    height: auto;
    text-align: center;
    color: #ccc;
}

.Login div,
.Register div {
    margin-top: 10px;
}

.input {
    width: 200px;
    height: 30px;
    margin: 10px 75px 15px 75px;
}

.Captcha {
    width: 75px;
    height: 30px;
    margin: 5px 0 10px 75px;
}

.button_login {
    width: 75px;
    height: 40px;
    margin: 10px 0 0 95px;
}

.button_register {
    width: 75px;
    height: 40px;
    margin: 10px 0 0 10px;
}

.K_Cap {
    width: 75px;
    height: 37px;
    color: #ccc;
    text-align: center;
    line-height: 37px;
    border: 1px solid #ccc;
    border-radius: 5px;
    float: right;
    left: 0;
    margin: 6px 75px 0 0;
}
</style>

<template>
    <div v-if="AreaLogin">
        <div class="Login" v-if="showLogin">
            <h1>登录</h1>
            <div>
                <el-input type="text" prefix-icon="el-icon-user" v-model="username" placeholder="用户名" class="input" />
                <el-input type="password" prefix-icon="el-icon-lock" v-model="password" placeholder="密码"
                    class="input" />
                <el-input type="text" v-model="Captcha" placeholder="验证码" class="Captcha" />
                <div type="text" class="K_Cap">{{ K_Captcha }}</div>
                <el-button type="primary" @click="login" class="button_login">登录</el-button>
                <el-button type="primary" @click="showLogin = false" class="button_register">注册</el-button>
            </div>
        </div>
        <div class="Register" v-else>
            <h1>注册</h1>
            <div>
                <el-input type="text" prefix-icon="el-icon-user" v-model="username" placeholder="用户名" class="input" />
                <el-input type="password" prefix-icon="el-icon-lock" v-model="password" placeholder="密码"
                    class="input" />
                <el-input type="password" prefix-icon="el-icon-lock" v-model="rePassword" placeholder="确认密码"
                    class="input" />
                <el-button type="primary" @click="showLogin = true" class="button_login">登录</el-button>
                <el-button type="primary" @click="register" class="button_register">注册</el-button>
            </div>
        </div>
    </div>

</template>
<script>
import K_axios from '../utils/Kaxios'
import rou from '@/router/index'
import Kmessage from '../utils/Kmessage'
const option = {
    data() {
        return {
            username: '',
            password: '',
            rePassword: '',
            Captcha: '',
            K_Captcha: '',
            InfoArray: [],
            AreaLogin: true,
            showLogin: true
        }
    },
    mounted() {
        let str = ''
        str = String.fromCharCode(Math.floor(65 + Math.random() * 26))
        for (let i = 0; i < 2; i++) {
            str += Math.floor(0 + Math.random() * 9)
            str += String.fromCharCode(Math.floor(97 + Math.random() * 26))
        }
        for (let i = 0; i < 5; i++) {
            this.K_Captcha += str.charAt(Math.floor(0 + Math.random() * str.length))
        }

    },
    methods: {
        async login() {
            if (this.username !== ' ' && this.password !== ' ') {
                const resp = await K_axios.post('/Login', {
                    username: this.username,
                    password: this.password
                })
                this.InfoArray = resp.data.data
                try {
                    if (this.InfoArray[0].username === this.username && this.InfoArray[0].password === this.password) {
                        if (this.Captcha.localeCompare(this.K_Captcha)) {
                            rou.push('/home/headPage')
                            Kmessage.KmessageS(resp.data.msg)
                        } else {
                            this.$message({
                                message: `验证码错误`,
                                type: 'error',
                                center: true
                            });
                        }
                    }

                } catch (error) {
                    console.log('用户名或密码错误')
                }
            } else {
                console.log('请输入用户名或密码')
            }
        },
        async register() {

            if (this.rePassword === this.password) {
                const resp = await K_axios.post('/Register', {
                    username: this.username,
                    password: this.password
                })
                if (this.username !== ' ' && this.password !== ' ') {
                    Kmessage.KmessageE(resp.data.msg)
                    console.log(resp.data.msg)
                }
                console.log(resp);
                if (resp.data.msg === '注册失败!') {
                    Kmessage.KmessageE(resp.data.msg)
                } else if (resp.data.msg === '注册成功!') {

                    Kmessage.KmessageS(resp.data.msg)
                }
            } else {
                console.log('两次输入密码不正确!')
            }
        }
    }
}

export default option
</script>
