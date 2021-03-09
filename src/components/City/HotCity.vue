<template>
    <div class="hot_city">
        <ul>
            <li v-for="data in cityList" :key="data.index">
                <span v-for="city in data.list" :key='city.cityId'>
                    {{ city | filterCity}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
name:'hot_city',
   filters:{
       filterCity(value){
           return value.isHot === 1? value.name : '';
       }
   },
computed:{
     ...mapState(["cityList"]),
  }
}
</script>

<style lang="less" scoped>
.hot_city{
    background-color:green;
}
</style>