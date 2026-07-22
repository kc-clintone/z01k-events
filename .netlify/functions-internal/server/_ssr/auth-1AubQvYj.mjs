import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CrwDbVDs.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Input, r as Label, t as Button } from "./label-QVucvxZL.mjs";
import { t as Card } from "./card-ThRnOVH_.mjs";
import { D as ArrowLeft } from "../_libs/lucide-react.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-1AubQvYj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	email: stringType().trim().email().max(255),
	password: stringType().min(6, "Min 6 characters").max(128)
});
function Auth() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!(sessionStorage.getItem("admin-auth-entry") === "1")) {
			navigate({
				to: "/",
				replace: true
			});
			return;
		}
		sessionStorage.removeItem("admin-auth-entry");
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) navigate({ to: "/admin" });
		});
	}, [navigate]);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse(Object.fromEntries(fd));
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
			return;
		}
		setLoading(true);
		if (mode === "signup") {
			const { error } = await supabase.auth.signUp({
				email: parsed.data.email,
				password: parsed.data.password,
				options: { emailRedirectTo: `${window.location.origin}/admin` }
			});
			setLoading(false);
			if (error) return toast.error(error.message);
			toast.success("Account created. You can sign in now.");
			setMode("signin");
		} else {
			const { error } = await supabase.auth.signInWithPassword(parsed.data);
			setLoading(false);
			if (error) return toast.error(error.message);
			navigate({ to: "/admin" });
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center px-5 bg-gradient-to-br from-background via-background to-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " Back to site"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-8 bg-card/80 backdrop-blur border-border shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-3xl font-bold",
						children: ["Admin ", mode === "signin" ? "Sign in" : "Sign up"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-2",
						children: mode === "signin" ? "Manage events and registrations." : "The first signup becomes the admin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								name: "password",
								type: "password",
								required: true,
								minLength: 6
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "hero",
								className: "w-full",
								disabled: loading,
								children: loading ? "..." : mode === "signin" ? "Sign in" : "Create account"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
						className: "mt-4 text-sm text-muted-foreground hover:text-primary-glow w-full text-center",
						children: mode === "signin" ? "No account? Create one" : "Already have an account? Sign in"
					})
				]
			})]
		})
	});
}
//#endregion
export { Auth as component };
