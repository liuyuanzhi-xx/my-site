<template>
<form class="formTableContainer" 
      ref="formContainer" 
      @submit.prevent="handleSubmit"
      id ="formContainer">
    <div class="formItem" >
        <div class="inputArea">
            <input type="text" maxlength="10" v-model="formData.nickName" placeholder="用户昵称">
                <span class="tip">{{formData.nickName.length}}/10</span>
        </div>
        <div class="errMsg">{{error.nickName}}</div>
    </div>
    <div class="formItem">
        <div class="textArea">
            <textarea  id="" v-model="formData.content" maxlength="300" placeholder="请输入内容"></textarea>
                <span class="tip">{{formData.content.length}}/300</span>
        </div>
        <div class="errMsg">{{error.content}}</div>
    </div>
    <div class="formItem">
        <div class="buttonArea">
            <button :disabled="isSubmiting">{{isSubmiting? "提交中":"提交"}}</button>
        </div>
    </div>
</form>
</template>

<script>
export default {
    data(){
        return{
            formData:{
                nickName:"",
                content:""
            },
            error:{
                nickName:"",
                content:""
            },
            isSubmiting:false
        }
    },
    methods:{
        handleSubmit(){
            this.error.nickName = this.formData.nickName? "" : "请填写昵称";
            this.error.content = this.formData.content? "" : "请填写内容";
            if(!this.error.nickName && !this.error.content){
                this.isSubmiting = true;
                console.log("正在提交")
                this.$emit("submit", this.formData,()=>{
                    this.popMessage({
                        type:"success",
                        content:"评论成功",
                        duration:1000,
                        container: this.$refs.formContainer,
                        callback:()=>{
                            this.isSubmiting = false;
                            this.formData.nickName = "";
                            this.formData.content = "";

                        }
                    })
                })
                
            }
        }

    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.formTableContainer{
    .formItem{
        margin-bottom: 8px;
        input,textarea{
            display: block;
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
            border: 1px dashed @gray;
            outline: none;
            color: #373737;
            font-size: 14px;
            border-radius: 4px;
            &:focus {
                border-color: @primary;
            }
        }
        .tip{
                position: absolute;
                right: 5px;
                bottom: 5px;
                color: @gray;
                font-size: 12px;
        }
        .errMsg{
            margin-top: 6px;
            color: #cc3600;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
        }
        .inputArea{
            position: relative;
            width: 50%;
            input{
                height: 40px;
            }
        }
        .textArea{
            position: relative;
            textarea{
                resize: none;
                padding: 8px 15px;
                height: 120px;
            }
        }
        .buttonArea{
            button{
                position: relative;
                cursor: pointer;
                border: none;
                outline: none;
                width: 100px;
                height: 34px;
                color: #fff;
                border-radius: 4px;
                background: @primary;
                &:disabled {
                    background: lighten(@primary, 20%);
                    cursor: not-allowed;
                }    
            }
        }
    } 
        
}


</style>