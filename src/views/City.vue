<template>
 <div class="City">
   <CityHeader/>
   <CityHeaderBar/>
   <CityList ref="myCtiy"/>
 </div>
</template>

<script>
import CityHeader from "@/components/City/CityHeader.vue";
import CityHeaderBar from '@/components/City/CityHeaderBar.vue'
import CityList from "@/components/City/CityList.vue";
import { mapState,mapActions,mapMutations } from "vuex";
import '@/assets/less/CityLess/City.less';
export default {
  name: "City",
  components: {
    CityHeader,
    CityList,
    CityHeaderBar,
  },
  beforeMount() {
    this.HIDE_TABBAR_MUTATION(false);
  },
  mounted() {
    this.$refs.myCtiy.$el.height = document.documentElement.clientHeight;
     if (this.cityList.length === 0) {
      this.A_CITY_LIST();
    }
  },
  methods:{
    ...mapMutations(['SHOW_TABBAR_MUTATION','HIDE_TABBAR_MUTATION']),
    ...mapActions(['A_CITY_LIST'])
  },
  computed: {
    ...mapState(["cityList"]),
  },
  beforeDestroy() {
    this.SHOW_TABBAR_MUTATION(true);
  },
};
</script>
