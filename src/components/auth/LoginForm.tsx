"use client";
import { apiRequest } from "@/lib/api-client";
import { AuthResponse } from "@/types/auth";
import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!name) return;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const data = await apiRequest<AuthResponse>("/login", {
        method: "POST",
        body: JSON.stringify(formData),
      })
      console.log("Login success");
    } catch(error){
        console.log("Login failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValid =
    formData.identifier.trim().length > 0 && formData.password.length > 0;

  return (
    <section className="mx-auto w-full max-w-[440px]">
      <div className="flex min-h-[min(560px,calc(100svh-2rem))] flex-col justify-center rounded-3xl border border-zinc-200/70 bg-white/80 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.35)] backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-zinc-950/60 sm:min-h-[min(560px,calc(100svh-3rem))]">
        <div className="px-6 pb-3 pt-4 text-center sm:px-8 sm:pb-4 sm:pt-6">
          <div className="flex flex-col items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-sm">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
              >
                <path
                  d="M12 2.75c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  opacity="0.9"
                />
                <path
                  d="M7.75 13.25c1.2 2.1 3.32 3.5 5.75 3.5 2.2 0 4.14-1.14 5.35-2.86"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Samvaad AI
              </p>
            </div>
          </div>

          <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Welcome back
          </h1>
          <p className="mt-2 text-pretty text-sm text-zinc-600 dark:text-zinc-400">
            Use email/username and password to access chats.
          </p>
        </div>

        <div className="px-6 pb-3 pt-2 sm:px-8">
          <div className="grid gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-white/5"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
                <path
                  fill="currentColor"
                  d="M21.35 11.1H12v2.98h5.35c-.23 1.48-1.7 4.34-5.35 4.34-3.22 0-5.85-2.66-5.85-5.92S8.78 6.58 12 6.58c1.83 0 3.05.78 3.75 1.46l2.56-2.48C16.86 4.22 14.68 3.2 12 3.2 6.96 3.2 2.9 7.3 2.9 12.5S6.96 21.8 12 21.8c6.02 0 7.5-4.34 7.5-6.59 0-.44-.05-.78-.15-1.11Z"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200/80 dark:bg-white/10" />
            <span className="text-xs text-zinc-500 dark:text-zinc-400">or</span>
            <div className="h-px flex-1 bg-zinc-200/80 dark:bg-white/10" />
          </div>

          <form className="grid w-full gap-4 text-left" onSubmit={handleLogin}>
            <div className="grid gap-1.5">
              <label
                htmlFor="identifier"
                className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
              >
                Email or username
              </label>
              <input
                id="identifier"
                type="text"
                name="identifier"
                placeholder="name@company.com or your_username"
                value={formData.identifier}
                onChange={handleChange}
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500"
              />
            </div>

            <div className="grid gap-1.5">
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-zinc-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 dark:text-zinc-400"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 pr-12 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-1.5 my-1 inline-flex items-center justify-center rounded-lg px-2 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 dark:text-zinc-300 dark:hover:bg-white/10"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="size-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500/40 dark:border-white/20 dark:bg-zinc-950"
                />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:from-emerald-500 hover:to-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Signing in…" : "Sign in"}
            </button>

            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              New here?{" "}
              <button
                type="button"
                className="font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 dark:text-zinc-100 dark:decoration-white/20"
              >
                Create an account
              </button>
            </p>
          </form>
        </div>

        <div className="px-6 pb-4 pt-1 text-center sm:px-8">
          <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            By continuing, you agree to our Terms and acknowledge our Privacy
            Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
