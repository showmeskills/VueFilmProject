<template>
<div  v-if='detail' class="detail_actors">
    <!-- detail actors start -->
    <div class="detail_actors_title">
        <span class="detail_actors_text">演职人员</span>
    </div>
        <div class="detail_actors_list">
            <swiper class='actors_swiper' myClassName='actors_swiper' :dataLength="actorsLength">
                <div class="swiper-slide" v-for="data in detail.actors" :key=data.id>
                    <div class="swiper-position">
                        <img :src="data.avatarAddress" alt="actors_avatars">
                    </div>
                    <div class="actors_info">
                        <p class="actors_name">{{data.name}}</p>
                        <p class="actors_role">{{data.role}}</p>
                    </div>
                </div>
            </swiper>
        </div>
    <!-- detail actors end -->
</div>
</template>

<script>
import '@/assets/less/DetailLess/DetailActors.less';
import swiper from './DetailSwiper.vue';
import {mapState} from 'vuex';
export default {
    components:{
        swiper
    },
     computed:{
        ...mapState(['detail','actorsLength'])
    }
}
</script>