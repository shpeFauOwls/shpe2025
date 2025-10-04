// src/components/ShpeBotWidget.jsx

import React, { useEffect, useMemo, useRef, useState } from "react";
import faqsData from "../content/faqs.json";

/** --- CONFIG: update if your icon lives elsewhere --- */
const BOT_ICON = "/images/brand/shpe-bot.svg"; // reliable public path

/** --- localStorage hook --- */
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);
  return [value, setValue];
};

/** --- matching helpers: keyword + overlap + tiny fuzzy --- */
const norm = (s) => s.toLowerCase().trim();
const words = (s) => norm(s).split(/\s+/).filter(Boolean);
const scoreItem = (query, item) => {
  const q = norm(query);
  const hay = norm([item.q, item.a, ...(item.keywords || [])].join(" "));
  let score = 0;

  // exact keyword hits
  for (const kw of item.keywords || []) if (q.includes(norm(kw))) score += 3;

  // token overlap (ignore very short tokens)
  for (const w of words(q)) if (w.length > 3 && hay.includes(w)) score += 1;

  // tiny fuzzy: contiguous bigrams
  const bigrams = q
    .replace(/\s+/g, " ")
    .split("")
    .map((c, i, arr) => (i < arr.length - 1 ? c + arr[i + 1] : null))
    .filter(Boolean);
  for (const bg of bigrams) if (bg.length > 1 && hay.includes(bg)) score += 0.2;

  return score;
};
const findBest = (query, faqs, limit = 4) => {
  const ranked = faqs
    .map((it) => ({ it, s: scoreItem(query, it) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, limit);
  const best = ranked[0]?.s > 0 ? ranked[0].it : null;
  return { best, suggestions: ranked.map((r) => r.it) };
};

/** --- bubbles (light theme only) --- */
const BotBubble = ({ children }) => (
  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2 text-sm whitespace-pre-wrap">
    {children}
  </div>
);
const UserBubble = ({ children }) => (
  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-shpe-blue text-white px-3 py-2 text-sm">
    {children}
  </div>
);

/** --- quick replies --- */
const QUICK = [
  "How do I join?",
  "When are meetings?",
  "Discord / WhatsApp links?",
  "How do points work?",
];

export default function ShpeBotWidget() {
  const [open, setOpen] = useLocalStorage("shpebot_open", false);
  const [messages, setMessages] = useLocalStorage("shpebot_chat", [
    {
      role: "bot",
      text:
        "Hi! I’m SHPEbot 🤖 Ask about joining, events, points, sponsors, or Discord/WhatsApp.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [iconOk, setIconOk] = useState(true);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const faqs = useMemo(() => faqsData, []);

  // focus input on open
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  // autoscroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // keyboard: Esc closes; Alt/Ctrl/Meta+B toggles
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key?.toLowerCase();
      if (k === "escape" && open) setOpen(false);
      if ((e.altKey || e.metaKey || e.ctrlKey) && k === "b")
        setOpen((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = (q) => {
    const query = (q ?? input).trim();
    if (!query) return;
    setBusy(true);
    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setInput("");

    const { best, suggestions } = findBest(query, faqs, 4);
    let reply;
    if (best) {
      reply = best.a;
      const followUps = suggestions
        .filter((s) => s.q !== best.q)
        .map((s) => `• ${s.q}`)
        .join("\n");
      if (followUps) reply += `\n\nYou can also ask:\n${followUps}`;
    } else {
      reply =
        "I couldn’t find that yet. Try keywords like “join”, “events”, “points”, “sponsor”, or “discord”. You can also reach us via the Contact page.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setBusy(false);
    }, 120);
  };

  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        text:
          "Cleared. Ask about joining, events, points, sponsors, or Discord/WhatsApp.",
      },
    ]);
  };

  return (
    <>
      {/* Floating Button — bottom-right, on all pages */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open SHPEbot chat (Alt/⌘/Ctrl + B)"
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg ring-1 ring-black/5 bg-white flex items-center justify-center hover:scale-105 transition"
      >
        {iconOk ? (
          <img
            src={BOT_ICON}
            alt="SHPEbot"
            className="h-8 w-8"
            onError={() => setIconOk(false)}
          />
        ) : (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-shpe-blue text-white text-xs font-bold">
            SH
          </span>
        )}
      </button>

      {/* Dialog: fixed size; internal scroll for messages */}
      {open && (
        <div
          role="dialog"
          aria-label="SHPEbot chat"
          aria-modal="true"
          className="fixed bottom-20 right-4 z-50 w-[22rem] sm:w-[24rem] max-w-[95vw] h-[520px] sm:h-[560px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              {iconOk ? (
                <img
                  src={BOT_ICON}
                  alt=""
                  className="h-5 w-5"
                  onError={() => setIconOk(false)}
                />
              ) : (
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-shpe-blue text-white text-[10px] font-bold">
                  SH
                </span>
              )}
              <span className="text-sm font-semibold">SHPEbot</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-xs px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200"
                aria-label="Clear conversation"
              >
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-xs px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200"
                aria-label="Close chat"
              >
                Close
              </button>
            </div>
          </div>

          {/* Messages (scrollable, fills remaining space) */}
          <div
            ref={scrollRef}
            className="px-3 py-3 flex-1 overflow-y-auto flex flex-col gap-3 min-h-0"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "user" ? (
                  <UserBubble>{m.text}</UserBubble>
                ) : (
                  <BotBubble>{m.text}</BotBubble>
                )}
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <BotBubble>Typing…</BotBubble>
              </div>
            )}
          </div>

          {/* Quick Replies (fixed block; doesn’t push messages) */}
          <div className="px-3 pb-2 flex flex-wrap gap-2 shrink-0">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => ask(q)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs hover:bg-slate-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input (fixed at bottom) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask();
            }}
            className="p-3 border-t border-slate-200 shrink-0"
          >
            <label htmlFor="shpebot-input" className="sr-only">
              Type your question
            </label>
            <div className="flex items-center gap-2">
              <input
                id="shpebot-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about join, events, points…"
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 ring-shpe-blue"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="rounded-xl px-3 py-2 text-sm font-medium bg-shpe-blue text-white disabled:opacity-50 hover:opacity-90"
              >
                Send
              </button>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Tip: <kbd className="px-1 border rounded">Alt/⌘/Ctrl</kbd>+
              <kbd className="px-1 border rounded">B</kbd> toggles chat.
            </p>
          </form>
        </div>
      )}
    </>
  );
}