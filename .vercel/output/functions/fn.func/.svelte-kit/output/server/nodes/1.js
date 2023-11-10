

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.029f6f1b.js","_app/immutable/chunks/scheduler.8f4337c7.js","_app/immutable/chunks/index.a13ebac9.js","_app/immutable/chunks/stores.dd1f4a6a.js","_app/immutable/chunks/singletons.f4f787a6.js"];
export const stylesheets = [];
export const fonts = [];
