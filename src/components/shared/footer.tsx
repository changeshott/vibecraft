import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] relative">
      {/* Subtle ambient light from bottom */}
      <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-50" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col group">
              <span className="tracking-tight text-2xl font-bold tracking-tight text-white group-hover:opacity-80 transition-opacity">
                vibecraft
              </span>
              <span className="text-sm text-white/40 tracking-tight -mt-1 group-hover:opacity-80 transition-opacity">
                by changeshott
              </span>
            </Link>
            <p className="mt-6 text-sm text-white/50 max-w-md leading-relaxed tracking-tight">
              generate ai system instructions that transform your coding
              assistant&apos;s design output. stop shipping ugly ai-generated uis.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 tracking-tight tracking-wide">
              product
            </h3>
            <ul className="space-y-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#b1ff62] transition-colors tracking-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 tracking-tight tracking-wide">
              connect
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-[#b1ff62] transition-colors tracking-tight"
                >
                  twitter / x
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-[#b1ff62] transition-colors tracking-tight"
                >
                  github
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 tracking-tight">
            &copy; {currentYear} vibecraft by changeshott. all rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5 tracking-tight">
            made with <Heart size={12} className="text-[#b1ff62] fill-[#b1ff62]/50" /> for developers who care about design
          </p>
        </div>
      </div>
    </footer>
  );
}
