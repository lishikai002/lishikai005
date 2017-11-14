<template> 
<div>
        
    <table class='sub_table'>
        <thead class='sub_thead'>
            <tr >
                <td>选考科目</td>
                <td>高校数</td>
                <td>专业类数</td>
                <td>科目比例</td>
            </tr>
        </thead>
        <tbody class='sub_tbody'>
            <tr v-for="(item,index) in $store.state.Synthesis_search_b" :key='index'>
                <td>{{item.subject}}</td>
                <td>{{item.collegesCount}}</td>
                <td>{{item.majorCount}}</td>
                <td>{{item.rate}}</td>
            </tr>
        </tbody>
    </table>
</div>

</template>
<script>
export default{
}
</script>
<style scoped>
.sub_title{
    font-size:14px;
    line-height:46px;
    width:1200px;
    border-bottom:solid 1px #ccc;
}
.sub_resmind{
    color:#FF0000;
    font-size:14px;
    line-height:36px;   
}
.sub_table{
    border-collapse:collapse; 
}
.sub_table .sub_thead{
    
    background:rgba(0,160,92,1);
}
.sub_table .sub_thead tr td{
    width:146px;
    text-align:center;
    line-height:36px;
    color:#fff;
    font-size:14px;
    font-weight:none;
}
.sub_table .sub_tbody tr td{
    width:146px;
    text-align:center;
    line-height:36px;
    color:#333;
    font-size:14px;
    font-weight:none;
    border:solid 1px #ccc;
}

</style>