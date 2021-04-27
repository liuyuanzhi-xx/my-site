<template>
<div class="blogDetailContainer" v-loading="isLoading">
        <Layout>
        <template #main>
            <div class="main" v-if="data">
                <Detail :detailInfo="data" />
            </div>
        </template>
        <template #right>
            <div class="right" v-if="data">
                <div>
                    <Catalog :catalog ="data.toc"/>
                </div>
            </div>
        </template>

    </Layout>
  

</div>

</template>

<script>
import Layout from "@/components/Layout"
import fetchData from "@/mixins/fetchData.js"
import {getBlogDetail} from "@/api/blog.js"
import Detail from "./Detail"
import Catalog from "./Catalog"
import titleController from "@/utils/titleController"


export default {
    mixins:[fetchData(null)],
    components:{
        Layout,
        Detail,
        Catalog,
        Comment
    },
    methods:{
        async fetchData(){
            const res = await getBlogDetail(this.$route.params.blogId);
            if(res.title){
                titleController.setSiteTitle(res.title);
            }
            return res;
        }
    }

}
</script>

<style lang="less" scoped>
.blogDetailContainer{
    width:100%;
    height:100%;
    position: relative;
}
.main,.right{
    height:100%;
    width:100%
}
.main{
    overflow-y: auto;
}
.right{
    width:300px;
}

</style>