import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.a72cf25a.js","_app/immutable/chunks/scheduler.8f4337c7.js","_app/immutable/chunks/index.a13ebac9.js","_app/immutable/chunks/SocialIcon.bf3a1d0e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/theme.29b34009.js"];
export const stylesheets = ["_app/immutable/assets/0.ce5dbb3a.css","_app/immutable/assets/MatrixBackground.c618360a.css"];
export const fonts = [];
