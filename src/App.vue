<template>
  <div id="app">
    <!-- botton nav start -->
    <tabbar v-show='isTabbarShow' ></tabbar>
    <!-- botton nav end -->
    <!-- animation start  -->
    <transition name="fade">
      <router-view/>
    </transition>
    <!-- animation start -->
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar/Tabbar.vue';
import '@/assets/less/RouterAmination.less';
import '@/assets/css/nor.css';
import {mapState} from 'vuex';
export default {
  name:'app',
  components:{
      tabbar
  },
  computed:{
    ...mapState(['isTabbarShow']),
  }
}
</script>

