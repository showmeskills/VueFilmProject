<template>
  <!-- login page start -->
  <div class="Login">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="logo" />
    </div>
    <!-- form start -->
    <form class="login_form" action="#">
      <div class="phone">
        <span class="number" v-show="isShowPhone">手机号</span>
        <input type="text" @focus.prevent="focus" class="ipt" v-model="phone" />
        <i
          class="iconfont icon-yuanchahaox"
          v-show="!isShowPhone"
          @click.prevent="handleClear(0)"
        ></i>
        <div class="errTip" v-show="isTip">
          {{ errorMsg }}
        </div>
        <span class="phone_code"  @click="code" v-if="isCode"
          >获取验证码</span
        >
        <span class="phone_code" v-else>{{ count }}s</span>
      </div>
      <div class="code">
        <span class="code_text" v-show="isShowCode">验证码</span>
        <input type="text" v-model="number" />
        <i
          class="iconfont icon-yuanchahaox"
          v-show="!isShowCode"
          @click="handleClear(1)"
        ></i>
      </div>
    </form>
    <!-- form end -->

    <div class="btn" @click="login">
      <button>登录</button>
    </div>
  </div>
  <!-- login page end -->
</template>


<script>
import { mapMutations } from "vuex";
import "@/assets/less/LoginLess/Login.less";

export default {
  data() {
    return {
      phone: "",
      number: "",
      isShowPhone: true,
      isShowCode: true,
      isTip: false,
      errorMsg: "",
      isCode: true,
      count: 60,
    };
  },
  methods: {
    ...mapMutations(["SHOW_TABBAR_MUTATION"]),
    handleClear(hint) {
      if (hint === 0) {
        this.phone = "";
        this.errorMsg = "";
      } else {
        this.number = "";
      }
    },
    focus() {
      this.isTip = false;
    },
    login() {
      if (!this.phone) {
        this.isTip = true;
        this.errorMsg = "请输入手机号";
      } else if (this.phone.length < 12) {
        this.isTip = true;
        this.errorMsg = "手机号码长度小于11位";
      } else {
        this.isTip = false;
      }
    },
    code() {
      if (!this.phone) {
        this.isTip = true;
        this.errorMsg = "请输入手机号";
      } else {
        this.isTip = false;
        this.isCode = false;
        this.timer = setInterval(() => {
          this.count--;
          if (this.count < 0) {
            clearInterval(this.timer);
            this.count = 0;
            this.isCode = true;
          }
        }, 1000);
      }
    },
  },
  watch: {
    phone(value) {
      return value.length > 0
        ? (this.isShowPhone = false)
        : (this.isShowPhone = true);
    },
    number(value) {
      return value.length > 0
        ? (this.isShowCode = false)
        : (this.isShowCode = true);
    },
  },
  beforeDestroy() {
    this.SHOW_TABBAR_MUTATION(true);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

