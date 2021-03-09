<template>
<!-- center header start -->
   <div class="center_header">
        <div class='center_avatar'>
            <div class="center_avatar_wrapper">
                <img @click="check" src="../../assets/img/CenterImg/unLogin.png" alt="">
            </div>
        </div>
        <div class='center_login'>
            <p @click="check">立即登录</p>
        </div>
    </div>
<!-- center header end -->
</template>

<script>
export default {
    props:{
        checkLogin:Function,
    },
    methods:{
        check(){
            this.checkLogin();
        }
    }
}
</script>