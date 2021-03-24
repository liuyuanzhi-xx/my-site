<template>
  <div class="homeContainer" v-loading="isLoading">
    <div class="up btn"  
    @click="trunTo(index-1)"
    v-if="data.length>0"
    v-show="index != 0">
      <Icon type = "up"/>
    </div>
    <div class="down btn" 
    @click="trunTo(index+1)"
    v-if="data.length>0 "
    v-show="index != data.length-1"
    >
      <Icon type = "down"/>
    </div>
    <div class="indexSpot">
      <ul>
        <li v-for="(item, i) in data" 
        :key="item.id" 
        :class="{
          selected : index === i
        }"
        @click="trunTo(i)"
       ></li>
      </ul>
    </div>
    <ul class = "bainner" 
    :style="{
      top,
    }"
    @wheel="handleWheel"
    @transitionend="handleTransitionend"
    ref="carouselContainer">
      <li v-for ="(item, i) in data" :key="item.id">
        <CarouselItem :item="item" :isShow="index == i"/>
      </li>
    </ul>
  
  </div>
  
</template>

<script>
import banner from "@/api/banner"
import Icon from "@/components/Icon"
import CarouselItem from "@/views/Home/CarouselItem"
import fetchData from "@/mixins/fetchData.js"


export default {
  mixins:[fetchData([])],
  components: {
    Icon,
    CarouselItem
  },
  computed:{
    top(){
      return -this.index * this.containerHeight +"px"
    }
  },
  data(){
    return{
      index:0,
      containerHeight:0,
      isTruning:false,
      reSize:this.setContainerHeight.bind(this)

    }
  },
  created() {
  },
  methods: {
    async fetchData(){
      return await banner();
    },
    trunTo(newIndex){
      if(this.data.length>0){
        if(newIndex >= this.data.length){
          this.index = this.data.length-1;
        }else if(newIndex < 0 ){
          this.index = 0
        }else{
          this.isTruning = true;
          this.index = newIndex;
        }

      }

    },
    handleWheel(e){
      
         if(e.deltaY < -5 && !this.isTruning){
          this.trunTo(this.index -1)
        }else if(e.deltaY > 5 && !this.isTruning){
          this.trunTo(this.index + 1)
        }
    },
    handleTransitionend(){
      this.isTruning = false
    },
    setContainerHeight(){
       if(this.$refs.carouselContainer){
        this.containerHeight = this.$refs.carouselContainer.clientHeight;
      }
    }
  
  },
  mounted() {
    this.containerHeight = this.$refs.carouselContainer.clientHeight;
    window.addEventListener("resize", this.reSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.reSize);
  }
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
@import url("~@/styles/mixin.less");
@jump:5px;
@keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
.homeContainer{
  height:100%;
  width:100%;
  overflow: hidden;
  position: relative;
  .btn{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    color:@gray;
    font-size:30px;
    cursor: pointer;
    z-index:2
  }
  .up{
    top:25px;
    animation: jump-up 2s infinite;
  }
  .down{
    bottom:25px;
    animation: jump-down 2s infinite;
  }
  .indexSpot{
    position: absolute;
    right:20px;
    top:50%;
    transform: translateY(-50%);
    z-index:2;
    
    li{
      width:6px;
      height:6px;
      margin-top:8px;
      border-radius: 50%;
      border:2px solid @gray;
      cursor: pointer;
      &.selected{
        background-color: #fff;
      }
      &:hover{
        background-color: #fff;
      }

    }
  }
  .bainner{
    height:100%;
    width:100%;
    position: absolute;
    transition: .3s;
    li{
      height:100%;
      width:100%;
    }
  }

}
</style>
