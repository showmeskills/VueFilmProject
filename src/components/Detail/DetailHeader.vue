<template>
    <div v-if='detail' class="detail_header" :class="isFixed? 'fixed':''" >
        <div class="last_page">
            <img @click="$router.back()" :src="require('@/assets/img/top_arrow.png')" alt="">
        </div>
        <div class="title" v-show="isShow">
            {{detail.name}}
        </div>
    </div>
</template>

<script>
import '@/assets/less/DetailLess/DetailHeader.less'
import {mapState} from 'vuex';
export default {
    props:{
        "isShow":Boolean,
        "isFixed":Boolean,
    },
    computed:{
        ...mapState(['detail'])
    }
}
</script>
