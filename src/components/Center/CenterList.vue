<template>
<!-- center list start -->
     <div class="center_list">
        <ul>
            <li v-for='item in imgItem' :key="item.id" @click="check">
                <div class="center_list_item">
                    <img :src="item.url" alt="">
                    <span>
                        {{ item.title}}
                    </span>
                </div>
                <div class="center_list_arrow">
                     <span>{{item.money}}</span>
                    <i class="iconfont icon-xiangyou"></i>
                </div>
            </li>
        </ul>
    </div>
<!-- center list end -->
</template>

<script>
export default {
    data(){
        return{
            imgItem:[
                {
                    id:0,
                    url:require('@/assets/img/CenterImg/list_item.png'),
                    title:'卖座券'
                },
                {
                    id:1,
                    url:require('@/assets/img/CenterImg/list_item1.png'),
                    title:'组合红包'
                },
                {
                    id:2,
                    url:require('@/assets/img/CenterImg/list_item2.png'),
                    title:'余额',
                    money:'￥0',
                },
                {
                    id:3,
                    url:require('@/assets/img/CenterImg/list_item3.png'),
                    title:'设置'
                },
            ]
        }
    },
    props:{
        checkLogin:Function,
    },
    methods:{
        check(){
            this.checkLogin();
        }
    }
}
</script>