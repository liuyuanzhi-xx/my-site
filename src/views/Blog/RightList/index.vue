<template>
<ul class="rightListContainer">
    <li v-for="(item) in list" :key="item.id" 
    :class="{
        selected:item.isSelected
    }"
    @click="handleClick(item)"
    >
        <span>{{item.name}}</span>
        <span v-if="item.aside" class="aside">{{item.aside}}</span>
        <RightList v-if="item.children" :list="item.children"  @selected ="handleClick"/>
    </li>
    

</ul>
  
</template>

<script>
export default {
    
    name:"RightList",
    props:{
        list:{
            type:Array,
            defalut:()=>[]
        }
    },
    computed:{
    },
    methods: {
        handleClick(item){
            if (!item.isSelected) {
                this.$emit("selected", item);
            }
        },
    },
    mounted() {
    }
        
    
    
    

}
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.rightListContainer{
    .rightListContainer{
        margin-left:1em;
    }
    li{
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        cursor: pointer;
        &.selected{
            span{
                color:@warn;
                font-weight: bold;
            }
            

        }
        .aside{
            font-size: 12px;
            margin-left: 1em;
            vertical-align: center;
            color:@gray
        }
    }
    
}
// .rightListContainer>li:hover{
//     span{
//         color:@warn;
//         font-weight: bold;
//     }
// }


</style>