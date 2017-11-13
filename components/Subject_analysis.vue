<template> 
<div>
    <p class='sub_title'><span >选考科目分析</span></p>
    <p class='sub_resmind'>*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后即时替换*！</p>     
    <table class='sub_table'>
        <thead class='sub_thead'>
            <tr>
                <th>名称</th>
                <th>城市</th>
                <th>邮编</th>
                <th>名称</th>
                <th>城市</th>
                <th>邮编</th>
                <th>名称</th>
                <th>城市</th>
                <th>邮编</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tanmay</td>
                <td>Bangalore</td>
                <td>560001</td>
                <td>Tanmay</td>
                <td>Bangalore</td>
                <td>560001</td>
                <td>Tanmay</td>
                <td>Bangalore</td>
                <td>560001</td>
            </tr>
        </tbody>
    </table>
</div>

</template>
<script>
export default{
    // name:'subject',
    // components:{
    //     "subject-analysis":
    // }
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
/* .sub_table{
    width:1200px;
    border:solid 1px #ccc;
} */
.sub_table .sub_thead{
    
    background:rgba(0,160,92,1);
}
.sub_table .sub_thead tr td{
    width:12%;
    text-align:center;
    line-height:36px;
    color:#fff;
    font-size:14px;
    font-weight:none;
}
</style>