//initial get client's location;
function getLocation(){
    return new Promise((resolve, reject) =>{
        //the browsers are supporting the function of navigator.geolocation
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(onSuc,onErr);
        }
        function onSuc(result){
            resolve(result)
        }
     
        function onErr(err){
           reject(err)
        }
    })
};
export default getLocation();



