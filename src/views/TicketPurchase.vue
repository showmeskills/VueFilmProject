<template>
    <div>
        1111
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    beforeMount(){
         this.HIDE_TABBAR_MUTATION(false)
    },
    methods:{
        ...mapMutations(['HIDE_TABBAR_MUTATION','SHOW_TABBAR_MUTATION'])
    },
     beforeDestroy(){
         if(this.$route.name ===`Detail`){
             this.HIDE_TABBAR_MUTATION(false)
         }else{
             this.SHOW_TABBAR_MUTATION(true)
         }
    },
}
</script>