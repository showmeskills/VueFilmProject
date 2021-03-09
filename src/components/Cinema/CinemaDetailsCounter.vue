<template>
    <div class="Cinema_details_counter">
    <ul>
      <li v-for="counter in cinemaListCounter" :key="counter.cinemaId">
        <router-link to="#">
          <div class="cinema_counter_wrap">
            <div class="cinema_counter_details">
              <div class="cinema_counter_name">
                {{ counter.name }}
              </div>
              <div class='cinema_counter_type'>
                  <span v-for='ticketTypes in counter.ticketTypes' :key='ticketTypes.id'>
                      {{ticketTypes.name}}
                  </span>
              </div>
              <div class="cinema_counter_address">
                {{ counter.address }}
              </div>
            </div>
            <div class="other_wrap">
              <div class="location">
                <i class="iconfont icon-gps"></i>
                </div>
              <div class="distance">{{ counter.Distance | addDistance }}km</div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    </div>
</template>

<script>
import "@/assets/less/CinemaLess/CinemaDetailsCounter.less";
import {mapState,mapMutations} from "vuex";
import storageUtils from '@/utils/cityStorage.js';
import BSscroll from '@/utils/BSscroll.js';
export default {
    beforeUpdate() {
       this.$nextTick(() => {
          BSscroll('.Cinema_details_counter')
      });
    },
    mounted(){ 
        this.$bus.$on('filterCounter',name=>{
            this.M_SAVE_COUNTER_LIST(name);
        })
        //picking up the local storage district list to renew
        this.$bus.$on('SelectALLCounter',()=>{
            let newList = storageUtils.readCounter();
            this.M_CINEMA_LIST_COUNTER(newList)
        })
    },
    methods:{
        ...mapMutations(['M_SAVE_COUNTER_LIST','M_CINEMA_LIST_COUNTER']),
    },
    computed:{
        ...mapState(['cinemaListCounter']),
    },
    filters:{
        addDistance(value) {
            return (value = parseFloat(value * 1000).toFixed(1));
        },
    }
}
</script>