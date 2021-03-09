<template>
    <div class="film_top_button">
        <!-- Film top button start -->
        <span @click="$router.push('/city')">{{readCityName || '上海'}}</span>
        <i class='iconfont icon-arrow-down'></i>
        <!-- Film top button end -->
    </div>
</template>

<script>
import '@/assets/less/FilmLess/FilmTopButton.less';
import storageUtils from '@/utils/cityStorage.js';
export default {
    name:'film_top_button',
    data(){
        return{
            readCityName:storageUtils.readCityName(),
        }
    },
}
</script>