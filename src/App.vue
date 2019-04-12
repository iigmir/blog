<template>
    <div id="app" class="is-container-large">
        <Navigator />
        <router-view/>
    </div>
</template>

<style lang="scss">
</style>

<script>
import Navigator from "./components/Navigator.vue";

export default {
    components: {
        Navigator
    }
}
</script>
