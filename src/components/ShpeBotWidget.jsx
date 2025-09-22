// src/components/ShpeBotWidget.jsx

import React, { useEffect, useMemo, useRef, useState } from "react";
import faqsData from "../content/faqs.json";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch (err) {
      console.error("Error reading localStorage key", key, err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Error writing localStorage key", key, err);
    }
  }, [key, value]);

  return [value, setValue];
};

const scoreQuestion = (query, item) => {
  const q = query.toLowerCase().trim();
  const kw = (item.keywords || []).map(k => k.toLowerCase());
  let score = 0;
  kw.forEach(k => {
    if (q.includes(k)) score += 3;
  });
  const words = q.split(/\s+/).filter(Boolean);
  const hay = (item.q + " " + item.a + " " + kw.join(" ")).toLowerCase();
  words.forEach(w => {
    if (w.length > 3 && hay.includes(w)) score += 1;
  });
  return score;
};

const findBestMatches = (query, faqs, limit = 3) => {
  const ranked = faqs
    .map(it => ({ it, s: scoreQuestion(query, it) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, limit);

  const bestMatch = ranked.length > 0 && ranked[0].s > 0 ? ranked[0].it : null;
  const suggestions = ranked.map(r => r.it);
  return { best: bestMatch, suggestions };
};

const BotBubble = ({ children }) => (
  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm whitespace-pre-wrap">
    {children}
  </div>
);

const UserBubble = ({ children }) => (
  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-shpe-blue text-white px-3 py-2 text-sm whitespace-pre-wrap">
    {children}
  </div>
);

export default function ShpeBotWidget() {
  const [open, setOpen] = useLocalStorage("shpebot_open", false);
  const [messages, setMessages] = useLocalStorage("shpebot_chat", [
    {
      role: "bot",
      text: "Hi! I’m SHPEbot 🤖 Ask about joining, events, points, or sponsorships."
    }
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  const faqs = useMemo(() => faqsData, [faqsData]);

  // Focus input when opening
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Scroll to bottom whenever messages change or when dialog opens
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
      if ((e.altKey || e.metaKey) && e.key.toLowerCase() === "b") {
        setOpen(v => !v);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const ask = (overrideQ) => {
    const query = (overrideQ ?? input).trim();
    if (!query) return;

    setBusy(true);
    setMessages(prev => [...prev, { role: "user", text: query }]);
    setInput("");

    const { best, suggestions } = findBestMatches(query, faqs, 3);

    let reply;
    if (best) {
      reply = best.a;
      const followUps = suggestions
        .filter(s => s.q !== best.q)
        .map(s => `• ${s.q}`)
        .join("\n");
      if (followUps) {
        reply += `\n\nYou can also ask:\n${followUps}`;
      }
    } else {
      reply =
        "I couldn’t find that yet. Try keywords like “join”, “events”, “points”, or “sponsor”. You can also reach us via the Contact page or Discord.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: reply }]);
      setBusy(false);
    }, 200);  // small delay to simulate thinking
  };

  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        text: "Cleared. Ask about joining, events, points, or sponsorships."
      }
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open SHPEbot chat (Alt+B)"
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg ring-1 ring-black/5 bg-white dark:bg-slate-900 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <img
          src="/brand/shpe-logo.svg"
          alt="SHPE logo"
          className="h-8 w-8"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="SHPEbot chat"
          aria-modal="true"
          className="fixed bottom-20 right-4 z-50 w-[22rem] max-w-[95vw] rounded-2xl bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-black/10 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <img src="/favicon.ico" alt="SHPE" className="w-6 h-6" />
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">SHPEbot</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={clearChat}
                className="text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
                aria-label="Clear conversation"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
                aria-label="Close chat"
              >
                Close
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="px-3 py-3 flex flex-col gap-3 overflow-y-auto max-h-[55vh] bg-white dark:bg-slate-900"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "user" ? (
                  <UserBubble>{msg.text}</UserBubble>
                ) : (
                  <BotBubble>{msg.text}</BotBubble>
                )}
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <BotBubble>Typing…</BotBubble>
              </div>
            )}
          </div>

          {/* Input area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!busy) ask();
            }}
            className="px-3 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          >
            <label htmlFor="shpebot-input" className="sr-only">
              Type your question
            </label>
            <div className="flex items-center gap-2">
              <input
                id="shpebot-input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about join, events, points…"
                className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-shpe-blue"
                disabled={busy}
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="rounded-xl px-3 py-2 text-sm font-medium bg-shpe-blue text-white disabled:opacity-50 hover:opacity-90 focus:outline-none"
              >
                Send
              </button>
            </div>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Tip: <kbd className="px-1 border rounded">Alt</kbd>+<kbd className="px-1 border rounded">B</kbd> toggles chat.
            </p>
          </form>
        </div>
      )}
    </>
  );
}
