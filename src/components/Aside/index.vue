<template>
<div class="asideContainer" v-loading = "loading">
    <div class="hideScroll">
        <template v-if="data">
            <Avatar :url="data.avatar" :size="80"/>
            <h1 class="title">{{data.siteTitle}}</h1>
            <Menu />
            <Contact/>
            <p class="footer">
            
            </p>       
        </template>
    </div>

</div>
  
</template>

<script>
import Contact from "./Contact"
import Menu from "./Menu"
import Avatar from "@/components/Avatar"
import {mapState} from "vuex"
export default {
    components: {
        Contact,
        Menu,
        Avatar
    },
    computed:{
        ...mapState("setting",["loading","data"])
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
   padding:20px;
   box-sizing: border-box;
   overflow: hidden;
   position: relative;
   .hideScroll{
        overflow-y: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;
        width: calc(100% + 37px);
        height: 100%;
   }
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
        margin-top:30px;
        margin-left:20px

    }
}

</style>