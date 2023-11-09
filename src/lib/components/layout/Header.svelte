<script lang="ts">
    import { config, navLinks } from "$lib/config";

    import ThemeSwitch from "../ThemeSwitch.svelte";
    import MobileMenu from "../MobileMenu.svelte";
    import MatrixBackground from "../MatrixBackground.svelte";
    import CyberpunkTitle from "../CyberpunkTitle.svelte";
</script>

<header class="flex items-center justify-between py-10">
    <div>
        <a href="/" aria-label={config.headerTitle}>
            <div class="flex items-center justify-between">
                <!-- <div class="mr-3">
                    <img src="images/logo.svg" alt="Logo" class="h-10 w-auto" />
                </div> -->
                <CyberpunkTitle title={config.headerTitle} />
            </div>
        </a>
    </div>
    <div class="flex items-center text-base leading-5">
        <div class="hidden sm:block">
            {#each navLinks as link}
                <a
                    href={link.href}
                    class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                    >{link.title}</a
                >
            {/each}
        </div>
        <ThemeSwitch />
        <MobileMenu />
    </div>
</header>
