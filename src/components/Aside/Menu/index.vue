<template>
  <div class="menuContainner">
      <nav>
          <RouterLink 
          v-for="item in menuItems" 
          :key="item.linkTo" 
          :to="item.linkTo"
          :exact="item.exact"
          active-class="selected"
          exact-active-class=""
          >
            <div class ="item">
                <Icon :type ="item.iconType"/>
                <span>{{item.titel}}</span>
            </div>
          </RouterLink>
      </nav>
      
      


  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components: {
        Icon
    },
    data(){
        return{
            menuItems:[
                {
                    name:'home',
                    titel:"首页",
                    iconType:'home',
                    linkTo:'/',
                    exact:true
                },{
                    name:'blog',
                    titel:"文章",
                    iconType:'blog',
                    linkTo:'/blog',
                    exact:false
                },{
                    name:'about',
                    titel:"关于我",
                    iconType:'aboutMe',
                    linkTo:'/about',
                    exact:true
                },{
                    name:'project',
                    titel:"项目",
                    iconType:'project',
                    linkTo:'/project',
                    exact:true
                },{
                    name:'message',
                    titel:"留言板",
                    iconType:'message',
                    linkTo:'/message',
                    exact:true
                }
            ]
        }
    },
    methods: {
        isSelected(path){
            return location.pathname.toLowerCase() === path.toLowerCase()
        }
    },

}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");

.menuContainner{
    width:100%;
    margin: 24px 0;
    a{
        display: block;
        text-decoration: none;
        color:@lightWords;
        width:100%;
        height:45px;
        line-height:45px;
        padding:0 50px;
        box-sizing: border-box;
        &:hover{
            color:#fff;
        }
        .item{
             span{
                display: inline-block;
                margin-left:10px;
            }
            .iconContainner{
                font-size: 16px;
            }

        }
    }

}
.selected{
    background-color: darken(@word,5%);
}



</style>