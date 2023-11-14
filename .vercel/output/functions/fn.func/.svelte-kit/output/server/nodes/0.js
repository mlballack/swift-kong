import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.4fa1e014.js","_app/immutable/chunks/scheduler.0d4db9c4.js","_app/immutable/chunks/index.43e14c3a.js","_app/immutable/chunks/SocialIcon.109d76bd.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/theme.a233b83a.js","_app/immutable/chunks/stores.c564c348.js","_app/immutable/chunks/singletons.6e7a6330.js"];
export const stylesheets = ["_app/immutable/assets/0.3770d3e7.css","_app/immutable/assets/MatrixBackground.c618360a.css"];
export const fonts = [];
