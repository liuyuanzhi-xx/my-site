<template>
<div class="containner">
    <Layout>
        <template #left>  
            <div class="left">
                <Aside />
            </div>
                
        </template>
         <template #main>  
                <div class="main">

                </div>
        </template>
         <template #right>  
                <div class="right">

                </div>
        </template>

    </Layout>

</div>
  
</template>

<script>
import Layout from "./";
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
.containner{
    .self-filled();

}
.left {
  width: 250px;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
}
.right {
  width: 150px;
  height: 100%;
}

</style>