<template>
    <div class="ComingSoon">
       <ul>
           <li v-for="data in comingList" :key="data.filmId" @click="handleChangePage(data.filmId,data.isPresale)">
                <div class="comingSoon_img">
                    <img :src="data.poster" alt="">
                </div>
                <div class="comingSoon_details">
                    <p class="comingSoon_name">
                        {{data.name}}
                        <span class="comingSoon_type">
                            {{data.filmType.name}}
                        </span>
                    </p>
                    <p class="comingSoon_comments">
                        观众评分
                        <span class="comingSoon_number">
                            {{data.grade}}
                        </span>
                    </p>
                    <p class="comingSoon_players">
                        主演:{{data.actors | actorFilter}}
                    </p>
                    <p class="comingSoon_country">
                        {{data.nation}} | {{data.runtime}}分钟
                    </p>
                </div>
                <div class="comingSoon_preSale" v-if='data.isPresale'>预购</div>
                <div class="comingSoon_nopreSale" v-else></div>
           </li>
       </ul>
    </div>
</template>

<script>
import '@/assets/less/FilmLess/ComingSoon.less';
import '@/assets/less/FilmLess/MessageBox.less';
import {commingSoonMessageBox} from '@/utils/messageBox';
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['comingList']),
    },
    filters:{
        actorFilter(value){
            let actors = value.map(i=> i.name)
            return actors.join(' ');
        }
    },
    methods:{
        handleChangePage(id,presale){
             this.$router.push({
                 name:'Detail',
                 params:{
                     id,
                 }
             })
             //message box;
             if(!presale){
               commingSoonMessageBox()
                .then(_=>{
                    if(_ ==='confirm'){
                        console.log(11)
                        this.$router.push({
                            name:'NowPlaying'
                        })
                    }
                })
             }
        },
    }
}
</script>