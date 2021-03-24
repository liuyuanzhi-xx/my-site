<template>
<div class="loadingContainer">
    <img :src="loadingUrl" />
</div>
  
</template>

<script>
import loadingUrl from "@/assets/loading.svg"
export default {
    data(){
        return{
            loadingUrl
        }
    }

}
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
.loadingContainer{
    .self-center()
}

</style>