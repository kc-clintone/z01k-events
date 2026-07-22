import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./label-QVucvxZL.mjs";
import { D as ArrowLeft, c as Radio, f as MapPin, o as Share2, w as Calendar } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./dialog-B8GmBrGQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Navbar, r as RegisterDialog, t as Footer } from "./RegisterDialog-BxY0_Ldo.mjs";
import { t as Route } from "./events._id-wVOC9DPD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._id-DhsmyOVK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventPage() {
	const { event } = Route.useLoaderData();
	const [open, setOpen] = (0, import_react.useState)(false);
	const date = new Date(event.date_time);
	const isLive = event.status === "live";
	const isCompleted = event.status === "completed";
	const isCancelled = event.status === "cancelled";
	const isPostponed = event.status === "postponed";
	async function handleShare() {
		const url = window.location.href;
		try {
			if (navigator.share) await navigator.share({
				title: event.title,
				text: event.description,
				url
			});
			else {
				await navigator.clipboard.writeText(url);
				toast.success("Link copied to clipboard");
			}
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-24 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-5 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " All events"]
						}),
						event.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: event.image_url,
								alt: event.title,
								className: "w-full h-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "uppercase tracking-wider text-[10px]",
									children: event.category.replace("_", " ")
								}),
								isLive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									className: "bg-primary text-primary-foreground text-[10px] uppercase flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-3 h-3" }), "Live"]
								}),
								isCompleted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-[10px] uppercase",
									children: "Completed"
								}),
								isPostponed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-[10px] uppercase border-yellow-500/50 text-yellow-400",
									children: "Postponed"
								}),
								isCancelled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-[10px] uppercase border-destructive/60 text-destructive",
									children: "Cancelled"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl sm:text-5xl font-bold leading-tight",
							children: event.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-primary-glow" }), date.toLocaleString(void 0, {
									dateStyle: "full",
									timeStyle: "short"
								})]
							}), event.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-primary-glow" }), event.location]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg text-foreground/90 whitespace-pre-wrap",
							children: event.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [!isCompleted && !isCancelled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "hero",
								size: "lg",
								onClick: () => setOpen(true),
								children: isLive ? "Join Now" : "Register"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "lg",
								onClick: handleShare,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-4 h-4 mr-2" }), " Share"]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterDialog, {
				event,
				open,
				onOpenChange: setOpen
			})
		]
	});
}
//#endregion
export { EventPage as component };
