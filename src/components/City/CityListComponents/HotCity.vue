<template>
<!-- hot city start -->
    <div class="hot_city">
        <div class="allCities">
            热门城市
        </div>
        <ul class="hot_city_list">
            <li v-for="city in filterCityList" :key="city.cityId"
             @click='handleClick(city.cityId, city.name)'
            >
                {{city.name}}
            </li>
        </ul>
    </div>
<!-- hot city end -->
</template>

<script>
import {mapState,mapActions} from 'vuex';
import '@/assets/less/CityLess/HotCity.less';
export default {
    name:'hot_city',
    methods:{
        ...mapActions(['A_GPSCITY_ID']),
        handleClick(cityId,cityName){
             this.A_GPSCITY_ID({
                id:cityId,
                name:cityName
            })
            this.$router.back();
        }
    },
    computed:{
        ...mapState(["cityList"]),
        filterCityList(){
            let arr = [];
            this.cityList.forEach(item=>item.list.map(value=>{
                   return value.isHot != 1?  null: arr.push(value);
                }));
            return arr; 
        }
    }
}
</script>
