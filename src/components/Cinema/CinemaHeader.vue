<template>
    <div class="Cinema_header">   
        <div class="cinema_header_city" 
            @click.stop='$router.push("/city")'
        >
            {{readCityName}}
            <i class="iconfont icon-arrow-down"></i>
        </div>
        <div class="cinema_header_title">影院</div>
        <div class='ciname_search'
            @click.stop='$router.push("/cinema/search")'
        >
            <i class='iconfont icon-home_search'></i>
        </div>
    </div>
</template>

<script>
import '@/assets/less/CinemaLess/CinemaHeader.less';
import storageUtils from '@/utils/cityStorage.js';
export default {
    name:'Cinema_header',
    data(){
        return{
            readCityName:storageUtils.readCityName()
        }
    }

}
</script>

<style>

</style>