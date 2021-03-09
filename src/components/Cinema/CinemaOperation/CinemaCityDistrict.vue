<template>
<!-- district start -->
    <div class="Cinema_city_district">
        <div class="district_wrapper">
            <ul v-if="district">
                <li>
                    <div class="select" @click='AllDistricts' :class="isDistrict? 'activeDistrict':''">
                            全城
                    </div>
                </li>
                <li v-for="(districts,idx) in district" :key="districts.districtId"
                >
                    <div class="select" :class="idx===currentIndex? 'activeDistrict':''"
                         @click='selectDistrict(districts.name,idx)'
                    >
                        {{districts.name}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
<!-- district end -->
</template>

<script>
import '@/assets/less/CinemaLess/CinemaOperation/CinemaCityDistrict.less';
import { mapState} from "vuex";
export default {
    name:'Cinema_city_district',
    data(){
        return{
            district:[],
            isDistrict:true,
            currentIndex:null,
        }
    },
    mounted(){
        this.$bus.$on('to-district',data=>{
            //find a unique district name and id;
        Array.from(data).forEach(item=>{
            this.district.push(item.district)
                var hash = {};
                this.district = this.district.reduce(function(item, next) {
                    hash[next.name] ? '' : hash[next.name] = true && item.push(next);
                    return item
                }, [])
            }) 
        })
    },
    methods:{
        selectDistrict(name,idx){
            this.$emit('selectDistrict',name)
            this.currentIndex = idx;
            this.isDistrict = false;
            this.$bus.$emit('filterDistrict',name)
            this.$bus.$emit('filterCounter',name)
        },
        AllDistricts(){
            this.isDistrict = !this.isDistrict;
            this.currentIndex = null;
            this.$emit('AllDistricts','全城')
            this.$bus.$emit('SelectAll')
            this.$bus.$emit('SelectALLCounter')
        }
    },
    computed:{
        ...mapState(["cinemaList"]),
    }
}
</script>