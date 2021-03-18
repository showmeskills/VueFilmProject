<template>
    <div class='Cinema-search-result'>
        <div class='Cinema-search-has-result'>
                
        </div>
        <div class='Cinema-search-has-no-result'>
            <div class='Cinema-search-empty-result'>
                <img :src="require('@/assets/img/searchCinema/noSearchCinema.png')" alt="">
                <p>没有找到匹配的影院</p>
                <p>提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？</p>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/less/CinemaLess/CinemaSearch/CinemaSearchResult.less';
export default {
    name:'Cinema-search-result',
    props:{
        'searchCinema':String,
    }
}
</script>