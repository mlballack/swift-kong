import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.274dbe4c.js","_app/immutable/chunks/scheduler.8f4337c7.js","_app/immutable/chunks/index.a13ebac9.js","_app/immutable/chunks/SocialIcon.b4988c76.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/theme.ed3e1c03.js"];
export const stylesheets = ["_app/immutable/assets/0.3770d3e7.css","_app/immutable/assets/MatrixBackground.c618360a.css"];
export const fonts = [];
