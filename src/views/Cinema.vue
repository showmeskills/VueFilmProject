<template>
  <div class="Cinema">
    <!-- Cinema header start -->
    <CinemaHeader />
    <!-- Cinema header end -->

    <!-- Cinema location start -->
    <CinemaOperation />
    <!-- Cinema location end -->

    <!-- Cinema Details start -->
    <CinemaDetails v-if='isShowCinemaDetails'/>
    <!-- Cinema Details end -->

    <!-- CineDetialsCounter start -->
    <CinemaDetailsCounter  v-if='isHideCinemaDetails'/>
    <!-- CineDetialsCounter start -->
  </div>
</template>

<script>
import CinemaHeader from "@/components/Cinema/CinemaHeader.vue";
import CinemaOperation from "@/components/Cinema/CinemaOperation.vue";
import CinemaDetails from "@/components/Cinema/CinemaDetails.vue";
import CinemaDetailsCounter from "@/components/Cinema/CinemaDetailsCounter.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Cinema",
  components: {
    CinemaHeader,
    CinemaOperation,
    CinemaDetails,
    CinemaDetailsCounter,
  },
  mounted() {
    if (this.cinemaList.length >= 0) {
        this.A_CINEMA_LIST()
      }

  },
  methods: {
    ...mapMutations(["M_CINEMA_LIST"]),
    ...mapActions(["A_CINEMA_LIST"]),
  },
  computed: {
    ...mapState(["cinemaList",'isShowCinemaDetails','isHideCinemaDetails']),
  },
};
</script>
