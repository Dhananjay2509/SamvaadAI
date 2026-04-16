import LoginForm from "../components/auth/LoginForm";
export default function Home() {
  return (
    <main className="relative flex h-[100svh] box-border items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-50 to-white px-4 py-4 font-sans dark:from-zinc-950 dark:to-black sm:py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
        <div className="absolute -bottom-40 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />
      </div>
      <div className="relative w-full">
        <LoginForm />
      </div>
    </main>
  );
}
