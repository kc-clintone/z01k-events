import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Input, r as Label, t as Button } from "./label-QVucvxZL.mjs";
import { _ as Github, d as Menu, h as Linkedin, i as Twitter, p as Mail, t as X, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogDescription, n as Dialog, o as DialogTitle, r as DialogContent } from "./dialog-B8GmBrGQ.mjs";
import { D as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D1y148A7.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RegisterDialog-BxY0_Ldo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var links = [
	{
		href: "#events",
		label: "Events"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#gallery",
		label: "Gallery"
	},
	{
		href: "#faq",
		label: "Community"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 rounded-lg bg-gradient-blue shadow-glow flex items-center justify-center font-bold text-primary-foreground",
						children: "Z"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-bold tracking-tight text-foreground",
						children: ["Zone01 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary-glow",
							children: "Events"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#events",
							children: "View Events"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden text-foreground",
					onClick: () => setOpen(!open),
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden border-t border-border/50 bg-background/95 px-5 py-4 space-y-3",
			children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block text-sm text-muted-foreground",
				children: l.label
			}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "hero",
				size: "sm",
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#events",
					children: "View Events"
				})
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/50 py-12 mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-8 h-8 rounded-lg bg-gradient-blue flex items-center justify-center font-bold text-primary-foreground",
					children: "Z"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display font-bold text-foreground",
					children: "Zone01 Kisumu Events"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground max-w-md",
				children: "Monthly mini-conferences, workshops & meetups for Kisumu's developer community."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:events@zone01kisumu.ke",
						className: "text-muted-foreground hover:text-primary-glow",
						"aria-label": "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground hover:text-primary-glow",
						"aria-label": "GitHub",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://linkedin.com",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground hover:text-primary-glow",
						"aria-label": "LinkedIn",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://twitter.com",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground hover:text-primary-glow",
						"aria-label": "Twitter",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "w-5 h-5" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 mt-8 pt-6 border-t border-border/30 text-xs text-muted-foreground/70 flex flex-wrap justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Zone01 Kisumu. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built with care in Kisumu, Kenya." })]
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var subscribeNewsletter = createServerFn({ method: "POST" }).inputValidator((input) => newsletterSchema.parse(input)).handler(createSsrRpc("8c9076707a1388e7b028735b9d78ed943a0c1780ae0709633917214ec4167203"));
var registerForEvent = createServerFn({ method: "POST" }).inputValidator((input) => registrationSchema.parse(input)).handler(createSsrRpc("e6bfded3fac23e5f13a99ebce49d9a43e1d54e3432828c8a76fa497d506b7bc5"));
var schema = objectType({
	full_name: stringType().trim().min(2, "Name is too short").max(100),
	email: stringType().trim().email("Invalid email").max(255),
	phone: stringType().trim().min(7, "Phone is too short").max(30),
	github_url: stringType().trim().url().max(255).optional().or(literalType("")),
	linkedin_url: stringType().trim().url().max(255).optional().or(literalType(""))
});
function RegisterDialog({ event, open, onOpenChange }) {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const submit = useServerFn(registerForEvent);
	async function handleSubmit(e) {
		e.preventDefault();
		if (!event) return;
		const fd = new FormData(e.currentTarget);
		const raw = Object.fromEntries(fd);
		const parsed = schema.safeParse(raw);
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
			return;
		}
		setSubmitting(true);
		try {
			await submit({ data: {
				event_id: event.id,
				full_name: parsed.data.full_name,
				email: parsed.data.email,
				phone: parsed.data.phone,
				github_url: parsed.data.github_url || "",
				linkedin_url: parsed.data.linkedin_url || ""
			} });
			setDone(true);
			toast.success("You're registered! Check your email for confirmation.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Registration failed");
		} finally {
			setSubmitting(false);
		}
	}
	function handleOpen(v) {
		if (!v) setDone(false);
		onOpenChange(v);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: handleOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "sm:max-w-md",
			children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-14 h-14 text-primary mx-auto mb-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-bold",
						children: "You're in!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-2 text-sm",
						children: [
							"We'll email you with details before ",
							event?.title,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						variant: "hero",
						onClick: () => handleOpen(false),
						children: "Close"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "font-display",
				children: ["Register for ", event?.title]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Reserve your spot — it's free." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "full_name",
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "full_name",
						name: "full_name",
						required: true,
						maxLength: 100
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						required: true,
						maxLength: 255
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						name: "phone",
						required: true,
						maxLength: 30,
						placeholder: "+254..."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "github_url",
							children: "GitHub (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "github_url",
							name: "github_url",
							placeholder: "https://github.com/..."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "linkedin_url",
							children: "LinkedIn (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "linkedin_url",
							name: "linkedin_url",
							placeholder: "https://linkedin.com/in/..."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "hero",
						className: "w-full",
						disabled: submitting,
						children: submitting ? "Registering..." : "Confirm Registration"
					})
				]
			})] })
		})
	});
}
//#endregion
export { useServerFn as a, subscribeNewsletter as i, Navbar as n, RegisterDialog as r, Footer as t };
