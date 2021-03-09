<template>
    <div class="Recent_record">
        <div class="record_wrappar">
            <ul>
                <li :class="isRecord?'activeRecord':''"
                    @click="handleRecording('最近去过')"
                >
                    <i class="iconfont icon-tick"></i>
                    <span>最近去过</span>
                </li>
                <li :class="isRecord?'':'activeRecord'"
                     @click="handleRecording('离我最近')"
                >
                    <i class="iconfont icon-tick"></i>
                    <span>离我最近</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import '@/assets/less/CinemaLess/CinemaOperation/RecentRecord.less';

export default {
    data(){
        return{
            isRecord:true,
        }
    },
    methods:{
        handleRecording(records){
            this.isRecord = !this.isRecord;
            this.$emit('handleRecording',records)
        }
    }
}
</script>