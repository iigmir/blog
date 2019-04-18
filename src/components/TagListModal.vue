<template>
    <div id="tag-has-article" class="modal-box" v-on:click="clear_tag()">
        <div class="loading modal is-open">
            <span class="close" v-on:click="clear_tag()"></span>
            <div class="modal-header">{{ tag.tag_name }} 的文章：</div>
            <div class="modal-body">
                <ol>
                    <li v-for="article in articles_has_current_tag" :key="article.id">
                        <router-link :to="{ name: 'Article', params: { id: article.id } }">
                            {{ article.title }}
                        </router-link>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    name: "TagList",
    props:
    {
        tag:
        {
            type: Object,
            default: function()
            {
                return {
                    tag_name: "",
                    id: null
                };
            },
        },
    },
    computed:
    {
        ...mapState(["data_loading", "contents"]),
        ...mapGetters(["contents_by_groups"]),
        articles_has_current_tag()
        {
            return this.contents.filter( content =>
                content.category_id.some( category => category === this.tag.id )
            );
        }
    },
    methods:
    {
        clear_tag()
        {
            this.$emit("clear_tag");
        },
    },
};
</script>

<style lang="scss" scoped>
#tag-has-article
{
    background-color: rgba(0,0,0, 0.5);
    .modal
    {
        max-width: 50%;
        margin: 1rem auto;
    }
}
</style>
