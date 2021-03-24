<template>
    <Layout>
        <template #main>
            <div class="main" v-loading="isLoading" v-if="data">
                <Detail :detailInfo="data"/>
            </div>
        </template>
        <template #right>
            <div class="right" v-loading="isLoading" v-if="data">
                <Catalog :catalog ="data.toc"/>
            </div>
        </template>

    </Layout>
  
</template>

<script>
import Layout from "@/components/Layout"
import fetchData from "@/mixins/fetchData.js"
import {getBlogDetail} from "@/api/blog.js"
import Detail from "./Detail"
import Catalog from "./Catalog"

export default {
    mixins:[fetchData(null)],
    components:{
        Layout,
        Detail,
        Catalog
    },
    methods:{
        async fetchData(){
            return await getBlogDetail(this.$route.params.blogId);
        }
    }

}
</script>

<style lang="less" scoped>
.main,.right{
    height:100%;
    width:100%
}
.right{
    width:300px;
}

</style>