<template>
    <div class="imgLoaderContainer">
        <img v-if="!isEverthingDone" :src="placeHolder" class="placeHolder">
        <img :src="src" @load="loadHandel" :style="{opacity:originOpacity,transition: `${duration}ms`}">
    </div> 
  
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeHolder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            defalut:500
        }
    },
    data(){
        return{
            isLoaded:false,
            isEverthingDone:false
        }
    },
    computed:{
        originOpacity(){
            return this.isLoaded? 1:0
        }
    },
    methods:{
        loadHandel(){
            this.isLoaded = true;
            setTimeout(() => {
                this.isEverthingDone = true;
                this.$emit("load");
            }, this.duration);
        }

    }

}
</script>


<style lang="less" scoped>
@import url("~@/styles/mixin.less");
.imgLoaderContainer{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;

    img{
        .self-filled();
        object-fit: cover;
    }
    .placeHolder {
        filter: blur(2vw);
    }
}

</style>