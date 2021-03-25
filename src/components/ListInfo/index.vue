<template>
    <ul class="listInfoContainer" v-if="list">
        <li class="listItem"
          v-for="item in list.rows"
          :key="item.id"
        >
        <div class="avatar">
            <Avatar :url='item.avatar' :size="44"/>

        </div>
        <div class="itemInfo">
            <div class="nickName">{{item.nickname}}</div>
            <div class="content">{{item.content}}</div>
            <div class="time">{{formatDate(item.createDate,true)}}</div>
        </div>
        </li>
    </ul>
  
</template>

<script>
import formatDate from "@/utils/formatDate.js"
import Avatar from "@/components/Avatar"
export default {
    props:{
        list:{
            type:Object
        }
    },
    components: {
        Avatar
    },
    methods:{
        formatDate,
    }

}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.listInfoContainer{
    .listItem{
        display: flex;
        border-bottom: 1px solid #eaebec;
        padding: 15px 0;
        .avatar{
            margin-right:15px
        }
        .itemInfo{
            position: relative;
            width:100%;
            .nickName{
                color: #65a13b;
                margin-bottom: 10px;
            }
        }
        .content{
            font-size:14px
        }
        .time{
            position: absolute;
            right: 0;
            top: 5px;
            font-size: 12px;
            color: @gray;
        }
    }

}

</style>