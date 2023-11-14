<!-- <script type="ts">
	try {
		if (typeof window !== "undefined" && window) {
			const googleAnalyticsId = "G-H3J02W7984";
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag("js", new Date());
			gtag("config", googleAnalyticsId);
		}
	} catch (error) {
		console.error("Failed to initialize Analytics");
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js"></script>
</svelte:head> -->

<script lang="ts">
	import { page } from "$app/stores";

	const id = "G-H3J02W7984";
	$: {
		if (typeof gtag !== "undefined") {
			gtag("config", id, {
				page_title: document.title,
				page_path: $page.url.pathname,
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={id}">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag("js", new Date());
		gtag("config", id);
	</script>
</svelte:head>
