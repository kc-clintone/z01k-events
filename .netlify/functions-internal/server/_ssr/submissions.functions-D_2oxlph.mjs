import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as getRequestIP$1, t as getRequestHeader } from "./request-response-C5A0Toox.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submissions.functions-D_2oxlph.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var newsletterSchema = objectType({ email: stringType().trim().toLowerCase().email().max(255) });
var registrationSchema = objectType({
	event_id: stringType().uuid(),
	full_name: stringType().trim().min(2).max(100),
	email: stringType().trim().toLowerCase().email().max(255),
	phone: stringType().trim().min(7).max(30),
	github_url: stringType().trim().url().max(255).optional().or(literalType("")),
	linkedin_url: stringType().trim().url().max(255).optional().or(literalType(""))
});
function clientIp() {
	return getRequestIP$1({ xForwardedFor: true }) || getRequestHeader("cf-connecting-ip") || getRequestHeader("x-real-ip") || "unknown";
}
async function enforceLimit(bucket, max, windowSeconds) {
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.mjs");
	const { data, error } = await supabaseAdmin.rpc("check_rate_limit", {
		_bucket: bucket,
		_max: max,
		_window: `${windowSeconds} seconds`
	});
	if (error) throw new Error("Rate limit check failed");
	if (!data) throw new Error("Too many requests. Please try again in a few minutes.");
}
var subscribeNewsletter_createServerFn_handler = createServerRpc({
	id: "8c9076707a1388e7b028735b9d78ed943a0c1780ae0709633917214ec4167203",
	name: "subscribeNewsletter",
	filename: "src/lib/submissions.functions.ts"
}, (opts) => subscribeNewsletter.__executeServer(opts));
var subscribeNewsletter = createServerFn({ method: "POST" }).inputValidator((input) => newsletterSchema.parse(input)).handler(subscribeNewsletter_createServerFn_handler, async ({ data }) => {
	await enforceLimit(`newsletter:ip:${clientIp()}`, 5, 3600);
	await enforceLimit(`newsletter:email:${data.email}`, 3, 1440 * 60);
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.mjs");
	const { error } = await supabaseAdmin.from("newsletter_subscribers").insert({ email: data.email });
	if (error && !/duplicate|unique/i.test(error.message)) throw new Error(error.message);
	return { ok: true };
});
var registerForEvent_createServerFn_handler = createServerRpc({
	id: "e6bfded3fac23e5f13a99ebce49d9a43e1d54e3432828c8a76fa497d506b7bc5",
	name: "registerForEvent",
	filename: "src/lib/submissions.functions.ts"
}, (opts) => registerForEvent.__executeServer(opts));
var registerForEvent = createServerFn({ method: "POST" }).inputValidator((input) => registrationSchema.parse(input)).handler(registerForEvent_createServerFn_handler, async ({ data }) => {
	await enforceLimit(`register:ip:${clientIp()}`, 10, 3600);
	await enforceLimit(`register:email:${data.email}`, 5, 3600);
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.mjs");
	const { data: event, error: eventErr } = await supabaseAdmin.from("events").select("id, title, description, location, date_time, ends_at, status").eq("id", data.event_id).maybeSingle();
	if (eventErr) throw new Error(eventErr.message);
	if (!event) throw new Error("Event not found");
	if (event.status === "cancelled") throw new Error("This event has been cancelled.");
	if (event.status === "completed") throw new Error("This event has ended.");
	const { error } = await supabaseAdmin.from("registrations").insert({
		event_id: data.event_id,
		full_name: data.full_name,
		email: data.email,
		phone: data.phone,
		github_url: data.github_url || null,
		linkedin_url: data.linkedin_url || null
	});
	if (error) {
		if (error.code === "23505" || /duplicate|unique/i.test(error.message)) throw new Error("This email is already registered for this event.");
		throw new Error(error.message);
	}
	return { ok: true };
});
//#endregion
export { registerForEvent_createServerFn_handler, subscribeNewsletter_createServerFn_handler };
