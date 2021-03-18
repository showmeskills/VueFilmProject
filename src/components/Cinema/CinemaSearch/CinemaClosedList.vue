<template>
    <div class='Cinema_closed_list'>
        <div class='cinema_list_title'>
            离你最近
        </div>
        <div class='cinema_list'>
            <ul>
                <li v-for='cinema in filerCinema' :key='cinema.cinemaId'>
                    <div class='ciname_list_detail'>{{cinema.name}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import '@/assets/less/CinemaLess/CinemaSearch/CinemaCloseList.less';
import storageUtils from '@/utils/cityStorage.js'
export default {
    name:'Cinema_closed_list',
    computed:{
        filerCinema(){
            let arr = storageUtils.readDistrict().slice(0,5)
            return arr;
        }
    }
}
</script>