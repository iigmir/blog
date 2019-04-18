<template>
    <div>
        <TagListModal
            v-if="modal_flag === true"
            v-bind:tag="selected_tag"
            v-on:clear_tag="clear_tag()"
        />
        <button
            class="button is-large"
            v-for="tag in categories"
            v-bind:key="tag.id"
            v-on:click="change_tag(tag)"
        >
            {{ tag.tag_name }}
        </button>
    </div>
</template>

<script>
import { mapState } from "vuex";
import TagListModal from "../components/TagListModal.vue";

export default {
    name: "Tags",
    data()
    {
        return {
            modal_flag: false,
            selected_tag: {}
        };
    },
    components: { TagListModal },
    computed: mapState(["categories", "contents"]),
    watch:
    {
        categories()
        {
            let route = category =>
            {
                let id = parseInt( this.$route.params.id, 10 );
                return category.id === id;
            };
            let filtered_tag = [];
            if( this.$route.params.id !== undefined )
            {
                filtered_tag = this.categories.filter( category => route(category) );
                if( filtered_tag.length > 0 )
                {
                    this.change_tag( filtered_tag[0] )
                }
            }
        }
    },
    methods:
    {
        change_tag(input_object)
        {
            this.modal_flag = true;
            this.selected_tag = input_object;
        },
        clear_tag()
        {
            this.modal_flag = false;
            this.selected_tag = {};
        },
    }
};
</script>

<style lang="scss" scoped>
.button
{
    margin: 0.3rem;
}
</style>
