"use client";

import { Send, Bot, User, Sparkles, Image as ImageIcon, Code, Settings, Plus } from "lucide-react";
import { useState } from "react";

export default function AiChatPreview() {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hello! I'm your generative AI assistant. How can I help you architect your next big idea today?" },
    { role: "user", content: "I need a high-performance landing page for a new AI startup. It needs to look futuristic." },
    { role: "ai", content: "I can absolutely help with that. I'll design a dark-mode landing page with glassmorphism effects, a glowing hero section, and smooth animations. Should we start with the hero section?" }
  ]);

  return (
    <div className="flex h-screen bg-[hsl(240,10%,4%)] text-[hsl(0,0%,98%)] font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-[hsl(240,10%,16%)] bg-[hsl(240,10%,6%)] flex flex-col">
        <div className="p-4 border-b border-[hsl(240,10%,16%)]">
          <button className="w-full flex items-center gap-2 justify-center py-2.5 bg-[hsl(190,90%,20%)] hover:bg-[hsl(190,90%,25%)] text-[hsl(190,90%,70%)] rounded-xl text-sm font-medium transition-colors border border-[hsl(190,90%,30%)]">
            <Plus className="w-4 h-4" /> New Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <div className="text-xs font-semibold text-[hsl(240,5%,45%)] px-3 pt-2 pb-1 uppercase tracking-wider">Today</div>
          <ChatHistoryItem title="Futuristic Landing Page" active={true} />
          <ChatHistoryItem title="React Server Components" />
          <ChatHistoryItem title="GraphQL vs REST" />
          
          <div className="text-xs font-semibold text-[hsl(240,5%,45%)] px-3 pt-6 pb-1 uppercase tracking-wider">Previous 7 Days</div>
          <ChatHistoryItem title="Python Data Pipeline" />
          <ChatHistoryItem title="Dockerizing Node App" />
        </div>
        <div className="p-4 border-t border-[hsl(240,10%,16%)]">
          <button className="flex items-center gap-3 text-sm text-[hsl(240,5%,65%)] hover:text-white transition-colors w-full p-2 rounded-lg hover:bg-[hsl(240,10%,10%)]">
            <Settings className="w-4 h-4" /> Settings
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]">
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(190,90%,50%)]/5 blur-[150px] rounded-full pointer-events-none" />

        {/* Chat Header */}
        <header className="h-16 border-b border-[hsl(240,10%,16%)]/50 backdrop-blur-md flex items-center px-6 sticky top-0 z-10">
          <h2 className="font-medium text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[hsl(190,90%,60%)]" /> Futuristic Landing Page
          </h2>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth relative z-10">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-4 max-w-3xl mx-auto ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'ai' ? 'bg-[hsl(190,90%,10%)] text-[hsl(190,90%,60%)] border border-[hsl(190,90%,20%)]' : 'bg-[hsl(240,10%,16%)] text-white'}`}>
                {m.role === 'ai' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>
              <div className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm max-w-[85%] ${
                m.role === 'user' 
                  ? 'bg-[hsl(190,90%,20%)] text-white rounded-tr-sm border border-[hsl(190,90%,30%)]' 
                  : 'bg-[hsl(240,10%,8%)] text-[hsl(0,0%,98%)] rounded-tl-sm border border-[hsl(240,10%,16%)]'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          <div className="flex gap-4 max-w-3xl mx-auto">
             <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[hsl(190,90%,10%)] text-[hsl(190,90%,60%)] border border-[hsl(190,90%,20%)]">
                <Bot className="w-4 h-4" />
             </div>
             <div className="p-4 rounded-2xl bg-[hsl(240,10%,8%)] border border-[hsl(240,10%,16%)] rounded-tl-sm flex items-center gap-1.5 w-16 h-12">
               <div className="w-2 h-2 rounded-full bg-[hsl(190,90%,60%)] animate-bounce" style={{ animationDelay: "0ms" }} />
               <div className="w-2 h-2 rounded-full bg-[hsl(190,90%,60%)] animate-bounce" style={{ animationDelay: "150ms" }} />
               <div className="w-2 h-2 rounded-full bg-[hsl(190,90%,60%)] animate-bounce" style={{ animationDelay: "300ms" }} />
             </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 max-w-4xl mx-auto w-full relative z-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[hsl(190,90%,60%)] to-[hsl(270,90%,60%)] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
            <div className="relative bg-[hsl(240,10%,8%)] border border-[hsl(240,10%,20%)] rounded-2xl flex items-end p-2 shadow-2xl">
              <div className="flex flex-col gap-2 px-2 pb-2">
                <button className="text-[hsl(240,5%,45%)] hover:text-white transition-colors p-1 rounded-md hover:bg-[hsl(240,10%,14%)]">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="text-[hsl(240,5%,45%)] hover:text-white transition-colors p-1 rounded-md hover:bg-[hsl(240,10%,14%)]">
                  <Code className="w-5 h-5" />
                </button>
              </div>
              <textarea 
                className="w-full bg-transparent text-white placeholder-[hsl(240,5%,45%)] resize-none outline-none max-h-48 min-h-[44px] py-3 px-2 text-[15px]" 
                placeholder="Ask me anything..."
                rows={1}
              />
              <button className="bg-[hsl(190,90%,50%)] hover:bg-[hsl(190,90%,40%)] text-white p-3 rounded-xl transition-all shadow-[0_0_15px_hsl(190,90%,50%/0.4)] mb-1 mr-1">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="text-center mt-3 text-xs text-[hsl(240,5%,45%)]">
            AI can make mistakes. Consider verifying critical information.
          </div>
        </div>
      </main>
    </div>
  );
}

function ChatHistoryItem({ title, active = false }: { title: string, active?: boolean }) {
  return (
    <button className={`w-full text-left px-3 py-2 rounded-lg text-sm truncate transition-colors ${
      active 
        ? 'bg-[hsl(240,10%,12%)] text-white font-medium' 
        : 'text-[hsl(240,5%,65%)] hover:bg-[hsl(240,10%,10%)] hover:text-[hsl(0,0%,98%)]'
    }`}>
      {title}
    </button>
  );
}
