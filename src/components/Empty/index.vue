<template>
  <div class="emptyContainer">
      <div class="empty">
           <Icon type="empty"/>
           <div class="text">{{text}}</div>
      </div>
      
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components:{
        Icon
    },
    props:{
        text:{
            type:String,
            default:"无数据"
        }
    }


}
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2427787_oz8zdkn3az7.css");
@import url("~@/styles/var.less");
@import url("~@/styles/mixin.less");
.emptyContainer{
    width:100%;
    height:100%;
    position: relative;
    
}
.empty{
    .self-center();
    text-align: center;
    color:@lightWords
}
.iconContainer{
    font-size: 78px;
}
</style>