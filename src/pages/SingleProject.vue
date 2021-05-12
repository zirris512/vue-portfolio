<template>
    <div class="md:mx-24 mx-4 my-20 flex-1">
        <section class="my-8">
            <img :src="values.largeImg" alt="" />
        </section>
        <main>
            <h2 class="text-2xl font-bold mb-4">{{ values.title }}</h2>
            <p>{{ values.description }}</p>
            <div class="flex flex-col md:flex-row">
                <section class="flex-1">
                    <h3 class="text-xl my-4 font-semibold">
                        Technologies Used:
                    </h3>
                    <ul>
                        <li
                            v-for="tech in values.technologies"
                            :key="tech"
                            class="ml-2 py-2"
                        >
                            - {{ tech }}
                        </li>
                    </ul>
                </section>
                <section class="flex flex-col flex-1">
                    <h3 class="text-xl my-4 font-semibold">Links:</h3>
                    <a
                        :href="values.github"
                        class="inline-block m-2 p-2 w-32 text-md border-2 border-black hover:bg-gray-300 rounded"
                    >
                        <font-awesome-icon
                            :icon="['fab', 'github']"
                        ></font-awesome-icon>
                        Github
                    </a>
                    <a
                        :href="values.deploy"
                        class="inline-block m-2 p-2 w-32 text-md border-2 border-red-600 hover:bg-red-300 rounded"
                    >
                        <font-awesome-icon
                            icon="external-link-alt"
                        ></font-awesome-icon>
                        Deployment
                    </a>
                </section>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs, watch } from "vue";
    import { useRoute } from "vue-router";
    import data from "../data/projects";

    export default defineComponent({
        props: {
            id: {
                type: String,
                required: true,
            },
        },
        setup(props) {
            const route = useRoute();
            const { id } = toRefs(props);
            const project = reactive({ values: {} });

            [project.values] = data.filter((project) => project.id === id.value);

            watch(
                () => route.params.id,
                (newData) => {
                    [project.values] = data.filter(
                        (project) => project.id === newData
                    );
                }
            );

            return {
                ...toRefs(project),
            };
        },
    });
</script>
