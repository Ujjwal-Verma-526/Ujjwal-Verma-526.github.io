import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail } from 'lucide-react';
import PillNav from './components/PillNav';
import TargetCursor from './components/TargetCursor';
import { GithubIcon, LinkedinIcon } from './components/BrandIcons';
import logo from './assets/logo.svg';
import portrait from './assets/portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Now', href: '#now' },
  { label: 'Contact', href: '#contact' },
];

const SKILLS = ['C', 'Python', 'C++', 'MATLAB', 'CAD/CAM'];

const NOW = [
  'Working through FEA & CFD fundamentals',
  'Sharpening C++ and Python for simulation work',
  'Building an ME-domain chatbot — FastAPI backend, deploying to Vercel',
];

const PROJECTS = [
  {
    name: 'Sweatbook',
    role: 'Gym front-desk SaaS',
    desc: 'Members, plans, payments and attendance for gym owners — Next.js + Supabase.',
    live: 'https://sweatbook-one.vercel.app',
    repo: 'https://github.com/Ujjwal-Verma-526/gymmanager',
  },
  {
    name: 'The South Cafe',
    role: 'Restaurant site',
    desc: 'Reservation flow and custom scroll animation for a South Indian cafe.',
    live: 'https://thesouthcafe.vercel.app',
    repo: 'https://github.com/Ujjwal-Verma-526/TheSOUTHCAFE',
  },
  {
    name: 'Bheemeshwara',
    role: 'Restaurant site',
    desc: 'Full marketing build with menu, reservations, and brand animation.',
    live: 'https://bheemeshwara-rnao.vercel.app',
    repo: 'https://github.com/Ujjwal-Verma-526/Bheemeshwara',
  },
  {
    name: 'Andhra House',
    role: 'Restaurant site',
    desc: 'Menu-first marketing site with a warm, high-contrast identity.',
    live: 'https://ap-house.vercel.app',
    repo: 'https://github.com/Ujjwal-Verma-526/AP-house',
  },
  {
    name: 'Dosa Coffee',
    role: 'Restaurant site + admin',
    desc: 'Customer site plus an authenticated admin panel for multi-location ops.',
    live: 'https://dosa-coffee.vercel.app',
    repo: 'https://github.com/Ujjwal-Verma-526/DosaCoffee',
  },
];

function useReveal(selector) {
  const scope = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      targets.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 0.7,
          ease: 'power3.out',
          delay: (i % 4) * 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, [selector]);

  return scope;
}

function Section({ id, coord, title, children, className = '' }) {
  return (
    <section id={id} className={`relative px-6 py-24 md:px-12 lg:px-24 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-xs text-stamp">{coord}</span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-paper md:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { opacity: 0, y: 12, duration: 0.5 })
        .from('.hero-title span', { opacity: 0, y: 40, stagger: 0.08, duration: 0.7 }, '-=0.2')
        .from('.hero-sub', { opacity: 0, y: 16, duration: 0.6 }, '-=0.3')
        .from('.hero-meta', { opacity: 0, y: 12, duration: 0.5 }, '-=0.3')
        .from('.hero-portrait', { opacity: 0, scale: 0.92, duration: 0.6 }, '-=0.5');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-cell" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,transparent_0%,#0D2846_75%)]" />

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 pt-20 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <p className="hero-eyebrow mb-6 font-mono text-xs uppercase tracking-[0.2em] text-stamp">
            Mechanical Engineering · DTU &apos;29
          </p>
          <h1 className="hero-title font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl md:text-7xl">
            <span className="block">Ujjwal</span>
            <span className="block text-faint">Verma</span>
          </h1>
          <p className="hero-sub mt-8 max-w-xl text-balance text-lg leading-relaxed text-faint">
            Building toward simulation engineering — where mechanical systems
            meet the code that models them.
          </p>
          <div className="hero-meta mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-faint">
            <span>28.75&deg;N · 77.12&deg;E</span>
            <span className="text-wire">/</span>
            <span>DTU, BAWANA ROAD</span>
          </div>
        </div>

        <div className="hero-portrait cursor-target relative h-44 w-44 shrink-0 justify-self-center sm:h-56 sm:w-56 md:justify-self-end">
          <span className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-stamp" />
          <span className="absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-stamp" />
          <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-stamp" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-stamp" />
          <div className="h-full w-full overflow-hidden border border-wire bg-panel">
            <img
              src={portrait}
              alt="Ujjwal Verma"
              className="h-full w-full object-cover object-top grayscale-[15%] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" coord="01" title="About">
      <p className="max-w-2xl text-balance text-lg leading-relaxed text-faint">
        I&apos;m a Mechanical Engineering student at Delhi Technological
        University (Class of &apos;29), working toward simulation
        engineering — the intersection of mechanical systems and the code
        that models them. I&apos;m building my foundation in C, C++, Python,
        and MATLAB alongside CAD/CAM, and I like learning by building things
        end to end rather than just studying theory. On the side, I&apos;ve
        shipped a full gym-management SaaS and four React marketing sites
        for local restaurants, each with its own reservation flow and
        custom animation work.
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {SKILLS.map(skill => (
          <li
            key={skill}
            className="rounded-full border border-wire px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-paper"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Now() {
  const scope = useReveal('.reveal-item');

  return (
    <div ref={scope}>
      <Section id="now" coord="02" title="Now">
        <ul className="space-y-4">
          {NOW.map(item => (
            <li key={item} className="reveal-item flex items-start gap-4 border-b border-wire pb-4 text-faint last:border-none">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stamp" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Projects() {
  const scope = useReveal('.project-card');

  return (
    <div ref={scope}>
      <Section id="projects" coord="03" title="Projects">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map(p => (
            <div
              key={p.name}
              className="project-card group relative flex flex-col justify-between rounded-2xl border border-wire bg-panel p-6 transition-colors hover:border-stamp"
            >
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="cursor-target absolute inset-0 rounded-2xl"
                aria-label={`Open ${p.name} (live site)`}
              />
              <div className="pointer-events-none">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-paper">{p.name}</h3>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-stamp"
                  />
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-faint">{p.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-faint">{p.desc}</p>
              </div>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="cursor-target relative z-10 mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-xs text-faint hover:text-paper"
              >
                <GithubIcon size={14} /> source
              </a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Contact() {
  return (
    <Section id="contact" coord="04" title="Contact">
      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:vermaujjwal526@gmail.com"
          className="cursor-target flex items-center gap-2 rounded-full border border-wire px-5 py-3 text-sm text-paper transition-colors hover:border-stamp hover:text-stamp"
        >
          <Mail size={16} /> vermaujjwal526@gmail.com
        </a>
        <a
          href="https://github.com/Ujjwal-Verma-526"
          target="_blank"
          rel="noreferrer"
          className="cursor-target flex items-center gap-2 rounded-full border border-wire px-5 py-3 text-sm text-paper transition-colors hover:border-stamp hover:text-stamp"
        >
          <GithubIcon size={16} /> Ujjwal-Verma-526
        </a>
        <a
          href="https://linkedin.com/in/ujjwal-verma-319426381/"
          target="_blank"
          rel="noreferrer"
          className="cursor-target flex items-center gap-2 rounded-full border border-wire px-5 py-3 text-sm text-paper transition-colors hover:border-stamp hover:text-stamp"
        >
          <LinkedinIcon size={16} /> LinkedIn
        </a>
      </div>
      <p className="mt-16 font-mono text-xs text-faint">
        {new Date().getFullYear()} · built with react + gsap ·{' '}
        <a href="https://ujjwal-verma-526.github.io" target="_blank" rel="noreferrer" className="cursor-target underline decoration-wire underline-offset-4 hover:text-paper">
          main portfolio ↗
        </a>
      </p>
    </Section>
  );
}

function App() {
  const reducedMotion = prefersReducedMotion();

  return (
    <div className="relative">
      {!reducedMotion && <TargetCursor spinDuration={3} cursorColorOnTarget="#F2A93C" />}
      <PillNav
        logo={logo}
        logoAlt="Ujjwal Verma"
        items={NAV_ITEMS}
        activeHref="#home"
        baseColor="#0D2846"
        pillColor="#123253"
        pillTextColor="#EDEAE0"
        hoveredPillTextColor="#F2A93C"
        ease="power3.easeOut"
      />
      <main>
        <Hero />
        <About />
        <Now />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
