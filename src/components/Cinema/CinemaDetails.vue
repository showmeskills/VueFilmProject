<template>
<!-- cinemat details start -->
  <div class="Cinema_details">
    <ul>
      <li v-for="ciname in cinemaList" :key="ciname.cinemaId">
        <router-link to="#">
          <div class="cinema_wrap">
            <div class="cinema_details">
              <div class="cinema_name">
                {{ ciname.name }}
              </div>
              <div class="cinema-address">
                {{ ciname.address }}
              </div>
            </div>
            <div class="other_wrap">
              <div class="price">
                <span class="yuan">￥</span>
                <span class="money">{{ ciname.lowPrice | addZero }}起</span>
                </div>
              <div class="distance">{{ ciname.Distance | addDistance }}km</div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
<!-- cinemat details end -->

</template>


<script>
import "@/assets/less/CinemaLess/CinemaDetail.less";
import {mapState,mapMutations} from "vuex";
import storageUtils from '@/utils/cityStorage.js';
import BSscroll from '@/utils/BSscroll.js';
export default {
  name: "Cinema-details",
  beforeUpdate() {
    this.$nextTick(() => {
      BSscroll('.Cinema_details')
    });
  },
  mounted(){
    this.$bus.$on('filterDistrict',name=>{
        this.M_SAVE_CINEMA_LIST(name);
    })
    //picking up the local storage district list to renew
    this.$bus.$on('SelectAll',()=>{
       let newList = storageUtils.readDistrict();
       this.M_CINEMA_LIST(newList)
    })
  },
  updated(){
    this.$bus.$emit('to-district',this.cinemaList)
  },
  methods:{
    ...mapMutations(['M_SAVE_CINEMA_LIST','M_CINEMA_LIST'])

  },
  computed: {
    ...mapState(["cinemaList"]),
  },
  filters: {
    addZero(value) {
      return (value = value / 100);
    },
    addDistance(value) {
      return (value = parseFloat(value * 1000).toFixed(1));
    },
  },
};
</script>

