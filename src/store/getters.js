const getters = {
    isTabbarShow:(state)=> state.isTabbarShow,
    filmAdertisement:(state)=>Array.from(state.filmAdertisement),
    nowplayingList:(state)=>state.nowplayingList,
    total:(state)=>state.total,
    current:(state)=>state.current,
    comingList:(state)=>state.cinemaList,
    detail:(state)=>state.detail,
    actorsLength:(state)=>state.actorsLength?state.photoLength:0,
    photoLength:(state)=>state.photoLength?state.photoLength:0,
    isShowCinemaDetails:state=>state.isShowCinemaDetails,
    isHideCinemaDetails:state => state.isHideCinemaDetails,
    cinemaList:(state)=>state.cinemaList,
    cinemaListCounter:(state)=>state.cinemaListCounter,
    cityList:(state)=>state.cityList,
    currentCity:(state)=>state.currentCity,
}

export default getters