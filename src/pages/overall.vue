<template>
       <div class="filter-box">
            <div class="selected-condations clearfix">
                <div class="left-title">已选条件：</div>
                <div class="right-area">
                    <p class='selected-item' v-if="selected_range_item!='不限'">{{selected_range_item}}<span class='clear_selected' @click='clearRange'>X</span></p>
                    <p class='selected-item' v-if="selected_area_item!='不限'">{{selected_area_item}}<span class='clear_selected'  @click='clearArea'>X</span></p>
                </div>
            </div>
            <div class="condations-box">
                <!-- <major-range :major-range-list="major_range"></major-range> -->
                <school-range :school-range-list="$store.state.school_range_obj"></school-range>
                <school-area :school-area-list="$store.state.school_area_obj"></school-area>
            </div>
             <p class='sub_title'><span >选考科目分析</span></p>
             <p class='sub_resmind'>*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后即时替换*！</p>
            <subject-analysis class='sub'></subject-analysis>
            <subject-table  class='sub'></subject-table>
            <subject-wrap :table-title='table_title'> 
                <subject-row v-for='(item,index) in table_row' :key='index' :datas='item'></subject-row>
            </subject-wrap>
        </div>
</template>
<script>
    
    import school_range from '../../components/school_range.vue';
    import school_area from '../../components/school_area.vue';
    import subject_analysis from '../../components/Subject_analysis.vue';
    import subject_analysis_b from '../../components/Subject_analysis_b.vue';
    import subject_wrap from '../../components/Subject_wrap.vue';
     import subject_row from '../../components/Subject_row.vue';
    import Vue from 'vue';
    import axios from 'axios';
    import Vuex from 'vuex';
    let query = {
        install:function(v){
            v.prototype.$http=axios;
        }
    }
    Vue.use(query);
    export default{
        name:'overall',
        components:{
            "school-range":school_range,
            'school-area':school_area,
            "subject-analysis":subject_analysis,
            "subject-table":subject_analysis_b,
             "subject-wrap":subject_wrap,
            "subject-row":subject_row
        },
         data:function(){
          return {
            //   selected_range_item:false,
            //   selected_area_item:false,
            //   school_range_obj:[],
            //   school_area_obj:[]
                 table_title:[],
                 table_row:[]
          }
      },
   
        created:function(){
          let vm = this;
           this.$http.get('src/server/schoolRange.json').then(function(res){
            let range_data=  res.data.list.map((value,index)=>{
                return index==0?{value:value,selected:true}:{value:value,selected:false}
            })
            vm.$store.commit('update_school_range', range_data)
          
        });
             this.$http.get('src/server/schoolArea.json').then(function(res){
             let area_data=  res.data.list.map((value,index)=>{
                return index==0?{value:value,selected:true}:{value:value,selected:false}
            })
             vm.$store.commit('update_school_area',area_data)
           
        }); 
            this.$http.get('src/data/SynthesisSearch_school.json').then(function(res){
            //  let school_data=  res.data.list.map((value,index)=>{
            //     return index==0?{value:value,selected:true}:{value:value,selected:false}
            // })
             vm.$store.commit('update_Synthesis_search',res.data.result.analysisData)
             vm.table_title=res.data.result.title;
             vm.table_row=res.data.result.rows;
           console.log(res.data.result.rows)
        }); 
        },
           computed:{
          "selected_range_item":function(){
              return  this.$store.getters.selected_range
          },
           "selected_area_item":function(){
              return this.$store.getters.selected_area
          }
      },
        methods:{
            clearRange:function(){
                this.$store.commit('clear_range')
            },
            clearArea:function(){
                 this.$store.commit('clear_area')
            }
        }
    }
</script>
<style>
.clearfix::after{
    content:"";
    display:block;
    clear: both;
}

.condations-box{
    border:solid 1px #ccc;
    padding:10px;
    line-height:35px;
}
.left-title,.right-area{
    float:left;
}
.left-title{
    margin: 5px 0;
    text-indent:10px;
    width:10%;
}
.right-area{
    width:90%;
}
.selected-item{
    display:inline-block;
    border:solid 1px #ccc;
    margin:0;
    padding:0 5px;
}
.selected-condations{
    padding:10px;
    line-height:35px;
}
.filter-item{
    display:inline-block;
    min-width:70px;
    padding:0 5px;
    height:35px;
    color:#333;
    text-align:center;
    line-height:35px;
    margin:5px;
    cursor:pointer;
}
.filter-item.selected{
    background:rgba(0,160,92,1);
    color:#fff;
}
.filter-item:hover{
    background:rgba(0,160,92,1);
    color:#fff;
}
.sub{
    float:left;
}
.sub_title{
    width:1200px;
    border-bottom:solid 1px #ccc;
    line-height:40px;
    padding-left:10px;
}
.sub_resmind{
    color:#ff0000;
    font-size:12px;
}
</style>