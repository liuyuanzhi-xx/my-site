<template>
  <div class="toTopContainer" 
  :style="{width:size+'px',height:size+'px',backgroundColor:color}"
  @click = "handleClick"
  >
  Top
  </div>
</template>

<script>
export default {
    props:{
        size:{
            type:Number,
            default:50
        },
        color:{
            type:String,
            default:"#6b9eee"
        }
    },
    methods:{
        handleClick(){
            this.$bus.$emit("toTop")
        }
    }

}
</script>

<style>
.toTopContainer{
    border-radius: 50%;
    color:#fff;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    z-index: 99;
    user-select:none;
}

</style>