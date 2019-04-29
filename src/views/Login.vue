<template>
    <div class="login">
        <el-form ref="loginRef" :rules="loginRules" :model="loginForm" class="container">
          <el-form-item>
              <img class="avatar" src="../assets/avatar.jpg" alt="头像">
          </el-form-item>
          <el-form-item prop="username">
              <el-input prefix-icon="myicon myicon-user" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input prefix-icon="myicon myicon-key" v-model="loginForm.password"
              type="password"
              @keydown.enter.native="handLogin">
              </el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="login-btn" @click="handLogin">登录</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {login} from '@/api'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 校验规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          {
            required: true, message: '请输入密码', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handLogin () {
      this.$refs.loginRef.validate((isPass) => {
        if (isPass) {
          login(this.loginForm)
            .then(res => {
              console.log(res)
              if (res.data.meta.status === 200) {
                // 跳转到首页
                this.$router.push({ name: 'home' })
              } else {
                this.$message.error(res.data.meta.msg)
              }
            })
        } else {
          this.$message.error('校验未通过，请重新输入')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
