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
        article_centent: "",
        main_page_index: 0,
        data_loading: false,
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
            state.categories =  objects;
        },
        set_contents(state, objects)
        {
            state.contents = objects;
        },
        set_main_page_index(state, input)
        {
            state.main_page_index = input;
        },
        set_article_centent(state, string)
        {
            state.article_centent = string;
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
            ajax.then( response =>
            {
                commit("set_contents", response.data );
                commit("set_data_loading", false );
            });
        },
        ajax_get_article({ commit }, input_id)
        {
            let gap = ["","00","0"];
            let filename = gap[ String(input_id).length ] + String(input_id) + ".md";
            let api = `${ repo_api }articles/${ filename }`;
            let ajax = axios.get( api );
            ajax.then( response =>
            {
                commit("set_article_centent", response.data );
                commit("set_data_loading", false );
            });
            ajax.catch( response =>
            {
                console.log( response );
                debugger;
                // commit("set_article_centent", response.data );
                // commit("set_data_loading", false );
            });
        }
    }
});
