<template>
    <main>
        <div v-for="item in current_articles" :key="item.id">
            {{ item }}
        </div>
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
        }
    }
}
</script>
