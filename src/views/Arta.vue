<template>
    <main>
        <article v-if="article_empty === false">
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
        ...mapState(["article_centent"]),
        article_empty() { return this.article_centent === "" }
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