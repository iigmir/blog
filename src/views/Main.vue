<template>
    <main>
        <div class="article-container">
            <article class="card" v-for="(item, index) in current_articles" :key="item.id">
                <section v-on:click="read_article(item.id)">
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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
        ...mapActions(["ajax_get_article","set_data_loading"]),
        ...mapMutations(["set_data_loading"]),
        read_article(id)
        {
            this.set_data_loading(true);
            this.ajax_get_article(id);
            // Link to article
            this.$router.push({ name: "Article", params: { id } });
        }
    },
    beforeDestroy()
    {
        this.set_data_loading(true);
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
