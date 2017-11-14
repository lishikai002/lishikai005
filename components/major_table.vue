<template>
  <div >
      <table v-for='(item,index) in tables':key='index' class='table_colleges'>
          <thead class='thead_tab'>
              <tr>
                  <td>选考科目</td>
                  <td>专业（类）数</td>
                  <td>科目比例</td>
              </tr>
          </thead>
          <tbody class='tbody_tabs'>
              <tr v-for='(value,ind) in item':key='ind'>
                  <td >{{value.subject}}</td>
                  <td >{{value.majorCount}}</td>
                  <td >{{value.rate}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script>
    export default{
        props:{
           "tables":{
               type:Array,
               required:true
           }
        }
    }
</script>
<style scoped>
    .table_colleges{
        width:33.3%;
        float:left;
        border-collapse: collapse;
    }
    .thead_tab{
        background:rgba(0,160,92,1);
        text-align:center;
        line-height:40px;
        color:#fff;
    }
    .tbody_tabs tr td{
         width:145px;
        text-align:center;
        line-height: 40px;
        border:solid 1px #ccc;
        font-size:14px;
    }
</style>