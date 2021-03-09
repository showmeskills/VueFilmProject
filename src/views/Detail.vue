<template>
    <div class="Detail">
        <!-- Detail header start-->
            <DetailHeader :isFixed='isFixed' :isShow='isShow' />
        <!-- Detail header end-->

        <!-- poster start -->
            <DetailPoster/>
        <!-- poster end -->

        <!-- film_detail start -->
            <DetailInfo />
        <!-- film_detail end -->

        <!-- actors list start -->
            <DetailActors />
        <!-- actors list end -->

        <!-- pictures start -->
            <DetailPictures/>
        <!-- pictures end -->

        <!-- bottom button start -->
            <DetailBottomButton/>
        <!-- bottom button end -->
    </div>
</template>

<script>
import '@/assets/less/DetailLess/Detail.less';
import DetailHeader from '@/components/Detail/DetailHeader.vue';
import DetailPoster from '@/components/Detail/DetailPoster.vue';
import DetailInfo from '@/components/Detail/DetailInfo.vue';
import DetailActors from '@/components/Detail/DetailActors.vue';
import DetailPictures from '@/components/Detail/DetailPictures.vue';
import DetailBottomButton from '@/components/Detail/DetailBottomButton.vue';
import {mapActions,mapMutations} from 'vuex';
import scroll from '@/utils/scroll';
export default {
    name:"Detail",
    components:{
        DetailHeader,
        DetailPoster,
        DetailInfo,
        DetailActors,
        DetailPictures,
        DetailBottomButton
    },
    data(){
        return{
           isFixed:false,
           isShow:false,
        }
    },
    beforeMount(){
       this.HIDE_TABBAR_MUTATION(false)
    },
    mounted(){
        //data request
        if(this.$route.params.id){
            this.A_DETAIL(this.$route.params.id)
        }
        //scroll event start
        scroll.start(this.handleScroll)
    },
    methods:{
        ...mapActions(['A_DETAIL']),
        ...mapMutations(['HIDE_TABBAR_MUTATION','SHOW_TABBAR_MUTATION']),
        handleScroll(){
            if(document.documentElement.scrollTop > 0){
                this.isFixed = true;
                this.isShow = true;
            }else{
                this.isFixed = false;
                this.isShow = false;
            }
        }
    },
    beforeDestroy(){
        if(this.$route.name ==='NowPlaying' || this.$route.name ==='ComingSoon'){
            this.SHOW_TABBAR_MUTATION(true)
        }else{
            this.SHOW_TABBAR_MUTATION(false)
        }
    },
    destroyed(){
        //scroll event end
        scroll.end(this.handleScroll)
    }
}
</script>

