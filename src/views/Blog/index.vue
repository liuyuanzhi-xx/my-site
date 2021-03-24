<template>
  <div class="blogContainer">
    <Layout>
      <template #main>
        <div class="main">
          <BlogList />
        </div>
      </template>
      <template #right>
        <div class="right">
          <BlogCategory />
        </div>
      </template>
    </Layout>
    
  </div>
  
</template>

<script>
import Layout from "@/components/Layout"
import BlogCategory from "./BlogCategory"
import BlogList from "./BlogList"



export default {
  components: {
    BlogCategory,
    Layout,
    BlogList
  },
  computed:{

  },
  methods:{
    
  },
  mounted() {
   
    
  },
  created() {
  },
  
};
</script>

<style lang="less" scoped>
.blogContainer{
  width:100%;
  height:100%;
  .main{
    height:100%;
  }
  .right{
    width:300px;
    height:100%;
    position: relative;
  }

}
</style>
