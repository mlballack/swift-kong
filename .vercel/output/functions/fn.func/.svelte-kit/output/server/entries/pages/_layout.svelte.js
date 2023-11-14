import { c as create_ssr_component, v as validate_component, e as escape, b as each, d as add_attribute, f as subscribe } from "../../chunks/ssr.js";
import { c as config, n as navLinks } from "../../chunks/config.js";
import { S as SocialIcon } from "../../chunks/SocialIcon.js";
/* empty css                                                           */import { p as page } from "../../chunks/stores.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer><div class="mt-16 flex flex-col items-center border-t pt-6 gap-2"><div class="mb-3 flex space-x-2">${validate_component(SocialIcon, "SocialIcon").$$render(
    $$result,
    {
      icon: "mail",
      url: `mailto:${config.email}`
    },
    {},
    {}
  )} ${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "github", url: config.github }, {}, {})} ${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "facebook", url: config.facebook }, {}, {})} ${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "youtube", url: config.youtube }, {}, {})} ${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "linkedin", url: config.linkedin }, {}, {})} ${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "twitter", url: config.twitter }, {}, {})}</div>  <div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400"><a href="/">${escape(config.title)}</a>   •   © ${escape(year)} ${escape(config.author)}   •   <a href="/rss.xml" data-svelte-h="svelte-6tntdo">RSS Feed</a>
              •   <a href="/privacy-policy" data-svelte-h="svelte-l94po8">Privacy Policy</a></div></div></footer>`;
});
const ThemeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button aria-label="Toggle Dark Mode" class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100">${``}</svg></button>`;
});
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="sm:hidden"><button type="button" class="ml-1 mr-1 h-8 w-8 rounded py-1" aria-label="Toggle Menu" data-svelte-h="svelte-4o051k"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button> <div class="${[
    "fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800",
    " translate-x-full"
  ].join(" ").trim()}"><div class="flex justify-end"><button type="button" class="mr-5 mt-11 h-8 w-8 rounded" aria-label="Toggle Menu" data-svelte-h="svelte-1cqanro"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div> <nav class="fixed mt-8 h-full">${each(navLinks, (link) => {
    return `<div class="px-12 py-4"><a${add_attribute("href", link.href, 0)} class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100">${escape(link.title)}</a> </div>`;
  })}</nav></div></div>`;
});
const CyberpunkTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap");div.svelte-1bj5bur.svelte-1bj5bur{display:grid;place-content:center;background-color:rgba(23, 23, 23);position:relative}div.svelte-1bj5bur p.svelte-1bj5bur{color:#fff;text-transform:uppercase;font-size:1.7rem /* 36px */;line-height:2.5rem /* 40px */;font-family:"Orbitron";font-weight:900;letter-spacing:-1px;padding:1rem;position:relative}div.svelte-1bj5bur p.svelte-1bj5bur:before,div.svelte-1bj5bur p.svelte-1bj5bur:after{position:absolute;content:attr(data-text);padding:1rem;top:0;left:0;background-color:rgba(23, 23, 23);color:#fff;overflow:hidden;white-space:nowrap}div.svelte-1bj5bur p.svelte-1bj5bur:before{left:1px;text-shadow:-1px 2px #22c55e;animation:svelte-1bj5bur-glitch-1 3s ease-in reverse infinite}div.svelte-1bj5bur p.svelte-1bj5bur:after{left:-1px;text-shadow:-1px 2px #fff;animation:svelte-1bj5bur-glitch-2 20s ease-in-out reverse infinite}@keyframes svelte-1bj5bur-glitch-1{0%{clip:rect(132px, auto, 101px, 30px)}5%{clip:rect(17px, auto, 94px, 30px)}10%{clip:rect(40px, auto, 66px, 30px)}15%{clip:rect(87px, auto, 82px, 30px)}20%{clip:rect(137px, auto, 61px, 30px)}25%{clip:rect(34px, auto, 14px, 30px)}30%{clip:rect(133px, auto, 74px, 30px)}35%{clip:rect(76px, auto, 107px, 30px)}40%{clip:rect(59px, auto, 130px, 30px)}45%{clip:rect(29px, auto, 84px, 30px)}50%{clip:rect(22px, auto, 67px, 30px)}55%{clip:rect(67px, auto, 62px, 30px)}60%{clip:rect(10px, auto, 105px, 30px)}65%{clip:rect(78px, auto, 115px, 30px)}70%{clip:rect(105px, auto, 13px, 30px)}75%{clip:rect(15px, auto, 75px, 30px)}80%{clip:rect(66px, auto, 39px, 30px)}85%{clip:rect(133px, auto, 73px, 30px)}90%{clip:rect(36px, auto, 128px, 30px)}95%{clip:rect(68px, auto, 103px, 30px)}100%{clip:rect(14px, auto, 100px, 30px)}}@keyframes svelte-1bj5bur-glitch-2{0%{clip:rect(129px, auto, 36px, 30px)}5%{clip:rect(36px, auto, 4px, 30px)}10%{clip:rect(85px, auto, 66px, 30px)}15%{clip:rect(91px, auto, 91px, 30px)}20%{clip:rect(148px, auto, 138px, 30px)}25%{clip:rect(38px, auto, 122px, 30px)}30%{clip:rect(69px, auto, 54px, 30px)}35%{clip:rect(98px, auto, 71px, 30px)}40%{clip:rect(146px, auto, 34px, 30px)}45%{clip:rect(134px, auto, 43px, 30px)}50%{clip:rect(102px, auto, 80px, 30px)}55%{clip:rect(119px, auto, 44px, 30px)}60%{clip:rect(106px, auto, 99px, 30px)}65%{clip:rect(141px, auto, 74px, 30px)}70%{clip:rect(20px, auto, 78px, 30px)}75%{clip:rect(133px, auto, 79px, 30px)}80%{clip:rect(78px, auto, 52px, 30px)}85%{clip:rect(35px, auto, 39px, 30px)}90%{clip:rect(67px, auto, 70px, 30px)}95%{clip:rect(71px, auto, 103px, 30px)}100%{clip:rect(83px, auto, 40px, 30px)}}',
  map: null
};
const CyberpunkTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Title" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `  ${title ? ` <div class="text-4xl font-semibold sm:block font-title svelte-1bj5bur" data-svelte-h="svelte-fapei7"><p data-text="DosanKongCode" class="svelte-1bj5bur">DosanKongCode</p></div>` : ``}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex items-center justify-between py-10"><div><a href="/"${add_attribute("aria-label", config.headerTitle, 0)}><div class="flex items-center justify-between"> ${validate_component(CyberpunkTitle, "CyberpunkTitle").$$render($$result, { title: config.headerTitle }, {}, {})}</div></a></div> <div class="flex items-center text-base leading-5"><div class="hidden sm:block">${each(navLinks, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">${escape(link.title)}</a>`;
  })}</div> ${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}</div></header>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const app = "";
const id = "G-H3J02W7984";
const GoogleAnalytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", id, {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `  ${$$result.head += `<!-- HEAD_svelte-6h8p1n_START --><script async src="${"https://www.googletagmanager.com/gtag/js?id=" + escape(id, true)}"><\/script><script data-svelte-h="svelte-1ugl9lo">window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag("js", new Date());
		gtag("config", id);<\/script><!-- HEAD_svelte-6h8p1n_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = { pathname: "" } } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"><div class="flex h-screen flex-col justify-between">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="mb-auto">${validate_component(Transition, "Transition").$$render($$result, { pathname: data.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div> ${validate_component(GoogleAnalytics, "GoogleAnalytics").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
