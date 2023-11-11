

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7fc43651.js","_app/immutable/chunks/scheduler.8f4337c7.js","_app/immutable/chunks/index.a13ebac9.js","_app/immutable/chunks/stores.9a28b7ea.js","_app/immutable/chunks/singletons.82231735.js"];
export const stylesheets = [];
export const fonts = [];
