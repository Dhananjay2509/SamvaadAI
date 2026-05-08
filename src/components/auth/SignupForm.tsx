"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api-client";
import Link from "next/link";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setIsSubmitting(true);
    try {
      await apiRequest("/register", {
        method: "POST",
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-xl max-w-[440px] mx-auto">
        <h2 className="text-2xl font-bold text-emerald-600">
          Account Created!
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          You can now sign in with your credentials.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block font-semibold text-emerald-600 underline"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[440px]">
      <div className="flex flex-col justify-center rounded-3xl border border-zinc-200/70 bg-white/80 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.35)] backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-zinc-950/60 p-6 sm:p-8">
        {/* Header with Logo */}
        <div className="px-6 pb-6 pt-2 text-center">
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
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Samvaad AI
            </p>
          </div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
            Create account
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-pretty">
            Please sign up to access our services.
          </p>
        </div>

        {error && (
          <p className="mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 p-2 rounded-lg border border-red-100 dark:border-red-500/20">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup} className="grid gap-4">
          <div className="grid gap-1.5 text-left">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              placeholder="@your_username"
              value={formData.username}
              onChange={handleChange}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm dark:bg-zinc-950 dark:border-white/10 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition"
            />
          </div>
          <div className="grid gap-1.5 text-left">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm dark:bg-zinc-950 dark:border-white/10 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition"
            />
          </div>
          <div className="grid gap-1.5 text-left">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm dark:bg-zinc-950 dark:border-white/10 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition"
            />
          </div>
          <div className="grid gap-1.5 text-left">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm dark:bg-zinc-950 dark:border-white/10 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-11 rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 font-semibold text-white shadow-sm hover:from-emerald-500 hover:to-sky-500 transition disabled:opacity-50"
          >
            {isSubmitting ? "Creating account..." : "Sign up"}
          </button>

          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 pt-2">
            Already have an account?{" "}
            <Link
              href="/"
              className="font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-300"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
