import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as cn, n as Input, t as Button } from "./label-QVucvxZL.mjs";
import { C as Camera, E as ArrowRight, T as CalendarX, c as Radio, f as MapPin, n as Users, o as Share2, p as Mail, s as Rocket, v as CodeXml, w as Calendar, x as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as Dialog, r as DialogContent, t as Badge } from "./dialog-B8GmBrGQ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, o as fetchEvents, r as SelectItem, s as fetchGallery, t as Select } from "./events-api-CvCELXzb.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { a as useServerFn, i as subscribeNewsletter, n as Navbar, r as RegisterDialog, t as Footer } from "./RegisterDialog-BxY0_Ldo.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { i as Trigger, n as List, r as Root2$1, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DlJGM-9D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_bg_default = "/assets/hero-bg-XtmMTyj2.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_bg_default,
				alt: "",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 w-full h-full object-cover opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary-glow/10 mix-blend-screen" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "mt-6 font-display font-bold leading-[0.95] tracking-tighter text-foreground text-5xl sm:text-7xl md:text-8xl lg:text-9xl max-w-5xl",
						children: [
							"Where Kisumu's ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "code meets community"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .25
						},
						className: "mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl",
						children: "Zone01 Kisumu Tech Events runs the city's monthly mini-conferences, workshops and meetups — where developers ship, learn and meet face to face."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .4
						},
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#events",
								children: ["View Events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "border-border bg-card/40 backdrop-blur",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#newsletter",
								children: "Join the Community"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .8,
							delay: .6
						},
						className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl",
						children: [
							{
								k: "12+",
								v: "Events / year"
							},
							{
								k: "500+",
								v: "Developers"
							},
							{
								k: "Monthly",
								v: "Mini-conferences"
							},
							{
								k: "Kisumu",
								v: "Based"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-2 border-primary/40 pl-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl sm:text-3xl font-bold text-foreground",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs sm:text-sm text-muted-foreground mt-1",
								children: s.v
							})]
						}, s.v))
					})
				]
			})
		]
	});
}
var items = [
	{
		icon: CodeXml,
		title: "Learn in public",
		body: "Workshops led by working developers. Build, ship, repeat."
	},
	{
		icon: Users,
		title: "Real community",
		body: "A growing network of engineers, students and tech leads in Kisumu."
	},
	{
		icon: Calendar,
		title: "Monthly cadence",
		body: "A mini-conference every month — talks, demos and hands-on tracks."
	},
	{
		icon: Rocket,
		title: "Open to all",
		body: "Bring your curiosity. Free to attend, free to contribute."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 md:py-32 border-t border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-primary-glow mb-4",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]",
						children: [
							"A tech community built around ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "shipping things together"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground leading-relaxed",
						children: "Zone01 Kisumu is a peer-learning tech community for software engineers, designers and curious builders. We run monthly mini-conferences and hands-on meetups focused on the craft of building — not the hype."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground leading-relaxed",
						children: "No gatekeeping. No pay-walls. Just developers helping each other get sharper."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i * .08,
							duration: .5
						},
						className: "rounded-2xl border border-border bg-card/50 backdrop-blur p-6 hover:border-primary/50 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center mb-4 shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "w-5 h-5 text-primary-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold text-lg",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-2",
								children: it.body
							})
						]
					}, it.title))
				})]
			})
		})
	});
}
var Tabs = Root2$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var categoryLabel = {
	workshop: "Workshop",
	mini_conference: "Mini Conference",
	meetup: "Meetup"
};
function EventCard({ event, onRegister }) {
	const isLive = event.status === "live";
	const isCompleted = event.status === "completed";
	const isCancelled = event.status === "cancelled";
	const isPostponed = event.status === "postponed";
	const date = new Date(event.date_time);
	async function handleShare() {
		const url = `${window.location.origin}/events/${event.id}`;
		const shareData = {
			title: event.title,
			text: event.description,
			url
		};
		try {
			if (navigator.share) await navigator.share(shareData);
			else {
				await navigator.clipboard.writeText(url);
				toast.success("Event link copied to clipboard");
			}
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .5 },
		className: `group relative rounded-2xl overflow-hidden border bg-card/60 backdrop-blur shadow-card transition-all hover:-translate-y-1 ${isLive ? "border-primary shadow-glow" : "border-border hover:border-primary/40"}`,
		children: [
			isLive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-2xl pointer-events-none border border-primary/60 animate-pulse" }),
			event.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[16/9] overflow-hidden bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: event.image_url,
					alt: event.title,
					loading: "lazy",
					className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[16/9] bg-gradient-hero opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "text-[10px] uppercase tracking-wider",
								children: categoryLabel[event.category]
							}),
							isLive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								className: "bg-primary text-primary-foreground text-[10px] uppercase tracking-wider flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-3 h-3" }), " Live"]
							}),
							isCompleted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] uppercase tracking-wider",
								children: "Completed"
							}),
							event.status === "upcoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] uppercase tracking-wider border-primary/40 text-primary-glow",
								children: "Upcoming"
							}),
							isPostponed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] uppercase tracking-wider border-yellow-500/50 text-yellow-400",
								children: "Postponed"
							}),
							isCancelled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] uppercase tracking-wider border-destructive/60 text-destructive",
								children: "Cancelled"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold leading-tight",
						children: event.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-2 line-clamp-3",
						children: event.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-1.5 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-primary-glow" }),
								date.toLocaleDateString(void 0, { dateStyle: "medium" }),
								" · ",
								date.toLocaleTimeString(void 0, {
									hour: "2-digit",
									minute: "2-digit"
								})
							]
						}), event.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-primary-glow" }), event.location]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-2",
						children: [!isCompleted && !isCancelled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => onRegister(event),
							variant: isLive ? "hero" : "outline",
							className: "flex-1",
							children: isLive ? "Join Now" : isPostponed ? "Register (Postponed)" : "Register"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleShare,
							variant: "outline",
							size: "icon",
							"aria-label": "Share event",
							className: isCompleted || isCancelled ? "flex-1" : "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-4 h-4" }), (isCompleted || isCancelled) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-sm",
								children: "Share"
							})]
						})]
					})
				]
			})
		]
	});
}
function EventsSection() {
	const { data: events = [], isLoading } = useQuery({
		queryKey: ["events"],
		queryFn: fetchEvents
	});
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [category, setCategory] = (0, import_react.useState)("all");
	function filter(list) {
		return category === "all" ? list : list.filter((e) => e.category === category);
	}
	const upcoming = (0, import_react.useMemo)(() => filter(events.filter((e) => e.status === "upcoming" || e.status === "postponed")), [events, category]);
	const live = (0, import_react.useMemo)(() => filter(events.filter((e) => e.status === "live")), [events, category]);
	const completed = (0, import_react.useMemo)(() => filter(events.filter((e) => e.status === "completed" || e.status === "cancelled")), [events, category]);
	function onRegister(e) {
		setSelected(e);
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "events",
		className: "py-24 md:py-32 border-t border-border/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-primary-glow mb-3",
					children: "Events"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-3xl",
					children: [
						"What's happening at ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Zone01 Kisumu"
						}),
						"."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: category,
					onValueChange: setCategory,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-full sm:w-56 bg-card/60 border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "All categories" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All categories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "mini_conference",
							children: "Mini Conferences"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "workshop",
							children: "Workshops"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "meetup",
							children: "Meetups"
						})
					] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: live.length ? "live" : "upcoming",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "bg-card/60 border border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "live",
							children: ["Live ", live.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-1.5 text-primary-glow",
								children: ["·", live.length]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "upcoming",
							children: "Upcoming"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "past",
							children: "Past"
						})
					]
				}), [
					{
						value: "live",
						list: live,
						emptyMsg: "No events live right now."
					},
					{
						value: "upcoming",
						list: upcoming,
						emptyMsg: "No upcoming events yet — check back soon."
					},
					{
						value: "past",
						list: completed,
						emptyMsg: "Past events will appear here."
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: t.value,
					className: "mt-8",
					children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground text-sm",
						children: "Loading events…"
					}) : t.list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarX, { className: "w-8 h-8 mx-auto mb-3 opacity-60" }), t.emptyMsg]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: t.list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
							event: e,
							onRegister
						}, e.id))
					})
				}, t.value))]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterDialog, {
			event: selected,
			open,
			onOpenChange: setOpen
		})]
	});
}
function Gallery() {
	const { data: images = [], isLoading, isError } = useQuery({
		queryKey: ["gallery"],
		queryFn: fetchGallery
	});
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "py-24 md:py-32 border-t border-border/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-primary-glow mb-3 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-4 h-4" }), " Gallery"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-3xl",
					children: [
						"Moments from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "past events"
						}),
						"."
					]
				}),
				isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: "Loading gallery..."
				}),
				isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-destructive",
					children: "Unable to load gallery images right now."
				}),
				!isLoading && !isError && images.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-xl border border-dashed border-border p-8 text-sm text-muted-foreground",
					children: "No gallery images yet. They will appear here as soon as an admin adds photos."
				}),
				!isLoading && !isError && images.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4",
					children: images.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(img.image_url),
						className: "group relative aspect-square overflow-hidden rounded-xl border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.image_url,
							alt: img.caption ?? "Event",
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						}), img.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background to-transparent text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity",
							children: img.caption
						})]
					}, img.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!active,
			onOpenChange: (v) => !v && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-w-5xl p-2 bg-background border-border",
				children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: active,
					alt: "Event",
					className: "w-full h-auto rounded-lg"
				})
			})
		})]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "Who can join Zone01 Kisumu?",
		a: "Anyone interested in tech — students, self-taught builders, working engineers, designers, and the merely curious. If you want to learn and contribute, you belong here."
	},
	{
		q: "Do I need prior coding experience?",
		a: "No. We run beginner-friendly meetups and deeper technical mini-conferences. Pick the events that match where you are today."
	},
	{
		q: "Are events free or paid?",
		a: "All community meetups and mini-conferences are free. Specialised workshops may occasionally cover venue costs — always announced ahead of time."
	},
	{
		q: "How often do events happen?",
		a: "A mini-conference every month, plus smaller meetups and workshops throughout the month."
	},
	{
		q: "How can I contribute or speak at an event?",
		a: "Reach out via the newsletter signup or contact us directly — we're always looking for speakers, organisers and volunteers."
	}
];
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-24 md:py-32 border-t border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-primary-glow mb-3 text-center",
					children: "Community"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-center",
					children: [
						"How to become ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "part of it"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-12",
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: f.q,
						className: "border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-display text-lg hover:no-underline hover:text-primary-glow",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground leading-relaxed",
							children: f.a
						})]
					}, f.q))
				})
			]
		})
	});
}
var schema = objectType({ email: stringType().trim().email().max(255) });
function Newsletter() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const submit = useServerFn(subscribeNewsletter);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({ email: fd.get("email") });
		if (!parsed.success) {
			toast.error("Please enter a valid email");
			return;
		}
		setSubmitting(true);
		try {
			await submit({ data: { email: parsed.data.email } });
			setDone(true);
			toast.success("Subscribed!");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Something went wrong");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "newsletter",
		className: "py-24 md:py-32 border-t border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-gradient-hero border border-primary/30 p-10 md:p-16 text-center shadow-glow relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.22_258/0.3),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-10 h-10 text-primary-foreground mx-auto mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-5xl font-bold text-primary-foreground",
							children: "Stay in the loop."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-primary-foreground/80 max-w-xl mx-auto",
							children: "Get updates on upcoming mini-conferences and tech meetups. One email when it matters."
						}),
						done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-primary-foreground font-medium",
							children: "✓ You're subscribed."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "email",
								type: "email",
								required: true,
								placeholder: "you@email.com",
								className: "bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: submitting,
								className: "bg-background text-foreground hover:bg-background/90",
								children: submitting ? "..." : "Subscribe"
							})]
						})
					]
				})]
			})
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
