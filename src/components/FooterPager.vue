<template>
    <nav class="pager">
        <a href="#" class="is-prev"
            v-bind:class="{ 'is-disabled': main_page_index === 0 }"
            v-on:click="switch_pages_by_arrow('prev')"></a>
        <a
            class="desktop-mode"
            v-for="page_number in contents_pages"
            v-bind:key="page_number"
            v-bind:class="{ 'is-active': main_page_index === page_number - 1 }"
            v-on:click="switch_pages_by_number(page_number)">
            {{ page_number }}
        </a>
        <span class="is-current mobile-mode"> {{ main_page_index + 1 }} of {{ contents_pages }} </span>
        <a href="#" class="is-next"
            v-bind:class="{ 'is-disabled': main_page_index === contents_pages - 1 }"
            v-on:click="switch_pages_by_arrow('next')"></a>
    </nav>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
    name: "FootpagePager",
    computed:
    {
        ...mapState(["main_page_index"]),
        ...mapGetters(["contents_by_groups"]),
        contents_pages() { return this.contents_by_groups.length; },
    },
    methods:
    {
        ...mapMutations(["set_main_page_index"]),
        switch_pages_by_number(input) { this.set_main_page_index(input - 1); },
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
            if( this.main_page_index !== direction_limit[dir] )
            {
                this.set_main_page_index( this.main_page_index + direction[dir] );
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
        &.is-disabled
        {
            cursor: not-allowed;
        }
    }
}

@media only screen and (max-width: 767px)
{   // Is mobile
    .desktop-mode { display: none ; }
    .mobile-mode  { display: block; }
}

@media only screen and (min-width: 768px)
{   // Is desktop
    .mobile-mode  { display: none ; }
    .desktop-mode { display: block; }
}
</style>
