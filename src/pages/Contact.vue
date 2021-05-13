<template>
    <div class="md:mx-24 mx-4 my-20 p-5 rounded-xl flex-1 bg-white shadow-md">
        <h1 class="text-4xl font-bold">Contact</h1>
        <hr class="my-8" />
        <main class="md:mx-20 mt-20">
            <div class="mb-16">
                <h3 class="text-xl">
                    I am seeking employment in web development with agencies
                    large or small. I am a quick learner and I work well with
                    others. If there is anything that I need to know as a skill,
                    I am more than happy and always excited to learn more. You
                    may contact me at any of the links below if you are
                    interested in working together with me.
                </h3>
            </div>
            <div
                class="flex flex-col gap-4 md:flex-row md:items-center md:justify-center"
            >
                <a
                    class="border-red-600 border-2 rounded-md px-3 py-2 text-red-600 hover:bg-red-100 text-xl text-center w-32"
                    href="mailto:brentedwards512@gmail.com"
                >
                    <font-awesome-icon icon="envelope"></font-awesome-icon>
                    Email
                </a>
                <a
                    href="https://www.linkedin.com/in/brentleigh-edwards-0b29a3140/"
                    target="_blank"
                    class="border-blue-600 border-2 rounded-md px-3 py-2 text-blue-600 hover:bg-blue-100 text-xl text-center w-32"
                >
                    <font-awesome-icon
                        :icon="['fab', 'linkedin']"
                    ></font-awesome-icon>
                    LinkedIn
                </a>
                <a
                    href="https://github.com/zirris512"
                    target="_blank"
                    class="border-black border-2 rounded-md px-3 py-2 hover:bg-gray-100 text-xl text-center w-32"
                >
                    <font-awesome-icon
                        :icon="['fab', 'github']"
                    ></font-awesome-icon>
                    Github
                </a>
            </div>
        </main>
    </div>
</template>