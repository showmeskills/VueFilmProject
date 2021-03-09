<template>
    <div>
        111
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
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