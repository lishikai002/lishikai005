<template> 
<div>  
    <table class='table_wrap'>
        <thead>
            <tr class='hightlight'>
                <td v-for='(item,index) in tableTitle' :key='index'>{{item}}</td>
            </tr>
        </thead>
        <slot></slot>
    </table>
</div>

</template>
<script>
export default{
  props:{
     "tableTitle":{
         type:Array,
         required:true
     }
  }
}
</script>
<style scoped>
.table_wrap{
    border-collapse: collapse;
    padding-top:10px;
}
.table_wrap thead{
    width:1200px;
    background:rgba(0,160,92,1);
    color:#fff;

}
.table_wrap thead tr td{
    width:145px;
    text-align:center;
    line-height: 40px;
}
.hightlight{
     background:rgba(0,160,92,1);
    color:#fff;
}

</style>