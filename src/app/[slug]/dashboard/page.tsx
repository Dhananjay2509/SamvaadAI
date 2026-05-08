const chats = [
  {
    title: 'Maya Lee',
    subtitle: 'Sent the project update',
    time: '11:24',
    avatar: 'ML',
    unread: 3,
    active: true,
  },
  {
    title: 'Team Design',
    subtitle: 'New storyboards are ready',
    time: '09:12',
    avatar: 'TD',
    unread: 1,
  },
  {
    title: 'Dad',
    subtitle: 'Check the recipe I sent',
    time: 'Yesterday',
    avatar: 'D',
  },
  {
    title: 'Sophie 🔥',
    subtitle: 'Let us catch up tonight?',
    time: 'Mon',
    avatar: 'S',
    unread: 2,
  },
];

const messages = [
  {
    type: 'incoming',
    text: 'Hey! I just finished the new onboarding flow design. Want to review it together before the standup?',
    time: '09:15',
  },
  {
    type: 'outgoing',
    text: 'Looks great. I love the micro animations and the dark theme consistency.',
    time: '09:18',
  },
  {
    type: 'incoming',
    reply: 'Can you share the link to the mockups?',
    text: 'Sure, I attached the latest screens with mobile and desktop layouts.',
    time: '09:20',
  },
  {
    type: 'outgoing',
    attachment: true,
    fileName: 'onboarding_flow.sketch',
    fileSize: '2.4 MB',
    time: '09:22',
  },
  {
    type: 'outgoing',
    text: 'When you have a sec, I also added the voice note summary for the new feature idea.',
    time: '09:27',
  },
];

export default function Dashboard() {
  return (
    <div className="h-[100svh] overflow-hidden grid grid-cols-[280px_minmax(0,1fr)_300px] gap-4 p-4 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%),#070d18]">
      <aside className="min-h-0 overflow-hidden flex flex-col gap-4 rounded-[24px] bg-white/5 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-[20px] p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-500 text-white text-lg font-bold shadow-sm shadow-sky-500/20">A</div>
            <div className="grid gap-1">
              <span className="text-white font-semibold">Alex Morgan</span>
              <span className="text-slate-400 text-sm">Active 2 min ago</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10 text-slate-200">⋮</button>
            <button className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10 text-slate-200">✚</button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
            <span>🔍</span>
            <input className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" type="text" placeholder="Search chats, messages, or contacts" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-[18px] bg-gradient-to-br from-sky-500/15 to-emerald-500/10 text-white font-semibold py-2 text-sm text-center">Chats</div>
            <div className="rounded-[18px] bg-white/5 text-slate-400 font-semibold py-2 text-sm text-center">Status</div>
            <div className="rounded-[18px] bg-white/5 text-slate-400 font-semibold py-2 text-sm text-center">Calls</div>
          </div>
        </div>

        <div className="min-h-0 grid gap-3 overflow-hidden">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-white text-base font-semibold">Pinned</h2>
            <span className="text-slate-400 text-sm">4</span>
          </div>
          <div className="grid gap-2 overflow-hidden">
            {chats.map((chat) => (
              <div key={chat.title} className={`grid grid-cols-[auto_1fr] gap-3 rounded-[20px] border border-transparent bg-white/5 p-3 transition hover:border-white/15 hover:-translate-y-0.5 ${chat.active ? 'bg-gradient-to-r from-sky-500/15 to-emerald-500/10 border-sky-400/20' : ''}`}>
                <div className="grid h-11 w-11 place-items-center rounded-[16px] bg-gradient-to-br from-sky-400 to-blue-600 text-white font-bold">{chat.avatar}</div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white font-semibold text-sm">{chat.title}</span>
                    <span className="text-slate-400 text-xs">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-slate-300 text-sm">
                    <span className="truncate">{chat.subtitle}</span>
                    {chat.unread ? <span className="min-w-[22px] h-5 rounded-full bg-emerald-500 text-[0.7rem] font-semibold text-white grid place-items-center">{chat.unread}</span> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="min-h-0 grid grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-[24px] bg-white/5 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-[20px]">
        <header className="flex items-center justify-between gap-5 border-b border-white/10 p-4">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-[18px] bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-xl font-black">ML</div>
            <div className="grid gap-1">
              <h1 className="text-white text-lg font-semibold">Maya Lee</h1>
              <p className="text-slate-400 text-sm">Online · Typing...</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10 text-slate-200">📞</button>
            <button className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10 text-slate-200">🎥</button>
            <button className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10 text-slate-200">⋯</button>
          </div>
        </header>

        <section className="themed-scrollbar min-h-0 space-y-4 overflow-y-auto p-4">
          <div className="mx-auto w-fit rounded-full bg-white/5 px-4 py-2 text-slate-400 text-xs">Today</div>
          {messages.map((message, index) => {
            const incoming = message.type === 'incoming';
            return (
              <div key={`${message.time}-${index}`} className={`flex ${incoming ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[76%] rounded-[24px] p-4 text-sm leading-6 ${incoming ? 'bg-white/5 text-slate-200 rounded-tl-none' : 'bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-white rounded-tr-none'}`}>
                  {message.reply ? (
                    <div className="mb-3 rounded-2xl border-l-4 border-sky-400/80 bg-white/5 p-3 text-slate-400 text-xs">
                      <span className="block text-[11px] uppercase tracking-[0.16em]">Replying to earlier message</span>
                      <strong className="block text-slate-100 mt-1">{message.reply}</strong>
                    </div>
                  ) : null}
                  {message.attachment ? (
                    <div className="rounded-[20px] border border-white/10 bg-white/5 overflow-hidden">
                      <div className="grid grid-cols-[160px_minmax(0,1fr)]">
                        <div className="flex h-28 items-center justify-center bg-gradient-to-br from-sky-500 to-emerald-500 text-white font-semibold">Preview</div>
                        <div className="p-4 text-slate-300">
                          <strong className="text-white block">{message.fileName}</strong>
                          <p className="mt-1 text-sm text-slate-400">{message.fileSize} · Sketch file</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>{message.text}</p>
                  )}
                  <div className="mt-3 flex items-center justify-between text-[0.72rem] text-slate-400">
                    <span>{message.time}</span>
                    {message.type === 'outgoing' ? <span>✓✓</span> : <span />}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <footer className="flex items-center gap-4 border-t border-white/10 p-4">
          <div className="flex flex-1 items-center gap-3 rounded-[26px] border border-white/10 bg-white/5 px-4 py-2">
            <button className="text-xl">😊</button>
            <input className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" type="text" placeholder="Type a message" />
            <button className="text-xl">📎</button>
            <button className="text-xl">📷</button>
          </div>
          <button className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white text-xl">🎤</button>
        </footer>
      </main>

      <section className="min-h-0 overflow-hidden grid gap-3 rounded-[24px] bg-white/5 border border-white/10 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-[20px]">
        <h2 className="text-white text-base font-semibold">Chat details</h2>

        <div className="grid gap-2 text-slate-300">
          <div className="flex items-center justify-between text-sm">
            <span>Contact</span>
            <strong className="text-white">Maya Lee</strong>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Phone</span>
            <strong className="text-white">+1 415 555 0198</strong>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Last seen</span>
            <strong className="text-white">Online now</strong>
          </div>
        </div>

        <div className="grid gap-3">
          <h2 className="text-white text-base font-semibold">About</h2>
          <p className="rounded-[18px] bg-white/5 px-4 py-2 text-slate-300">Dream builder · Product designer · Coffee lover</p>
        </div>

        <div className="grid gap-3">
          <h2 className="text-white text-base font-semibold">Shared media</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex h-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-600 to-emerald-600 text-white uppercase tracking-[0.08em] text-xs font-semibold">Design</div>
            <div className="flex h-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-600 to-emerald-600 text-white uppercase tracking-[0.08em] text-xs font-semibold">Wireframe</div>
            <div className="flex h-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-600 to-emerald-600 text-white uppercase tracking-[0.08em] text-xs font-semibold">Brand</div>
            <div className="flex h-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-600 to-emerald-600 text-white uppercase tracking-[0.08em] text-xs font-semibold">Notes</div>
          </div>
        </div>

        <div className="grid gap-3">
          <h2 className="text-white text-base font-semibold">Quick actions</h2>
          <div className="grid gap-3">
            <div className="flex items-center justify-between rounded-[18px] border border-white/10 bg-white/5 px-4 py-2 text-white">
              <span>New group</span>
              <small className="text-slate-400">Create a group chat</small>
            </div>
            <div className="flex items-center justify-between rounded-[18px] border border-white/10 bg-white/5 px-4 py-2 text-white">
              <span>Starred messages</span>
              <small className="text-slate-400">Review favorite content</small>
            </div>
            <div className="flex items-center justify-between rounded-[18px] border border-white/10 bg-white/5 px-4 py-2 text-white">
              <span>Mute notifications</span>
              <small className="text-slate-400">Silence this chat</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
