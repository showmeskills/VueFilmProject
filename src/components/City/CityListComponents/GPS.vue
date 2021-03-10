<template>
<!-- GPS start -->
    <div class="GPS">
        <div class="GPS_title">GPS定位你所在的城市</div>
        <div class="GPS_city" v-if='GPSCity' 
            @click='handleClick(cityId, GPSCity)'
        >{{GPSCity}}</div>
        <div class="GPS_city" v-else>定位失败</div>
    </div>
<!-- GPS end -->
</template>

<script>
import '@/assets/less/CityLess/GPS.less';
import storageUtils from '@/utils/cityStorage.js';
import {mapActions} from 'vuex';
export default {
    name: "GPS",
    data(){
        return{
            GPSCity:storageUtils.readCityName(),
            cityId:storageUtils.readCityId(),
        }
    },
     methods: {
        ...mapActions(['A_GPSCITY_ID']),
        handleClick(cityId, cityName) {
            this.A_GPSCITY_ID({
                id:cityId,
                name:cityName
            })
            this.$router.back();
        },
    },
}
</script>
