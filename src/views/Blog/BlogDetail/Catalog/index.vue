<template>
  <div class="catalogContainer">
      <h2>目录</h2>

      <RightList 
      :list="hasIsSelected" 
      @selected = "handleSelect" 
      v-if="hasIsSelected.length > 0"/>

  </div>
</template>

<script>
import RightList from "@/views/Blog/RightList";
export default {
    components:{
        RightList,

    },
    props:{
        catalog:{
            type:Array,
            default:()=>[]
        }
    },
    data(){
        return{
            selectedAnchor:"",
        }

    },
    computed:{
        hasIsSelected(){
            const addIsSelected = (list = [])=>{
                return list.map((item)=>{
                    return{
                        ...item,
                        isSelected:this.selectedAnchor == item.anchor,
                        children:addIsSelected(item.children)
                    }
                })
            }
            return addIsSelected(this.catalog);
        
           
        },
        doms(){
            const domsList = [];
            const addToDoms = (list)=>{
                list.forEach((item)=>{
                    domsList.push(document.getElementById(item.anchor));
                    if(item.children && item.children.length > 0){
                        addToDoms(item.children)
                    }
                })
            }
            addToDoms(this.catalog);
            return domsList;
        }

    },
    methods:{
        handleSelect(item) {
            location.hash = item.anchor;
        },
        setSelected(){
            this.activeAnchor = "";
            const around = 200;
            for(const dom of this.doms){
                if(!dom){
                    continue;
                }
                const top = dom.getBoundingClientRect().top;
                if(top >= -1 && top <= around){
                     this.selectedAnchor = dom.id;
                     return;
                }else if(top > around){
                    return;
                }else{
                    this.selectedAnchor = dom.id;
                }
            }
        },
    },
    created() {
        this.$bus.$on("mainScroll", this.setSelected)
    },
    destroyed(){
        this.$bus.$off("mainScroll", this.setSelected)
    },

}
</script>

<style lang='less'>
.catalogContainer{
    width:100%;
    height:100%;
    padding:20px;
    h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>