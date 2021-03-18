<template>
    <div class='CinemaSearch'>
        <div class='cinema_search_bar'>
            <i class='iconfont icon-home_search'></i>
            <input type="text" placeholder='输入影城名称' :searchCinema='searchCinema'/>
            <button @click='$router.back()'>取消</button>
        </div>
        <CinemaClosedList v-if='result'/>
        <CinemaSearchResult v-else/>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import CinemaClosedList from './CinemaSearch/CinemaClosedList'
import CinemaSearchResult from './CinemaSearch/CinemaSearchResult'
import '@/assets/less/CinemaLess/CinemaSearch.less';
export default {
    name:'CinemaSearch',
    data(){
        return{
            result:false,
            searchCinema:''
        }
    },
    components:{
        CinemaClosedList,
        CinemaSearchResult
    },
    beforeMount(){
        this.HIDE_TABBAR_MUTATION(false);
    },
    methods:{
        ...mapMutations(['HIDE_TABBAR_MUTATION','SHOW_TABBAR_MUTATION'])
    },
    beforeDestroy(){
        this.SHOW_TABBAR_MUTATION(true);
    }
}
</script>