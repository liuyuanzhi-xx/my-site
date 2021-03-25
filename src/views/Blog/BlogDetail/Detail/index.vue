<template>
<div class="detailContainer">
    <div class="hideScroll" ref="mainContainer">
        <div class="realContainer">
            <h1>{{detailInfo.title}}</h1>
            <div class="aside">
                <span>日期：{{formatDate(detailInfo.createDate)}}</span>
                <span>浏览：{{detailInfo.scanNumber}}</span>
                <a href="#formContainer"><span>评论：{{detailInfo.commentNumber}}</span></a>
                <RouterLink :to="'/blog/cate/'+detailInfo.category.id"><span>分类：{{detailInfo.category.id}}</span></RouterLink>
            </div>
            <div class="markdown-body" v-html="detailInfo.htmlContent">
            </div>
                <Comment/>  
        </div>
        

    </div>
    <div v-show="isShowTop">
        <ToTop />
    </div>
    

</div>
  
</template>

<script>
import formatDate from "@/utils/formatDate.js"
import "highlight.js/styles/zenburn.css";
import Comment from "./Comment"
import debounce from "@/utils/debounce"
import ToTop from "@/components/ToTop"
import scrollTop from "@/mixins/scrollTop"
export default {
    mixins:[scrollTop('mainContainer')],
    components:{
        Comment,
        ToTop
    },
    props:{
        detailInfo:{
            type:Object,
            default:null
        }
    },
    methods:{
        formatDate,
        handleScroll() {
            this.$bus.$emit("mainScroll");
            const around = 20;
            const bottom = this.$refs.mainContainer.scrollHeight - this.$refs.mainContainer.clientHeight - this.$refs.mainContainer.scrollTop;
            if(bottom <= around){
                this.$bus.$emit("scrollBottom")
            }
        },
    },
    mounted() {
        this.setHandleScroll = debounce(this.handleScroll, 200);
        this.$refs.mainContainer.addEventListener("scroll",this.setHandleScroll );
        const hash = location.hash;
        location.hash = "";
        setTimeout(() => {
        location.hash = hash;
        }, 1);
    },
    beforeDestroy() {
        this.$refs.mainContainer.removeEventListener("scroll", this.setHandleScroll);
    },


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
        scroll-behavior: smooth;
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
    .toTopContainer{
        position:fixed;
        right:50px;
        bottom: 50px;
    }

}


</style>