<template>
  <div class="main-bg ccc" >

  <!--  <img src="../assets/images/login_bg.jpg" style="width: 100%"/>-->
    <p style="text-align: center;position: absolute;top:10%;width: 100%"><img src="../assets/images/logo.png"/></p>

    <mu-form ref="form" :model="validateForm" class="mu-demo-form login-form">
      <mu-form-item  prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username"  icon=":iconfont icon-geren" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item  prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" icon=":iconfont icon-mima" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item  style="min-height: 30px;padding: 0;margin: 0">

          <mu-checkbox v-model="isChecked" label="记住密码" ></mu-checkbox>


      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit" style="width: 95%">登录</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
  export default {
    data () {
      return {
        loading: false,
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名'},
          { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
        isChecked:true,
        validateForm: {
          username: '',
          password: '',

        }
      }
    },
    created () {
      var lett=this;
      document.onkeydown=function(e){
        var key=window.event.keyCode;
        if(key==13){
          lett.submit();
        }
      }
     this.getCookie()
    },
    methods: {
      submit () {

        // 判断复选框是否被勾选; 勾选则调用配置Cookie方法
        if (this.isChecked) { // 记住密码

          this.setCookie(this.validateForm.username, this.validateForm.password, 30); // 保存期限为30天
        } else {
          this.clearCookie(); // 清空 Cookie
        }
        this.$refs.form.validate().then((result) => {
          if(result){
            this.loading = true;

            this.$store.dispatch('Login',this.validateForm).then(() => {
              this.loading = false

              this.$router.push({ path: '/helloWorld' })
            }).catch(() => {
              this.loading = false
            })
          }
        });
      },
      // 设置Cookie
      setCookie(username, password, exdays) { // 用户名, 密码, 保存天数
        let exdate = new Date(); // 获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);
        // 字符串拼接cookie
        window.document.cookie = 'userName=' + username + ';path=/;expires=' + exdate.toGMTString();
        window.document.cookie = 'userPwd=' + password + ';path=/;expires=' + exdate.toGMTString();
      },
      // 读取Cookie
      getCookie() {
        if (document.cookie.length > 0) {
          this.isChecked = true
          let arr = document.cookie.split('; '); // 这里显示的格式需要切割一下自己可输出看下
          for (let i = 0; i < arr.length; i++) {
            let arr2 = arr[i].split('='); // 再次切割
            // 判断查找相对应的值
            if (arr2[0] == 'userName') {
              this.validateForm.username = arr2[1]; // 保存到保存数据的地方
            } else if (arr2[0] == 'userPwd') {
              this.validateForm.password = arr2[1];
            }
          }
        }else{
          this.isChecked = false
        }
      },
      // 清除Cookie
      clearCookie() {
        this.setCookie('', '', -1); // 修改2值都为空，天数为负1天就好了
      }

    }
  };
</script>
<style scoped>
  .main-bg{
    width: 100%;
    height: 100%;

  }
.mu-demo-form{
  position: absolute;
  z-index: 1000;
  top: 10%;
  background: rgba(255, 255, 255, 0.85);
  width: 85%;
  height: 47%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 13% 3%;
  border-radius: 5px;
}
  .login-form /deep/ .mu-text-field-input{
    text-indent: 45px;
    height: 39px;
  }
  .ccc{
background-image: url('../assets/images/login_bg.jpg');
    background-size: cover;
  }
</style>
