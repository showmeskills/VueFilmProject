import axios from '@/utils/axios.interceptor.js'
import TYPE from '@/utils/type.js';
import storageUtils from '@/utils/cityStorage.js';
axios.defaults.baseURL = 'https://m.maizuo.com/';
axios.defaults.method = 'get';
const actions = {
    //film advertisement
    A_FILM_ADERTISEMENT(store){
        axios({
            url:'gateway?type=2&cityId=440300&k=3860799',
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16132970752253105483743233"}',
                "X-Host": " mall.cfg.common-banner",
            },
        })
        .then(_=>{
            store.commit(TYPE.M_FILM_ADERTISEMENT,_.data.data)
        })
    },
    //nowplayingList
    A_FILM_NOWPLAYING(store) {
        axios({
            url: `gateway?cityId=440300&pageNum=${store.state.current}&pageSize=10&type=1&k=5264259`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16084672032938535019544577","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list',
            }
        })
        .then(_ => {
            store.commit(TYPE.M_FILM_NOWPLAYING, _.data.data.films)
            store.commit(TYPE.M_FILM_NOWPLAYINGLENGTH, _.data.data.total)
        })
    },
    //Coming soon
    A_FILM_COMMINGLIST(store) {
        axios({
            url: `gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=7467092`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16084672032938535019544577","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list',
            },
        })
        .then(_ => {
            store.commit(TYPE.M_FILM_COMMINGLIST, _.data.data.films)
        })
    },
    //Detail
    A_DETAIL(store,paramsId){ 
        axios({
            url:`gateway?filmId=${paramsId}&k=3590936`,
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16084672032938535019544577","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.info',
            }
        }).then(_=>{
            const detail = _.data.data.film;
            const actorsLength = detail.actors.length;
            let photoLength
            if(detail.photos != undefined){
                photoLength = detail.photos.length
            }
            store.commit(TYPE.M_DETAIL,{
                detail,
                actorsLength,
                photoLength
            })
        });
    },
    //Cinema list
    A_CINEMA_LIST(store) {
        let id = storageUtils.readCityId();
        axios({
            url: `gateway?cityId=${id}&ticketFlag=1&k=5440610`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16132970752253105483743233"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
        .then((value) => {
            store.commit(TYPE.M_CINEMA_LIST,value.data.data.cinemas);
            storageUtils.saveDistrict(value.data.data.cinemas)
        });
    },
    A_CINEMA_LIST_COUNTER(store){
        let id = storageUtils.readCityId();
        axios({
            url:`gateway?cityId=${id}&ticketFlag=2&k=1232897`,
            headers:{
               'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16132970752253105483743233","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
        .then(value=>{
            store.commit(TYPE.M_CINEMA_LIST_COUNTER,value.data.data.cinemas)
            storageUtils.saveCounter(value.data.data.cinemas)
        })
    },
    A_CITY_LIST(store){
        axios({
            url:'gateway?k=1603792',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16132970752253105483743233","bc":"310100"}',
                 'X-Host': 'mall.film-ticket.city.list'
            },
        })
        .then(_=>{
            store.commit(TYPE.M_CITY_LIST,_.data.data.cities)
        })
    },
    A_GPSCITY_ID({commit},city){
        commit(TYPE.M_GPSCITY_ID,city)
        storageUtils.saveCityId(city.id)
        storageUtils.saveCityName(city.name)
    }
};

export default actions;