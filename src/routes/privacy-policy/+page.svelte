<script>
    import Title from "$lib/components/Title.svelte";
    import Head from "$lib/components/layout/Head.svelte";

    export let data;
    let content = data.content;
    const title = "Privacy Policy";
</script>

<Head {title} />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <Title {title} />
    </div>
    <div class="container py-12">
        <div
            class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
        >
            <div class="prose max-w-none pt-10 pb-8 dark:prose-dark">
                {@html content}
            </div>
        </div>
    </div>
</div>
