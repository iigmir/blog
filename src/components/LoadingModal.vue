<template>
    <div id="main-loading" class="modal-box" v-bind:class="{ 'is-hidden' : !data_loading }">
        <div class="loading modal is-open">
            <div class="modal-body">
                <div class="akadama">
                    <div></div>
                </div>
                <p> Loading... </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "LoadingModal",
    computed: {
        ...mapState(["data_loading"])
    }
}
</script>

<style lang="scss" scoped>
@keyframes move_tama
{
    from { transform: scale(1); }
    to { transform: scale(0.1); }
}

#main-loading
{
    background-color: rgba(0,0,0, 0.5);
    .modal
    {
        max-width: 50%;
        .akadama 
        {
            width: 5rem;
            height: 5rem;
            margin: 0 auto;
            & > div
            {
                width: 100%;
                height: 100%;
                background: red;
                border-radius: 50%;
                animation: 0.4s linear 0s infinite alternate move_tama;
            }
        }
        p
        {
            margin-top: 1rem;
            text-align: center;
        }
    }
}
</style>
