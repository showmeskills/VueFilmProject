<template>
<!-- service page start -->
  <div class="Service">
      <div class="service_container">
        <ServiceAdvertisement/>
        <ServiceList/>
      </div>
  </div>
<!-- service page end -->

</template>

<script>
import {mapMutations} from 'vuex';
import '@/assets/less/ServiceLess/Service.less';
import ServiceAdvertisement from'@/components/Service/ServiceAdvertisement.vue'
import ServiceList from'@/components/Service/ServiceList.vue'
export default {
  components:{
    ServiceAdvertisement,
    ServiceList
  },
  beforeMount(){
    this.HIDE_TABBAR_MUTATION(false);
  },
  methods:{
    ...mapMutations(['HIDE_TABBAR_MUTATION','SHOW_TABBAR_MUTATION'])
  },
  beforeDestroy(){
      if(this.$route.name ==='NowPlaying' || this.$route.name ==='ComingSoon' || this.$route.name === 'Center'){
            this.SHOW_TABBAR_MUTATION(true)
        }else{
            this.SHOW_TABBAR_MUTATION(false)
        }
  }

};
</script>
