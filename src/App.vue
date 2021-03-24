<template>
<div class="container">
    <Layout>
        <template #left>  
            <div class="left">
                <Aside />
            </div>
                
        </template>
         <template #main>  
                <RouterView />
        </template>
         <!-- <template #right>  
                <div class="right">

                </div>
        </template> -->

    </Layout>

</div>
  
</template>

<script>
import Layout from "@/components/Layout";
import Aside from "@/components/Aside"
export default {
    components: {
        Layout,
        Aside
    }

}
</script>

<style lang ="less" scoped>
@import url("~@/styles/mixin.less");
@import url("~@/styles/mixin.less");
.container{
    width:100vw;
    height:100vh;

}
.left {
  width: 250px;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
}

</style>