<template>
        <!-- City header start -->
        <div class="city_header">
            <div class="left">
                <i class="iconfont icon-guanbi" @click="$router.back()"></i>
            </div>
            <div class="title">
                当前城市-{{readCityName}}
            </div>
        </div>
        <!-- City header end -->
</template>

<script>

import '@/assets/less/CityLess/CityHeader.less'
import storageUtils from '@/utils/cityStorage.js';
export default {
    name:"city_header",
   data(){
        return{
            readCityName:storageUtils.readCityName()
        }
    }
}
</script>
