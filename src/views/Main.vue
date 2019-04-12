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
        <nav class="pager">
            <a href="#" class="is-prev"
                v-bind:class="{ 'is-active': page_index === 0 }"
                v-on:click="switch_pages_by_arrow('prev')"></a>
            <a
                v-for="page_number in contents_pages"
                v-bind:key="page_number"
                v-bind:class="{ 'is-active': page_number === page_index + 1 }"
                v-on:click="switch_pages_by_number(page_number)">
                {{ page_number }}
            </a>
            <a href="#" class="is-next"
                v-bind:class="{ 'is-active': page_index === contents_pages - 1 }"
                v-on:click="switch_pages_by_arrow('next')"></a>
        </nav>
    </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    name: "Main",
    data()
    {
        return {
            page_index: 0
        }
    },
    computed:
    {
        ...mapState(["categories", "contents"]),
        ...mapGetters(["contents_by_groups"]),
        contents_pages()
        {
            return this.contents_by_groups.length;
        },
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
                contents = [ ...this.contents_from_new_by_group[this.page_index] ];
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
        switch_pages_by_number(input)
        {
            this.page_index = input - 1;
        },
        switch_pages_by_arrow(dir)
        {
            let direction_limit = {
                prev: 0 ,
                next: this.contents_pages - 1
            };
            let direction = {
                prev: -1,
                next: +1
            };
            if( this.page_index !== direction_limit[dir] )
            {
                this.page_index = this.page_index + direction[dir];
            }
        }
    }
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
