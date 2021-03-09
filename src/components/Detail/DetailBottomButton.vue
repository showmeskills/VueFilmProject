<template>
<!-- button start -->
    <div class="detail_button">
        <div class="btn" @click='$router.push(`/detail/${detail.filmId}/cinema`)'>选座购票</div>
    </div>
<!-- button end -->
</template>

<script>
import'@/assets/less/DetailLess/DetailButtomButton.less'
import{mapState} from 'vuex';
export default {
    computed:{
         ...mapState(['detail'])
    }
}
</script>

