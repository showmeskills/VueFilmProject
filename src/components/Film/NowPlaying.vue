<template>
  <div class="NowPlaying">
    <!-- infinite-scroll function start -->
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="0"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
    >
      <li
        v-for="data in nowplayingList"
        :key="data.filmId"
        @click.stop="handleChangePage(data.filmId)"
      >

        <!-- poster start -->
        <div class="nowPlaying_img">
          <img :src="data.poster" alt="" />
        </div>
        <!-- poster end -->

        <!-- nowplaying details start -->
        <div class="nowPlaying_details">
          <p class="nowPlaying_name">
            {{ data.name }}
            <span class="nowPlaying_type">
              {{ data.filmType.name }}
            </span>
          </p>
          <p class="nowPlaying_comments">
            观众评分
            <span class="nowPlaying_number">
              {{ data.grade }}
            </span>
          </p>
          <p class="nowPlaying_players" v-if="data.actors">
            主演:{{ data.actors | actorsFilter }}
          </p>
          <p class="nowPlaying_players" v-else>主演:暂无主演</p>
          <p class="nowPlaying_country">
            {{ data.nation }} | {{ data.runtime }}分钟
          </p>
        </div>
        <!--  nowplaying details end -->
        <div class="tickets_purchase" @click.stop="purchase(data.filmId)">
          购票
        </div>
      </li>
    </ul>
    <!-- infinite-scroll end -->
  </div>
</template>

<script>
import "@/assets/less/FilmLess/Nowplaying.less";
import { mapState,mapActions,mapMutations } from "vuex";

export default {
  name: "NowPlaying",
  data() {
    return {
      loading: false, //不禁用
    };
  },
  methods: {
    ...mapActions(['A_FILM_NOWPLAYING']),
    ...mapMutations(['M_FILM_CURRENT']),
      //router to a detail page
    handleChangePage(id) {
      this.$router.push({
        name: "Detail",
        params: {
          id,
        },
      });
    },
    //router to a purchase page
    purchase(id) {
      this.$router.push({
        name: "TicketPurchase",
        params: {
          id,
        },
      });
    },
    //infinite-scroll function start
    loadMore() {
      this.loading = true;
      if (this.nowplayingList.length === this.total) {
        return;
      }
      setTimeout(() => {
        this.M_FILM_CURRENT();
        this.A_FILM_NOWPLAYING();;
        this.loading = false;
      }, 300);
    },
  },

  filters: {
      //filter the name of actors
    actorsFilter(value) {
      let actors = value.map((i) => i.name);
      return actors.join(" ");
    },
  },
  computed: {
    ...mapState(["nowplayingList", "total",]),
  },
};
</script>

