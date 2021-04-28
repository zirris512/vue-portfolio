<template>
    <nav class="h-16 fixed w-full top-0 left-0 bg-black px-4">
        <div class="flex items-center h-full w-full text-2xl select-none">
            <a href="#">Brent Edwards</a>
            <div class="ml-auto flex gap-10">
                <a href="#">About</a>
                <div class="relative" ref="dropdown" @click="toggleDropdown">
                    <a href="#">
                        Portfolio<font-awesome-icon
                            v-if="!showTitles"
                            icon="angle-down"
                        /><font-awesome-icon v-else icon="angle-up" />
                    </a>
                    <div
                        class="flex flex-col absolute -left-3 w-max px-3 bg-black"
                        v-if="showTitles"
                    >
                        <a
                            href="#"
                            class="my-2"
                            v-for="project in data"
                            :key="project.title"
                        >
                            {{ project.title }}
                        </a>
                    </div>
                </div>
                <a href="#">Contact</a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
    import data from "../../data/projects";

    export default defineComponent({
        setup() {
            const showTitles = ref(false);
            const dropdown = ref<HTMLDivElement | null>(null);

            const toggleDropdown = () => {
                showTitles.value = !showTitles.value;
            };

            const toggleClose = (event: Event) => {
                if (!dropdown.value?.contains(event.target as HTMLElement)) {
                    showTitles.value = false;
                }
            };

            onMounted(() => {
                document.addEventListener("click", toggleClose);
            });

            onBeforeUnmount(() => {
                document.removeEventListener("click", toggleClose);
            });

            return {
                data,
                dropdown,
                showTitles,
                toggleDropdown,
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
</style>
