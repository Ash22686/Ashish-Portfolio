import React, { useState } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const email = "ashishkumar04415@gmail.com";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashish-kumar-457932314/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Ash22686",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ashish_k22",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "Twitter / X",
    url: "#",
    icon: <Twitter className="w-5 h-5" />,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HERO ================= */}
        <div className="mb-24 md:mb-32">
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] leading-none font-black uppercase tracking-tight">
            LET'S TALK
          </h1>

          <p className="mt-8 md:mt-10 max-w-3xl text-lg md:text-2xl text-zinc-400 leading-relaxed">
            Have a project in mind? Let's create something{" "}
            <span className="text-white font-semibold">
              worth remembering
            </span>.
          </p>
        </div>

        {/* ================= TWO COLUMN LAYOUT ================= */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-32 mb-24 md:mb-32">
          {/* LEFT: EMAIL */}
          <div className="flex flex-col justify-center">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
              Drop me a line
            </span>

            <a
              href={`mailto:${email}`}
              className="block text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight hover:text-zinc-400 transition-colors mb-8"
            >
              {email}
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all w-fit"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy Email"}
            </button>
          </div>

          {/* RIGHT: SOCIAL LINKS */}
          <div className="flex flex-col justify-center">
            <span className="block mb-6 text-xs font-mono uppercase tracking-widest text-zinc-500">
              Connect Elsewhere
            </span>

            <div className="space-y-1">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-zinc-800 hover:border-white transition-all"
                >
                  <span className="text-xl font-semibold group-hover:translate-x-1 transition-transform">
                    {social.name}
                  </span>

                  <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    {social.icon}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs font-mono uppercase tracking-widest gap-4">
          <span>
            Local Time{" "}
            {new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}{" "}
            IST
          </span>
          <span>© 2025 Ashish Kumar</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;