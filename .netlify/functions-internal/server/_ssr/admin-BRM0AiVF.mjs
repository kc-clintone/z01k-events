import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CrwDbVDs.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as cn, n as Input, r as Label, t as Button } from "./label-QVucvxZL.mjs";
import { t as Card } from "./card-ThRnOVH_.mjs";
import { a as Trash2, g as Image, l as Plus, m as LogOut, n as Users, o as Share2, r as Upload, u as Pencil, w as Calendar } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as Dialog, o as DialogTitle, r as DialogContent, t as Badge } from "./dialog-B8GmBrGQ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, o as fetchEvents, r as SelectItem, s as fetchGallery, t as Select } from "./events-api-CvCELXzb.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BRM0AiVF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useAuth() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		supabase.auth.getUser().then(({ data }) => {
			if (!mounted) return;
			setUser(data.user ?? null);
			setLoading(false);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
			setUser(session?.user ?? null);
		});
		return () => {
			mounted = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!user) {
			setIsAdmin(false);
			return;
		}
		supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle().then(({ data }) => setIsAdmin(!!data));
	}, [user]);
	return {
		user,
		loading,
		isAdmin
	};
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var STATUS_OPTIONS = [
	{
		value: "upcoming",
		label: "Upcoming"
	},
	{
		value: "live",
		label: "Live"
	},
	{
		value: "completed",
		label: "Completed"
	},
	{
		value: "postponed",
		label: "Postponed"
	},
	{
		value: "cancelled",
		label: "Cancelled"
	}
];
function AdminPage() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const { user, isAdmin, loading } = useAuth();
	const { data: events = [] } = useQuery({
		queryKey: ["events"],
		queryFn: fetchEvents
	});
	const { data: galleryImages = [] } = useQuery({
		queryKey: ["gallery"],
		queryFn: fetchGallery
	});
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editingGallery, setEditingGallery] = (0, import_react.useState)(null);
	const [galleryOpen, setGalleryOpen] = (0, import_react.useState)(false);
	const { data: adminDebug, isLoading: adminDebugLoading, error: adminDebugError, refetch: refetchAdminDebug } = useQuery({
		queryKey: ["admin-debug", user?.id],
		enabled: !!user,
		queryFn: async () => {
			const [roleRes, eventsRes, galleryRes, registrationsRes] = await Promise.all([
				supabase.from("user_roles").select("role").eq("user_id", user.id).maybeSingle(),
				supabase.from("events").select("id", {
					head: true,
					count: "exact"
				}),
				supabase.from("gallery_images").select("id", {
					head: true,
					count: "exact"
				}),
				supabase.from("registrations").select("id", {
					head: true,
					count: "exact"
				})
			]);
			return {
				userId: user.id,
				email: user.email ?? null,
				role: roleRes.data?.role ?? null,
				roleError: roleRes.error?.message ?? null,
				checks: {
					events: eventsRes.error ? `error: ${eventsRes.error.message}` : `ok (${eventsRes.count ?? 0})`,
					gallery: galleryRes.error ? `error: ${galleryRes.error.message}` : `ok (${galleryRes.count ?? 0})`,
					registrations: registrationsRes.error ? `error: ${registrationsRes.error.message}` : `ok (${registrationsRes.count ?? 0})`
				}
			};
		}
	});
	(0, import_react.useEffect)(() => {
		if (!loading && user && !isAdmin) toast.error("You don't have admin access.");
	}, [
		loading,
		user,
		isAdmin
	]);
	async function handleSignOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/",
			replace: true
		});
	}
	async function handleDelete(id) {
		if (!confirm("Delete this event?")) return;
		const { error } = await supabase.from("events").delete().eq("id", id);
		if (error) return toast.error(error.message);
		toast.success("Deleted");
		qc.invalidateQueries({ queryKey: ["events"] });
	}
	async function setEventStatus(ev, next) {
		if (next === ev.status) return;
		const { error } = await supabase.from("events").update({ status: next }).eq("id", ev.id);
		if (error) return toast.error(error.message);
		toast.success(`Status set to ${next}`);
		qc.invalidateQueries({ queryKey: ["events"] });
	}
	async function shareEvent(ev) {
		const url = `${window.location.origin}/events/${ev.id}`;
		try {
			if (navigator.share) await navigator.share({
				title: ev.title,
				url
			});
			else {
				await navigator.clipboard.writeText(url);
				toast.success("Link copied");
			}
		} catch {}
	}
	async function handleDeleteGalleryImage(id) {
		if (!confirm("Delete this gallery image?")) return;
		const { error } = await supabase.from("gallery_images").delete().eq("id", id);
		if (error) return toast.error(error.message);
		toast.success("Gallery image deleted");
		qc.invalidateQueries({ queryKey: ["gallery"] });
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center text-muted-foreground",
		children: "Loading…"
	});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-8 text-center max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "No admin access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2 text-sm",
					children: "Your account does not have admin permissions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					variant: "hero",
					onClick: handleSignOut,
					children: "Sign out"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-card/40 backdrop-blur sticky top-0 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "w-8 h-8 rounded-lg bg-gradient-blue flex items-center justify-center font-bold text-primary-foreground",
							children: "Z"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-bold",
							children: "Admin Dashboard"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-sm text-muted-foreground hover:text-foreground",
							children: "View site"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: handleSignOut,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" }), " Sign out"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDiagnosticsPanel, {
						isAdmin,
						loading: adminDebugLoading,
						errorMessage: adminDebugError instanceof Error ? adminDebugError.message : null,
						debug: adminDebug,
						onRefresh: () => refetchAdminDebug()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl sm:text-4xl font-bold",
							children: "Events"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm mt-1",
							children: "Create, edit and manage event listings."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "hero",
							onClick: () => {
								setEditing(null);
								setOpen(true);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " New Event"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [events.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-10 text-center text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-8 h-8 mx-auto mb-3 opacity-60" }), "No events yet. Click \"New Event\" to create your first one."]
						}), events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary/40 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display font-semibold",
											children: e.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: e.status === "live" ? "default" : "outline",
											className: e.status === "live" ? "bg-primary text-primary-foreground" : "",
											children: e.status
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "text-[10px]",
											children: e.category
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: [
										new Date(e.date_time).toLocaleString(),
										" ",
										e.location && `· ${e.location}`
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: e.status,
										onValueChange: (v) => setEventStatus(e, v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "h-9 w-[140px]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: STATUS_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: o.value,
											children: o.label
										}, o.value)) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => shareEvent(e),
										"aria-label": "Share",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => {
											setEditing(e);
											setOpen(true);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => handleDelete(e.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4 text-destructive" })
									})
								]
							})]
						}, e.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-2xl sm:text-3xl font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-6 h-6" }), " Gallery"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm mt-1",
								children: "Add and update photos shown on the website gallery section."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "hero",
								onClick: () => {
									setEditingGallery(null);
									setGalleryOpen(true);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " New Photo"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3",
							children: [galleryImages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "p-8 text-center text-muted-foreground",
								children: "No gallery images yet. Click \"New Photo\" to add your first image."
							}), galleryImages.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-4 flex flex-col sm:flex-row sm:items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.image_url,
										alt: img.caption ?? "Gallery image",
										className: "w-full sm:w-28 h-28 object-cover rounded-lg border border-border"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium truncate",
												children: img.caption?.trim() || "Untitled image"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mt-1",
												children: img.event_date ? `Event date: ${new Date(img.event_date).toLocaleDateString()}` : "No event date"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mt-1 truncate",
												children: img.image_url
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => {
												setEditingGallery(img);
												setGalleryOpen(true);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "w-4 h-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => handleDeleteGalleryImage(img.id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4 text-destructive" })
										})]
									})
								]
							}, img.id))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationsPanel, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventDialog, {
				open,
				onOpenChange: setOpen,
				event: editing,
				onSaved: () => qc.invalidateQueries({ queryKey: ["events"] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryDialog, {
				open: galleryOpen,
				onOpenChange: setGalleryOpen,
				image: editingGallery,
				onSaved: () => qc.invalidateQueries({ queryKey: ["gallery"] })
			})
		]
	});
}
function AdminDiagnosticsPanel({ isAdmin, loading, errorMessage, debug, onRefresh }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5 mb-8 border-dashed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Admin diagnostics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Use this panel to confirm your account role and table access checks."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: onRefresh,
					children: "Refresh checks"
				})]
			}),
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mt-4",
				children: "Checking permissions..."
			}),
			errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-destructive mt-4",
				children: errorMessage
			}),
			!loading && !errorMessage && debug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Email:"
						}),
						" ",
						debug.email ?? "-"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "User ID:"
						}),
						" ",
						debug.userId
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "isAdmin (client):"
						}),
						" ",
						String(isAdmin)
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Role row:"
						}),
						" ",
						debug.role ?? "none"
					] }),
					debug.roleError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-destructive",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Role query error:"
							}),
							" ",
							debug.roleError
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Events access:"
						}),
						" ",
						debug.checks.events
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Gallery access:"
						}),
						" ",
						debug.checks.gallery
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Registrations access:"
						}),
						" ",
						debug.checks.registrations
					] })
				]
			})
		]
	});
}
function EventDialog({ open, onOpenChange, event, onSaved }) {
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [imageUrl, setImageUrl] = (0, import_react.useState)(event?.image_url ?? "");
	(0, import_react.useEffect)(() => {
		setImageUrl(event?.image_url ?? "");
	}, [event, open]);
	async function handleFileUpload(file) {
		if (!file.type.startsWith("image/")) {
			toast.error("Please select an image file");
			return;
		}
		if (file.size > 5 * 1024 * 1024) {
			toast.error("Image must be under 5 MB");
			return;
		}
		setUploading(true);
		const ext = file.name.split(".").pop() || "jpg";
		const path = `${crypto.randomUUID()}.${ext}`;
		const { error: upErr } = await supabase.storage.from("event-images").upload(path, file, {
			cacheControl: "3600",
			upsert: false,
			contentType: file.type
		});
		if (upErr) {
			setUploading(false);
			toast.error(upErr.message);
			return;
		}
		const { data: signed, error: sErr } = await supabase.storage.from("event-images").createSignedUrl(path, 3600 * 24 * 365 * 10);
		setUploading(false);
		if (sErr || !signed?.signedUrl) {
			toast.error(sErr?.message ?? "Could not get image URL");
			return;
		}
		setImageUrl(signed.signedUrl);
		toast.success("Image uploaded");
	}
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = {
			title: String(fd.get("title")).trim(),
			description: String(fd.get("description")).trim(),
			date_time: new Date(String(fd.get("date_time"))).toISOString(),
			ends_at: fd.get("ends_at") ? new Date(String(fd.get("ends_at"))).toISOString() : null,
			location: String(fd.get("location") || "").trim() || null,
			category: String(fd.get("category")),
			status: String(fd.get("status")),
			image_url: imageUrl.trim() || null,
			registration_url: String(fd.get("registration_url") || "").trim() || null
		};
		if (!payload.title || !payload.description) {
			toast.error("Title and description are required");
			return;
		}
		setSaving(true);
		const { error } = event ? await supabase.from("events").update(payload).eq("id", event.id) : await supabase.from("events").insert(payload);
		setSaving(false);
		if (error) return toast.error(error.message);
		toast.success(event ? "Updated" : "Created");
		onSaved();
		onOpenChange(false);
	}
	const defaultDt = event ? new Date(event.date_time).toISOString().slice(0, 16) : "";
	const defaultEnds = event?.ends_at ? new Date(event.ends_at).toISOString().slice(0, 16) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-lg max-h-[90vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display",
				children: event ? "Edit event" : "New event"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "title",
						children: "Title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "title",
						name: "title",
						defaultValue: event?.title,
						required: true,
						maxLength: 200
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "description",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "description",
						name: "description",
						defaultValue: event?.description,
						required: true,
						rows: 4
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "date_time",
							children: "Date & time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "date_time",
							name: "date_time",
							type: "datetime-local",
							defaultValue: defaultDt,
							required: true
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ends_at",
							children: "Ends at (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "ends_at",
							name: "ends_at",
							type: "datetime-local",
							defaultValue: defaultEnds
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "location",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "location",
						name: "location",
						defaultValue: event?.location ?? ""
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "category",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							name: "category",
							defaultValue: event?.category ?? "meetup",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "category",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "meetup",
									children: "Meetup"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "workshop",
									children: "Workshop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "mini_conference",
									children: "Mini Conference"
								})
							] })]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "status",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								name: "status",
								defaultValue: event?.status ?? "upcoming",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: STATUS_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: o.value,
									children: o.label
								}, o.value)) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground mt-1",
								children: "Status auto-updates from time. Set Postponed / Cancelled manually."
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Event image / poster" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex items-center gap-2 px-3 py-2 border border-border rounded-md cursor-pointer hover:border-primary/40 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-4 h-4" }),
									uploading ? "Uploading..." : "Upload image",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										className: "hidden",
										disabled: uploading,
										onChange: (e) => {
											const f = e.target.files?.[0];
											if (f) handleFileUpload(f);
											e.target.value = "";
										}
									})
								]
							}), imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: imageUrl,
								alt: "Preview",
								className: "h-14 w-24 object-cover rounded border border-border"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "sm",
								variant: "ghost",
								onClick: () => setImageUrl(""),
								children: "Remove"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-2",
							value: imageUrl,
							onChange: (e) => setImageUrl(e.target.value),
							placeholder: "Or paste image URL"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "registration_url",
						children: "External registration URL (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "registration_url",
						name: "registration_url",
						defaultValue: event?.registration_url ?? "",
						placeholder: "https://..."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "hero",
						className: "w-full",
						disabled: saving,
						children: saving ? "Saving..." : event ? "Save changes" : "Create event"
					})
				]
			})]
		})
	});
}
function GalleryDialog({ open, onOpenChange, image, onSaved }) {
	const [saving, setSaving] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const imageUrl = String(fd.get("image_url") || "").trim();
		const caption = String(fd.get("caption") || "").trim() || null;
		const eventDate = String(fd.get("event_date") || "").trim() || null;
		if (!imageUrl) {
			toast.error("Image URL is required");
			return;
		}
		setSaving(true);
		const { error } = image ? await supabase.from("gallery_images").update({
			image_url: imageUrl,
			caption,
			event_date: eventDate
		}).eq("id", image.id) : await supabase.from("gallery_images").insert({
			image_url: imageUrl,
			caption,
			event_date: eventDate
		});
		setSaving(false);
		if (error) return toast.error(error.message);
		toast.success(image ? "Gallery image updated" : "Gallery image added");
		onSaved();
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display",
				children: image ? "Edit gallery image" : "Add gallery image"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "gallery_image_url",
						children: "Image URL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "gallery_image_url",
						name: "image_url",
						defaultValue: image?.image_url ?? "",
						placeholder: "https://...",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "gallery_caption",
						children: "Caption"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "gallery_caption",
						name: "caption",
						defaultValue: image?.caption ?? "",
						placeholder: "Optional caption"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "gallery_event_date",
						children: "Event date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "gallery_event_date",
						name: "event_date",
						type: "date",
						defaultValue: image?.event_date ?? ""
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "hero",
						className: "w-full",
						disabled: saving,
						children: saving ? "Saving..." : image ? "Save changes" : "Add image"
					})
				]
			})]
		})
	});
}
function RegistrationsPanel() {
	const { data: regs = [], isError, error } = useQuery({
		queryKey: ["registrations"],
		queryFn: async () => {
			const { data, error } = await supabase.from("registrations").select("id, full_name, email, phone, created_at, event_id, events(title)").order("created_at", { ascending: false }).limit(50);
			if (error) throw error;
			return data ?? [];
		}
	});
	if (isError) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-2xl font-bold flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-5 h-5" }), " Recent registrations"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-4 p-5 text-sm text-destructive",
				children: ["Unable to load registrations: ", message]
			})]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "font-display text-2xl font-bold flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-5 h-5" }), " Recent registrations"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 rounded-2xl border border-border overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-card/60 text-left text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 hidden md:table-cell",
							children: "Event"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 hidden md:table-cell",
							children: "When"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [regs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 4,
					className: "px-4 py-8 text-center text-muted-foreground",
					children: "No registrations yet."
				}) }), regs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: r.full_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted-foreground",
							children: r.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 hidden md:table-cell text-muted-foreground",
							children: r.events?.title ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 hidden md:table-cell text-muted-foreground",
							children: new Date(r.created_at).toLocaleString()
						})
					]
				}, r.id))] })]
			})
		})]
	});
}
//#endregion
export { AdminPage as component };
