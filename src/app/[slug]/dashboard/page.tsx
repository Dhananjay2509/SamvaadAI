"use client";

const railItems = [
  { label: "All chats", icon: "C", count: 43, active: false },
  { label: "Work", icon: "W", count: 4, active: true },
  { label: "Friends", icon: "F", active: false },
  { label: "News", icon: "N", active: false },
  { label: "Archive", icon: "A", active: false },
];

const chats = [
  {
    title: "Design chat",
    subtitle: "Jessie Rollins sent a file",
    time: "4m",
    avatar: "DC",
    accent: "from-zinc-900 to-zinc-700",
    unread: 1,
    active: true,
  },
  {
    title: "Osman Campos",
    subtitle: "You: Hey! We are ready",
    time: "20m",
    avatar: "OC",
    accent: "from-amber-500 to-slate-700",
  },
  {
    title: "Jayden Church",
    subtitle: "I prepared some variants",
    time: "1h",
    avatar: "JC",
    accent: "from-teal-500 to-slate-800",
  },
  {
    title: "Jacob Mcleod",
    subtitle: "And send me the prototype",
    time: "10m",
    avatar: "JM",
    accent: "from-yellow-500 to-stone-800",
    unread: 3,
  },
  {
    title: "Jasmin Lowery",
    subtitle: "You: Ok! Let's discuss it",
    time: "20m",
    avatar: "JL",
    accent: "from-rose-500 to-slate-800",
    sent: true,
  },
  {
    title: "Zaid Myers",
    subtitle: "You: Hey! We are ready to in...",
    time: "45m",
    avatar: "ZM",
    accent: "from-slate-300 to-slate-700",
    sent: true,
  },
  {
    title: "Anthony Cordanes",
    subtitle: "What do you think?",
    time: "1d",
    avatar: "AC",
    accent: "from-sky-500 to-zinc-800",
  },
  {
    title: "Copper Garcia",
    subtitle: "You: I think it would be perfe...",
    time: "2d",
    avatar: "CG",
    accent: "from-cyan-200 to-slate-700",
    sent: true,
  },
  {
    title: "Vanessa Cox",
    subtitle: "Voice message",
    time: "2d",
    avatar: "VC",
    accent: "from-lime-200 to-stone-700",
  },
];

const members = [
  ["Tanisha Combs", "admin", "TC", "from-orange-300 to-slate-700"],
  ["Alex Hunt", "", "AH", "from-sky-300 to-slate-700"],
  ["Jasmin Lowery", "", "JL", "from-rose-500 to-slate-800"],
  ["Max Padilla", "", "MP", "from-amber-500 to-slate-800"],
  ["Jessie Rollins", "", "JR", "from-red-500 to-rose-900"],
  ["Lukas Mcgowan", "", "LM", "from-yellow-300 to-stone-700"],
];

const fileStats: Array<{ label: string; icon: string; open: boolean }> = [
  { label: "265 photos", icon: "P", open: true },
  { label: "13 videos", icon: "V", open: false },
  { label: "378 files", icon: "D", open: false },
  { label: "21 audio files", icon: "A", open: false },
  { label: "45 shared links", icon: "L", open: false },
  { label: "2 589 voice messages", icon: "M", open: false },
];

const waves = Array.from({ length: 36 }, (_, index) => 10 + ((index * 7) % 30));

export default function Dashboard() {
  return (
    <main className="samvaad-page min-h-[100svh] overflow-hidden p-5 text-[#15151c]">
      <div className="mx-auto grid h-[calc(100svh-40px)] max-w-[1480px] grid-cols-[96px_320px_minmax(460px,1fr)_300px] gap-0 overflow-hidden rounded-[34px] border-[8px] border-[#202024] bg-[#f8f8fb] shadow-[0_28px_80px_rgba(20,20,35,0.28)]">
        <aside className="flex min-h-0 flex-col items-center bg-[#202024] px-3 py-6 text-white">
          <div className="mb-8 grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-xl font-black">
            A
          </div>

          <nav className="flex w-full flex-1 flex-col items-center gap-3">
            {railItems.map((item) => (
              <button
                key={item.label}
                type="button"
                title={item.label}
                className={`relative grid w-full justify-items-center gap-2 rounded-2xl px-2 py-3 text-[11px] transition ${
                  item.active ? "bg-white/[0.12] text-white" : "text-white/[0.48] hover:bg-white/[0.08] hover:text-white/80"
                }`}
              >
                <span className="grid h-6 w-7 place-items-center rounded-md bg-white/[0.08] text-[12px] font-bold">
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.count ? (
                  <span className="absolute right-3 top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff795f] px-1 text-[10px] font-bold text-white">
                    {item.count}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>

          <div className="grid w-full gap-3 border-t border-white/[0.12] pt-5">
            <button className="grid justify-items-center gap-2 text-[11px] text-white/[0.48]">
              <span className="grid h-6 w-7 place-items-center rounded-md bg-white/[0.08] font-bold">P</span>
              Profile
            </button>
            <button className="grid justify-items-center gap-2 text-[11px] text-white/[0.48]">
              <span className="grid h-6 w-7 place-items-center rounded-md bg-white/[0.08] font-bold">E</span>
              Edit
            </button>
          </div>
        </aside>

        <section className="min-h-0 border-r border-[#ececf6] bg-white px-5 py-5">
          <label className="mb-5 flex h-11 items-center gap-3 rounded-xl bg-[#e6e4ff] px-4 text-[#77758f]">
            <span className="h-4 w-4 rounded-full border-2 border-[#77758f]" />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[#77758f]"
              placeholder="Search"
              type="text"
            />
          </label>

          <div className="themed-scrollbar grid max-h-[calc(100%-64px)] gap-3 overflow-y-auto pr-1">
            {chats.map((chat) => (
              <article
                key={chat.title}
                className={`grid grid-cols-[52px_minmax(0,1fr)] gap-3 rounded-2xl p-3 ${
                  chat.active ? "bg-[#eeeefe]" : "bg-transparent"
                }`}
              >
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${chat.accent} text-sm font-bold text-white`}>
                  {chat.avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="truncate text-[15px] font-extrabold text-[#191820]">{chat.title}</h2>
                    <span className="shrink-0 text-xs font-medium text-[#9b9aaa]">{chat.time}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2 text-sm">
                    <p className="truncate text-[#8b8999]">{chat.subtitle}</p>
                    {chat.unread ? (
                      <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#ff795f] px-1 text-[11px] font-bold text-white">
                        {chat.unread}
                      </span>
                    ) : chat.sent ? (
                      <span className="text-[#7770dd]">oo</span>
                    ) : (
                      <span className="text-[#7770dd]">pin</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] bg-[#fbfbfd]">
          <header className="flex items-center justify-between px-8 py-6">
            <div>
              <h1 className="text-3xl font-black tracking-normal text-[#111116]">Design chat</h1>
              <p className="mt-1 text-sm font-medium text-[#9a98a7]">23 members, 10 online</p>
            </div>
            <div className="flex items-center gap-4 text-[#8d8b99]">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-[#c9c8d6] text-lg">s</button>
              <button className="grid h-10 w-10 place-items-center rounded-full border border-[#c9c8d6] text-lg">p</button>
              <button className="grid h-10 w-10 place-items-center rounded-full text-2xl">...</button>
            </div>
          </header>

          <div className="themed-scrollbar min-h-0 overflow-y-auto px-8 pb-4">
            <div className="grid gap-4">
              <div className="flex items-end gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-slate-800 text-sm font-bold text-white">
                  JL
                </div>
                <div className="max-w-[360px] rounded-2xl rounded-bl-md bg-[#eeeefb] px-5 py-4">
                  <p className="text-sm font-extrabold text-[#655ac9]">Jasmin Lowery</p>
                  <p className="mt-1 text-sm leading-5">I added new flows to our design system. Now you can use them for your projects!</p>
                  <div className="mt-3 flex justify-between text-xs text-[#8e8ca0]">
                    <span>like 4</span>
                    <span>23 &nbsp; 09:20</span>
                  </div>
                </div>
              </div>

              <div className="ml-20 max-w-[260px] rounded-2xl bg-[#f0f0fc] px-5 py-4">
                <p className="text-sm font-extrabold text-[#655ac9]">Alex Hunt</p>
                <p className="mt-1 text-sm">Hey guys! Important news!</p>
                <div className="mt-3 text-right text-xs text-[#8e8ca0]">16 &nbsp; 09:24</div>
              </div>

              <div className="flex items-end gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-sky-300 to-slate-700 text-sm font-bold text-white">
                  AH
                </div>
                <div className="max-w-[470px] rounded-2xl rounded-bl-md bg-[#eeeefb] px-5 py-4">
                  <p className="text-sm font-extrabold text-[#655ac9]">Alex Hunt</p>
                  <p className="mt-1 text-sm leading-5">
                    Our intern @jchurch has successfully completed his probationary period and is now part of our team!
                  </p>
                  <div className="mt-3 flex justify-between text-xs text-[#8e8ca0]">
                    <span>fire 5 &nbsp; clap 4</span>
                    <span>16 &nbsp; 09:24</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[390px] rounded-2xl rounded-br-md bg-[#7068dd] px-5 py-4 text-white shadow-[0_14px_32px_rgba(112,104,221,0.22)]">
                  <p className="text-sm leading-5">
                    Jaden, my congratulations! I will be glad to work with you on a new project.
                  </p>
                  <div className="mt-3 text-right text-xs text-white/72">10 &nbsp; 09:27</div>
                </div>
              </div>

              <div className="ml-auto mr-24 grid w-[310px] overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="meeting-thumb relative h-[190px] rounded-2xl" />
                <div className="flex items-center gap-3 rounded-b-2xl bg-[#f0f0ff] p-4">
                  <button className="grid h-10 w-10 place-items-center rounded-full bg-[#7068dd] text-sm font-black text-white">&gt;</button>
                  <div className="flex flex-1 items-end gap-1">
                    {waves.map((height, index) => (
                      <span key={index} className="w-1 rounded-full bg-[#7d75e6]" style={{ height }} />
                    ))}
                  </div>
                  <span className="text-xs text-[#8e8ca0]">0:15</span>
                </div>
              </div>
            </div>
          </div>

          <footer className="px-8 pb-6">
            <div className="flex h-16 items-center gap-4 rounded-xl bg-[#eeeefe] px-5 text-[#78758d]">
              <button className="text-xl">@</button>
              <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#9a98a7]" placeholder="Your message" type="text" />
              <button className="text-xl">m</button>
              <button className="text-xl">send</button>
            </div>
          </footer>
        </section>

        <aside className="grid min-h-0 grid-rows-[auto_1fr] gap-4 border-l border-[#ececf6] bg-[#202024] p-0">
          <section className="rounded-bl-[28px] bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-black">Group Info</h2>
              <button className="text-xl text-[#88865a]">x</button>
            </div>
            <h3 className="mb-4 text-sm font-extrabold">Files</h3>
            <div className="grid gap-4">
              {fileStats.map(({ label, icon, open }) => (
                <div key={label} className="flex items-center justify-between text-sm font-bold">
                  <span className="flex items-center gap-3">
                    <span className="grid h-5 w-5 place-items-center rounded-md border border-[#1f1f28] text-[10px]">{icon}</span>
                    {label}
                  </span>
                  <span>{open ? "^" : "v"}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="media-photo-one h-20 rounded-xl" />
              <div className="media-photo-two h-20 rounded-xl" />
            </div>
          </section>

          <section className="min-h-0 overflow-hidden rounded-tl-[28px] bg-[#dedcff] p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-black">23 members</h2>
              <button className="text-xl text-[#66628b]">x</button>
            </div>
            <div className="themed-scrollbar grid max-h-full gap-4 overflow-y-auto pr-1">
              {members.map(([name, role, avatar, accent]) => (
                <div key={name} className="grid grid-cols-[44px_1fr_auto] items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${accent} text-xs font-bold text-white`}>
                    {avatar}
                  </div>
                  <span className="text-sm font-extrabold">{name}</span>
                  {role ? <span className="text-xs text-[#7b7895]">{role}</span> : null}
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
