<template>
    <main>
        <article v-if="article_exist === true && article_empty === false">
            <div class="article-gap">
                <h2> {{ article_info.title }} </h2>
            </div>
            <div class="article-gap">
                <router-link
                    class="label"
                    v-for="(item, tag_id) in current_categories"
                    v-bind:key="tag_id"
                    v-bind:to="tag_link(tag_id)">
                    {{ item }}
                </router-link>
            </div>
            <div class="article-gap">
                <vue-markdown :source="article"></vue-markdown>
            </div>
        </article>
        <article v-else>
            <div class="article-gap">
                <h2> 載入失敗！ </h2>
                <p> 可能有很多原因使載入失敗，要不要<router-link to="/">回首頁</router-link>看其他文章？ </p>
            </div>
        </article>
    </main>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import VueMarkdown from "vue-markdown";

export default {
    name: "Article",
    components: { VueMarkdown },
    computed: {
        ...mapState(["article", "categories", "contents"]),
        article_empty() { return this.article === ""; },
        article_info()  { return this.contents.filter( a => a.id === parseInt( this.$route.params.id, 10 ) )[0]; },
        article_exist() { return this.article_info !== undefined },
        current_categories()
        {
            let article_and_category_exist = this.article_exist && this.categories.length > 0;
            let tags = [];
            if( article_and_category_exist )
            {
                tags = this.article_info.category_id.map( cat_id => this.categories.filter( tag => cat_id === tag.id )[0].tag_name );
            }
            return tags;
        }
    },
    methods:
    {
        ...mapMutations(["set_article"]),
        ...mapActions(["ajax_get_article"]),
        tag_link(idx)
        {
            let name = "Tags";
            let params = { id: this.article_info.category_id[idx] };
            return { name, params };
        }
    },
    created()
    {
        if( this.article_empty )
        {
            this.ajax_get_article( this.$route.params.id );
        }
    },
    beforeDestroy() { this.set_article(""); }
}
</script>

<style lang="scss" scoped>
h2
{
    font-size: 2em;
}

.label
{
    margin: 0.2rem;
}

.article-gap
{
    margin-bottom: 0.5rem;
}
</style>
