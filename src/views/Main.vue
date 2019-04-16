<template>
    <main>
        <div class="article-container">
            <article class="card" v-for="(item, index) in current_articles" :key="item.id">
                <section>
                    <h2> {{ item.title }} </h2>
                    <span class="label" v-for="(item, tag_id) in current_categories[index]" :key="tag_id">
                        {{ item }}
                    </span>
                    <span v-if="item.category_id.length < 1" class="empty-label"></span>
                </section>
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
            test: null
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

article
{
    // padding: 0.3rem;
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
        background: blue;
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
        padding: 25px 80px;
        &::before, 
        &::after
        {
            content:"";
            width:2px;
            height:0;
            position: absolute;
            transition: all 0.2s linear;
            background: blue;
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

.article-container
{
    margin-bottom: 6rem;
}
</style>
