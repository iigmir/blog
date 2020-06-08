<template>
    <div id="app">
        <loading-modal />
        <Navigator />
        <!-- <router-view /> -->
        <div class="aside-container-large">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navigator from "./components/Navigator.vue";
import LoadingModal from "./components/LoadingModal.vue";
import { mapActions, mapMutations } from "vuex";

export default {
    name: "App",
    components: {
        Navigator,
        LoadingModal
    },
    created()
    {
        this.set_data_loading(true);
        this.ajax_get_categories();
        this.ajax_get_contents();
    },
    methods:
    {
        ...mapActions(["ajax_get_categories","ajax_get_contents"]),
        ...mapMutations(["set_data_loading"]),
    }
}
</script>
