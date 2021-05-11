<template>
    <div class="md:mx-24 mx-4 my-20 flex-1">
        <h1>{{ id }}</h1>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        props: ["id"],
        setup() {},
    });
</script>
