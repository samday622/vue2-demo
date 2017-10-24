<template>
  <div class="login-box">
    <el-row>
      <el-col :span="6" offset="9">
        <el-input id="name"  v-model="form.username" placeholder="请输入帐号">
          <template slot="prepend">帐号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" offset="9">
        <el-input id="password" v-model="form.password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" offset="9">
        <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
  @import "../style/login";
</style>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions([
        'USER_SIGNIN'
      ]),
      check: function (event) {
        // 获取值
        var username = this.form.username
        var password = this.form.password
        if (username === '' || password === '') {
          this.$message({
            message: '账号或密码为空！',
            type: 'error'
          })
        } else {
          debugger
          this.$api.post('/back/login', this.form, r => {
            this.dat = r.data
            debugger
            if (r.success === false) {
              this.USER_SIGNIN(this.form)
              this.$router.replace({ path: '/home' })
            }
          })
        }
      }
    }
  }
</script>
