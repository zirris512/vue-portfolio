<template>
    <nav class="h-16 fixed w-full top-0 left-0 bg-black px-4">
        <div class="flex items-center h-full w-full text-2xl select-none">
            <a href="#">Brent Edwards</a>
            <!-- Desktop Navbar -->
            <div v-if="!isSmallScreen" class="ml-auto flex gap-10">
                <a href="#">About</a>
                <div
                    class="relative cursor-pointer"
                    ref="dropdown"
                    @click="toggleDropdown"
                >
                    <a>
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
            <!-- Mobile Navbar -->
            <div v-else class="ml-auto">
                <a href="#" @click="toggleMobileDropdown">
                    <font-awesome-icon icon="bars" />
                </a>
                <div
                    v-if="!mobileNavOpen"
                    class="absolute bg-black left-0 right-0 px-4 mt-3 flex flex-col gap-3"
                >
                    <a href="#">About</a>
                    <div @click="toggleDropdown" ref="mobileDropdown">
                        <a>
                            Portfolio<font-awesome-icon
                                v-if="!showTitles"
                                icon="angle-down"
                            /><font-awesome-icon v-else icon="angle-up" />
                        </a>
                        <div
                            v-if="showTitles"
                            class="px-5 flex flex-col gap-3 mt-2"
                        >
                            <a
                                href="#"
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
        </div>
    </nav>
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
        onBeforeUnmount,
        onMounted,
        ref,
    } from "vue";
    import data from "../../data/projects";

    export default defineComponent({
        setup() {
            const showTitles = ref(false);
            const dropdown = ref<HTMLDivElement | null>(null);
            const mobileDropdown = ref<HTMLDivElement | null>(null);
            const windowWidth = ref(window.innerWidth);
            const isSmallScreen = computed(() => windowWidth.value < 768);
            const mobileNavOpen = ref(false);

            const toggleMobileDropdown = () => {
                mobileNavOpen.value = !mobileNavOpen.value;
            };

            const toggleDropdown = () => {
                showTitles.value = !showTitles.value;
            };

            const toggleClose = (event: Event) => {
                if (
                    !dropdown.value?.contains(event.target as HTMLElement) &&
                    !mobileDropdown.value?.contains(event.target as HTMLElement)
                ) {
                    showTitles.value = false;
                }
            };

            const onResize = () => {
                windowWidth.value = window.innerWidth;
            };

            onMounted(() => {
                document.addEventListener("click", toggleClose);
                window.addEventListener("resize", onResize);
            });

            onBeforeUnmount(() => {
                document.removeEventListener("click", toggleClose);
                window.removeEventListener("resize", onResize);
            });

            return {
                data,
                dropdown,
                mobileDropdown,
                showTitles,
                toggleDropdown,
                isSmallScreen,
                toggleMobileDropdown,
                mobileNavOpen,
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
