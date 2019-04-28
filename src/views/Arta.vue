<template>
    <main>
        <article v-if="article_empty === false">
            <h2> {{ article_info.title }} </h2>
            <vue-markdown :source="article_centent"></vue-markdown>
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
        ...mapState(["article_centent", "contents"]),
        article_empty() { return this.article_centent === ""; },
        article_info()  { return this.contents.filter( a => a.id === parseInt( this.$route.params.id, 10 ) )[0]; }
    },
    methods:
    {
        ...mapMutations(["set_article_centent"]),
        ...mapActions(["ajax_get_article"]),
    },
    created()
    {
        if( this.article_empty )
        {
            this.ajax_get_article( this.$route.params.id );
        }
    },
    beforeDestroy() { this.set_article_centent(""); }
}
</script>

<style lang="scss" scoped>
h2
{
    font-size: 2em;
}
</style>
