<template>
    <nav class="tabbar">
        <ul> 
            <router-link to='/film' tag="li"  
                activeClass="myactive"
            >
            <i class="iconfont icon-dianying"></i>
                <p>电影</p>   
            </router-link>      
            <router-link to=/cinema tag="li" 
                activeClass="myactive"
            >
            <i class='iconfont icon-yingyuan'></i>
                <p>影院</p>
            </router-link>        
            <router-link to=/service tag="li"  
                activeClass="myactive"
            >
                <i class="iconfont icon-zixun"></i>
                <p>咨询</p>
            </router-link>            
            <router-link to=/center tag="li" 
                activeClass="myactive"
            >
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>    
        </ul>
    </nav>
</template>

<script>
import '@/assets/less/TabbarLess/Tabbar.less';

export default {
    name:'tabbar',
}
</script>
