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
        main_page_index: 0,
        data_loading: true,
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
        set_categories(state, objects)
        {
            state.categories = objects;
        },
        set_contents(state, objects)
        {
            state.contents = objects;
        },
        set_main_page_index(state, input)
        {
            state.main_page_index = input;
        },
        set_article(state, string)
        {
            state.article = string;
        },
        set_data_loading(state, bool)
        {
            state.data_loading = bool;
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
            ajax.finally( () => commit("set_data_loading", false ) );
        },
        ajax_get_article({ commit }, input_id)
        {
            // If it's "1" or "23", add zero prefix in variable number_of_article.
            let number_of_article = ["","00","0"][ String(input_id).length ] || "";
            let api = `${ repo_api }articles/${ number_of_article + String(input_id) }.md`;
            let ajax = axios.get( api );
            commit("set_data_loading", true );
            ajax.then( response => commit("set_article", response.data ) );
            ajax.finally( () => commit("set_data_loading", false ) );
        }
    }
});
