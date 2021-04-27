<template>
<div class="contactContainer">
    <ul>
        <li v-for="item in data.info" :key="item.name">
            <a :href="item.linkTo">
                <Icon :type="item.name"/>
                <span>{{item.text}}</span>
            </a>
            <div v-if ="item.qrCode" class="pop">
                <img
                :src="item.qrCode"
                alt=""
                />
            </div>
        </li>
    </ul>
</div>
  
</template>

<script>
import Icon from "@/components/Icon"
import {mapState} from "vuex"
export default {
    components:{
        Icon
    },
    computed:{
        ...mapState("setting",["data"])

    },
    data(){
        return{
            items:[
                {
                    name:'gitHub',
                    text:'liuyuanzhi',
                    iconType:'gitHub',
                    qrCode:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
                },{
                    name:'email',
                    text:'email',
                    iconType:'email',
                    qrCode:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
                },{
                    name:'qq',
                    text:'1249184952',
                    iconType:'qq',
                    qrCode:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
                },{
                    name:'weixin',
                    text:'xxxxx',
                    iconType:'weixin',
                    qrCode:""
                }
            ]
        }
    }

}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
@itemHight:30px;
.contactContainer{
    width:100%;
    // height:100%;
    ul{
        padding:20px;
        margin:0;
        list-style: none;
        li{
            height:@itemHight;
            line-height:@itemHight;
            margin: 14px 0; 
            cursor: pointer;
            position: relative; 
            &:hover {
                .pop {
                    transform: scaleY(1);
                }
            }
            a{
                display: flex;
                align-items: center;
                color:@lightWords;
                text-decoration: none;
                .iconContainner{
                    font-size:26px;
                    width:36px;
                }
                span{
                    display: inline-block;
                    margin-left:10px
                }
            }

        }
        

    }
    .pop{
        position: absolute;
            left: 0;
            bottom: @itemHight + 5px;
            padding: 10px 15px;
            background: #fff;
            border-radius: 5px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.3s;
            img {
            width: 150px;
            height: 150px;
            }
            &::after {
                content: "";
                position: absolute;
                left: 50%;
                transform: translateX(-50%); //rotate(45deg);
                border:8px solid transparent;
                border-top-color:#fff;
                bottom: -16px;
            }
        
    }
    
    
}

</style>