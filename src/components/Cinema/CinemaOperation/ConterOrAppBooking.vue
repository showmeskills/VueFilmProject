<template>
    <div class="Counter_app_booking">
        <div class="booking_wrappar">
            <ul>
                <li :class="isBooking?'activeBooking':''"
                    @click="handleBooking('APP订票')"
                >
                    <i class="iconfont icon-tick"></i>
                    <span>APP订票</span>
                </li>
                <li :class="isBooking?'':'activeBooking'"
                     @click="handleBooking('前台兑换')"
                >
                    <i class="iconfont icon-tick"></i>
                    <span>前台兑换</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import '@/assets/less/CinemaLess/CinemaOperation/ConterOrAppBooking.less';
import {mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
            isBooking:true,
        }
    },
    methods:{
        ...mapMutations(['M_SHOW_CINEMA_DITAIL','M_Hide_CINEMA_DITAIL',]),
        ...mapActions(['A_CINEMA_LIST_COUNTER','A_CINEMA_LIST']),
        handleBooking(methods){
            this.isBooking = !this.isBooking;
            this.$emit('handleBooking',methods)
            if(methods==='前台兑换'){
                this.M_SHOW_CINEMA_DITAIL(false);
                this.M_Hide_CINEMA_DITAIL(true);
                this.A_CINEMA_LIST_COUNTER();
            }else if(methods==='APP订票'){
                this.M_SHOW_CINEMA_DITAIL(true);
                this.M_Hide_CINEMA_DITAIL(false);
                this.A_CINEMA_LIST();
            }   
        }
    },
}
</script>