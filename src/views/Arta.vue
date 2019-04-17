<template>
    <main>
        <article>
            {{ article_centent }}
        </article>
    </main>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "Article",
    computed:
    {
        ...mapState(["article_centent"])
    },
    methods:
    {
        ...mapMutations(["set_article_centent"])
    },
    beforeDestroy()
    {
        this.set_article_centent("");
    }
}
</script>