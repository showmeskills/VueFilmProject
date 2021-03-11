<template>
    <div class="City_search_list">
        <ul>
            <li v-for='city in filterCities' :key="city.cityId">
               {{city.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import '@/assets/less/CityLess/CitySearchList.less';
import storageUtils from"@/utils/cityStorage.js";
export default {
    name:'City_search_list',
    props:{
        'searchCity':String,
    },
    data(){
        return{
            cityList:storageUtils.readAllCity(),
        }
    },
    computed:{
        filterCities(){
           let {searchCity,cityList} = this;
           let arr = [...cityList];
           let searchReg = /\w/g;
           if(searchCity.trim()){
               arr = arr.filter(item=> searchReg.test(searchCity)? item.pinyin.indexOf(searchCity) !== -1 :item.name.indexOf(searchCity) !== -1);
           }
           if(arr.length>0){
            this.$bus.$emit('switch',true);
                return arr;
           }else{
            this.$bus.$emit('switch',false);
                return arr;
           }
        },
    }
}
</script>