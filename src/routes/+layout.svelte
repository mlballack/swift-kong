<script lang="ts">
    import Footer from "$lib/components/layout/Footer.svelte";
    import Header from "$lib/components/layout/Header.svelte";
    import Transition from "$lib/components/layout/Transition.svelte";
    import "../app.css";

    import GoogleAnalytics from "$lib/components/analytics/GoogleAnalytics.svelte";

    export let data = {
        pathname: "",
    };
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex h-screen flex-col justify-between">
        <Header />
        <main class="mb-auto">
            <Transition pathname={data.pathname}>
                <slot />
            </Transition>
        </main>
        <Footer />
    </div>
</div>

<GoogleAnalytics />
