<template>
  <div class="City_search_bar">
    <div class="input-wrap onFocus">
      <i class="iconfont icon-home_search"></i>
      <input class="search-input" @focus="isShow = true" @blur="isShow = false" type="text" placeholder="enter your the name of city or pinyin"/>
      <div class="clear">
        <span v-show='isShow'>取消</span>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/less/CityLess/CityHeaderBar.less'
export default {
  name: "city_search_bar",
  data() {
    return {
        isShow:false,
    };
  },
};
</script>