<template>
    <div id="app" class="is-container-large">
        <Navigator />
        <router-view/>
    </div>
</template>

<script>
import Navigator from "./components/Navigator.vue";
import { mapActions } from "vuex";

export default {
    name: "App",
    components: {
        Navigator
    },
    created()
    {
        this.ajax_get_categories();
        this.ajax_get_contents();
    },
    methods:
    {
        ...mapActions(["ajax_get_categories","ajax_get_contents"]),
    }
}
</script>
