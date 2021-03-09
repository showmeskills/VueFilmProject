<template>
  <div class="film">
    <!-- film button start -->
    <FilmTopButton />
    <!-- film button end -->

    <!-- film header start -->
    <FilmTopHeader v-if="isFixed" />
    <!-- film header end -->

    <!-- film carousel start -->
    <FilmCarousel ref="myswiper" />
    <!-- film carousel end -->

    <!-- Film header start -->
    <FilmNavBar :class="isFixed ? 'film_onFixed' : ''" />
    <!-- Film header end -->
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import FilmCarousel from "@/components/Film/FilmCarousel.vue";
import FilmNavBar from "@/components/Film/FilmNavBar.vue";
import FilmTopButton from "@/components/Film/FilmTopButton.vue";
import FilmTopHeader from "@/components/Film/FilmTopHeader.vue";

import "@/assets/less/FilmLess/FilmNavBar.less";
import "@/assets/less/FilmLess/Film.less";

import { mapState, mapActions,mapMutations } from "vuex";
import {filmCityMessageBox,filmCityFailMessageBox} from '@/utils/messageBox';
import scroll from "@/utils/scroll";
import geolocation from "@/utils/geolocation";
import storageUtils from '@/utils/cityStorage.js';
export default {
  name: "film",
  components: {
    FilmNavBar,
    FilmCarousel,
    FilmTopButton,
    FilmTopHeader,
  },
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    //vuex request banner(adverstiment)
    if (this.$store.state.filmAdertisement.length === 0) {
      this.A_FILM_ADERTISEMENT();
    }
    //vuex request nowplayingList
    if (this.nowplayingList.length === 0) {
      this.A_FILM_NOWPLAYING();
    }
    //vuex request commingList
    if (this.comingList.length === 0) {
      this.A_FILM_COMMINGLIST();
    }
    //request GPS current
    if(!storageUtils.readCityName()){ 
      geolocation
       filmCityMessageBox()
        .then(_=>{
            if(_ === 'confirm'){
                this.A_GPSCITY_ID({
                  id:'310100',
                  name:'上海'
                })
            }else if(_ === 'cancel'){
              this.$router.push('/city')
            }
          }) 
    }else if(!geolocation){
     filmCityFailMessageBox()
      .catch(_=>{
        if(_ === 'confirm'){
          this.$router.push('/city')
        }
      })
    }            
    //scroll event start
    scroll.start(this.handleScroll);
  },
  methods: {
    ...mapActions([
      "A_FILM_ADERTISEMENT",
      "A_FILM_NOWPLAYING",
      "A_FILM_COMMINGLIST",
      'A_GPSCITY_ID'
    ]),
    ...mapMutations(['M_GPSCITY_ID']),
    handleScroll() {
      //scroll event processing
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
  computed: {
    ...mapState(["nowplayingList", "comingList",'GPSCity_id']),
  },
  destroyed() {
    //scroll event end
    scroll.end(this.handleScroll);
  },
};
</script>

