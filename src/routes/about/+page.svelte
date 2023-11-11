<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import Head from "$lib/components/layout/Head.svelte";
    import SocialIcon from "$lib/components/SocialIcon.svelte";
    import { config } from "$lib/config.js";
    import Journey from "$lib/components/Journey.svelte";
    import Skill from "$lib/components/Skill.svelte";
    export let data;
    const authors = data.authors;
    const author = authors[0];

    console.log("author: ", author);
</script>

<Head title="About" />

<div class="">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <Title title="About Me" />
    </div>
    <div
        class="items-top space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0"
    >
        <div class="flex flex-col items-center py-6">
            <img
                src={config.siteLogo}
                alt="avatar"
                class="h-48 w-48 rounded-full"
            />
            <h3 class="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                {config.author}
            </h3>
            <div class="font-bold text-green-500 dark:text-green-600">
                {config.occupation}
            </div>
            <div class="flex space-x-2 pt-4">
                <SocialIcon icon="mail" url={`mailto:${config.email}`} />
                <SocialIcon icon="github" url={config.github} />
                <SocialIcon icon="twitter" url={config.twitter} />
            </div>
        </div>

        <div
            class="align-middle flex-col items-center prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2"
        >
            {@html author.content}
        </div>
    </div>
    <div class="space-y-2 p-12">
        <Journey />
        <Skill />
    </div>
</div>

<style>
</style>
