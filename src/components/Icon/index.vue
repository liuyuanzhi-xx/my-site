<template>
<div class="iconContainer" @click="handleClick()">
    <i :class="'iconfont '+ getTypeCode" ></i>
</div>
  
</template>

<script>
let iconType = {
    empty : "icon-kong",
    firstPage : "icon-jiantou_shangyiye",
    lastPage : "icon-jiantou_xiayiye",
    prePage : "icon-shangyiye",
    nextPage : "icon-xiayiye",
    gitHub:"icon-github",
    email:"icon-qunfengyouxiang",
    qq:"icon-sign_qq",
    weixin:"icon-weixin1x",
    aboutMe:"icon-guanyuwomen",
    home:"icon-shouye",
    blog:"icon-16",
    message:"icon-liuyanban-05",
    project:"icon-code",
    success:"icon-chenggong",
    info:"icon-fl-xinxi",
    error:"icon-cuowu",
    warn:"icon-jinggao",
    down:"icon-zhankai",
    up:"icon-shouqi"


}
export default {
    props:{
        type:{
            type:String,
            required:true
        },
        isClick:{
            type:Boolean,
            default:false
        },
        
    },
    computed:{
        getTypeCode(){
            return iconType[this.type];
        }

    },
    data(){
        return{
           
        }
        
    },
    methods:{
        handleClick(){
            if(this.isClick){
                this.$emit('childClick');
            }
        }

    }
}
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_2427787_3mer5d2trxe.css");
.iconContainer{
    display: inline-block;
    text-align: center;
}
.iconfont{
    font-size:inherit;
    color:inherit;

}

</style>