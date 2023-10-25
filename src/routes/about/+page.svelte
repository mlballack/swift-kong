<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import Head from "$lib/components/layout/Head.svelte";
    import SocialIcon from "$lib/components/SocialIcon.svelte";
    import { config } from "$lib/config.js";
    export let data;
    const authors = data.authors;
    const author = authors[0];

    console.log("author: ", author);
</script>

<Head title="About" />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <Title title="About" />
    </div>
    <div
        class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0"
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
            <div class="text-gray-500 dark:text-gray-400">
                {config.occupation}
            </div>
            <div class="flex space-x-2 pt-4">
                <SocialIcon icon="mail" url={`mailto:${config.email}`} />
                <SocialIcon icon="github" url={config.github} />
                <SocialIcon icon="twitter" url={config.twitter} />
            </div>
        </div>
        <div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            {@html author.content}
        </div>
    </div>
</div>
