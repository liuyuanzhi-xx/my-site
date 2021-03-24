<template>
    <div class="container">
        <ImgLoader 
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304" 
        placeHolder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" 
        :duration="5000" />
    </div>
</template>

<script>
import ImgLoader from "./"
export default {
    components: {
        ImgLoader
    }

}
</script>

<style scoped>
.container{
    width:500px;
    height:400px;
    border: 1px solid #999;
    margin:0 auto;
    

}

</style>