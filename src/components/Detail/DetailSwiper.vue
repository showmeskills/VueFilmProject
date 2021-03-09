<template>
  <div class="swiper-container" :class="myClassName">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import '@/assets/less/Swiper.less';
export default {
//father sends value to son, and thus the every son-swiper can control themselves
  props:{
      myClassName:String,
      dataLength:Number,
      photo:Number,
  },
  mounted() {
    new Swiper("."+this.myClassName, {
      slidesPerView:this.myClassName == 'actors_swiper' ? this.dataLength : this.photo,
      spaceBetween:this.myClassName == 'actors_swiper' ? 10 : 5,
      freeMode:true
    });
  },
};
</script>