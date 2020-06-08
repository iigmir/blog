<template>
    <main>
        <div v-if="contents.length > 0" class="article-container">
            <article class="card" v-for="(item, index) in current_articles" v-bind:key="item.id">
                <section v-on:click="read_article(item.id)">
                    <h2> {{ item.title }} </h2>
                    <span class="label" v-for="(item, tag_id) in current_categories[index]" v-bind:key="tag_id">
                        {{ item }}
                    </span>
                    <span v-if="item.category_id.length < 1" class="empty-label"></span>
                </section>
            </article>
        </div>
        <div v-else class="article-container">
            <p> 抱歉，外部資料載入失敗。一段時間後，再回來看吧？ </p>
        </div>
        <footpage-pager />
    </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import FootpagePager from "../components/FooterPager.vue";

export default {
    name: "Main",
    components: {
        FootpagePager
    },
    computed:
    {
        ...mapState(["categories", "contents", "main_page_index"]),
        ...mapGetters(["contents_by_groups"]),
        contents_from_new_by_group()
        {
            let contents = [...this.contents_by_groups];
            return contents.reverse();
        },
        current_articles()
        {
            let contents = [];
            if( this.contents_from_new_by_group.length > 0 )
            {
                contents = [ ...this.contents_from_new_by_group[this.main_page_index] ];
            }
            return contents.reverse();
        },
        current_categories()
        {
            let article_and_category_exist = this.contents_from_new_by_group.length > 0 && this.categories.length > 0;
            if( article_and_category_exist )
            {
                return this.current_articles
                    .map( articles => articles.category_id )
                    .map( article =>
                    {
                        return article.map( cat_id =>
                            this.categories.filter( tag => cat_id === tag.id )[0].tag_name
                        );
                    });
            }
            return [];
        }
    },
    methods:
    {
        ...mapActions(["request_article"]),
        read_article(id)
        {
            this.request_article(id);
            this.$router.push({ name: "Article", params: { id } });
        }
    }
}
</script>

<style lang="scss" scoped>
article
{
    margin: 1rem 0 1rem 0;
    position: relative;
    cursor: pointer;
    &::before, 
    &::after
    {
        content:"";
        width: 0;
        height: 2px;
        position: absolute;
        transition: all 0.2s linear;
        background: silver;
    }
    &:hover::before,
    &:hover::after
    {
        width: 100%;
    }
    &::before
    {
        transition-delay: 0s;
        left: 0;
    }
    &::after
    {
        right: 0;
        transition-delay: 0s;
    }
    section
    {
        display: block;
        padding: 1rem 2rem;
        transition: font-size 0.2s linear;
        &::before, 
        &::after
        {
            content:"";
            width:2px;
            height:0;
            position: absolute;
            transition: all 0.2s linear;
            background: silver;
        }

        &::before
        {
            transition-delay: 0s;
            right: 0;
            top: 0;
        }
        &::after
        {
            left: 0;
            bottom: 0;
            transition-delay: 0s;
        }
    }
    &:hover section
    {
        font-size: 1.2rem;
        transition: font-size 0.2s linear;
        &::before,
        &::after
        {
            height: 100%;
            transition-delay: 0.2s;
        }
    }
}

.label
{
    margin: 0.5rem;
}

.empty-label
{
    margin: 0.5rem;
    padding: 2px 8px;
}

@media only screen and (max-width: 767px)
{   // Is mobile
    article section { padding: 0.2rem; }
}
</style>
