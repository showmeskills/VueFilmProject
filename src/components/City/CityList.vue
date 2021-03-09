<template>
    <mt-index-list class="city_index" :infinite-scroll-disable="true">
        <div>
          <GPS/>
          <HotCity/>
        </div>
        <mt-index-section v-for="data in  cityList" :key="data.index" :index="data.index">
            <li v-for='city in data.list' :key="city.cityId" @click='handleClick(city.cityId, city.name)'>
                <mt-cell :title=city.name></mt-cell>
            </li>
        </mt-index-section>
    </mt-index-list>
</template>

<script>
import GPS from "@/components/City/GPS.vue";
import HotCity from "@/components/City/HotCity.vue";
import '@/assets/less/CityLess/CityList.less';
import {mapState,mapActions} from 'vuex';
export default {
  name:'ctiy_index',
  components: {
    GPS,
    HotCity,
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
  computed:{
     ...mapState(["cityList"]),
  }
};
</script>

