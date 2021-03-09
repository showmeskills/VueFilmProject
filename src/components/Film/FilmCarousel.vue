<template>
<!-- film top swiper start -->
    <mt-swipe :key="filmAdertisement.length" :show-indicators="false">
        <mt-swipe-item v-for="data in filmAdertisement" :key="data.bannerId">
            <img class="advertise" :src="data.imgUrl" alt="" @click.prevent='toDetail(data.actionData)'>
        </mt-swipe-item>
    </mt-swipe>
<!-- film top swiper end -->
</template>

<script>
import {mapState} from 'vuex';
export default {
    methods:{
        toDetail(id){
            let ID = JSON.parse(id);
            this.$router.push(`/detail/${ID.businessId}`);
        }
    },
    computed:{
        ...mapState(['filmAdertisement'])
    }
}
</script>

<style lang="less" scoped>
/*min-swiper start*/
.mint-swipe{
    height:30vh;
    width:100%;
    padding-top:.8rem;
    .advertise{
        width: 100%;
        height:80%;
    }
}
/*min-swiper end*/
</style>

