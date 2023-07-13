export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-c6b60786.js","imports":["_app/immutable/start-c6b60786.js","_app/immutable/chunks/index-178364ec.js","_app/immutable/chunks/singletons-d6ee89ac.js","_app/immutable/chunks/index-d05497d0.js","_app/immutable/chunks/control-654b50f6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
