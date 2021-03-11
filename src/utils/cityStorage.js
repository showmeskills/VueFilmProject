const CITY_ID = 'city_id'
const CITY_NAME ='city_name';
const FILTER_DISTRICT = 'filterDistrict';
const FILTER_COUNTER= 'filterCounter';
const USERNAME = 'userName';
const AllCity = 'allCity';
export default {
    saveCityId(cityId){
        return window.localStorage.setItem(CITY_ID, cityId);
    },
    saveCityName(cityName){
        return window.localStorage.setItem(CITY_NAME, cityName);
    },
    readCityId(){
       return window.localStorage.getItem(CITY_ID)
    },
    readCityName(){
        return  window.localStorage.getItem(CITY_NAME)
    },
    saveDistrict(districs){
        return window.localStorage.setItem(FILTER_DISTRICT,JSON.stringify(districs))
    },
    readDistrict(){
        return JSON.parse(window.localStorage.getItem(FILTER_DISTRICT) || '[]');
    },
    saveCounter(counters){
        return window.localStorage.setItem(FILTER_COUNTER,JSON.stringify(counters))
    },
    readCounter(){
        return JSON.parse(window.localStorage.getItem(FILTER_COUNTER) || '[]');
    },
    saveUserName(userName){
        return window.localStorage.setItem(USERNAME,userName)
    },
    readUserName(){
        return window.localStorage.getItem(USERNAME);
    },
    saveAllCity(cities){
        return window.localStorage.setItem(AllCity,JSON.stringify(cities))
    },
    readAllCity(){
        return JSON.parse(window.localStorage.getItem(AllCity) || '[]');
    }
}