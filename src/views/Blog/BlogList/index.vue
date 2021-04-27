<template>
  <div class="blogListContainer" v-loading="isLoading">
      <div class="hideScrool" ref="container" >
        <ul class="list">
            <li class="blogItem"
            v-for="(item,i) in getData.rows" :key="i">
            <RouterLink :to="'/blog/'+item.id">
                <div class="thumb" v-if="item.thumb">
                    <img  v-lazy="item.thumb">
                </div>
            </RouterLink>
            
            <div class="itemInfo">
                <RouterLink :to="'/blog/'+item.id">
                    <h2 class="title">{{item.title}}</h2>
                </RouterLink>
                <div class="aside">
                    <span>时间: {{formatDate(item.createDate)}}</span>
                    <span>浏览: {{item.scanNumber}}</span> 
                    <span>评论: {{item.commentNumber}}</span> 
                    <RouterLink :to="'/blog/cate/'+item.category.id"><span>分类 {{item.category.id}}</span></RouterLink>
                </div>
                <div class="desc">{{item.description}}</div>
            </div>
            </li>
        </ul>
         <Pager
            :current="routeInfo.page" 
            :total="data.total" 
            :limit="routeInfo.limit" 
            @changePage="changePage" />

      </div>

     <div class="toTop" v-if="!isLoading"  >
         <div v-show="isShowTop">
             <ToTop />
         </div>
         
     </div>
      
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"
import {getBlogs} from "@/api/blog.js"
import Pager from "@/components/Pager"
import formatDate from "@/utils/formatDate"
import ToTop from "@/components/ToTop"
import scrollTop from "@/mixins/scrollTop"
export default {
    mixins:[fetchData([]), scrollTop('container')],
    components: {
        Pager,
        ToTop
    },
    computed:{
        routeInfo(){
            return{
                categoryId: +this.$route.params.categoryId || -1,
                page: +this.$route.query.page || 1,
                limit: +this.$route.query.limit || 10
            }
        },
        getData(){
            console.log(this.data)
            return this.data
        },
    },
    methods: {
        async fetchData(){
            return await getBlogs(this.routeInfo.categoryId, this.routeInfo.page, this.routeInfo.limit)
        },
        changePage(newPage){
            const query = {
                page:newPage,
                limit:this.routeInfo.limit
            }
            const params = {
                categoryId:this.routeInfo.categoryId
            }
            if(params.categoryId == -1){
                this.$router.push({
                    name:"Blog",
                    query
                })
            }else{
                this.$router.push({
                    name:"CategoryBlog",
                    query,
                    params
                })
            }
        },
        formatDate,
        lazyHandle(e){
            console.log(this.$refs.container.scrollTop)
            this.$bus.$emit("lazyScroll");

        }
    },
    watch: {
        async $route() {
            this.isLoading = true;
            // 滚动高度为0
            this.$refs.container.scrollTop = 0;
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    },
    mounted() {
        this.$refs.container.addEventListener("scroll",this.lazyHandle)
    },
    beforeDestroy() {
        this.$refs.container.removeEventListener("scroll",this.lazyHandle)
    },


}
</script>

<style lang="less">
@import url("~@/styles/var.less");
@import url("~@/styles/mixin.less");
.blogListContainer{
    width:100%;
    height:100%;
    box-sizing: border-box;
    overflow: hidden;
    padding:20px;
    
    .hideScrool{
        position: relative;
        overflow-y:auto ;
        overflow-x:hidden ;
        scroll-behavior: smooth;
        width:calc(100% + 40px);
        height:100%;
        
    }
    li{
        display: flex;
        padding: 15px 0;
        margin-right:20px;
        border-bottom: 1px solid #b4b8bc;
        margin-bottom: 10px;
        .thumb{
            margin-right:15px;
            &:hover{
                color:primary
            }
            img{
                display: block;
                max-width: 200px;
                border-radius: 5px;
                height:167px;
                width:auto;
            }
        }
        .title:hover{
                color:primary
            }
        
        .aside{
            color:@gray;
            font-size:12px;
            margin:10px 0;
            span{
                margin-right:15px;
            }
        }
        .desc{
            margin: 15px 0;
            font-size: 14px;
        }
    }
    .pagerContainer{
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        white-space: nowrap;
        margin: 10px 0;


        i,.iconContainer{
            width:40px;
            height:40px;
            font-size:17px;
            line-height:40px
        }
    }
    .toTopContainer{
        position: fixed;
        right:50px;
        bottom: 50px;
    }
    
}

</style>