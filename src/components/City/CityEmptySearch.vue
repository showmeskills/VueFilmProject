<template>
    <div class='City_Empty_search'>
       <div class='City_empty'>
           <img :src="require('@/assets/img/searchcity/empty.png')" alt="">
           <p>没有找到匹配的城市</p>
       </div>
    </div>
</template>

<script>
import '@/assets/less/CityLess/CityEmptySearch.less';
export default {
    name:'City_Empty_search',
}
</script>

