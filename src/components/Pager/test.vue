<template>
<div>
  <Pager :current="current" :total="total" :visibleNumber ="10" @changePage="changeCurrent"/>
</div>
</template>

<script>

import Pager from "./"


export default {
    components:{
        Pager
    },
    data(){
      return{
        current : 1,
        total:300
      }
    },
    methods:{
      changeCurrent(newCurrent){
        this.current = newCurrent
      }
    }

}
</script>

<style>

</style>