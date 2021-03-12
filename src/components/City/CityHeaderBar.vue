<template>
  <div class="City_search_bar">
    <div class="input-wrap onFocus">
      <i class="iconfont icon-home_search"></i>
      <input class="search-input"
       @focus="isShow=true" 
       @blur="isShow=false" 
       v-model="searchCity" 
       type="text" 
       placeholder="enter your the name of city or pinyin"
       />
      <div class="clear">
        <span v-show='isShow' @click.stop="clearSearch">取消</span>
      </div>
    </div>
    <CitySearchList :searchCity='searchCity' v-if="searchCity"/>
    <CityEmptySearch v-if='result'/>
  </div>
</template>

<script>
import '@/assets/less/CityLess/CityHeaderBar.less';
import CitySearchList from "@/components/City/CitySearchList.vue";
import CityEmptySearch from "@/components/City/CityEmptySearch.vue";
export default {
  name: "city_search_bar",
  data() {
    return {
        isShow:false,
        searchCity:null,
        result:false,
    }
  },
  components: {
    CitySearchList,
    CityEmptySearch
  },
  mounted(){
    //false
      this.$bus.$on('switchHide',data=>{
          this.result=data;
        })
    //true
      this.$bus.$on('switchShow',data=>{
          this.result = data
        }) 

  },
  methods:{
    clearSearch(){
      console.log(1)
      this.searchCity=''
      this.$emit('clearSearch',true)
      this.result = false;
    },
  },
  watch:{
    searchCity:{
      deep:true,
      handler(value){
        if(value){
          this.$emit('startSearch',false);
        }
      }
    }
  }
};
</script>