export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app-ads.txt","favicons/favicon.png","images/avatar.jpg","images/avatar1.png","images/avatar2.png","images/avatar3.png","images/chatnotes_1.0.0.png","images/decyou_1.1.0.png","images/logo.png","images/logo.svg","images/shuuuukan_1.0.3.png","images/sketch.jpeg"]),
	mimeTypes: {".txt":"text/plain",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.383eb3b7.js","app":"_app/immutable/entry/app.aee2f864.js","imports":["_app/immutable/entry/start.383eb3b7.js","_app/immutable/chunks/scheduler.8f4337c7.js","_app/immutable/chunks/singletons.59ba446a.js","_app/immutable/entry/app.aee2f864.js","_app/immutable/chunks/scheduler.8f4337c7.js","_app/immutable/chunks/index.a13ebac9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
