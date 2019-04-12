import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let repo_api = "https://raw.githubusercontent.com/iigmir/blog-source/master/";

export default new Vuex.Store({
    state:
    {
        categories: [],
        contents: [],
    },
    getters:
    {
        contents_from_new_to_old: state => state.contents.reverse()
    },
    mutations:
    {
        set_categories(state, payload)
        {
            state.categories =  payload;
        },
        set_contents(state, payload)
        {
            state.contents = payload;
        },
    },
    actions:
    {
        ajax_get_categories({ commit })
        {
            let api = repo_api + "info-files/categories.json";
            let ajax = axios.get( api );
            ajax.then( response => commit("set_categories", response.data ) );
        },
        ajax_get_contents({ commit })
        {
            let api = repo_api + "info-files/contents.json";
            let ajax = axios.get( api );
            ajax.then( response => commit("set_contents", response.data ) );
        },
    }
});
