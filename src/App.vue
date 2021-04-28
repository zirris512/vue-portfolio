<template>
    <the-nav />
    <About />
    <div class="min-h-12"></div>
    <the-footer />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import About from "./pages/About.vue";
    import TheNav from "./components/nav/TheNav.vue";
    import TheFooter from "./components/footer/TheFooter.vue";

    export default defineComponent({
        components: {
            About,
            TheNav,
            TheFooter,
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