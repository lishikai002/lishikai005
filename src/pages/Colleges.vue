<template>
    <div class="colleges_search">
        <p class='search'><input type="text" placeholder='请输入要搜索的高校名称'>
            <span>检索</span>
        </p>
        <p class='subs_title'>选考科目分析</p>
        <p class='subs_remind'>*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后即时替换*！</p>
        <colleges-table :tables='college_table'></colleges-table>
    </div>
</template>

<script>
import college from '../../components/college_table.vue'
import Vue from 'vue';
import axios from 'axios';
let query = {
    install: function(v) {
        v.prototype.$http = axios;
    }
}
Vue.use(query);
export default {
     components:{
       "colleges-table":college
    },
    data() {
        return {
            college_table:[]
        }
    },
    created: function() {
        var vm = this;
        this.$http.get('src/data/SynthesisSearch_school.json').then(function(res){
            console.log(res)
            vm.college_table=[res.data.result.analysisData.slice(0,14),res.data.result.analysisData.slice(14,28),res.data.result.analysisData.slice(28)];
        })
    },
   
}
</script>
<style scoped>
.search {
    width: 546px;
    height: 41px;
    border: solid 1px rgba(0, 160, 92, 1);
    display: flex;
    background: rgba(0, 160, 92, 1);
    padding: 2px;
}

.search input {
    width: 450px;
    padding-left: 3px;
}

.search span {
    width: 90px;
    height: 41px;
    color: #fff;
    text-align: center;
    line-height: 41px;
}

.subs_title {
    font-size: 16px;
    line-height: 40px;
    width: 1200px;
    border-bottom: solid 1px #ccc;
}

.subs_remind {
    line-height: 36px;
    color: #ff0000;
    font-size: 14px;
}
</style>
