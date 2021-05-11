<template>
    <div class="md:mx-24 mx-4 my-20 flex-1">
        <h1 class="text-4xl font-bold">Projects</h1>
        <hr class="my-8" />
        <section
            class="flex flex-col md:flex-row md:flex-wrap justify-center items-center"
        >
            <div
                class="w-80 mx-5 h-80 bg-gray-300 rounded-lg my-5 flex flex-col"
                v-for="project in data"
                :key="project.id"
            >
                <header class="m-2 flex-1">
                    <img
                        :src="project.image"
                        class="mx-auto w-full h-full"
                        alt=""
                    />
                </header>
                <div class="m-2 flex-1 h-full">
                    <h3 class="text-2xl font-bold text-center">
                        {{ project.title }}
                    </h3>
                    <div class="flex justify-end mt-4 mr-2">
                        <a
                            :href="project.github"
                            target="_blank"
                            class="text-2xl mx-3"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'github']"
                            ></font-awesome-icon>
                        </a>
                        <a
                            :href="project.deploy"
                            target="_blank"
                            class="text-2xl mx-3"
                        >
                            <font-awesome-icon
                                icon="external-link-alt"
                            ></font-awesome-icon>
                        </a>
                        <router-link
                            :to="`/portfolio/${project.id}`"
                            class="text-2xl mx-3"
                        >
                            <font-awesome-icon
                                icon="ellipsis-v"
                            ></font-awesome-icon>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import data from "../data/projects";

    export default defineComponent({
        setup() {
            return {
                data,
            };
        },
    });
</script>
