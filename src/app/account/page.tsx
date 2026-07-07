import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { LogOut, User, Zap } from "lucide-react";
import Link from "next/link";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("tier")
    .eq("id", user.id)
    .single();

  const tier = profile?.tier || "free";

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 bg-[#090909] relative overflow-hidden">
        {/* Ambient background blob */}
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white tracking-tight tracking-wide">my account</h1>
            <p className="text-white/60 mt-2 tracking-tight">manage your profile and subscription</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Profile Details */}
              <div className="p-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white backdrop-blur-md">
                    <User size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight tracking-wide">profile details</h2>
                    <p className="text-sm text-white/50 tracking-tight mt-1">your connected account info</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-white/40 tracking-tight tracking-widest mb-2">
                      email
                    </label>
                    <div className="px-4 py-3 bg-white/[0.03] rounded-xl border border-white/[0.08] text-sm text-white/90 tracking-tight">
                      {user.email}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/40 tracking-tight tracking-widest mb-2">
                      user id
                    </label>
                    <div className="px-4 py-3 bg-black/40 rounded-xl border border-white/10 text-xs text-white/40 font-mono">
                      {user.id}
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Plan */}
              <div className="p-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#b1ff62]/10 border border-[#b1ff62]/20 flex items-center justify-center text-[#b1ff62] backdrop-blur-md">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight tracking-wide">current plan</h2>
                      <p className="text-sm text-white/50 tracking-tight mt-1">your subscription status</p>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-[#b1ff62]/10 border border-[#b1ff62]/20 text-[#b1ff62] text-xs font-bold tracking-tight tracking-widest shadow-[0_0_15px_rgba(177,255,98,0.15)]">
                    {tier}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.08]">
                  {tier === "free" ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <p className="text-sm text-white/70 tracking-tight leading-relaxed">
                        you are on the free plan. upgrade to unlock all vibes and features.
                      </p>
                      <Link
                        href="/pricing"
                        className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold bg-[#b1ff62] hover:bg-[#8eff00] text-black transition-all shadow-[0_0_20px_rgba(177,255,98,0.2)] hover:shadow-[0_0_30px_rgba(177,255,98,0.3)] hover:-translate-y-0.5 tracking-tight tracking-wide"
                      >
                        upgrade plan
                      </Link>
                    </div>
                  ) : (
                    <p className="text-sm text-white/70 tracking-tight leading-relaxed">
                      you have full access to vibecraft features. thank you for your support!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar Actions */}
            <div className="space-y-4">
              <div className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
                <form action="/auth/signout" method="post">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-bold text-red-400 bg-red-400/5 hover:bg-red-400/10 border border-red-400/20 transition-all tracking-tight tracking-wide"
                  >
                    <LogOut size={18} />
                    sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
