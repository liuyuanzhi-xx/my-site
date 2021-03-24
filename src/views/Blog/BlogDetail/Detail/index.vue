<template>
<div class="detailContainer" v-if="detailInfo">
    <div class="hideScroll">
        <div class="realContainer">
            <h1>{{detailInfo.title}}</h1>
            <div class="aside">
                <span>日期：{{formatDate(detailInfo.createDate)}}</span>
                <span>浏览：{{detailInfo.scanNumber}}</span>
                <span>评论：{{detailInfo.commentNumber}}</span>
                <RouterLink :to="'/blog/cate/'+detailInfo.category.id"><span>分类：{{detailInfo.category.id}}</span></RouterLink>
            </div>
            <div class="markdown-body" v-html="detailInfo.htmlContent">
            </div>  
        </div>
        

    </div>

</div>
  
</template>

<script>
import formatDate from "@/utils/formatDate.js"
import "highlight.js/styles/zenburn.css";
export default {
    props:{
        detailInfo:{
            type:Object,
            default:null
        }
    },
    methods:{
        formatDate,
    }

}
</script>

<style lang='less' scoped>
@import url("~@/styles/var.less");
@import "~@/styles/markdown.css";

.detailContainer{
    width:100%;
    height:100%;
    padding:20px;
    overflow: hidden;
    
    .hideScroll{
        width:calc(100% + 40px);
        height:100%;
        overflow-y:auto;
        .realContainer{
            width:calc(100% - 40px);
            height:100%;
        }
        h1{
            margin:21px 0;
        }
        .aside{
            color:@gray;
            font-size:12px;
            margin:10px 0;
            span{
                margin-right:15px;
            }
        }
    }

}


</style>