<template>
<!-- film_info start -->
    <div v-if='detail' class="film_detail">
        <div class="film_name">
            <span class="name">{{detail.name}}</span>
            <span class="type">{{detail.filmType.name}}</span>
            <span class="grade" v-if='detail.grade'>{{detail.grade}}分</span>
            <span class="grade" v-else></span>
        </div>
        <div class="film_category">
            {{detail.category}}
        </div>
        <div class="film_premier_time">
            {{timeStampeToTime(detail.premiereAt)}}上映
        </div>
        <div class="film_nation_runtime">
            {{detail.nation}} | {{detail.runtime}}分钟
        </div>
        <!-- animation start -->
            <div :class="isShow? 'film_synopsis_hidden':'film_synopsis'">
                {{detail.synopsis}}
            </div>
        <!-- animation end -->
        <div class='toggle' @click="isShow = !isShow">
            <i :class="isShow?'iconfont icon-arrow-down':'iconfont icon-xiangshangjiantou'"></i>
        </div>
    </div>
<!-- film_info end -->
</template>

<script>
import '@/assets/less/DetailLess/DetailInfo.less';
import {mapState} from 'vuex';
export default {
    data(){
        return{
            isShow:true,
        }
    },
    methods:{
          //time_premiere
         timeStampeToTime(value){
            let date = new Date(value * 1000);
            let y = date.getFullYear();
            let m = date.getMonth();
            let d = date.getDate();
            return `${y}-${m}-${d}`
        },
    },
    computed:{
        ...mapState(['detail'])
    }
}
</script>