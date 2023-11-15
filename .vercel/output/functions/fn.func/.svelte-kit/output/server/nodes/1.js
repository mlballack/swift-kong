

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0503959d.js","_app/immutable/chunks/scheduler.0d4db9c4.js","_app/immutable/chunks/index.43e14c3a.js","_app/immutable/chunks/stores.275aafe0.js","_app/immutable/chunks/singletons.8eb1afef.js"];
export const stylesheets = [];
export const fonts = [];
