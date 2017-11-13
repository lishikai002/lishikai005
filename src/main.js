import Vue from 'vue';
import app from './app.vue';
import router from '../router/router';
import axios from 'axios';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        school_range_obj: [],
        school_area_obj: []
    },
    mutations: {
        update_school_range: function (state, list) {
            state.school_range_obj = list

        },
        update_school_area: function (state, list) {
            state.school_area_obj = list
        },
        reset_school_range: function (state, item) {
            console.log(item);
            let arr;
            arr = state.school_range_obj.map((value, index) => {
                if (item.index == index) {
                    value.selected = item.selected;
                } else {
                    value.selected = false;
                }
                return value;
            })
            let selected_none = true;
            arr.forEach(function (val) {
                if (val.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        reset_school_area: function (state, item) {
            state.school_area_obj[0].selected = false;
            if (item.index == 0) {
                state.school_area_obj.map(value => {
                    value.selected = (index == 0);
                    return value;
                })
                return;
            }
            state.school_area_obj.map((value, index) => {
                if (index == item.index) {
                    value.selected = item.selected;
                }
                return value;
            })
            let selected_none = true;
            state.school_area_obj.forEach(function (val) {
                if (val.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                state.school_area_obj[0].selected = true;
            }
        },
        clear_range: function (state) {
            state.school_range_obj.forEach((item,index)=>{
                item.selected=(index==0)
            })
        },
        clear_area: function (state) {
            state.school_area_obj.forEach((item,index)=>{
                item.selected=(index==0)
            })
        }
    },
    getters: {
        selected_range: function (state) {
            let str = '';
            state.school_range_obj.forEach((value, index) => {
                if (value.selected) {
                    str += value.value;
                }

            })
            return str;
        },
        selected_area: function (state) {
            let str = [];
            state.school_area_obj.forEach((value, index) => {
                if (value.selected) {
                    str.push(value.value)
                }
            })
            return str.join(',');
        },
    }
})
let query = {
    install: function (v) {
        v.prototype.$http = axios;
    }
}
Vue.use(query);
new Vue({
    el: '.container',
    router: router,
    store,
    render: function (createElement) {
        return createElement(app);
    },
    mounted: function () {
        // this.$http.get('src/server/schoolRange.json').then(function(res){
        //     console.log(res);
        // });
        // this.$http.get('src/server/schoolArea.json').then(function(res){
        //     console.log(res);
        // });
    }
})
if (module.hot) {
    module.hot.accept();
}