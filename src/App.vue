<template>
    <the-nav />
    <About />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import About from "./pages/About.vue";
    import TheNav from "./components/nav/TheNav.vue";

    export default defineComponent({
        components: {
            About,
            TheNav,
        },
        setup() {},
    });
</script>

<style>
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
</style>