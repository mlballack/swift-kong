import { c as create_ssr_component, f as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="pt-64 mx-auto w-64 text-center">${$page.status === 404 ? `<h1 class="text-9xl font-bold text-outline" data-svelte-h="svelte-2wyh3f">404</h1> <p class="text-2xl font-semibold" data-svelte-h="svelte-1d7i1k2">Page not found</p>` : `<h1 class="text-9xl font-bold" data-svelte-h="svelte-1o57tfj">Error</h1> <p class="text-2xl font-semibold" data-svelte-h="svelte-tqo4fv">Something went wrong</p>`} <div class="pt-10" data-svelte-h="svelte-9aox57"><a href="/" class="text-xl font-semibold border py-2 px-6 rounded-lg">Go Back Home</a></div></div>`;
});
export {
  Error as default
};
