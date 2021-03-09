import axios from 'axios';
import { Indicator } from 'mint-ui';

let loading
//loading function
function startLoading(){
    //loading animation start
    loading = Indicator.open({
        spinnerType: 'snake'
    });
};

function endLoading(){
    //loading animation end
    Indicator.close();
}

//request interceptor
axios.interceptors.request.use(config=>{
    //loading function start
    startLoading();
    return config;
},err=>{
    return Promise.reject(err);
})
//request interceptor
axios.interceptors.response.use(config=>{
    //loading function end
    endLoading();
    return config;
},err=>{
    endLoading();
    return Promise.reject(err);
})

export default axios;