import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  ShoppingBag,
  Server,
  Warehouse,
  Map as MapIcon,
  FileSearch,
  Cpu,
  Landmark,
  Factory,
  Truck,
  HeartPulse,
  GraduationCap,
  CloudCog,
  Zap,
  Hotel,
  Compass,
  ScanSearch,
  Handshake,
  ClipboardCheck,
  MapPin,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroSkyline from "@/assets/hero-skyline.jpg";
import logistics from "@/assets/logistics.jpg";
import datacentre from "@/assets/datacentre.jpg";
import facade from "@/assets/facade.jpg";
import corridor from "@/assets/corridor.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Diamond Realty — Commercial Real Estate Advisory in Madhya Pradesh" },
      {
        name: "description",
        content:
          "Boutique commercial real estate & development advisory across Madhya Pradesh. Land, leasing, logistics, data centres, and strategic expansion.",
      },
      { property: "og:title", content: "Diamond Realty — CRE Advisory, Madhya Pradesh" },
      {
        property: "og:description",
        content:
          "Connecting ambition to the right space. Strategic CRE advisory for businesses entering MP.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#mp", label: "Madhya Pradesh" },
  { href: "#services", label: "Services" },
  { href: "#insights", label: "Insights" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-nav border border-border/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Diamond Realty" className="h-11 w-11 object-contain" />
            <span className="font-serif text-[20px] tracking-tight leading-none">
              Diamond <span className="text-bronze italic">Realty</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
          >
            Schedule <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-bronze">
              <span className="h-px w-8 bg-bronze/60" />
              Commercial Real Estate &amp; Development Advisory
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-[44px] sm:text-6xl lg:text-[76px] leading-[1.02] tracking-[-0.02em] text-foreground">
              Connecting <span className="italic text-bronze">ambition</span>
              <br />
              to the right space.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Commercial Real Estate & Development Advisory across Madhya Pradesh.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-3 text-[15px] text-muted-foreground/90 max-w-xl leading-relaxed">
              Land advisory, industrial & logistics infrastructure, institutional leasing, data
              centres, and strategic expansion solutions.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-[14px] font-medium hover:bg-foreground/90 transition-colors"
              >
                Schedule Consultation <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-full text-[14px] font-medium hover:bg-secondary transition-colors"
              >
                Explore Opportunities
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <div className="relative grid grid-cols-5 grid-rows-6 gap-3 h-[520px] sm:h-[600px]">
              <div className="col-span-3 row-span-4 overflow-hidden rounded-2xl border border-border shadow-[0_30px_80px_-30px_rgba(60,40,20,0.25)]">
                <img
                  src={heroSkyline}
                  alt="Commercial skyline"
                  className="h-full w-full object-cover"
                  width={1080}
                  height={1920}
                />
              </div>
              <div className="col-span-2 row-span-3 overflow-hidden rounded-2xl border border-border">
                <img
                  src={facade}
                  alt="Modern data centre exterior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={900}
                  height={1200}
                />
              </div>
              <div className="col-span-2 row-span-3 overflow-hidden rounded-2xl border border-border">
                <img
                  src={logistics}
                  alt="Logistics park"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={900}
                />
              </div>
              <div className="col-span-3 row-span-2 overflow-hidden rounded-2xl border border-border">
                <img
                  src={corridor}
                  alt="Industrial corridor"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className={intro ? "grid lg:grid-cols-12 gap-10 lg:gap-16 items-end" : ""}>
      <div className={intro ? "lg:col-span-7" : "max-w-3xl"}>
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-bronze">
            <span className="h-px w-8 bg-bronze/60" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[56px] tracking-[-0.02em] leading-[1.04]">
            {title}
          </h2>
        </Reveal>
      </div>
      {intro && (
        <Reveal delay={140} className="lg:col-span-5">
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function About() {
  const stats = [
    {
      k: "MP",
      t: "Specialist Focus",
      d: "Built exclusively for Madhya Pradesh. Deep local intelligence, single-state mastery.",
    },
    {
      k: "360°",
      t: "Asset Coverage",
      d: "Office, retail, industrial, warehousing, data centres and land — one trusted desk.",
    },
    {
      k: "IG",
      t: "Institutional Execution",
      d: "Process-led, documentation-rigorous, and aligned to global occupier standards.",
    },
  ];
  return (
    <section id="about" className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Your strategic real estate
              <br />
              partner in <span className="italic text-bronze">MP.</span>
            </>
          }
          intro="Diamond Realty is a specialist corporate real estate advisory firm headquartered in Madhya Pradesh — built exclusively to serve the leasing, acquisition, and expansion needs of businesses entering or growing within the state."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="bg-background p-8 lg:p-10 h-full">
                <div className="font-serif text-5xl text-bronze tracking-tight">{s.k}</div>
                <div className="mt-5 text-base font-medium">{s.t}</div>
                <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMP() {
  const macros = [
    { v: "#2", l: "Largest State by Area" },
    { v: "9.8%", l: "GSDP Growth" },
    { v: "8+", l: "Smart Cities" },
    { v: "₹40L Cr", l: "Investment Target" },
  ];
  const cities = ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"];
  return (
    <section id="mp" className="py-16 lg:py-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Madhya Pradesh"
          title={
            <>
              The next growth frontier
              <br />
              of <span className="italic text-bronze">central India.</span>
            </>
          }
          intro="A macro story built on geography, policy, and infrastructure. MP sits at the logistical heart of India — connecting western ports to eastern industrial corridors."
        />

        <div className="mt-12 grid md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {macros.map((m, i) => (
            <Reveal key={m.l} delay={i * 70}>
              <div className="bg-background p-8 h-full">
                <div className="font-serif text-[44px] tracking-[-0.02em] text-foreground">
                  {m.v}
                </div>
                <div className="mt-2 text-[13px] uppercase tracking-[0.14em] text-muted-foreground">
                  {m.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-8 lg:p-12">
              <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">
                Geographic footprint
              </div>
              <h3 className="mt-3 font-serif text-2xl tracking-tight">
                Top five urban anchors across MP
              </h3>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {cities.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-full text-[13px] hover:border-bronze hover:text-bronze transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-bronze" />
                    {c}
                  </span>
                ))}
              </div>
              <MapVisual />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="space-y-6">
              {[
                {
                  t: "Strategic centrality",
                  d: "Equidistant from Mumbai, Delhi, and Kolkata — anchoring DMIC, EDFC, and the upcoming Bengaluru corridor.",
                },
                {
                  t: "Policy momentum",
                  d: "Industrial Promotion Policy 2025, single-window clearances, and capex-aligned incentives.",
                },
                {
                  t: "Land & power advantage",
                  d: "Pre-developed industrial parks, renewable surplus, and one of India's lowest occupancy costs.",
                },
              ].map((b) => (
                <div key={b.t} className="border-t border-border pt-6">
                  <div className="text-base font-medium">{b.t}</div>
                  <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MapVisual() {
  // Subtle abstract MP map approximation
  return (
    <div className="mt-10 relative aspect-[16/10] rounded-xl border border-border bg-secondary/40 overflow-hidden">
      <svg viewBox="0 0 600 360" className="w-full h-full">
        <defs>
          <linearGradient id="lg" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.74 0.105 75)" stopOpacity="0.18" />
            <stop offset="1" stopColor="oklch(0.52 0.09 45)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          d="M70,140 C90,90 160,70 230,80 C300,88 360,60 430,80 C500,100 540,140 530,200 C515,260 460,300 380,300 C300,300 240,290 180,295 C120,300 60,260 70,140 Z"
          fill="url(#lg)"
          stroke="oklch(0.52 0.09 45)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        {[
          { x: 290, y: 115, l: "Gwalior" },
          { x: 265, y: 200, l: "Bhopal" },
          { x: 175, y: 235, l: "Indore" },
          { x: 160, y: 180, l: "Ujjain" },
          { x: 415, y: 220, l: "Jabalpur" },
        ].map((p) => (
          <g key={p.l}>
            <circle cx={p.x} cy={p.y} r="4" fill="oklch(0.52 0.09 45)" />
            <circle
              cx={p.x}
              cy={p.y}
              r="11"
              fill="none"
              stroke="oklch(0.52 0.09 45)"
              strokeOpacity="0.35"
            />
            <text
              x={p.x + 14}
              y={p.y + 4}
              fontSize="11"
              fill="oklch(0.22 0.015 50)"
              fontFamily="Inter"
            >
              {p.l}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Services() {
  const items = [
    {
      icon: Building2,
      t: "Office Leasing",
      d: "Grade-A workplaces, managed offices, and built-to-suit campuses for occupiers scaling in MP.",
    },
    {
      icon: ShoppingBag,
      t: "Retail Space",
      d: "High-streets, malls, and QSR formats matched to catchment intelligence and footfall analytics.",
    },
    {
      icon: Server,
      t: "Data Centres",
      d: "Power-secured land, fibre-connected zones, and hyperscale-ready advisory for cloud infrastructure.",
      featured: true,
    },
    {
      icon: Warehouse,
      t: "Warehousing & Logistics",
      d: "Grade-A warehousing, cold chain, multi-modal hubs along DMIC and emerging logistics corridors.",
    },
    {
      icon: MapIcon,
      t: "Land Parcels",
      d: "Industrial, institutional, and mixed-use parcels with title diligence and development feasibility.",
    },
    {
      icon: FileSearch,
      t: "Transaction Advisory",
      d: "Negotiation, structuring, valuations and end-to-end transaction governance for institutional deals.",
    },
  ];
  return (
    <section id="services" className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Integrated advisory across
              <br />
              every <span className="italic text-bronze">asset class.</span>
            </>
          }
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <div className="group relative h-full rounded-2xl border border-border p-8 bg-background transition-all duration-500 hover:border-bronze hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(120,70,30,0.35)]">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center border border-border text-bronze">
                    <s.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] text-bronze">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const reports = [
    { t: "MP Industrial Corridor Outlook", tag: "Infrastructure" },
    { t: "Central India Data Centre Potential", tag: "Cloud & Data" },
    { t: "Logistics & Warehousing Trends", tag: "Supply Chain" },
    { t: "Retail Expansion Corridors", tag: "Consumer" },
  ];
  return (
    <section id="insights" className="py-16 lg:py-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Market Intelligence"
              title={
                <>
                  More than brokerage.
                  <br />
                  A <span className="italic text-bronze">strategic intelligence</span> platform.
                </>
              }
              intro="Independent research, infrastructure mapping, and corridor-level analytics that shape institutional capital decisions across central India."
            />
          </div>
          <Reveal className="lg:col-span-5" delay={140}>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[5/3]">
              <img
                src={corridor}
                alt="Industrial corridor"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {reports.map((r, i) => (
            <Reveal key={r.t} delay={i * 80}>
              <div className="group flex items-center justify-between rounded-2xl border border-border bg-background p-7 hover:border-bronze transition-colors">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">
                    {r.tag}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl tracking-tight">{r.t}</h3>
                  <div className="mt-3 text-[13px] text-muted-foreground">
                    Forthcoming report · 2026
                  </div>
                </div>
                <div className="h-11 w-11 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discovery Brief", d: "Mandate definition, requirement mapping, success metrics." },
    { n: "02", t: "Market Intelligence", d: "Micro-market scan, benchmarking, comparable analysis." },
    { n: "03", t: "Site Shortlisting", d: "Curated longlist refined to a strategic shortlist." },
    { n: "04", t: "Site Visits & Analysis", d: "Technical, commercial, and operational diligence." },
    { n: "05", t: "Negotiation & Closure", d: "Commercials, structuring, and documentation governance." },
    { n: "06", t: "Post-Lease Support", d: "Fit-out coordination, compliance, and ongoing partnership." },
  ];
  return (
    <section id="process" className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              A rigorous, six-stage
              <br />
              advisory <span className="italic text-bronze">framework.</span>
            </>
          }
        />
        <div className="mt-12 relative">
          <div className="absolute left-0 right-0 top-[34px] h-px bg-border hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative">
                  <div className="h-[17px] w-[17px] rounded-full bg-background border border-bronze mb-6 ml-[26px] hidden lg:block relative z-10">
                    <div className="absolute inset-1.5 rounded-full bg-bronze" />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">{s.n}</div>
                  <div className="mt-2 font-serif text-xl tracking-tight">{s.t}</div>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { t: "MP-Only Focus", d: "Specialists, not generalists. One state, mastered." },
    { t: "Integrated Asset Coverage", d: "Office, industrial, retail, land and data — one desk." },
    { t: "Landlord-Agnostic Advice", d: "Aligned solely to occupier and investor outcomes." },
    { t: "Speed to Market", d: "Ready-shortlists and pre-negotiated commercial frames." },
    { t: "Policy & Incentive Navigation", d: "Capex incentives, SEZ, IT-park, and clearances." },
    { t: "Local Relationships, National Standards", d: "Boutique access. Institutional rigour." },
  ];
  return (
    <section className="py-16 lg:py-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Diamond Realty"
          title={
            <>
              Boutique by design.
              <br />
              <span className="italic text-bronze">Institutional</span> by execution.
            </>
          }
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className="bg-background p-8 h-full hover:bg-secondary/60 transition-colors">
                <div className="h-px w-8 bg-bronze mb-6" />
                <div className="text-base font-medium">{p.t}</div>
                <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const items = [
    { i: Cpu, l: "IT & Technology" },
    { i: Landmark, l: "BFSI" },
    { i: ShoppingBag, l: "Retail & QSR" },
    { i: Factory, l: "Manufacturing" },
    { i: Truck, l: "Logistics & 3PL" },
    { i: HeartPulse, l: "Healthcare" },
    { i: GraduationCap, l: "Education" },
    { i: CloudCog, l: "Cloud & Data" },
    { i: Zap, l: "New Energy" },
    { i: Hotel, l: "Hospitality" },
  ];
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sectors"
          title={
            <>
              Trusted by leaders across
              <br />
              <span className="italic text-bronze">the new economy.</span>
            </>
          }
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((s, i) => (
            <Reveal key={s.l} delay={i * 40}>
              <div className="bg-background aspect-square flex flex-col items-center justify-center gap-3 p-6 hover:bg-secondary/60 transition-colors group">
                <s.i
                  className="h-6 w-6 text-foreground/70 group-hover:text-bronze transition-colors"
                  strokeWidth={1.4}
                />
                <div className="text-[13px] text-center text-foreground/80">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-8 bg-gold/70" />
              Begin the conversation
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-[-0.02em]">
              Your expansion into
              <br />
              Madhya Pradesh
              <br />
              <span className="italic text-gold">starts here.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-[16px] text-background/70 max-w-lg leading-relaxed">
              Strategic real estate advisory for businesses, developers, and institutions entering
              the next growth frontier.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-12 space-y-5">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-background/50">
                  ​FOUNDER
                </div>
                <div className="mt-2 font-serif text-2xl">Tusshar D Chandwani</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-background/15">
                <a
                  href="mailto:tusshar@diamondrealty.co"
                  className="flex items-center gap-3 text-background/85 hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-[14px]">tusshar@diamondrealty.co</span>
                </a>
                <a
                  href="tel:+919111448855"
                  className="flex items-center gap-3 text-background/85 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-[14px]">+91 91114 48855</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-background/15 bg-background/[0.03] p-8 lg:p-10 backdrop-blur"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-gold">Inquire</div>
            <h3 className="mt-3 font-serif text-2xl">Schedule a consultation</h3>
            <div className="mt-8 space-y-5">
              {[
                { l: "Name", t: "text", p: "Your full name" },
                { l: "Company", t: "text", p: "Organisation" },
                { l: "Email", t: "email", p: "you@company.com" },
              ].map((f) => (
                <div key={f.l}>
                  <label className="text-[11px] uppercase tracking-[0.18em] text-background/50">
                    {f.l}
                  </label>
                  <input
                    type={f.t}
                    placeholder={f.p}
                    className="mt-2 w-full bg-transparent border-b border-background/20 focus:border-gold outline-none py-2 text-[15px] placeholder:text-background/30 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-background/50">
                  Requirement
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your mandate"
                  className="mt-2 w-full bg-transparent border-b border-background/20 focus:border-gold outline-none py-2 text-[15px] placeholder:text-background/30 resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gold text-foreground px-6 py-3.5 rounded-full text-[14px] font-medium hover:bg-gold/90 transition-colors"
              >
                Request Consultation <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Diamond Realty" className="h-12 w-12 object-contain" />
              <span className="font-serif text-[22px] tracking-tight leading-none">
                Diamond <span className="text-bronze italic">Realty</span>
              </span>
            </div>
            <p className="mt-5 text-[14px] text-muted-foreground max-w-sm leading-relaxed">
              A boutique institutional commercial real estate advisory platform focused on the
              future growth of Madhya Pradesh.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Navigate</div>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-[14px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] text-bronze">Connect</div>
            <a
              href="https://www.linkedin.com/in/tusshardchandwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[14px] hover:text-bronze transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <div className="mt-3 text-[14px] text-muted-foreground">tusshar@diamondrealty.co</div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[12px] text-muted-foreground">
          <div>© {new Date().getFullYear()} Diamond Realty. All rights reserved.</div>
          <div>Headquartered in Madhya Pradesh, India.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyMP />
        <Services />
        <Insights />
        <Process />
        <WhyUs />
        <Sectors />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}