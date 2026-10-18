import type { ReactNode } from "react";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioCadExplorer from "@/components/PortfolioCadExplorer";
import EvidenceGallery from "@/components/EvidenceGallery";
import { ArrowDown, ArrowDownRight, ArrowUpRight, FileText, Mail } from "lucide-react";

function LinkedInMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.369 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 9h3.558v11.452H3.56V9z" />
    </svg>
  );
}

function SectionIndex({ children }: { children: string }) {
  return <span className="section-number">{children}</span>;
}

function TrikeSketch() {
  return (
    <div className="portfolio-hero-art" aria-label="Engineering-style line drawing of a cargo tricycle" role="img">
      <div className="art-topline"><span><i /> CURRENT WORK / TIRARE</span><span>FIG. 01</span></div>
      <svg viewBox="0 0 720 390" role="presentation" className="portfolio-trike-svg">
        <defs>
          <pattern id="portfolio-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="currentColor" strokeWidth=".6" opacity=".18" /></pattern>
          <linearGradient id="art-fade" x1="0" x2="1"><stop offset="0" stopColor="#c6d2c7" stopOpacity=".1"/><stop offset=".5" stopColor="#c6d2c7" stopOpacity=".65"/><stop offset="1" stopColor="#c6d2c7" stopOpacity=".1"/></linearGradient>
        </defs>
        <rect width="720" height="390" fill="url(#portfolio-grid)" />
        <g fill="none" stroke="#a8b8ac" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".76">
          <circle cx="164" cy="282" r="63"/><circle cx="164" cy="282" r="51"/><circle cx="164" cy="282" r="7"/>
          <circle cx="535" cy="282" r="63"/><circle cx="535" cy="282" r="51"/><circle cx="535" cy="282" r="7"/>
          {Array.from({length:18},(_,i)=><line key={`a${i}`} x1="164" y1="231" x2="164" y2="275" transform={`rotate(${i*20} 164 282)`}/>)}
          {Array.from({length:18},(_,i)=><line key={`b${i}`} x1="535" y1="231" x2="535" y2="275" transform={`rotate(${i*20} 535 282)`}/>)}
          <path d="M164 282 L229 222 L376 222 L431 282 L535 282" strokeWidth="2.2"/>
          <path d="M229 222 L229 155 L421 155 L421 222"/><path d="M229 155 L255 126 L395 126 L421 155"/><path d="M255 126 V102 H395 V126"/>
          <path d="M256 222 L287 282 L376 282 L410 245"/><path d="M296 282 L310 311 H388"/>
          <path d="M420 222 L476 249 L535 249"/><path d="M534 249 L567 180 L603 180"/><path d="M567 180 L584 155 L620 155"/><path d="M573 183 L589 239"/>
          <circle cx="310" cy="311" r="27"/><path d="M310 311 L333 288 M310 311 L288 291 M310 311 L332 330 M310 311 L288 331"/>
        </g>
        <g fill="none" stroke="#91b7ff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="349" y="190" width="65" height="42" rx="4"/><path d="M349 211 H331 M414 211 H433"/><path d="M363 199 V222 M377 199 V222 M391 199 V222"/><path d="M382 233 L382 250" strokeDasharray="3 5"/>
          <path d="M412 190 L474 135 H575" strokeWidth="1.1"/><circle cx="412" cy="190" r="4" fill="#91b7ff"/>
        </g>
        <g fill="#d7e2d9" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="1.6">
          <text x="480" y="123">ASSIST INTERFACE</text><text x="480" y="146" opacity=".55">schematic location</text>
          <text x="70" y="365" opacity=".7">EXISTING WORK VEHICLE</text><text x="490" y="350" opacity=".45">CONCEPT VIEW</text>
        </g>
        <path d="M48 345 H664" stroke="url(#art-fade)"/>
        <path d="M164 351 V373 H90" stroke="#8d9f92" strokeWidth="1" fill="none"/><circle cx="164" cy="351" r="3" fill="#91b7ff"/>
      </svg>
      <div className="art-bottomline"><span>MECHANICAL DESIGN / CAD / RESEARCH</span><span>SCHEMATIC — NOT FOR FABRICATION</span></div>
    </div>
  );
}

function Story({ number, title, kicker, children }: { number: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <details className="story-item">
      <summary><span className="story-number">{number}</span><span className="story-summary-copy"><small>{kicker}</small><strong>{title}</strong></span><span className="story-open" aria-hidden="true">+</span></summary>
      <div className="story-body">{children}</div>
    </details>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <PortfolioHeader />
      <main id="main">
        <section className="hero section-dark portfolio-hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content page-shell portfolio-hero-content">
            <div className="hero-copy">
              <p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> ANURAG MISHRA / PERSONAL WORK ARCHIVE</p>
              <h1>Build something.<br />Find where it fails.<br /><em>Understand why.</em></h1>
              <p className="hero-deck">I’m a student in India working across mechanical design, mobility, robotics and research. This site records the projects I’ve worked on, the decisions that changed them, and the questions I still need to answer.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#work">Explore the work <ArrowDownRight size={17} /></a>
                <a className="text-link text-link-light" href="#stories">Read the stories <ArrowDown size={16} /></a>
              </div>
            </div>
            <div className="hero-visual-wrap">
              <TrikeSketch />
              <p className="hero-visual-caption">Current focus: Tirare and the Mechanical Rider Intent Interface.</p>
            </div>
          </div>
          <div className="hero-bottom page-shell"><span>MECHANICAL DESIGN / RESEARCH / TEAM PROJECTS</span><span className="scroll-cue">A RECORD OF WORK, NOT A FINISHED STORY <ArrowDown size={13} /></span></div>
        </section>

        <section className="portfolio-intro-strip" aria-label="Selected milestones">
          <div><span className="intro-strip-kicker">SELECTED WORK</span><strong>Tirare / MRII</strong><small>Physical subsystem demonstrated</small></div>
          <div><span className="intro-strip-kicker">RECOGNITION</span><strong>IIIT Delhi E-Pitch Café</strong><small>Winner · Proof-of-Concept track</small></div>
          <div><span className="intro-strip-kicker">PROTOTYPE SUPPORT</span><strong>₹1,00,000</strong><small>Grant support</small></div>
          <div><span className="intro-strip-kicker">RESEARCH</span><strong>IRIS / ETSD0071</strong><small>Submitted for evaluation</small></div>
        </section>

        <section className="section section-paper" id="work">
          <div className="page-shell section-layout">
            <div className="section-aside"><SectionIndex>01 / WORK</SectionIndex><span className="aside-rule"/><p>Projects first.<br/>Claims second.</p></div>
            <div className="section-main">
              <p className="eyebrow">SELECTED PROJECTS</p>
              <h2>Things I’ve tried to<br/><em>understand by building.</em></h2>
              <p className="section-lead">I like work where an idea has to meet constraints: a mechanism that must fit an existing vehicle, a car shaped by competition rules, or a research question that needs a measurement plan rather than a confident-sounding answer.</p>

              <article className="project-feature project-tirare">
                <div className="project-feature-top"><span className="project-kind">01 / MECHANICAL ENGINEERING · ONGOING</span><span className="project-status"><i/> PROTOTYPE STAGE</span></div>
                <div className="project-feature-body">
                  <div className="project-feature-copy">
                    <h3>Tirare</h3>
                    <p className="project-subtitle">Electrification without replacement.</p>
                    <p>A retrofit approach to electric assistance for the cargo tricycles people already use to earn a living. The starting constraint is simple: a new vehicle is not a practical answer for every operator, and losing a day’s work has a cost.</p>
                    <p className="project-role"><strong>My work:</strong> mechanical architecture, CAD, early drivetrain concepts, MRII development, technical documentation, research and validation planning.</p>
                    <div className="project-link-row"><a href="https://tirare-webpage.github.io/" target="_blank" rel="noreferrer" className="text-link-dark">Tirare project website <ArrowUpRight size={15}/></a></div>
                  </div>
                  <div className="project-feature-side"><div className="project-note-line"><span>RECOGNITION</span><strong>Winner, IIIT Delhi E-Pitch Café</strong><p>Proof-of-Concept track; one of 17 selected teams from 300+ applicants.</p></div><div className="project-note-line"><span>SUPPORT</span><strong>₹1,00,000 prototype grant</strong><p>Soft-incubation support through CiPD, IIIT Delhi.</p></div><div className="project-note-line"><span>INTELLECTUAL PROPERTY</span><strong>Provisional application filed</strong><p>India · Application no. 202611118183. Not a granted patent.</p></div></div>
                </div>
              </article>

              <div className="work-context-feature">
                <div className="work-context-copy"><p className="eyebrow">THE WORK THAT MOTIVATED THE PROJECT</p><h3>Before a mechanism, there was a person doing the work.</h3><p>This short contextual clip shows a glimpse of the labour behind the engineering question. It is not a representative survey; it is included to give context, not to turn someone’s working day into a spectacle.</p></div>
                <div className="work-context-video"><video controls preload="metadata" playsInline aria-label="Contextual footage of a working rickshaw or cargo-tricycle operator"><source src="https://tirare-webpage.github.io/videos/worker-reality.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><small>Contextual footage · not a measured study.</small></div>
              </div>
              <article className="project-row">
                <div className="project-row-index">02</div><div className="project-row-main"><p className="eyebrow">MECHANICAL SYSTEM / PHYSICAL PROOF OF CONCEPT</p><h3>MRII — Mechanical Rider Intent Interface</h3><p>A compliant mechanical interface intended to estimate rider-applied torque from relative angular displacement, while a downstream overrunning element is intended to limit actuator influence on the rider-input measurement.</p><p className="project-status-text">Built and demonstrated as a physical subsystem. Full cargo-tricycle integration and vehicle-level field performance remain to be validated.</p></div><div className="project-row-aside"><span>01 / CORE MECHANISM</span><a href="#architecture" aria-label="Go to MRII architecture">Explore mechanism <ArrowUpRight size={16}/></a></div>
              </article>
              <article className="project-row">
                <div className="project-row-index">03</div><div className="project-row-main"><p className="eyebrow">ENGINEERING / TEAM LEADERSHIP</p><h3>F1 in Schools · Team Seraphis</h3><p>Team leader and engineer on a car model developed over roughly six months under dense competition regulations and design constraints. The team qualified for the F1 in Schools National Finals.</p><p className="project-status-text">My contribution sits inside a team result; the model, design process and qualification records are the evidence.</p></div><div className="project-row-aside"><span>02 / AERODYNAMIC DESIGN</span><a href="#stories">Read what happened <ArrowUpRight size={16}/></a></div>
              </article>
              <article className="project-row project-row-last">
                <div className="project-row-index">04</div><div className="project-row-main"><p className="eyebrow">ROBOTICS / COMPETITIONS</p><h3>Robotics and autonomous systems</h3><p>Work connected to WRO Future Engineers and the Robotics for Good Youth Challenge India 2025. The portfolio will add the relevant robot images and official selection records rather than make the two programmes sound like one award.</p></div><div className="project-row-aside"><span>03 / ROBOTICS</span><a href="#recognition">See evidence slots <ArrowUpRight size={16}/></a></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-white" id="process">
          <div className="page-shell">
            <div className="section-heading-row process-heading">
              <div><SectionIndex>02 / HOW I THINK</SectionIndex><h2>Every architecture<br/><em>solves a different problem.</em></h2></div>
              <p className="section-intro">The four CAD stages below are not four versions placed side by side for decoration. They document a change in the engineering question—from power delivery, to the conditions that make a retrofit useful.</p>
            </div>
            <div className="thinking-sequence">
              <article><span>01</span><h3>Observe</h3><p>Start with the vehicle, the work it already does, and the constraints that cannot be ignored.</p></article>
              <article><span>02</span><h3>Set constraints</h3><p>Write down what must stay: the existing vehicle, manual rideability, serviceability and realistic installation.</p></article>
              <article><span>03</span><h3>Model</h3><p>Use CAD to expose the power path, space conflicts, mounting assumptions and hard-to-see interactions.</p></article>
              <article><span>04</span><h3>Reject or revise</h3><p>When an architecture fails an important constraint, change it. Time already spent is not evidence that a design is right.</p></article>
              <article><span>05</span><h3>Define the test</h3><p>Separate what a drawing suggests, what a model calculates, what a prototype demonstrates and what a field trial would prove.</p></article>
            </div>
            <div className="cad-section-intro"><div><p className="eyebrow">DESIGN EVOLUTION / FOUR CAD VIEWS</p><h3>Follow the constraint, not just the shape.</h3></div><p>Choose a stage to read the reasoning behind it. The 3D viewer uses the public-safe GLB files added to the project. Until those files are placed in the models folder, the panel shows an honest placeholder.</p></div>
            <PortfolioCadExplorer />
          </div>
        </section>

        <section className="section section-paper" id="stories">
          <div className="page-shell section-layout">
            <div className="section-aside"><SectionIndex>03 / STORIES</SectionIndex><span className="aside-rule"/><p>Work has a<br/>history.</p></div>
            <div className="section-main">
              <p className="eyebrow">THE PART THAT DOESN’T FIT IN A CERTIFICATE</p>
              <h2>How the work<br/><em>actually happened.</em></h2>
              <p className="section-lead">These are not proof that every attempt went well. They are the context behind the work: what I started with, what broke, and why I chose a different route.</p>
              <div className="stories-list">
                <Story number="01" kicker="TIRARE / ORIGIN" title="A broken pedal changed the question">
                  <p>I noticed a cargo tricycle still carrying goods even though its pedal was broken. The detail that stayed with me was that the vehicle was not working as intended, but the work continued. Repair costs money and time; replacement costs more. For someone who depends on the vehicle for income, stopping is not an abstract engineering inconvenience.</p>
                  <p>That changed my question. I stopped thinking only about how to build an electric vehicle and started asking whether the vehicle people already own could be made less physically demanding to use.</p>
                  <p className="story-footnote">This was an observation that shaped the project, not a formal survey or a claim about every operator.</p>
                </Story>
                <Story number="02" kicker="THE MACHINE THAT CARRIED THE WORK" title="The HP 240 G8">
                  <p>Much of Tirare’s early CAD, architecture and documentation was done on an HP 240 G8 that I had repaired myself after I was told it could not be fixed. It was far from a pristine workstation: the keyboard became unreliable, several keys were missing, and I continued with an external keyboard.</p>
                  <p>At the IIIT Delhi E-Pitch Café presentation, the laptop battery ran out in the middle of the pitch. I kept explaining the work. The project was later selected as the Proof-of-Concept track winner and received ₹1 lakh in prototype support.</p>
                  <p>I don’t treat the laptop as a hardship prop. It’s simply part of the project’s record: the machine on which the first versions were drawn, written, reconsidered and rebuilt.</p>
                  <div className="story-media-slot"><span>PHOTO SLOT</span><strong>Add a photo of the original HP 240 G8 here</strong><small>Suggested filename: public/stories/hp-240-g8.jpg</small></div>
                </Story>
                <Story number="03" kicker="ENGINEERING / REVISION" title="When 96 pages were not enough">
                  <p>An early Tirare approach grew into a 96-page engineering proof-of-concept. The document contained a lot of work, but that did not make the architecture sound. I found a fundamental flaw in how the drivetrain interacted with the existing axle and pedal path.</p>
                  <p>I chose to stop defending that design and rebuild the approach around the actual mechanical constraints. It meant giving up work that had taken months, but keeping a flawed design because I had invested time in it would have been worse.</p>
                  <p>That experience changed the standard I use: effort is not validation. A drawing is not a test. The next version has to answer the specific question the previous one left unresolved.</p>
                </Story>
                <Story number="04" kicker="F1 IN SCHOOLS / A SECOND ROUTE" title="Finding another way to Nationals">
                  <p>My first F1 in Schools team attempt fell through when the team did not show up. I could have left the competition there, but I contacted Shiv Nadar School directly and asked whether another opportunity was possible. I was able to join the group that became Team Seraphis and eventually served as team leader and engineer.</p>
                  <p>The car model took around six months of design and iteration under a detailed rulebook and tight constraints. The team qualified for the National Finals. The result was shared, and the work was not only the car: it also involved learning to coordinate a team and keep the design moving under deadlines.</p>
                  <div className="story-media-slot"><span>PHOTO SLOT</span><strong>Add the car model and National Finals evidence</strong><small>Suggested folder: public/stories/f1-seraphis/</small></div>
                </Story>
                <Story number="05" kicker="WRITING / PERSONAL ESSAY" title="The art of not ignoring">
                  <p>I wrote about a pigeon that came to sit on my balcony and one day was visibly unwell. I was frightened of handling it and had a major Physics exam the next day. I called for help, eventually found an animal hospital willing to advise me, and spent hours trying to get the bird safely into a bag for the trip.</p>
                  <p>The essay is about the moment when noticing something becomes a decision to respond. I do not list it as an achievement. It is a personal piece of writing about uncertainty, responsibility and choosing to try while still afraid.</p>
                  <p className="story-footnote">This story is shown as writing, not a credential. It can be removed from the public site if you decide it belongs only in an application essay.</p>
                </Story>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark portfolio-architecture" id="architecture">
          <div className="page-shell section-layout">
            <div className="section-aside section-aside-light"><SectionIndex>04 / MRII</SectionIndex><span className="aside-rule"/><p>Mechanism<br/>before claim.</p></div>
            <div className="section-main">
              <p className="eyebrow light-eyebrow">MECHANICAL RIDER INTENT INTERFACE</p>
              <h2>A rider-input signal<br/><em>with a defined load path.</em></h2>
              <div className="architecture-intro-grid"><p>MRII investigates a mechanical interface for estimating human-applied effort in a human-plus-powered drivetrain. The design combines a compliant torsional coupling, whose relative angular displacement is sensed, with a downstream overrunning element intended to limit powered torque from influencing the rider-input measurement.</p><p>The physical MRII subsystem has been built and demonstrated. The complete cargo-tricycle retrofit has not yet been fully integrated and field-validated. The difference matters—and it belongs on the same page as the mechanism.</p></div>
              <div className="torque-equation"><span>Human torque</span><b>+</b><span>Motor torque</span><b>=</b><span>Axle torque</span></div>
              <div className="mrii-specimen-grid">
                <div className="mrii-specimen"><span>01 / MECHANICAL INTERFACE</span><h3>Compliance gives the signal a physical meaning.</h3><p>Human torque deforms the compliant member. Relative angular displacement between input and output members is the torque-related measurand.</p></div>
                <div className="mrii-specimen"><span>02 / ANGLE SENSING</span><h3>Measure the relative rotation.</h3><p>The documented prototype configuration uses an AS5047P magnetic angle sensor. The measured angle is not, by itself, proof of a calibrated physical torque output.</p></div>
                <div className="mrii-specimen"><span>03 / TORQUE ISOLATION</span><h3>Keep powered torque from corrupting rider input.</h3><p>A downstream overrunning element is intended to manage reverse-side torque influence. Its effectiveness must be tested in matched conditions with clutch state verified.</p></div>
              </div>
              <div className="mrii-video-block">
                <div><p className="eyebrow light-eyebrow">TECHNICAL ANIMATION</p><h3>MRII: intended mechanism and torque path</h3><p>The animation explains the architecture. It is not evidence of a full-vehicle field trial.</p></div>
                <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/TURjNSFJ2PE?rel=0&modestbranding=1" title="MRII mechanism and technical explanation" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
              </div>
              <div className="patent-line"><div><span>INDIA / PROVISIONAL APPLICATION FILED</span><strong>202611118183</strong></div><p>Filed 2 September 2026 according to the project record. Provisional application, not a granted patent.</p></div>
            </div>
          </div>
        </section>

        <section className="section section-white" id="research">
          <div className="page-shell section-layout">
            <div className="section-aside"><SectionIndex>05 / RESEARCH</SectionIndex><span className="aside-rule"/><p>Analysis is not<br/>the same as proof.</p></div>
            <div className="section-main">
              <p className="eyebrow">IRIS NATIONAL FAIR 2026–27 / ENGINEERING MECHANICS</p>
              <h2>A research question<br/><em>that can be tested.</em></h2>
              <div className="research-paper-header"><div><p className="research-paper-label">SUBMITTED PROJECT / ETSD0071</p><h3>Quantitative Assessment of a Compliant Rider-Input Interface for Torque-Assisted Mobility</h3></div><span className="research-status">SUBMITTED FOR EVALUATION</span></div>
              <div className="research-paper-columns"><div><h4>Question</h4><p>Can a compliant rider-input interface provide a useful torque-related angular signal while limiting actuator-induced apparent input in a human-plus-powered drivetrain?</p><h4>Work</h4><p>The paper and synopsis define the interface measurand and torque reference planes, analyse torque–angle records, examine matched-condition actuator-isolation data, compare flexure candidates, and identify the experiments needed for physical confirmation.</p><h4>Current boundary</h4><p>The numerical values in the current analysis must be distinguished from independently verified physical measurements. Traceable calibration and synchronized tests on a frozen assembly remain validation tasks.</p></div><div className="research-paper-viewer"><div className="document-viewer-heading"><FileText size={18}/><span>RESEARCH PAPER / DRIVE PREVIEW</span><a href="https://drive.google.com/file/d/1XBd-PEDUR0sacBVPBr6hy2ZznNF6v-A9/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="Open full research paper in Google Drive"><ArrowUpRight size={16}/></a></div><iframe src="https://drive.google.com/file/d/1XBd-PEDUR0sacBVPBr6hy2ZznNF6v-A9/preview" title="MRII research paper preview" loading="lazy" allow="autoplay" referrerPolicy="strict-origin-when-cross-origin"/><p>If the preview is blocked by Drive permissions, use the open-paper icon above. The document must have link-view access for external visitors.</p></div></div>
              <div className="research-workstreams"><span>RELATED WORKSTREAMS</span><p>Measurement methodology · vehicle load-envelope calculations · flexure geometry and material assumptions · model comparisons · prior-art analysis. These are supporting research workstreams, not separate publications unless a publication record exists.</p></div>
            </div>
          </div>
        </section>

        <section className="section section-paper" id="recognition">
          <div className="page-shell section-layout">
            <div className="section-aside"><SectionIndex>06 / RECOGNITION</SectionIndex><span className="aside-rule"/><p>Evidence where<br/>it belongs.</p></div>
            <div className="section-main">
              <p className="eyebrow">AWARDS, SELECTIONS AND ROLES</p>
              <h2>Keep the record<br/><em>specific.</em></h2>
              <div className="recognition-list">
                <article className="recognition-feature"><div className="recognition-feature-label">WRITING / INTERNATIONAL COMPETITION</div><div><h3>Bronze Medal · Queen’s Commonwealth Essay Competition</h3><p>The 2025 edition received 53,434 entries from 54 Commonwealth countries. The medal is the result; the number gives context to the scale of the competition, not an exact rank.</p><a href="https://drive.google.com/file/d/1s2D5yjWjhejEhsmDsDqaNVIgs6ERCqRE/view?usp=sharing" target="_blank" rel="noreferrer" className="text-link-dark">View Bronze Medal Certificate <ArrowUpRight size={15}/></a></div></article>
                <article><span>ENGINEERING / TEAM</span><div><h3>F1 in Schools · National Finals</h3><p>Team Seraphis · Team leader and engineer.</p></div></article>
                <article><span>ROBOTICS</span><div><h3>WRO Future Engineers</h3><p>National finalist.</p></div></article>
                <article><span>ROBOTICS / 2025</span><div><h3>Robotics for Good Youth Challenge India</h3><p>Selected for the national-level stage in 2025.</p></div></article>
                <article><span>LEADERSHIP</span><div><h3>Student Innovation Council · Ambience Public School</h3><p>Head of the council.</p></div></article>
                <article><span>CLIMATE COMMUNICATION</span><div><h3>Climate Cardinals</h3><p>Delhi State Lead.</p></div></article>
                <article><span>INVESTMENT SIMULATION</span><div><h3>Wharton Global High School Investment Competition</h3><p>The team reported a simulated competition-portfolio gain above $100,000. This was not personal cash earnings; include the value only alongside the relevant competition record.</p></div></article>
                <article><span>FOUNDER / PITCH SELECTION</span><div><h3>UPES Future Founders Challenge 2026</h3><p>Selected to pitch for a ₹1.5 lakh grand prize. This is a selection to pitch, not a claim that the prize was won.</p></div></article>
                <article><span>TECHNICAL CREDENTIAL</span><div><h3>GitHub Foundations Badge</h3><p>Credential in GitHub fundamentals.</p></div></article>
                <article><span>PODCAST / INVITATION</span><div><h3>Wharton Global Youth Program</h3><p>Invited to contribute to a podcast and recorded remotely.</p></div></article>
                <article><span>DESIGN / INVITATION</span><div><h3>International space-settlement design pathway</h3><p>Invited into an international pathway; I did not proceed to full participation.</p></div></article>
              </div>
              <div className="evidence-heading"><div><p className="eyebrow">DOCUMENTS / ADD YOUR FILES</p><h3>Certificates and records</h3></div><p>The page has empty evidence slots for scans or screenshots. Only files placed in the evidence folder appear; nothing is fabricated to fill the gaps.</p></div>
              <EvidenceGallery />
            </div>
          </div>
        </section>

        <section className="section section-white" id="about">
          <div className="page-shell section-layout">
            <div className="section-aside"><SectionIndex>07 / ABOUT</SectionIndex><span className="aside-rule"/><p>Still<br/>learning.</p></div>
            <div className="section-main about-main">
              <p className="eyebrow">ANURAG MISHRA / AMBIENCE PUBLIC SCHOOL</p>
              <h2>I don’t expect the first<br/><em>answer to be right.</em></h2>
              <p className="about-paragraph">My work crosses mechanical design, mobility, research, robotics and writing. I have learned a lot by trying to build before I feel fully ready—and by finding out that a design, a plan or an assumption does not survive contact with reality.</p>
              <p className="about-paragraph">I’m interested in engineering that starts with people’s actual conditions, research that says exactly what its evidence supports, and projects where changing your mind is part of doing the work well.</p>
              <p className="about-paragraph">This portfolio is a living record. It includes completed milestones, unfinished work and questions that still need answers. I’ll update it as the evidence changes.</p>
              <div className="about-links"><a href="https://www.linkedin.com/in/anurag-mishra-b25733340/" target="_blank" rel="noreferrer"><LinkedInMark size={16} /> LinkedIn <ArrowUpRight size={14}/></a><a href="mailto:anuragfromtirare@gmail.com"><Mail size={16}/> Email <ArrowUpRight size={14}/></a></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-dark" id="contact">
          <div className="page-shell contact-inner portfolio-contact-inner">
            <div><p className="eyebrow light-eyebrow"><span className="eyebrow-line"/> CONTACT</p><h2>Talk about the<br/><em>work itself.</em></h2><p className="contact-deck">I’m glad to hear from engineers, researchers, builders and people who want to ask a careful question about one of these projects.</p></div>
            <div className="contact-actions"><a className="contact-email" href="mailto:anuragfromtirare@gmail.com">anuragfromtirare@gmail.com <ArrowUpRight size={18}/></a><a href="https://www.linkedin.com/in/anurag-mishra-b25733340/" target="_blank" rel="noreferrer" className="text-link text-link-light">LinkedIn profile <ArrowUpRight size={15}/></a></div>
          </div>
          <footer className="site-footer page-shell portfolio-footer"><a className="portfolio-brand portfolio-brand-footer" href="#top"><span className="portfolio-monogram">AM<span>.</span></span><span className="portfolio-brand-text">ANURAG MISHRA<small>WORK / RESEARCH / NOTES</small></span></a><span>Selected work, with context.</span><span>© {new Date().getFullYear()} Anurag Mishra</span></footer>
        </section>
      </main>
    </>
  );
}
