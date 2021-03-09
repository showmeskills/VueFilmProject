<template>
   <div v-if='detail' class="detail_photos">
        <div class="detail_photos_headers">
            <span class='left'>剧照</span>
            <span class='right'>全部({{photoLength}})></span>
        </div>
            <div class="detail_photos_wrapper">
                <swiper class='photo_swiper' myClassName='photo_swiper' :photo="photoLength">
                    <div class="swiper-slide photo_slides" v-for="(data,idx) in detail.photos" :key=idx>
                        <div class="positions">
                            <img :src="data" alt="photos">
                        </div>
                    </div>
                </swiper>
            </div>
    </div> 
</template>

<script>
import swiper from './DetailSwiper.vue';
import '@/assets/less/DetailLess/DetailPhotos.less';
import {mapState} from 'vuex';
export default {
    components:{
        swiper
    },
     computed:{
        ...mapState(['detail','photoLength'])
    }
}
</script>