import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        matches: [],
        isLoading: true,
        error: {
            isError: false,
            message: ""
        },
    },
    mutations: {
        addMatches(state, data) {
            state.matches = data;
        },
        finishLoading(state) {
            state.isLoading = false;
        },
        setErrorTrue(state, message) {
            state.error.isError = true;
            state.error.message = message;
        }
    },
    actions: {
        getAllMatches(store) {
            axios.get("https://www.scorebat.com/video-api/v1/")
                .then(response => {
                    store.commit('addMatches', response.data);
                    store.commit('finishLoading');
                })
                .catch(error => {
                    store.commit('setErrorTrue', error);
                })
        }
    },
    modules: {
    }
})
