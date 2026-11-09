import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  FileCheck2,
  Mail,
  Microscope,
  Wrench,
} from "lucide-react";
import AssetFrame from "@/components/AssetFrame";

const LINKEDIN = "https://www.linkedin.com/in/anurag-mishra-b25733340/";
const TIRARE = "https://tirare.tech";
const TIRARE_ARCHIVE = "https://tirare-webpage.github.io/";
const EMAIL = "anuragfromtirare@gmail.com";
const RESEARCH_PAPER = "https://drive.google.com/file/d/1XBd-PEDUR0sacBVPBr6hy2ZznNF6v-A9/view?usp=sharing";

const evolution = [
  {
    id: "01",
    title: "The reference vehicle",
    tag: "REAL-WORLD CONSTRAINTS",
    src: "/assets/cad/reality.glb",
    note: "The existing cargo tricycle establishes the design envelope: its solid rear axle, chain line, frame, cargo bed, brakes and repair context.",
  },
  {
    id: "02",
    title: "The first power path",
    tag: "EARLY ARCHITECTURE",
    src: "/assets/cad/first-attempt.glb",
    note: "An early attempt to introduce electric drive into the vehicle. It remains part of the record because the path from first idea to workable architecture matters.",
  },
  {
    id: "03",
    title: "The constraint collision",
    tag: "ARCHITECTURE REVISION",
    src: "/assets/cad/constraint-collision.glb",
    note: "The existing drivetrain's one-way behaviour, axle constraints and packaging needs forced a reconsideration of how rider input and powered drive should interact.",
  },
  {
    id: "04",
    title: "The current platform",
    tag: "UNDER DEVELOPMENT",
    src: "/assets/cad/current-platform.glb",
    note: "The current direction places MRII at the driven-sprocket interface. Vehicle-level mounting, reliability, serviceability and failure behaviour still need testing.",
  },
];

const recognitions = [
  { kind: "FUNDING / ENTREPRENEURSHIP", title: "E-Pitch Café 2026 · CiPD, IIIT Delhi", detail: "Selected as a funded finalist in the Proof-of-Concept track; ₹1 lakh in prototype-stage support for Tirare." },
  { kind: "ENGINEERING / TEAM LEADERSHIP", title: "F1 in Schools · Team Seraphis", detail: "Team leader and engineer; the team qualified for the National Finals." },
  { kind: "ROBOTICS", title: "World Robot Olympiad · Future Engineers", detail: "National-level selection and competition work in autonomous-vehicle design." },
  { kind: "ROBOTICS / 2025", title: "Robotics for Good · Youth Challenge India", detail: "Selected at the national level." },
  { kind: "WRITING", title: "Queen’s Commonwealth Essay Competition", detail: "Bronze Medal." },
  { kind: "LEADERSHIP", title: "Student Innovation Council", detail: "Head of the council at Ambience Public School." },
  { kind: "CLIMATE COMMUNICATION", title: "Climate Cardinals", detail: "Delhi State Lead." },
  { kind: "ENTREPRENEURSHIP", title: "Conrad Challenge", detail: "Selected for the challenge." },
  { kind: "INVESTMENT COMPETITION", title: "Wharton Global High School Investment Competition", detail: "Team-based investment simulation; competition performance, not personal investment returns." },
  { kind: "SPACE DESIGN", title: "International Space Settlement pathway", detail: "Invited to an international qualifying team pathway." },
  { kind: "TECHNICAL CREDENTIAL", title: "GitHub Foundations", detail: "Foundations credential." },
];

const projects = [
  {
    id: "01",
    category: "ENGINEERING / TEAM LEADERSHIP",
    title: "F1 in Schools",
    subtitle: "Team Seraphis",
    description: "Team leader and engineer on a competition car developed against demanding design, manufacturing, performance and presentation constraints. The team reached the National Finals.",
    src: "/stories/f1-seraphis/f1-car.jpg",
    kind: "image" as const,
    path: "/stories/f1-seraphis/f1-car.jpg",
  },
  {
    id: "02",
    category: "AUTONOMOUS SYSTEMS",
    title: "Robotics",
    subtitle: "WRO Future Engineers",
    description: "Work on autonomous-vehicle design, mechanical layout, sensing, navigation and iterative testing for competition environments.",
    src: "/stories/robotics/robot-build.jpg",
    kind: "image" as const,
    path: "/stories/robotics/robot-build.jpg",
  },
  {
    id: "03",
    category: "SOCIAL INNOVATION",
    title: "Robotics for Good",
    subtitle: "Youth Challenge India · 2025",
    description: "Selected at the national level for a challenge connecting robotics with practical social problems.",
    src: "/stories/robotics/robotics-for-good.jpg",
    kind: "image" as const,
    path: "/stories/robotics/robotics-for-good.jpg",
  },
  {
    id: "04",
    category: "CLIMATE COMMUNICATION",
    title: "Climate Cardinals",
    subtitle: "Delhi State Lead",
    description: "Climate communication and efforts to make climate information more accessible.",
    src: "/stories/climate-cardinals.jpg",
    kind: "image" as const,
    path: "/stories/climate-cardinals.jpg",
  },
  {
    id: "05",
    category: "STUDENT LEADERSHIP",
    title: "Student Innovation Council",
    subtitle: "Ambience Public School",
    description: "Leading a student council focused on innovation, initiative and organising work across teams.",
    src: "/stories/student-innovation-council.jpg",
    kind: "image" as const,
    path: "/stories/student-innovation-council.jpg",
  },
  {
    id: "06",
    category: "WRITING & IDEAS",
    title: "Essays and independent writing",
    subtitle: "Philosophy · society · public questions",
    description: "Writing across philosophical and social questions, alongside competition essays and independent projects.",
    src: "/stories/writing/essay-notes.jpg",
    kind: "image" as const,
    path: "/stories/writing/essay-notes.jpg",
  },
];

function SectionIndex({ number, label, inverse = false }: { number: string; label: string; inverse?: boolean }) {
  return (
    <div className={`section-index${inverse ? " section-index-inverse" : ""}`}>
      <span>{number}</span><b>{label}</b><i />
    </div>
  );
}

function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <p className={`eyebrow${inverse ? " eyebrow-inverse" : ""}`}><span />{children}</p>;
}

function Figure({
  kind,
  src,
  title,
  detail,
  description,
  aspect = "landscape",
  fit,
  className = "",
}: {
  kind: "image" | "video" | "model" | "pdf";
  src: string;
  title: string;
  detail: string;
  description: string;
  aspect?: "landscape" | "portrait" | "square" | "cinematic";
  fit?: "cover" | "contain";
  className?: string;
}) {
  return (
    <figure className={`media-figure ${className}`}>
      <AssetFrame kind={kind} src={src} title={title} description={description} aspect={aspect} fit={fit} />
      <figcaption><span>{title}</span><small>{detail}</small></figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Anurag Mishra home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">ANURAG MISHRA<small>ENGINEERING / RESEARCH / INITIATIVE</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#tirare">Tirare</a>
          <a href="#mrii">MRII</a>
          <a href="#research">Research</a>
          <a href="#work">Other work</a>
          <a href="#record">Recognition</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-contact" href="#contact">Get in touch <ArrowUpRight size={14} /></a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-shell">
            <div className="hero-topline"><span>PERSONAL PORTFOLIO / INDIA</span><span>SELECTED WORK · 2024—2026</span></div>
            <div className="hero-grid">
              <div className="hero-copy">
                <Eyebrow inverse>FOUNDER · MECHANICAL DESIGN · INDEPENDENT RESEARCH</Eyebrow>
                <h1><span>ANURAG</span><span>MISHRA<span className="hero-period">.</span></span></h1>
                <p className="hero-statement">I build engineering projects around real mechanical and human constraints. My current work centres on <strong>Tirare</strong>, a mobility venture, and <strong>MRII</strong>, the mechanical rider-intent interface at the heart of its retrofit concept.</p>
                <p className="hero-supporting">This portfolio brings together the product, the research behind it, competition engineering, writing and work beyond the workshop.</p>
                <div className="hero-actions">
                  <a className="button button-lime" href="#tirare">Explore the work <ArrowDownRight size={16} /></a>
                  <a className="button button-outline" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
                </div>
                <div className="hero-facts">
                  <div><span>01 / ROLE</span><strong>Founder, Tirare</strong></div>
                  <div><span>02 / FOCUS</span><strong>Mechanical systems</strong></div>
                  <div><span>03 / BASE</span><strong>India · Class XI</strong></div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-model-panel">
                  <div className="asset-overline"><span>FIG. 01</span><span>MRII / INTERFACE DETAIL</span></div>
                  <AssetFrame kind="model" src="/assets/cad/mrii-interface-detail.glb" title="MRII interface-detail CAD" description="Add the original MRII interface-detail GLB from the Tirare pitch assets." aspect="cinematic" />
                  <div className="asset-underline"><span>MECHANICAL RIDER-INTENT INTERFACE</span><span>INTERACTIVE MODEL</span></div>
                </div>
                <div className="hero-visual-bottom">
                  <figure className="hero-portrait"><AssetFrame kind="image" src="/profile/anurag-portrait.jpg" title="Anurag Mishra portrait" description="Add a current portrait at public/profile/anurag-portrait.jpg." aspect="portrait" /></figure>
                  <div className="hero-caption-block"><span>THE WORK</span><strong>One founder.<br/>A connected body of work.</strong><small>Mobility · mechanics · research · teams · writing</small><a href="#overview">Scroll to explore <ArrowDown size={13} /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottomline"><span>ANURAG MISHRA</span><span>FOUNDER, TIRARE</span><span>MECHANICAL RIDER-INTENT INTERFACE / MRII</span><span>2026</span></div>
        </section>

        <section className="overview-strip" id="overview" aria-label="Portfolio overview">
          <a href="#tirare"><span>01 / VENTURE</span><strong>Tirare</strong><small>Electric retrofit for cargo tricycles</small><ArrowUpRight size={15} /></a>
          <a href="#mrii"><span>02 / MECHANISM</span><strong>MRII</strong><small>Mechanical rider-intent interface</small><ArrowUpRight size={15} /></a>
          <a href="#research"><span>03 / INVESTIGATION</span><strong>Research</strong><small>Mechanics, measurement and validation</small><ArrowUpRight size={15} /></a>
          <a href="#work"><span>04 / OTHER WORK</span><strong>Beyond Tirare</strong><small>Robotics, teams, writing and service</small><ArrowUpRight size={15} /></a>
        </section>

        <section className="section intro-section" id="about-intro">
          <div className="section-shell intro-layout">
            <SectionIndex number="01" label="THE APPROACH" />
            <div className="intro-main">
              <Eyebrow>HOW I WORK</Eyebrow>
              <h2>Engineering begins<br/>with <em>the actual conditions.</em></h2>
              <div className="intro-columns">
                <p className="intro-lead">I am interested in systems that have to work beyond a clean CAD viewport: machines with existing geometry, limited budgets, maintenance realities and people who depend on them.</p>
                <p>I try to move between observation, mechanical reasoning, modelling, prototyping and measurement. I also try to be precise about the status of a claim: what is a design intention, what has been built, what has been measured and what remains to be tested.</p>
              </div>
              <div className="approach-grid">
                <article><span>01</span><Wrench size={21} /><h3>Design</h3><p>Mechanical architecture, CAD, drivetrain integration and packaging.</p></article>
                <article><span>02</span><Microscope size={21} /><h3>Investigate</h3><p>Measurement, technical documentation, analysis and validation.</p></article>
                <article><span>03</span><Cpu size={21} /><h3>Build</h3><p>Prototypes, robotics, competition systems and practical iteration.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section tirare-section" id="tirare">
          <div className="section-shell">
            <div className="project-topline"><SectionIndex number="02" label="FLAGSHIP PROJECT / FOUNDER" inverse /><a className="text-link text-link-light" href={TIRARE} target="_blank" rel="noreferrer">Tirare website <ArrowUpRight size={15} /></a></div>
            <div className="tirare-heading">
              <div><Eyebrow inverse>TIRARE MOBILITY TECHNOLOGIES</Eyebrow><h2>Keep the vehicle.<br/><em>Change the interface.</em></h2></div>
              <div className="tirare-summary"><p>Tirare is developing a modular electric retrofit for existing human-powered cargo tricycles. The aim is to reduce physical strain without requiring a worker to replace the vehicle they already own.</p><p>The tricycle is not simply a chassis. It is a working asset connected to income, daily routes, local repair practices and the operator's familiarity with the machine.</p></div>
            </div>
            <div className="tirare-feature-model">
              <AssetFrame kind="model" src="/assets/cad/current-platform.glb" title="Tirare current platform CAD" description="Add the current-platform GLB from the original pitch assets." aspect="cinematic" />
              <div className="feature-model-caption"><span>DESIGN DIRECTION / CURRENT PLATFORM</span><strong>Retrofit architecture for the cargo tricycle already in service.</strong></div>
            </div>
            <div className="tirare-principles">
              <article><span>01 / THE PROBLEM</span><h3>Electrification should not require starting over.</h3><p>Purpose-built electric cargo vehicles exist. But replacing a working tricycle can impose a high upfront cost and disrupt a familiar way of earning. Tirare explores an upgrade path that starts with the vehicle already in use.</p></article>
              <article><span>02 / THE DESIGN INTENT</span><h3>Preserve the parts of the machine that matter.</h3><p>The design direction is non-invasive and reversible: avoid cutting the frame, retain the original solid rear axle and preserve the familiar pedal, chain, brake and steering systems where feasible.</p></article>
              <article><span>03 / THE CONTROL PROBLEM</span><h3>Assistance must respond to human input.</h3><p>MRII is being developed to sense rider intent through a mechanical relationship in the drivetrain, while managing the interaction between human torque and powered assistance.</p></article>
            </div>
            <div className="tirare-visuals">
              <Figure kind="video" src="/assets/media/worker.mp4" title="Cargo-tricycle worker footage" detail="Field context / original pitch footage" description="Add the original worker.mp4 from the pitch assets." className="visual-large" />
              <Figure kind="image" src="/assets/media/manual-cargo-worker.webp" title="Manual cargo work" detail="Existing work pattern" description="Add manual-cargo-worker.webp from the pitch assets." />
              <Figure kind="image" src="/assets/media/new-cargo-ev.jpg" title="Purpose-built electric cargo vehicle" detail="A different route to electrification" description="Add new-cargo-ev.jpg from the pitch assets. This is a comparison image, not a Tirare prototype." />
            </div>
            <div className="tirare-design-brief">
              <div><span className="brief-label">DESIGN CONSTRAINTS</span><h3>What the retrofit has to respect.</h3></div>
              <ul>
                <li>Existing solid rear axle and frame architecture</li>
                <li>Manual rideability when assistance is unavailable</li>
                <li>Serviceability through familiar local workshop practices</li>
                <li>Minimal disruption to the worker's existing vehicle and routine</li>
              </ul>
              <p>These are design requirements and objectives, not claims that every condition has already been validated on a complete vehicle.</p>
            </div>
            <div className="founder-role">
              <div><span>MY ROLE</span><h3>Founder · product and mechanical direction</h3></div>
              <p>I have led Tirare's concept development, vehicle research, CAD iterations, drivetrain architecture, MRII development, technical documentation, early prototyping, research planning, outreach and competition submissions. A physical MRII subsystem has been built and demonstrated; full-vehicle integration, reliability and field outcomes still require testing.</p>
            </div>
          </div>
        </section>

        <section className="section mrii-section" id="mrii">
          <div className="section-shell">
            <SectionIndex number="03" label="THE CORE MECHANISM" />
            <div className="section-heading">
              <div><Eyebrow>MECHANICAL RIDER-INTENT INTERFACE</Eyebrow><h2>MRII makes rider input<br/><em>measurable at the mechanism.</em></h2></div>
              <p>MRII is the mechanical interface being developed for Tirare's retrofit architecture. It is intended to derive a torque-related rider signal from relative angular displacement while limiting motor-side influence on the rider input.</p>
            </div>
            <div className="mrii-showcase">
              <div className="mrii-model-frame"><AssetFrame kind="model" src="/assets/cad/mrii-interface-detail.glb" title="MRII interface detail" description="Add assets/cad/mrii-interface-detail.glb from the original Tirare pitch assets." aspect="cinematic" /></div>
              <div className="mrii-showcase-copy"><span className="data-label">FIG. 02 / INTERFACE DETAIL</span><h3>A mechanical signal, not a proxy from motor current.</h3><p>The interface separates the rider-side input member from the downstream drive path through a compliant torsional element. The angular difference is measured across the coupling.</p><div className="equation-card"><span>INTENDED MEASURAND</span><strong>Δθ = θ<sub>input</sub> − θ<sub>output</sub></strong><small>Relative angular displacement across the compliant coupling</small></div></div>
            </div>
            <div className="mrii-flow-section">
              <div className="flow-heading"><span>MECHANICAL ARCHITECTURE</span><p>Conceptual torque path described in the MRII design record.</p></div>
              <div className="mrii-flow">
                <div><span>01</span><strong>Human torque</strong><small>Pedals / rider input</small></div>
                <i><ArrowRight size={17}/></i>
                <div><span>02</span><strong>Input member</strong><small>Torque enters [102]</small></div>
                <i><ArrowRight size={17}/></i>
                <div className="flow-emphasis"><span>03</span><strong>Compliant coupling</strong><small>Relative twist [103]</small></div>
                <i><ArrowRight size={17}/></i>
                <div><span>04</span><strong>Output member</strong><small>Torque passes [104]</small></div>
                <i><ArrowRight size={17}/></i>
                <div className="flow-emphasis"><span>05</span><strong>Sprag clutch</strong><small>Overrunning element [105]</small></div>
                <i><ArrowRight size={17}/></i>
                <div><span>06</span><strong>Drivetrain</strong><small>Downstream torque path</small></div>
              </div>
              <div className="actuator-branch"><span>POWERED ACTUATOR</span><i /><p>Motor torque enters downstream of the overrunning mechanism, rather than through the rider-side sensing member.</p></div>
            </div>
            <div className="mrii-operating-grid">
              <article><span>OPERATING CONDITION / 01</span><h3>Rider drives</h3><p>Human torque passes through the compliant interface. Relative angular displacement is the intended rider-effort signal.</p></article>
              <article><span>OPERATING CONDITION / 02</span><h3>Motor leads</h3><p>The sprag-clutch / overrunning element is intended to prevent powered-side rotation from compelling the rider side to follow. This isolation behaviour must be demonstrated on the assembled mechanism.</p></article>
              <article><span>OPERATING CONDITION / 03</span><h3>Assistance is off</h3><p>The design goal is to preserve a usable mechanical pedal path if electrical assistance is unavailable. Manual rideability and failure behaviour remain validation requirements.</p></article>
            </div>
            <div className="mrii-media-grid">
              <Figure kind="image" src="/assets/media/Untitled%20-%20October%2027,%202026%20at%2012.58.24.png" title="MRII mounted on the tricycle" detail="Physical integration photograph" description="Original pitch image: Untitled - October 27, 2026 at 12.58.24.png. Keep the filename or update this source path." className="visual-large" fit="contain" />
              <Figure kind="image" src="/stories/tirare/mrii-bench-prototype.jpg" title="MRII bench prototype" detail="Physical subsystem / bench record" description="Add a public-safe photograph of the built MRII subsystem at public/stories/tirare/mrii-bench-prototype.jpg." />
            </div>
            <div className="mrii-animation-heading"><div><Eyebrow>MECHANISM IN MOTION</Eyebrow><h3>Installation, overrun and reaction torque.</h3></div><p>The following videos are explanatory assets from the pitch presentation. They communicate the intended mechanism; they are not substitutes for measured validation.</p></div>
            <div className="mrii-animation-grid">
              <Figure kind="video" src="/assets/media/mrii-installation.mov" title="MRII installation sequence" detail="Assembly and interface placement" description="Original pitch animation: assets/media/mrii-installation.mov. Convert to MP4 if browser playback is inconsistent." />
              <Figure kind="video" src="/assets/media/mrii-oneway.mov" title="One-way engagement and overrun" detail="Rider-side and powered-side behaviour" description="Original pitch animation: assets/media/mrii-oneway.mov. Convert to MP4 if browser playback is inconsistent." />
              <Figure kind="video" src="/assets/media/tirare_motor_axle_motion_v3.mp4" title="Motor, axle and reaction torque" detail="Motor mount and frame load path" description="Add tirare_motor_axle_motion_v3.mp4 from the pitch assets." />
            </div>
            <div className="evidence-caution"><FileCheck2 size={20}/><p><strong>Evidence status.</strong> The physical MRII subsystem has been built and demonstrated. The CAD and animations describe design intent. Neither alone establishes validated torque accuracy, clutch isolation across every operating condition, fatigue life, complete-vehicle safety or field performance.</p></div>
          </div>
        </section>

        <section className="section evolution-section" id="evolution">
          <div className="section-shell">
            <SectionIndex number="04" label="DESIGN DEVELOPMENT" inverse />
            <div className="section-heading section-heading-inverse"><div><Eyebrow inverse>CAD / FOUR DESIGN STAGES</Eyebrow><h2>How the architecture<br/><em>changed over time.</em></h2></div><p>The sequence is presented as a visible design record. Each model is independently inspectable; no CAD stage is hidden behind a selector or dropdown.</p></div>
            <div className="evolution-grid">
              {evolution.map((item) => (
                <article className="evolution-card" key={item.id}>
                  <div className="evolution-card-top"><span>{item.id} / {item.tag}</span><span>3D MODEL</span></div>
                  <AssetFrame kind="model" src={item.src} title={item.title} description={`Add ${item.src.replace(/^\//, "public/")} from the pitch asset folder.`} aspect="landscape" />
                  <div className="evolution-card-copy"><h3>{item.title}</h3><p>{item.note}</p></div>
                </article>
              ))}
            </div>
            <div className="reference-models">
              <div className="reference-heading"><Eyebrow inverse>REFERENCE VEHICLES</Eyebrow><h3>Two cargo-tricycle forms from the design archive.</h3></div>
              <div className="reference-model-grid">
                <Figure kind="model" src="/assets/cad/wooden-trike.glb" title="Wooden cargo tricycle" detail="Reference vehicle / existing form" description="Add assets/cad/wooden-trike.glb from the pitch folder." />
                <Figure kind="model" src="/assets/cad/metal-trike.glb" title="Steel-frame cargo tricycle" detail="Comparative vehicle / not a Tirare prototype" description="Add assets/cad/metal-trike.glb from the pitch folder." />
              </div>
            </div>
            <div className="evolution-motion-grid">
              <Figure kind="video" src="/assets/media/existing-drivetrain.mp4" title="Existing drivetrain movement" detail="Freewheel and axle behaviour" description="Add existing-drivetrain.mp4 from the pitch assets." />
              <Figure kind="video" src="/assets/media/battery-being-added.mp4" title="Battery placement" detail="Packaging and mass considerations" description="Add battery-being-added.mp4 from the pitch assets." />
              <Figure kind="video" src="/assets/media/new%20animation%20v1.mp4" title="Return to the original cargo tricycle" detail="Design revision / vehicle retention" description="Add new animation v1.mp4 from the pitch assets. The space in the filename is intentional." />
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-shell">
            <SectionIndex number="05" label="RESEARCH & TECHNICAL WORK" />
            <div className="section-heading"><div><Eyebrow>INSEF 2026–27 / ENGINEERING MECHANICS</Eyebrow><h2>Research the mechanism.<br/><em>Test the claim.</em></h2></div><p>Alongside product development, I have developed an independent research track around MRII's torque-related signal, compliant mechanics and the validation required before the architecture can be treated as proven.</p></div>
            <article className="research-feature">
              <div className="research-feature-top"><span>SUBMITTED PROJECT / ETSD0071</span><span>INSEF 2026–27</span></div>
              <div className="research-feature-body"><div><span className="research-overline">RESEARCH PROJECT</span><h3>Quantitative Assessment of a Compliant Rider-Input Interface for Torque-Assisted Mobility</h3><p className="research-summary">Can a compliant rider-input interface provide a useful torque-related angular signal while limiting actuator-induced apparent input in a human-plus-powered drivetrain?</p></div><div className="research-pillars"><article><span>01 / MEASUREMENT</span><p>Torque reference planes, angular measurements, calibration, data acquisition and repeatability.</p></article><article><span>02 / MECHANICAL DESIGN</span><p>Compliant flexures, coupling geometry, candidate comparison and manufacturing assumptions.</p></article><article><span>03 / SYSTEM BEHAVIOUR</span><p>Sprag-clutch operation, motor-side overrun, drivetrain interaction and failure modes.</p></article></div></div>
              <div className="research-feature-foot"><span>SUBMISSION STATUS / PRESENTED FOR EVALUATION</span><a href={RESEARCH_PAPER} target="_blank" rel="noreferrer">Open the research document <ArrowUpRight size={15}/></a></div>
            </article>
            <div className="research-method-note"><Microscope size={22}/><p><strong>Research standard.</strong> Physical measurements, reported observations, derived calculations and analytical models are kept distinct. Where provenance or repeatability is unresolved, the result is described as provisional rather than independently verified.</p></div>
          </div>
        </section>

        <section className="section recognition-section" id="record">
          <div className="section-shell">
            <SectionIndex number="06" label="INSTITUTIONAL MILESTONES & DOCUMENTS" />
            <div className="section-heading"><div><Eyebrow>FORMAL RECORD / TIRARE</Eyebrow><h2>Support, recognition<br/><em>and the evidence.</em></h2></div><p>Selected milestones from building Tirare. The original photographs and documents will make this record more useful than a list of claims.</p></div>
            <div className="iiitd-feature">
              <div className="iiitd-copy"><span className="milestone-id">01 / IIIT DELHI</span><Eyebrow>E-PITCH CAFÉ 2026 · CiPD</Eyebrow><div className="grant-figure">₹1<span>lakh</span></div><h3>Prototype-stage support for Tirare.</h3><p>Tirare was selected as a funded finalist in the Proof-of-Concept track at E-Pitch Café 2026 through the Centre for Intelligent Product Development at IIIT Delhi.</p><p className="document-note">The ceremony photograph and certificate are given prominent space so the recognition can be seen directly.</p></div>
              <div className="iiitd-media">
                <Figure kind="image" src="/evidence/iiitd-award-receiving.jpg" title="Receiving the IIIT Delhi recognition" detail="E-Pitch Café 2026 / ceremony photograph" description="Add the actual photograph at public/evidence/iiitd-award-receiving.jpg." className="award-photo" />
                <Figure kind="image" src="/evidence/iiitd-grant-certificate.jpg" title="IIIT Delhi grant certificate" detail="Certificate / Proof-of-Concept track" description="Add a public-safe certificate image at public/evidence/iiitd-grant-certificate.jpg." fit="contain" />
              </div>
            </div>
            <div className="patent-feature">
              <div className="patent-copy"><span className="milestone-id">02 / INTELLECTUAL PROPERTY</span><Eyebrow>INDIA · PROVISIONAL APPLICATION</Eyebrow><h3>Provisional application submitted.</h3><p>The project record states that a provisional patent application relating to MRII was submitted through the Indian e-filing process on 2 October 2026. This is a filing milestone, not a granted patent.</p><p className="document-note">Publish only a redacted acknowledgement. Remove personal contact information, signatures, payment references and any technical disclosure that should remain private.</p></div>
              <Figure kind="pdf" src="/evidence/patent-efiling-acknowledgement.pdf" title="Patent e-filing acknowledgement" detail="Provisional application submitted · 2 October 2026" description="Add a redacted public-safe PDF at public/evidence/patent-efiling-acknowledgement.pdf." className="patent-document" />
            </div>
            <div className="document-gallery">
              <Figure kind="image" src="/evidence/queens-commonwealth-bronze.jpg" title="Queen’s Commonwealth Essay Competition" detail="Bronze Medal / certificate" description="Add a certificate image at public/evidence/queens-commonwealth-bronze.jpg." fit="contain" />
              <Figure kind="image" src="/evidence/f1-schools-national.jpg" title="F1 in Schools / Team Seraphis" detail="National Finals / team record" description="Add a qualification record, certificate or team photograph at public/evidence/f1-schools-national.jpg." />
              <Figure kind="image" src="/evidence/wro-record.jpg" title="WRO Future Engineers" detail="Competition record" description="Add a certificate or real competition photograph at public/evidence/wro-record.jpg." />
            </div>
          </div>
        </section>

        <section className="section other-work-section" id="work">
          <div className="section-shell">
            <SectionIndex number="07" label="OTHER PROJECTS & INITIATIVES" />
            <div className="section-heading"><div><Eyebrow>SELECTED WORK OUTSIDE TIRARE</Eyebrow><h2>Selected work<br/><em>beyond Tirare.</em></h2></div><p>Engineering is the centre of this portfolio, but it is not the only place I have put time and effort. These projects show work with teams, communication, competition and public problems.</p></div>
            <div className="other-project-grid">
              {projects.map((project) => (
                <article className="other-project" key={project.id}>
                  <div className="other-project-image"><AssetFrame kind={project.kind} src={project.src} title={project.title} description={`Add ${project.path.replace(/^\//, "public/")}.`} aspect="landscape" /></div>
                  <div className="other-project-copy"><div className="other-project-meta"><span>{project.id}</span><span>{project.category}</span></div><h3>{project.title}</h3><strong>{project.subtitle}</strong><p>{project.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section personal-section" id="personal">
          <div className="section-shell">
            <SectionIndex number="08" label="PERSONAL RECORD" />
            <div className="section-heading"><div><Eyebrow>OUTSIDE ENGINEERING</Eyebrow><h2>Helping an<br/><em>injured pigeon.</em></h2></div><p>A personal experience documented on my LinkedIn profile. I am including it because the work I do is not limited to engineering projects or competition results.</p></div>
            <div className="rescue-story">
              <div className="rescue-copy"><p className="rescue-lead">A pigeon that regularly visited my balcony became injured and could no longer fly properly.</p><p>I tried to find someone who could help. After several unsuccessful calls, I contacted Vidyasagar Jeev Daya Parivar Trust. Their hospital was around 25 kilometres away and they could not send a vehicle, so I was guided on how to transport the bird myself.</p><p>Getting the pigeon safely into a paper bag took hours. I eventually managed to take it to the hospital and hand it over for care. I had a Physics exam the next day, but I did not want to leave the bird without help.</p><a className="text-link" href={LINKEDIN} target="_blank" rel="noreferrer">Read the original LinkedIn post <ArrowUpRight size={15}/></a></div>
              <Figure kind="image" src="/stories/pigeon-rescue/01-balcony.jpg" title="The pigeon on the balcony" detail="Original photograph / before the rescue" description="Add the original first photograph at public/stories/pigeon-rescue/01-balcony.jpg." aspect="portrait" className="rescue-feature-photo" />
            </div>
            <div className="rescue-photo-grid">
              <Figure kind="image" src="/stories/pigeon-rescue/02-rescue-attempt.jpg" title="During the rescue" detail="Attempting to contain the bird safely" description="Add public/stories/pigeon-rescue/02-rescue-attempt.jpg." />
              <Figure kind="image" src="/stories/pigeon-rescue/03-transport.jpg" title="Transport to the hospital" detail="The journey for care" description="Add public/stories/pigeon-rescue/03-transport.jpg." />
              <Figure kind="image" src="/stories/pigeon-rescue/04-aftercare.jpg" title="After handover" detail="Hospital / aftercare, if photographed" description="Add public/stories/pigeon-rescue/04-aftercare.jpg only if you have a genuine photograph." />
            </div>
          </div>
        </section>

        <section className="section record-list-section" id="recognition">
          <div className="section-shell">
            <SectionIndex number="09" label="SELECTED ACHIEVEMENTS & ROLES" />
            <div className="section-heading"><div><Eyebrow>COMPETITIONS · AWARDS · LEADERSHIP</Eyebrow><h2>A wider record<br/><em>of participation and work.</em></h2></div><p>A concise index of selected achievements, roles, invitations and credentials. Each entry is labelled by what it represents.</p></div>
            <div className="recognition-list">
              {recognitions.map((item, index) => <article className="recognition-row" key={item.title}><span className="recognition-no">{String(index + 1).padStart(2, "0")}</span><span className="recognition-kind">{item.kind}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUpRight size={15} /></article>)}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-shell about-layout">
            <SectionIndex number="10" label="ABOUT ANURAG" />
            <div className="about-copy"><Eyebrow>STUDENT · FOUNDER · INDEPENDENT BUILDER</Eyebrow><h2>Student, founder,<br/><em>independent researcher.</em></h2><p className="about-lead">I am a student in Class XI in India. Most of my work has grown through self-directed learning, competition teams, technical reading, mentors and the process of trying to make an idea survive outside a document.</p><p>I am drawn to mechanical engineering because a physical system has to answer to geometry, materials, forces and manufacturing. I am drawn to research because a technical claim should be traceable to evidence. I also care about the human context: a technically elegant solution is not enough if it ignores how people actually live and work.</p><p>I began with limited equipment and learned to work around practical constraints while building my technical foundation. That has made resourcefulness important, but it has also taught me to seek feedback, facilities and collaborators when a project needs them.</p><div className="about-links"><a href={LINKEDIN} target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span> LinkedIn <ArrowUpRight size={14}/></a><a href={`mailto:${EMAIL}`}><Mail size={16}/> Email <ArrowUpRight size={14}/></a><a href={TIRARE} target="_blank" rel="noreferrer">Tirare <ArrowUpRight size={14}/></a></div></div>
            <div className="about-portrait-wrap"><AssetFrame kind="image" src="/profile/anurag-portrait.jpg" title="Anurag Mishra" description="Add a portrait at public/profile/anurag-portrait.jpg." aspect="portrait" /></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-main">
            <div><Eyebrow inverse>CONTACT / COLLABORATION</Eyebrow><h2>Talk about<br/><em>the work.</em></h2><p>For engineering discussions, research feedback, mentorship, collaboration or questions about Tirare and MRII, please get in touch.</p></div>
            <div className="contact-links"><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={18}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={15}/></a><a href={TIRARE} target="_blank" rel="noreferrer">Tirare website <ArrowUpRight size={15}/></a><a href={TIRARE_ARCHIVE} target="_blank" rel="noreferrer">Tirare project archive <ArrowUpRight size={15}/></a></div>
          </div>
          <footer className="site-footer section-shell"><a className="brand brand-footer" href="#top"><span className="brand-mark">AM</span><span className="brand-name">ANURAG MISHRA<small>ENGINEERING / RESEARCH / INITIATIVE</small></span></a><span>Personal portfolio · Tirare is a separate project and venture.</span><a href="#top">Back to top ↑</a><span>© {new Date().getFullYear()} Anurag Mishra</span></footer>
        </section>
      </main>
    </>
  );
}
