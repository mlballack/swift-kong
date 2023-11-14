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
		client: {"start":"_app/immutable/entry/start.72ad92a9.js","app":"_app/immutable/entry/app.f1635f41.js","imports":["_app/immutable/entry/start.72ad92a9.js","_app/immutable/chunks/scheduler.0d4db9c4.js","_app/immutable/chunks/singletons.6e7a6330.js","_app/immutable/entry/app.f1635f41.js","_app/immutable/chunks/scheduler.0d4db9c4.js","_app/immutable/chunks/index.43e14c3a.js"],"stylesheets":[],"fonts":[]},
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
