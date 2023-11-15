import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.b3ce4b11.js","_app/immutable/chunks/scheduler.0d4db9c4.js","_app/immutable/chunks/index.43e14c3a.js","_app/immutable/chunks/config.a8c6106a.js","_app/immutable/chunks/SocialIcon.5c7f18ac.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/theme.e0fbf253.js","_app/immutable/chunks/stores.ff8cbf9c.js","_app/immutable/chunks/singletons.0693ed25.js"];
export const stylesheets = ["_app/immutable/assets/0.e0e86777.css","_app/immutable/assets/MatrixBackground.c618360a.css"];
export const fonts = [];
