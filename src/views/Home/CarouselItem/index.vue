<template>
<div class="carouselContainer" 
@mousemove="handleMouseMove" 
@mouseleave="handleMouseLeave" ref= "container">
    <div class="img" :style="imgPosition" ref = "imgContainer">
        <ImgLoader 
    :src="item.bigImg" 
    :placeHolder="item.midImg"
    
    />

    </div>
    
    <div class="title" ref="titleContainer">{{item.title}}</div>
    <div class="des" ref="desContainer">{{item.description}}</div>
    <!-- <div class="test">横坐标：{{mouseX}} 纵坐标：{{mouseY}}</div> -->

</div>
  
</template>

<script>
import Icon from "@/components/Icon"
import ImgLoader from "@/components/ImgLoader"
export default {
    components:{
        Icon,
        ImgLoader
    },
    props:{
        item:{
            type:Object
        },
        isShow:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        imgPosition(){
            if (!this.innerSize || !this.containerSize) {
                return;
            }
            let containWith = this.$refs.container.clientWidth;
            let containHeight = this.$refs.container.clientHeight;
            let extraWidth =  this.$refs.imgContainer.clientWidth - containWith;
            let extraHeight =  this.$refs.imgContainer.clientHeight - containHeight;
            let left = (-extraWidth/this.containerSize.width) * this.mouseX;
            let top = (-extraHeight/this.containerSize.height) * this.mouseY;
            // extraWidth/left = this.mouseX/this.containerSize.width
            return{
                transform:`translate(${left}px, ${top}px)`
            }
        },
        center() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            };
        },
        
    },
    data(){
        return{
            titleWidth:0,
            desWidth:0,
            mouseX:0,
            mouseY:0,
            containerSize:null,//外层容器大小
            innerSize:null//内层容器大小
        }
    },
    methods: {
        textPlay(){
            if(this.isShow){
            this.$refs.titleContainer.style.transition = "";
            this.$refs.titleContainer.style.opacity = 1;
            this.$refs.titleContainer.style.width = 0;
            // console.log(this.$refs.titleContainer.style.width)
            // 强制让浏览器渲染一次
            this.$refs.titleContainer.clientWidth; // reflow
            this.$refs.titleContainer.style.transition = "1s";
            this.$refs.titleContainer.style.width = this.titleWidth + "px";
            // console.log(this.$refs.titleContainer.style.width)
            

            // 和上面一样
            this.$refs.desContainer.style.transition = "";
            this.$refs.desContainer.style.opacity = 1;
            this.$refs.desContainer.style.width = 0;
            // 强制让浏览器渲染一次
            this.$refs.desContainer.clientWidth; // reflow
            this.$refs.desContainer.style.transition = "2s 1s";
            this.$refs.desContainer.style.width = this.desWidth + "px";
            }
        },
        handleMouseMove(e){
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave() {
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        },
        setSize() {
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            };
            this.innerSize = {
                width: this.$refs.imgContainer.clientWidth,
                height: this.$refs.imgContainer.clientHeight,
            };
        },
    },
    mounted() {
        this.titleWidth = this.$refs.titleContainer.clientWidth;
        this.desWidth = this.$refs.desContainer.clientWidth;
        if(this.isShow){
            this.textPlay()
        }
        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener("resize", this.setSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.resize);
    },
    watch:{
        isShow(value, oldValue){
            if(value){
                this.textPlay()
            }
        }
    }

}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.carouselContainer{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
    .img{
        width:110%;
        height:110%;
        z-index: -2;
        transition: .3s;
    }
    .title,.des{
        position: absolute;
        top:50%;
        left: 50px;
        letter-spacing: 3px;
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        opacity: 0;
        overflow: hidden;
    }
    .title{
        font-size: 2em;
    }
    .des{
        margin-top:70px;
        font-size: 1.2em;
        color: lighten(@gray, 20%);
        left: 70px;

    }
    .test{
        position: absolute;
        top:10px;
        left:10px;
        font-size: 1.2em;
        color:#fff
    }
}

</style>