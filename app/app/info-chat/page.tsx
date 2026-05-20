"use client";

import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function InfoChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "Hi! Welcome to The DBS Social Club. Ask me anything about memberships, events, classes, digital products, perks, or VIP access."
    }
  ]);

  const [input, setInput] = useState("");

  function getResponse(message: string) {
    const lower = message.toLowerCase();

    if (lower.includes("vip")) {
      return "VIP members receive access to exclusive digital products, priority invitations, classes, and special DBS Social Club experiences.";
    }

    if (lower.includes("event")) {
      return "Upcoming DBS Social Club events and RSVP experiences will appear in the Events tab.";
    }

    if (lower.includes("class")) {
      return "Digital classes and educational content will be available in the Products tab.";
    }

    if (lower.includes("member")) {
      return "Your membership includes access to community features, digital perks, and future DBS Social Club experiences.";
    }

    return "More live DBS Social Club AI support features can be connected here soon.";
  }

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      },
      {
        sender: "assistant",
        text: getResponse(userMessage)
      }
    ]);

    setInput("");
  }

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-[#d7b56d]">
          DBS Assistant
        </p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#f5efe3]">
          Information Chat
        </h1>

        <p className="mt-4 text-sm leading-7 text-white/65">
          Ask questions and get quick information about The DBS Social Club,
          events, classes, perks, memberships, and more.
        </p>
      </div>

      <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-1">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[85%] rounded-[1.5rem] px-5 py-4 text-sm leading-7 shadow-xl ${
              message.sender === "assistant"
                ? "bg-[#f5efe3] text-[#07172f]"
                : "ml-auto bg-[#8f1d2c]/30 text-[#f5efe3]"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-[2rem] border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
        <MessageCircle className="h-5 w-5 text-white/40" />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about events, perks, products, classes..."
          className="flex-1 bg-transparent text-sm text-[#f5efe3] outline-none placeholder:text-white/40"
        />

        <button
          onClick={sendMessage}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5efe3] text-[#07172f]"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
