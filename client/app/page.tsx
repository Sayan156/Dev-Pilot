import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Code2, FolderGit2, GitBranch, LockKeyhole, MessageSquareCode, Sparkles, Terminal } from "lucide-react";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import landingMark from "@/components/icons/logo1.png";
import { cn } from "@/lib/utils";
import { getGithubLoginUrl } from "@/lib/api";

const features = [
  { icon: FolderGit2, title: "Bring your repos", body: "Connect GitHub in seconds, including private repositories." },
  { icon: Sparkles, title: "Index the context", body: "Turn your codebase into a searchable source of truth." },
  { icon: MessageSquareCode, title: "Ask with confidence", body: "Get grounded answers with citations back to your code." },
];

export default function HomePage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,oklch(from_var(--primary)_l_c_h/0.16),transparent_32%),radial-gradient(circle_at_90%_26%,oklch(0.75_0.12_175/0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/40" />
      <header className="relative z-10 mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" aria-label="DevPilot home" className="flex shrink-0 items-center gap-2.5">
          <Image
            src={landingMark}
            alt=""
            width={64}
            height={64}
            aria-hidden="true"
            className="size-14 object-contain sm:size-16"
          />
            <span className="font-heading text-[1.65rem] font-semibold tracking-[-0.05em] text-foreground dark:text-white">
            DevPilot
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="#how-it-works" className="hidden px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">How it works</Link>
          <ModeToggle />
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>Sign in</Link>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 pb-14 pt-14 lg:px-8 lg:pt-24">
        <section className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary shadow-sm">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>
              Your codebase, finally conversational
            </div>
            <h1 className="max-w-2xl font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">Your code has answers. Start asking better questions.</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground text-pretty">Turn your GitHub repositories into an intelligent teammate that can trace decisions, explain unfamiliar code, and point you to the exact source.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={getGithubLoginUrl()} className={cn(buttonVariants({ size: "lg" }), "h-11 gap-2 rounded-xl px-5 shadow-lg shadow-primary/20")}><FolderGit2 className="size-4" />Continue with GitHub<ArrowRight className="size-4" /></a>
              <Link href="#how-it-works" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 rounded-xl bg-background/60 px-5")}>See how it works</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-primary" />No setup maze</span><span className="inline-flex items-center gap-1.5"><LockKeyhole className="size-3.5 text-primary" />Private by default</span></div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-border/70 px-4 py-3"><div className="flex items-center gap-2"><div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-rose-400/80" /><span className="size-2.5 rounded-full bg-amber-400/80" /><span className="size-2.5 rounded-full bg-emerald-400/80" /></div><span className="ml-2 text-xs text-muted-foreground">devpilot / workspace</span></div><span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400"><span className="size-1.5 rounded-full bg-current" />Indexed</span></div>
              <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
                <div className="border-b border-border/70 bg-muted/20 p-4 md:border-r md:border-b-0"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Repositories</p><div className="space-y-1.5">{[["devpilot-api", true], ["web-platform", false], ["mobile-client", false]].map(([name, active]) => <div key={name as string} className={cn("flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs", active ? "bg-primary/12 text-foreground" : "text-muted-foreground")}><GitBranch className="size-3.5" /><span className="min-w-0 flex-1 truncate">{name}</span><span className="size-1.5 rounded-full bg-emerald-500" /></div>)}</div><div className="mt-8 rounded-lg border border-dashed border-border p-3"><p className="text-[10px] text-muted-foreground">Indexed context</p><p className="mt-1 font-heading text-lg font-semibold">24,891</p><p className="text-[10px] text-muted-foreground">code chunks ready to search</p></div></div>
                <div className="flex min-h-[280px] flex-col justify-between p-5"><div><div className="mb-5 flex items-center gap-2 text-xs text-muted-foreground"><MessageSquareCode className="size-4 text-primary" />Ask your codebase</div><div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm leading-6 text-primary-foreground shadow-sm">Where do we handle expired sessions?</div><div className="mt-4 max-w-[94%] rounded-2xl rounded-tl-sm border bg-muted/45 px-4 py-3 text-sm leading-6">Session expiry is handled by <span className="font-medium text-primary">refreshSession()</span> in the auth service. It refreshes the token before retrying the original request.<div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground"><Code2 className="size-3.5" />auth/session.ts · lines 42–68</div></div></div><div className="mt-6 flex items-center gap-2 rounded-xl border bg-background/80 px-3 py-2.5 text-xs text-muted-foreground shadow-sm"><Terminal className="size-3.5" /><span className="flex-1">Ask about your repository…</span><ArrowRight className="size-3.5 text-primary" /></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20"><div className="mb-7"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">A shorter path to context</p><h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">From repository to answer in minutes.</h2></div><div className="grid gap-4 md:grid-cols-3">{features.map((item, index) => <div key={item.title} className="group rounded-2xl border border-border/80 bg-card/65 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"><div className="mb-8 flex items-center justify-between"><div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><item.icon className="size-5" /></div><span className="font-heading text-sm text-muted-foreground/60">0{index + 1}</span></div><h3 className="font-medium">{item.title}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.body}</p></div>)}</div></section>
      </main>
      <footer className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between border-t px-5 py-6 text-xs text-muted-foreground lg:px-8"><div className="flex items-center gap-2"><Image src={landingMark} alt="" aria-hidden="true" width={28} height={28} className="size-7 object-contain" /><span className="font-medium text-foreground dark:text-white">DevPilot</span></div><span>Built for the way developers think.</span></footer>
    </div>
  );
}
