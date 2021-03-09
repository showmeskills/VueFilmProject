<template>
    <div class="Film_nav_bar">
        <ul class="nav_bar">
            <!-- film nav bar start -->
            <router-link to=/film/nowplaying tag="li" activeClass="nav_active">
                <span>正在热映</span>
            </router-link>      
            <router-link to=/film/comingsoon tag="li" activeClass="nav_active">
                <span>即将上映</span>
            </router-link>  
             <!-- film nav bar end --> 
        </ul>
    </div>
</template>

<script>
import '@/assets/less/FilmLess/FilmNavBar.less';

export default {
    name:'Film_nav_bar',
}
</script>
