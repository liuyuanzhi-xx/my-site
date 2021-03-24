<template>
  <div class="blogCategoryContainer" v-loading="isLoading" ref="container">
      <div class="hideScrool">
          <h2 class="title">文章分类</h2>
          <div class="listContainer">
            <RightList :list="finalList"  @selected ="selectChange"/>
          </div>

      </div>
    
    
  </div>
</template>

<script>
import RightList from "../RightList"
import fetchData from "@/mixins/fetchData.js"
import {getBlogTypes} from "@/api/blog.js"

export default {
    mixins:[fetchData([])],
    components: {
        RightList,
    },
    computed:{
        routeInfo(){
            return{
                categoryId: +this.$route.params.categoryId || -1,
                page: +this.$route.query.page || 1,
                limit: +this.$route.query.limit || 10
            }
        },
        finalList(){
            let articleTotal = this.data.reduce((pre, cur)=>{
                return pre + cur.articleCount
            },0)
            let tempList = [
                {name:"全部", articleCount:articleTotal, id: -1},
                ...this.data

            ].map((item) => {
                return {
                    ...item,
                    isSelected:item.id === this.routeInfo.categoryId,
                    aside:`${item.articleCount}篇`
                }
            })
            return tempList
        },
    },
    methods:{
        async fetchData(){
            return await getBlogTypes()
        },
        selectChange(item){
            const query ={
                page:1,
                limit:this.routeInfo.limit
            };
            let params= {
            categoryId: item.id,
            };
            if(params.categoryId == -1){
                this.$router.push({
                    name: "Blog",
                    query,
                })
            }else{
                this.$router.push({
                    name: "CategoryBlog",
                    params,
                    query,
                })
            }
        },
    }
    

}
</script>

<style lang="less" scoped>
.blogCategoryContainer{
    width: 300px;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    height: 100%;
    overflow: hidden;
    .hideScrool{
         overflow-y: auto;
         width: calc(100% + 40px);
         height:100%

    }
   
    .title{
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;

    }
    .listContainer{
        margin:16px 0;
    }


}

</style>