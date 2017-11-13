<template>
     <div class="school-range clearfix">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolAreaList" :key="index" :index="index" :rangeobject="value" :catagory="'高校地区'"></filter-item>
        </div>
    </div>
</template>
<script>
     import filter_item from './filter_item.vue';
     export default{
     
      props:{
          schoolAreaList:{
              required:true,
              type:Array
          }
      },
       components:{
          "filter-item":filter_item
      }
  }
</script>
<style scoped>
  
</style>