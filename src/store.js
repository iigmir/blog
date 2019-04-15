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
        article: "",
        main_page_index: 0
    },
    getters:
    {
        contents_by_groups(state)
        {
            let slice_groups = function(a,current_index)
            {
                let chunk_size = 5;
                let per_item = state.contents.slice( current_index, current_index+chunk_size );
                return current_index % chunk_size === 0 ? per_item : null;
            };
            let groups = state.contents.map( (a,b) => slice_groups(a,b) ).filter( c => c );
            return groups;
        }
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
        set_main_page_index(state, input)
        {
            state.main_page_index = input;
        }
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
        ajax_get_article({ commit }, input_id)
        {
            let gap = ["","00","0"];
            let filename = gap[ input_id.length ] + input_id + ".md";
            let api = `${ repo_api }/articles/${ filename }`;
            let ajax = axios.get( api );
            ajax.then( response => commit("set_article", response.data ) );
        }
    }
});
