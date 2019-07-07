import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        a: 1
    },
    mutations: {
        reset(state) {
            state.a = 3;
        }
    },
    actions: {}
});
