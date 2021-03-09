<template>
<!-- Cinema operation start -->
    <div class="Cinema_operation">
        <!-- selected city start -->
       <div class="cinema_operation_city" 
        @click.stop="district"
        :class="showDistrict? 'activeColor':''"
       >
        {{districtName}}
        <i :class="showDistrict? 'iconfont icon-xiangshangjiantou':'iconfont icon-arrow-down'"></i>
        <CinemaCityDistrict v-show='showDistrict'
         @selectDistrict='selectDistrict'
         @AllDistricts ='AllDistricts'
         />
       </div>
        <!-- selected city end -->

        <!-- selected booking method start -->
       <div class="cinema_operation_booking"  
        @click="booking"
        :class="showBooking? 'activeColor':''"
       >
           {{bookingMethod}}
        <i :class="showBooking? 'iconfont icon-xiangshangjiantou':'iconfont icon-arrow-down'"></i>
        <ConterOrAppBooking v-show='showBooking'
            @handleBooking='handleBooking'
        />
       </div>
        <!-- selected booking method end -->

        <!-- select records start -->
       <div class="cinema_operation_recording"  
         @click="recording"
        :class="showRecording? 'activeColor':''"
       >
           {{recentRecord}}
        <i :class="showRecording? 'iconfont icon-xiangshangjiantou':'iconfont icon-arrow-down'"></i>
        <RecentRecord v-show='showRecording'
            @handleRecording='handleRecording'
        />
       </div>
        <!-- select records end -->

    </div>
<!-- Cinema operation end -->
</template>

<script>
import '@/assets/less/CinemaLess/CinemaOperation.less';
import CinemaCityDistrict from './CinemaOperation/CinemaCityDistrict';
import ConterOrAppBooking from './CinemaOperation/ConterOrAppBooking';
import RecentRecord from './CinemaOperation/RecentRecord';
import {mapState} from 'vuex';
export default {
    name:'Cinema_operation',
    components:{
        CinemaCityDistrict,
        ConterOrAppBooking,
        RecentRecord
    },
    data(){
        return{
            showDistrict:false,
            showBooking:false,
            showRecording:false,
            districtName:'全城',
            bookingMethod:'APP订票',
            recentRecord:'最近去过'
        }
    },
    methods:{
        district(){
            this.showDistrict = !this.showDistrict
            this.showBooking = false;
            this.showRecording = false;
        },
        booking(){
            this.showBooking = !this.showBooking
            this.showDistrict = false;
            this.showRecording = false;
        },
        recording(){
            this.showRecording = !this.showRecording
            this.showDistrict = false;
            this.showBooking = false;
        },
        selectDistrict(name){
            this.districtName = name;
        },
        AllDistricts(name){
             this.districtName = name;
        },
        handleBooking(methods){
            this.bookingMethod=methods;
        },
        handleRecording(records){
            this.recentRecord =records;
        }
    },
    computed:{
        ...mapState(['cinemaList']),
    }
}
</script>

<style scoped>
</style>