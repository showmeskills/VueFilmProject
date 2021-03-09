<template>
<!-- center_order_start -->
     <div class="center_order">
         <ul class="center_order_wrapper">
             <li @click='check'>
                 <img src="../../assets/img/CenterImg/movie_order.png" alt="">
                 <p>电影订单</p>
             </li>
             <li @click='check'>
                 <img src="../../assets/img/CenterImg/commodity_order.png" alt="">
                 <p>商品订单</p>
             </li>
         </ul>
    </div>
<!-- center_order_end -->
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