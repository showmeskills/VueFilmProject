<template>
    <div class="film_nav_top">
        <!-- film_Top_header start -->
        <div class="left">
            <span @click.stop="$router.push('/city')">{{readCityName}}</span>
            <img :src="require('@/assets/img/small_arrow.png')" alt="">
        </div>
        <div class="title">
            <span>电影</span>
        </div>
        <!-- in order to layout balanced -->
        <div class="right"> </div>
        <!-- film_Top_header end -->
    </div>
</template>

<script>
import '@/assets/less/FilmLess/FilmTopHeader.less';
import storageUtils from '@/utils/cityStorage.js';
export default {
    name:'film_nav_top',
     data(){
        return{
            readCityName:storageUtils.readCityName()
        }
    }
}
</script>
