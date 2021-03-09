import TYPE from '@/utils/type.js';
import storageUtils from '@/utils/cityStorage.js';
const  mutations = {
      [TYPE.HIDE_TABBAR_MUTATION](state,data){
        state.isTabbarShow = data;
      },
      [TYPE.SHOW_TABBAR_MUTATION](state,data){
        state.isTabbarShow = data;
      },
      [TYPE.M_FILM_ADERTISEMENT](state,data){
        state.filmAdertisement = data;
      },
      [TYPE.M_FILM_CURRENT](state){
        state.current++;
      },
      [TYPE.M_FILM_NOWPLAYING](state,data){
        state.nowplayingList = [...state.nowplayingList,...data];
      },
      //get file length stop triggering infinite scoll
      [TYPE.M_FILM_NOWPLAYINGLENGTH](state,data){
        state.total = data;
      },
      [TYPE.M_FILM_COMMINGLIST](state,data){
        state.comingList = data;
      },
      [TYPE.M_DETAIL](state,data){
        state.detail = data.detail;
        state.actorsLength = data.actorsLength;
        state.photoLength = data.photoLength;
      },
      [TYPE.M_CINEMA_LIST](state,data){
        state.cinemaList = data;
      },
      [TYPE.M_SHOW_CINEMA_DITAIL](state,bool){
          state.isShowCinemaDetails = bool;
      },
      [TYPE.M_Hide_CINEMA_DITAIL](state,bool){
        state.isHideCinemaDetails = bool;
    },
      //using local storage to save cinema list, and then filtering name to remain distric names that we are needed
      //when it to save, the first time we request the cinema list
      [TYPE.M_SAVE_CINEMA_LIST](state,name){
          let newList = storageUtils.readDistrict();
          state.cinemaList = newList.filter(item=>item.districtName === name) 
      },
      [TYPE.M_CINEMA_LIST_COUNTER](state,data){
        state.cinemaListCounter = data;
      },
      [TYPE.M_SAVE_COUNTER_LIST](state,name){
        let newList = storageUtils.readCounter();
        state.cinemaListCounter = newList.filter(item=>item.districtName === name) 
      },
      [TYPE.M_CITY_LIST](state,data){
        let letterArr = [];
            for(var i=65;i<91;i++){
                letterArr.push(String.fromCharCode(i))
            }
            let newList = [];
            for(var j=0;j<letterArr.length;j++){
                var arr = data.filter(item=>item.pinyin.substring(0,1) === letterArr[j].toLowerCase());
                if(arr.length > 0){
                    newList.push({
                        index:letterArr[j],
                        list:arr,
                    })
                }
            }
           state.cityList = newList;
      },
    [TYPE.M_GPSCITY_ID](state,city){
      state.GPSCity_id = city.id;
      state.GPSCity_name = city.name;
    }
}

export default mutations;