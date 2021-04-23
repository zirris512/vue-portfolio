<template>
    <nav class="h-16">
        <ul
            class="flex items-center h-full w-full bg-black text-2xl select-none"
        >
            <li class="flex-1"><a href="#">Brent Edwards</a></li>
            <li><a href="#">About</a></li>
            <li
                class="relative cursor-pointer"
                @click="showTitles = !showTitles"
            >
                <a tabindex="0"> Portfolio </a>
                <font-awesome-icon
                    v-if="!showTitles"
                    icon="angle-down"
                    class="text-white"
                />
                <font-awesome-icon v-else icon="angle-up" class="text-white" />
                <ul
                    class="bg-black absolute w-max mt-3 -left-5 text-lg"
                    v-show="showTitles"
                    @mouseleave="showTitles = false"
                >
                    <li class="w-full px-4 py-2 text-white">
                        <a href="#">All</a>
                    </li>
                    <li
                        class="w-full px-4 py-2 text-white"
                        v-for="project in data"
                    >
                        <a href="#">{{ project.title }}</a>
                    </li>
                </ul>
            </li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import data from "../../data/projects";

    export default defineComponent({
        setup() {
            const showTitles = ref(false);

            return {
                data,
                showTitles,
            };
        },
    });
</script>

<style scoped>
    a {
        color: white;
    }

    a:focus {
        outline: none;
    }

    ul li {
        margin: 0 2%;
    }
</style>
