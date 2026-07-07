import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { FileText, FolderOpen, Lightbulb } from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[#090909] min-h-screen relative overflow-hidden">
        {/* Ambient background blobs */}
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] bg-[#b1ff62]/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 tracking-tight">
            documentation
          </h1>
          <p className="text-white/60 mb-12 text-lg tracking-tight">
            learn how to use vibecraft-generated files with your ai coding assistant.
          </p>

          {/* Cursor */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-[1rem] bg-white/[0.05] border border-white/[0.1] flex items-center justify-center backdrop-blur-md">
                <DynamicIcon name="simple-icons:cursor" size={24} className="text-[#b1ff62]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight tracking-wide">
                cursor ide
              </h2>
            </div>
            <div className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl space-y-4">
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">1.</strong> generate your file and download{" "}
                <code className="px-2 py-1 rounded-lg bg-white/5 text-white/90 text-xs font-mono border border-white/10">
                  .cursorrules
                </code>
              </p>
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">2.</strong> place the file in your project root directory:
              </p>
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-xs text-white/60">
                <div className="flex items-center gap-3">
                  <FolderOpen size={16} className="text-[#b1ff62]/70" />
                  <span>my-project/</span>
                </div>
                <div className="ml-7 flex items-center gap-3 mt-2">
                  <FileText size={16} className="text-[#b1ff62]" />
                  <span className="text-[#b1ff62]">.cursorrules</span>
                  <span className="text-white/30 tracking-tight">← place here</span>
                </div>
                <div className="ml-7 flex items-center gap-3 mt-2 text-white/40">
                  <FolderOpen size={16} />
                  <span>src/</span>
                </div>
                <div className="ml-7 flex items-center gap-3 mt-2 text-white/40">
                  <FileText size={16} />
                  <span>package.json</span>
                </div>
              </div>
              <p className="text-sm text-white/60 tracking-tight pt-2">
                <strong className="text-[#b1ff62]">3.</strong> cursor will automatically read the rules and apply them to all ai-generated code.
              </p>
            </div>
          </section>

          {/* Windsurf */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-[1rem] bg-white/[0.05] border border-white/[0.1] flex items-center justify-center backdrop-blur-md">
                <DynamicIcon name="simple-icons:windsurf" size={24} className="text-[#b1ff62]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight tracking-wide">
                windsurf
              </h2>
            </div>
            <div className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl space-y-4">
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">1.</strong> generate your file and download{" "}
                <code className="px-2 py-1 rounded-lg bg-white/5 text-white/90 text-xs font-mono border border-white/10">
                  AGENTS.md
                </code>
              </p>
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">2.</strong> place in your project root or in{" "}
                <code className="px-2 py-1 rounded-lg bg-white/5 text-white/90 text-xs font-mono border border-white/10">
                  .agents/
                </code>{" "}
                directory.
              </p>
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">3.</strong> windsurf&apos;s cascade will read the file and follow the rules automatically.
              </p>
            </div>
          </section>

          {/* Claude Code */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-[1rem] bg-white/[0.05] border border-white/[0.1] flex items-center justify-center backdrop-blur-md">
                <DynamicIcon name="simple-icons:anthropic" size={24} className="text-[#b1ff62]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight tracking-wide">
                claude code
              </h2>
            </div>
            <div className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl space-y-4">
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">1.</strong> generate your file and download{" "}
                <code className="px-2 py-1 rounded-lg bg-white/5 text-white/90 text-xs font-mono border border-white/10">
                  CLAUDE.md
                </code>
              </p>
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">2.</strong> place in your project root. claude code reads it automatically on session start.
              </p>
              <p className="text-sm text-white/60 tracking-tight">
                <strong className="text-[#b1ff62]">3.</strong> for global rules, place in{" "}
                <code className="px-2 py-1 rounded-lg bg-white/5 text-white/90 text-xs font-mono border border-white/10">
                  ~/.claude/CLAUDE.md
                </code>
              </p>
            </div>
          </section>

          {/* Tips */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight tracking-wide flex items-center gap-3">
              <Lightbulb size={24} className="text-[#b1ff62]" /> tips for best results
            </h2>
            <div className="space-y-4">
              {[
                "keep only one vibe pack active per project for consistency.",
                "combine vibecraft with your own project-specific rules — just append them to the same file.",
                "re-generate your rules when upgrading your tech stack version.",
                "use the anti-hallucination rules to prevent ai from adding random packages.",
                "start with a free vibe to test, then upgrade to pro for premium design systems.",
              ].map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-[#b1ff62] font-bold text-base mt-0.5 tracking-tight">
                    {i + 1}.
                  </span>
                  <p className="text-sm text-white/70 tracking-tight leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
