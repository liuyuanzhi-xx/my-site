<template>
      <img :src="url" :style="{
          width:size+'px',
          height:size+'px'
      }" class="avatarContainer">
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            default:50
        }
    }
}
</script>
<style>
    .avatarContainer{
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>