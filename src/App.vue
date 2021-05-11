<template>
    <div class="flex flex-col h-screen">
        <the-nav />
        <router-view></router-view>
        <the-footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { RouterView } from "vue-router";
    import TheNav from "./components/nav/TheNav.vue";
    import TheFooter from "./components/footer/TheFooter.vue";

    export default defineComponent({
        components: {
            TheNav,
            TheFooter,
            RouterView,
        },
    });
</script>

<style>
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
</style>