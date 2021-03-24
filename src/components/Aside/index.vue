<template>
<div class="asideContainer">
    <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" :size="80"/>
    <h1 class="title">龙傲天的小窝</h1>
    <Menu />
    <Contact />
    <p class="footer">
     
    </p>

</div>
  
</template>

<script>
import Contact from "./Contact"
import Menu from "./Menu"
import Avatar from "@/components/Avatar"
export default {
    components: {
        Contact,
        Menu,
        Avatar
    }

}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
@import url("~@/styles/mixin.less");
.asideContainer{
   height:100%;
   width: 100%;
   background: @dark;
   padding: 20px 0;
   box-sizing: border-box;
   overflow-x: hidden;
   overflow-y: hidden;
   
   h1,p{
        text-align: center;
        color: #fff;
   }
   
    .avatarContainer{
        margin:10px auto
    }
    .menuContainer{
        margin-top:30px
    }
    .contactContainer{
        margin-top:60px;
        margin-left:20px

    }
}

</style>