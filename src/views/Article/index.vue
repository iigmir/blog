<template>
    <main class="article-container">
        <article v-if="article_exist && !article_empty">
            <div class="article-gap">
                <router-link
                    class="label"
                    v-for="(item, tag_id) in current_categories"
                    v-bind:key="tag_id"
                    v-bind:to="tag_link(tag_id)">
                    {{ item }}
                </router-link>
            </div>
            <p v-if="commit_date.status !== 0">
                <small>文章最初於 {{ commit_date.first }} 發表，最近一次修改為 {{ commit_date.last }}。</small>
            </p>
            <div class="article-gap">
                <vue-markdown v-bind:source="article"></vue-markdown>
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
    computed:
    {
        ...mapState(["article", "categories", "contents", "fileinfo"]),
        article_empty() { return this.article === ""; },
        article_info()  { return this.contents.filter( a => a.id === parseInt( this.$route.params.id, 10 ) )[0]; },
        article_exist() { return this.article_info !== undefined },
        current_categories()
        {
            const article_and_category_exist = this.article_exist && this.categories.length > 0;
            if( article_and_category_exist )
            {
                return this.article_info.category_id.map( cat_id => this.categories.filter( tag => cat_id === tag.id )[0].tag_name );
            }
            return [];
        },
        commit_date()
        {
            let first, last, status = 0;
            if(
                Object.prototype.hasOwnProperty.call( this.article_info, "created_at" ) &&
                Object.prototype.hasOwnProperty.call( this.article_info, "updated_at" )
            )
            {
                first = new Date( this.article_info.created_at ).toLocaleString();
                last  = new Date( this.article_info.updated_at ).toLocaleString();
                status = 2;
            }
            else
            {
                if( this.fileinfo.length > 1 )
                {
                    first = new Date( this.fileinfo[ this.fileinfo.length - 1 ].commit.author.date ).toLocaleString();
                    last  = new Date( this.fileinfo[ 0 ].commit.author.date ).toLocaleString();
                    status = 2;
                }
                else if( this.fileinfo.length === 1 )
                {
                    first = new Date( this.fileinfo[ 0 ].commit.author.date ).toLocaleString();
                    last  = new Date( this.fileinfo[ 0 ].commit.author.date ).toLocaleString();
                    status = 1;
                }
            }
            return { first, last, status };
        }
    },
    methods:
    {
        ...mapMutations(["set_article"]),
        ...mapActions(["request_article"]),
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
            this.request_article( this.$route.params.id );
        }
    },
    beforeDestroy()
    {
        this.set_article("");
    }
}
</script>

<style lang="scss" scoped>
.article-container
{
    margin-left: 2rem;
}
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
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
