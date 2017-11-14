<template>
   <div class="route container">
       <p class='resmind'>*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后即时替换*！</p>
        <ul class='tab'>
           <router-link :to="{name:'overall'}" class='filter-items' :tag="'li'">综合检索</router-link>
           <router-link :to="{name:'college'}" class='filter-items' :tag="'li'">高校检索</router-link>
           <router-link :to="{name:'major'}"  class='filter-items' :tag="'li'">专业检索</router-link>
       </ul>
       <!-- <keep-alive :include='overall'>
           <router-view></router-view>
       </keep-alive> -->
       <router-view></router-view>
   </div>
</template>
<script>
     export default{
         name:'app'
        //  data(){
        //      return {}
        //  }
     }
</script>
<style scoped>
    .container{
        font-size:16px;
        width:1200px;
        height: 100%;
        margin:0 auto;

    }
    .resmind{
        color:#FF0000;
        font-size:14px;
        line-height:36px;
    }
    
    .tab{
        font-size:0;
        border-bottom:solid 1px #ccc;
    }
    .tab li{
        display: inline-block;
    }
    .filter-items{
    font-size:14px;
    display:inline-block;
    min-width:70px;
    padding:0 5px;
    height:35px;
    color:#333;
    text-align:center;
    line-height:35px;
    cursor:pointer;
}
.router-link-active,.filter-items:hover{
    background:rgba(0,160,92,1);
    color:#fff;
}

</style>