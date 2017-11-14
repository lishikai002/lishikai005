<template> 
<tbody class='tbody'>
    <tr>
        <td v-for="(item,index) in data_row1" :key='index'><span v-show='(index==0)' @click='btn'>+</span>{{item}}</td>
    </tr>
    <tr v-show=flag>
        <td colspan="9">
            <table class='inner-table'>
                <thead>
                    <tr>
                        <td>高校地区</td>
                        <td>高校名称</td>
                        <td>专业（类）</td>
                        <td>类中所含专业</td>
                        <td>选考科目范围</td>
                    </tr>
                </thead>
                 <tbody>
                    <tr v-for="(item,index) in data_row2" :key='index'>
                        <td>{{item.province}}</td>
                        <td>{{item.collegeName}}</td>
                        <td>{{item.majorName}}</td>
                        <td>{{item.remark.join(',')}}</td>
                        <td>{{item.subjectRangeNames.join(',')}}</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>

</template>
<script>
export default{

  props:{
      "datas":{
        type:Array,
         required:true
      }
  },
  data(){
      return {
          data_row1:[],
          data_row2:[],
          flag:false
      }
  },
  created:function(){
      this.data_row1=this.datas.slice(0,9)
      this.data_row2=this.datas[9]
  },
  methods:{
      btn:function(){
          this.flag=!this.flag;
      }
  },
  mounted:function(){
      console.log(this.datas)
  }
}
</script>
<style scoped>
.inner-table{
    background:#f4F4F4;
    font-size:12px;
    width:1200px;
     border-collapse: collapse;
}
.tbody tr td{
     width:145px;
    text-align:center;
    line-height: 40px;
    border:solid 1px #ccc;
    font-size:14px;
   
}

</style>