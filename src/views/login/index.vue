<template>
    <div class="container">
        <el-card class="my-card">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-form :model="loginForm">
                <el-form-item>
                    <el-input v-model="loginForm.mobile" placeholder="输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginForm.code" placeholder="输入验证码" style="width:237px;margin-right:10px"></el-input>
                    <el-button>获取验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        height: 100%;
        background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
        position: absolute;
        top:0;
        left:0;
        .my-card {
            width: 400px;
            height: 350px;
            // margin: 0 auto;
            position: absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            img {
                width: 200px;
                display:block;
                margin:0 auto;
                margin-bottom: 30px;
            }

        }
    }
</style>
