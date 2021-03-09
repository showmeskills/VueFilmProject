<template>
    <div class="Center">
        <div class="center_container" >
            <CenterHeader   :checkLogin="checkLogin"/>

            <CenterOrder    :checkLogin="checkLogin"/>

            <CenterList     :checkLogin="checkLogin"/>
        </div>   
    </div>
</template>

<script>
import '@/assets/less/CenterLess/Center.less';
import CenterHeader from '@/components/Center/CenterHeader.vue';
import CenterList from '@/components/Center/CenterList.vue';
import CenterOrder from '@/components/Center/CenterOrder.vue';
import StorageUtils from '@/utils/cityStorage.js';
import {mapMutations} from 'vuex';
export default {
    beforeRouteEnter(to,from,next){
        if(to.name ==='Center'){
            next();
        }
    },
    components:{
        CenterHeader,
        CenterList,
        CenterOrder
    },
    methods:{
        ...mapMutations(['HIDE_TABBAR_MUTATION']),
        checkLogin(){
            if(!StorageUtils.readUserName()){
                this.$router.push('/login');
            }else{
                this.$route.push('/film')
            }
        }
    },
    beforeDestroy(){
        if(this.$route.name === 'Login'){
            this.HIDE_TABBAR_MUTATION(false);
        }
    }

}
</script>
