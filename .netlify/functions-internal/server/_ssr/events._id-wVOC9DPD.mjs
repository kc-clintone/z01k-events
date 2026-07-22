import { t as supabase } from "./client-CrwDbVDs.mjs";
import { N as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._id-wVOC9DPD.js
var $$splitNotFoundComponentImporter = () => import("./events._id-i5kZVfK_.mjs");
var $$splitErrorComponentImporter = () => import("./events._id--Ddt9AB4.mjs");
var $$splitComponentImporter = () => import("./events._id-DhsmyOVK.mjs");
var Route = createFileRoute("/events/$id")({
	loader: async ({ params }) => {
		const { data, error } = await supabase.from("events").select("*").eq("id", params.id).maybeSingle();
		if (error) throw error;
		if (!data) throw notFound();
		return { event: data };
	},
	head: ({ loaderData }) => {
		const ev = loaderData?.event;
		if (!ev) return { meta: [{ title: "Event — Zone01 Kisumu" }] };
		const desc = ev.description.slice(0, 155);
		return { meta: [
			{ title: `${ev.title} — Zone01 Kisumu Events` },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: ev.title
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:type",
				content: "article"
			},
			...ev.image_url ? [
				{
					property: "og:image",
					content: ev.image_url
				},
				{
					name: "twitter:image",
					content: ev.image_url
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			] : [{
				name: "twitter:card",
				content: "summary"
			}]
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
