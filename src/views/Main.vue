<template>
    <main>
        <div class="article-container">
            <article class="card" v-for="(item, index) in current_articles" :key="item.id">
                <h2> {{ item.title }} </h2>
                <span class="label" v-for="(item, tag_id) in current_categories[index]" :key="tag_id">
                    {{ item }}
                </span>
                <span v-if="item.category_id.length < 1" class="empty-label"></span>
            </article>
        </div>
        <footpage-pager />
    </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import FootpagePager from "../components/FooterPager.vue";

export default {
    name: "Main",
    components: {
        FootpagePager
    },
    data()
    {
        return {
            page_index: 0
        }
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
}
</script>

<style lang="scss" scoped>
.pager
{
    position: fixed;
    bottom: 0;
    a
    {
        cursor: pointer;
        &.is-active
        {
            cursor: not-allowed;
        }
    }
}

.card
{
    margin: 1rem 0 1rem 0;
    border: violet 0.1rem solid;
    border-radius: 0.8rem;
    padding: 0.3rem;
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

.article-container
{
    margin-bottom: 6rem;
}
</style>
