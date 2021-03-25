<template>
  <div class="commentContainer">
      <div class="msgContainer">
          <FormTable @submit="handleSubmit"/>
          
          <h3>评论列表({{data.total}})</h3>
          <ListInfo :list="data"/>
          <div class="loading" v-loading = "isLoading" ref="loading">

          </div>
      </div>

  </div>
</template>

<script>
import { getComment,submitComment } from "@/api/blog.js"
import fetchData from "@/mixins/fetchData.js"
import FormTable from "@/components/FormTable"
import ListInfo from "@/components/ListInfo"
export default {
    mixins:[fetchData({})],
    components:{
        FormTable,
        ListInfo
    },
    props:{

    },
    computed:{
        hasMore(){
            return this.data.total > this.data.rows.length
        }
    },
    data(){
        return{
            page:1
        }

    },
    methods:{
        async fetchData(){
            return await getComment(this.page, 10, this.$route.params.blogId);
        },
        async fetchMore(){
            if(!this.isLoading){
                if(!this.hasMore){
                    this.$refs.loading.innerText="没有更多了"
                    this.$refs.loading.style.height = 50+'px';
                    return;
                }
                this.page++;
                this.$refs.loading.style.height = 50+'px';
                this.$refs.loading.innerText=""
                this.isLoading = true;
                const res = await getComment(this.page, 10, this.$route.params.blogId);
                this.data.rows = this.data.rows.concat(res.rows);
                this.data.total = res.total
                this.isLoading = false;
                this.$refs.loading.style.height = 0;
            }

        },
        async handleSubmit(fromData,callback){
            let res = await submitComment({
                blogId:this.$route.params.blogId,
                ...fromData
            });
            this.data.rows.unshift(res)
            this.data.total++;
            callback();
        }
    },
    mounted() {
        this.$bus.$on("scrollBottom",this.fetchMore)
    },
    destroyed() {
        this.$bus.$off("scrollBottom",this.fetchMore)
    },



}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.commentContainer{

    margin-top:50px;
    padding:30px;
    border-top: 1px solid #eaebec;
    
    h3{
        margin:1em 0;
    }
    .dataListContainer{
        .listItem{
            display: flex;
            border-bottom: 1px solid #eaebec;
            padding: 15px 0;
            .avatar{
                margin-right:15px
            }
            .itemInfo{
                position: relative;
                width:100%;
                .nickName{
                    color: #65a13b;
                    margin-bottom: 10px;
                }
            }
            .content{
                font-size:14px
            }
            .time{
                position: absolute;
                right: 0;
                top: 5px;
                font-size: 12px;
                color: @gray;
            }

        }
    }
    .loading{
        position: relative;
        width:100%;
        text-align: center;
        line-height: 50px;
        color:@gray
    }
        
}

</style>