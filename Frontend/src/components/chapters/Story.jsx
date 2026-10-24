import { ChapterLabel, FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { Code2, Lightbulb, Rocket, BookOpen } from 'lucide-react';

const traits = [
  {
    icon: Code2,
    title: 'Code is Communication',
    desc: "I believe clean code is a form of craftsmanship. When someone reads my code, I want them to understand not just what it does — but why it's written that way.",
    color: 'text-neon-indigo',
    bg: 'bg-neon-indigo/10',
  },
  {
    icon: Lightbulb,
    title: 'Problem-First Thinking',
    desc: "Before writing a single line, I ask: what problem am I solving? Every feature, every API route, every component decision starts with the user's actual need.",
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: Rocket,
    title: 'Ship, Then Refine',
    desc: 'Perfection is the enemy of progress. I ship working software, gather real feedback, then iterate. Done is better than perfect — but great is better than both.',
    color: 'text-neon-cyan',
    bg: 'bg-neon-cyan/10',
  },
  {
    icon: BookOpen,
    title: 'Always Learning',
    desc: "The tech world moves fast, and I move with it. Every project is an opportunity to learn something new — whether it's a new library, pattern, or problem domain.",
    color: 'text-neon-violet',
    bg: 'bg-neon-violet/10',
  },
];

// Timeline-style story narrative
const storyBeats = [
  {
    year: 'The Spark',
    text: "It started with curiosity — a simple HTML page that actually worked in a browser. That moment of 'I made something real' changed everything.",
  },
  {
    year: 'The Build',
    text: "JavaScript clicked. Then React. Then the server. Each layer unlocked another dimension of what was possible — and I wanted to explore all of them.",
  },
  {
    year: 'The Craft',
    text: "I stopped building tutorials and started building products. Wanderlust. Cloudbase. This portfolio. Real problems, real users, real feedback.",
  },
  {
    year: 'Now',
    text: "I'm a full-stack developer who cares about both the pixels on screen and the database behind them. Looking for a team that builds things that matter.",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl bg-neon-indigo pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: narrative */}
          <div>
            <FadeUp>
              <ChapterLabel number="01" label="Who I Am" />
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Not just a developer.{' '}
                <span className="gradient-text">A builder.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
                I'm Zeel — a Full Stack Developer who finds genuine joy in the process of building.
                Not just in the finished product, but in the architecture decisions, the debugging sessions,
                and the moment when something finally clicks.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                My stack is the MERN ecosystem, but my real skill is thinking in systems.
                How does the frontend need to feel? What does the API contract look like?
                How does the database schema affect query performance? I think in full stack.
              </p>
            </FadeUp>

            {/* Story beats */}
            <div className="space-y-0">
              {storyBeats.map((beat, i) => (
                <FadeUp key={beat.year} delay={i * 0.1}>
                  <div className="flex gap-4 group">
                    {/* Timeline connector */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-neon-indigo/50 bg-void group-hover:border-neon-indigo group-hover:bg-neon-indigo transition-all duration-300 mt-1.5 shrink-0" />
                      {i < storyBeats.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-neon-indigo/20 to-transparent my-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="font-mono text-xs text-neon-indigo/60 mb-1 uppercase tracking-widest">{beat.year}</div>
                      <p className="text-slate-400 leading-relaxed">{beat.text}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right: How I Think cards */}
          <div>
            <FadeUp delay={0.1}>
              <ChapterLabel number="02" label="How I Think" />
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-10">
                Principles that{' '}
                <span className="gradient-text">guide my work.</span>
              </h2>
            </FadeUp>

            <StaggerChildren className="grid gap-4" stagger={0.1}>
              {traits.map((trait) => {
                const Icon = trait.icon;
                return (
                  <StaggerItem key={trait.title}>
                    <div className="glass-card glass-card-hover rounded-2xl p-5 flex gap-4">
                      <div className={`w-10 h-10 rounded-xl ${trait.bg} flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={trait.color} />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white text-sm mb-1">{trait.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{trait.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            {/* Fun developer fact */}
            <FadeUp delay={0.5}>
              <div className="mt-6 p-4 rounded-xl border border-white/5 bg-white/2">
                <div className="font-mono text-xs text-slate-600 mb-2">// fun_fact.json</div>
                <div className="font-mono text-sm text-slate-400">
                  <span className="text-neon-violet">{`{`}</span>
                  <br />
                  <span className="ml-4 text-neon-cyan">"languages"</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-green-400">"JavaScript (human: English, code: coffee)"</span>
                  <span className="text-slate-500">,</span>
                  <br />
                  <span className="ml-4 text-neon-cyan">"debug_method"</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-green-400">"console.log everything"</span>
                  <span className="text-slate-500">,</span>
                  <br />
                  <span className="ml-4 text-neon-cyan">"status"</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-yellow-400">"open_to_work"</span>
                  <br />
                  <span className="text-neon-violet">{`}`}</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
