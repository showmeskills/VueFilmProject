<template>
<!-- poster start -->
     <div v-if='detail' class="poster">
         <div class="poster_container">
            <img :src="detail.poster" alt="poster">
         </div>
    </div>
<!-- poster end -->

</template>

<script>
import '@/assets/less/DetailLess/DetailPoster.less'
import {mapState} from 'vuex';
export default {
     computed:{
        ...mapState(['detail'])
    }
}
</script>