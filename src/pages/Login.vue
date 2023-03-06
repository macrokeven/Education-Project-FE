<template>
  <img src="./../assets/pics/background.jpg" class="background pc" alt="">
  <img src="./../assets/pics/phone-bg-2.jpg" class="background mobile" alt="">
  <div class="my-container">
    <div class="login-box" ref="myLoginBox">
      <div class="login-header">澳門教育系統</div>
      <div class="username-box" style="margin-top: 40px;">
        <input type="text" placeholder="用户名、邮箱、手机号" class="login-input" v-model="userInput">
      </div>
      <div class="username-box" style="margin-top: 20px;">
        <input type="password" placeholder="请输入密码" class="login-input" v-model="password">
      </div>
      <div class="username-box" style="margin-top: 20px;margin-bottom: 30px;">
        <div class="login-button" @click="login">登录</div>
      </div>
      <div class="username-box" style="margin: auto 0 20px ;">
        <div class="icon-box">
          <img class="login-3rd-icon" src="../assets/icons/WeChat.svg" alt="">
          <img class="login-3rd-icon" src="../assets/icons/Alipay.svg" alt="">
          <img class="login-3rd-icon" src="../assets/icons/Tencent.svg" alt="">
          <img class="login-3rd-icon" src="../assets/icons/Dingding.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import {ElLoading} from 'element-plus';
import MyRequest from "@/utils/LetoyService";
import 'element-plus/es/components/loading/style/css'
import {Options, Vue} from 'vue-class-component';
import md5 from "js-md5";
import {MessagePlugin} from "tdesign-vue-next";

@Options({
  data() {
    return {
      loadingInstance: "",
      userInput: "",
      password: "",
    }
  },
  components: {
    ElLoading
  },
  methods: {
    // login() {
    //   this.showLoading();
    //   let loginMethod = this.checkInputType(this.userInput);
    //   MyRequest.noAuthRequest(
    //       "/login",
    //       {}, {username: this.userInput, password: md5(this.password), loginMethod})
    //       .then((response: any) => {
    //         if (response.status === 0) {
    //           sessionStorage.setItem('systemToken', response.token);
    //           this.$router.push("homePage")
    //           this.$ElTip({
    //             title: '登录成功',
    //             message: '欢迎使用喵酷家电玩管理系统！',
    //             type: 'success',
    //           });
    //           this.loadingInstance.close();
    //         } else {
    //           this.$ElTip({
    //             title: '错误',
    //             message: '用户名密码错误',
    //             type: 'error',
    //           })
    //         }
    //       })
    //       .catch(() => {
    //         this.loadingInstance.close();
    //         this.$ElTip({
    //           title: '错误',
    //           message: '用户名密码错误',
    //           type: 'error',
    //         })
    //       })
    //       .finally(() => {
    //     this.loadingInstance.close();
    //   })
    // },
    checkInputType(value: string) {
      let phoneRegExp = new RegExp("^1[3578]\\d{9}$");
      let emailRegExp = new RegExp(/^\w+@[a-z0-9]+\.[a-z]+$/i);
      if (phoneRegExp.test(value)) {
        return "phone_pwd";
      } else if (emailRegExp.test(value)) {
        return "email_pwd";
      } else {
        return "name_pwd";
      }
    },

    login() {
      this.showLoading();
      setTimeout(()=>{
        this.loadingInstance.close();
        MessagePlugin.success('登陸成功！');
        this.$router.push("Home");
      },2000)
    },
    showLoading() {
      let options = {
        target: this.$refs.myLoginBox
      }
      this.loadingInstance = ElLoading.service(options)
    }
  },
})
export default class Login extends Vue {
}
</script>
<style scoped src="../assets/css/Login.css"></style>