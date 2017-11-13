<template>
    <span class="filter-item" @click='toggle' :class="{selected:rangeobject.selected}">
        {{rangeobject.value}}</span>
</template>
<script>
export default {
    props: ['rangeobject', 'index', 'catagory'],
    methods: {
        toggle: function() {
            if (this.catagory == '高校层次') {
                this.$store.commit('reset_school_range', {
                    index: this.index,
                    selected: !this.rangeobject.selected
                })
                return;
            }
            if (this.catagory == '高校地区') {
                this.$store.commit('reset_school_area', {
                    index: this.index,
                    selected: !this.rangeobject.selected
                })
            }
        }
    }

}
</script>

<style scoped>

</style>