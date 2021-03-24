<template>
  <div class="catalogContainer">
      <h2>目录</h2>
      <RightList :list="catalog" @selected = "handleSelect"/>

  </div>
</template>

<script>
import RightList from "@/views/Blog/RightList";
export default {
    components:{
        RightList,

    },
    props:{
        catalog:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
        handleSelect(item) {
            location.hash = item.anchor;
        },
    }

}
</script>

<style lang='less'>
.catalogContainer{
    width:100%;
    height:100%;
    padding:20px;
    h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>