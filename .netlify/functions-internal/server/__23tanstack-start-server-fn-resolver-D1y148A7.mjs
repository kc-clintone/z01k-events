//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D1y148A7.js
var manifest = {
	"8c9076707a1388e7b028735b9d78ed943a0c1780ae0709633917214ec4167203": {
		functionName: "subscribeNewsletter_createServerFn_handler",
		importer: () => import("./_ssr/submissions.functions-D_2oxlph.mjs")
	},
	"e6bfded3fac23e5f13a99ebce49d9a43e1d54e3432828c8a76fa497d506b7bc5": {
		functionName: "registerForEvent_createServerFn_handler",
		importer: () => import("./_ssr/submissions.functions-D_2oxlph.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
