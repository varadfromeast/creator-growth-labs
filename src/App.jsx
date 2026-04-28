import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
  X,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { content } from "./content";

const ease = [0.16, 1, 0.3, 1];

function ExternalCta({ className = "", children = content.hero.cta, microCopy, onClick }) {
  return (
    <div className="cta-wrapper">
      <a
        className={`cta-link ${className}`}
        href={content.instagramUrl}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        <span>{children}</span>
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} />
      </a>
      {microCopy && <p className="cta-micro-copy">{microCopy}</p>}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="shell nav">
        <a className="brand" href="#main" aria-label="Creator Growth Lab home">
          <span className="brand-mark" aria-hidden="true">
            <Sparkles size={18} strokeWidth={2.5} />
          </span>
          <span>Creator Growth Lab</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ExternalCta className="nav-cta" />
      </div>
    </header>
  );
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroWords = content.hero.title.split(" ");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <span className="live-dot" aria-hidden="true" />
            {content.hero.eyebrow}
          </motion.p>

          <motion.p
            className="scarcity-badge"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
          >
            {content.hero.scarcityBadge}
          </motion.p>

          <h1 id="hero-title">
            {heroWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={shouldReduceMotion ? false : { opacity: 1, y: 12 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.46, delay: index * 0.024, ease }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="lead"
            initial={shouldReduceMotion ? false : { opacity: 0.82, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
          >
            {content.hero.lead}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0.82, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            <ExternalCta microCopy={content.hero.ctaMicroCopy} />
            <a className="ghost-link" href="#systems">
              <span>{content.hero.secondaryCta}</span>
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />
            </a>
          </motion.div>

          <div className="proof-strip" aria-label="Service outcomes">
            {content.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Not vague interest. People ready to pay.",
    "Not ad homework. Handled tests.",
    "Not random reach. Paid demand.",
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ChapterMarker({ children }) {
  return (
    <div className="chapter-marker shell">
      <motion.span
        initial={{ opacity: 0, scaleX: 0.72 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.62, ease }}
      >
        {children}
      </motion.span>
    </div>
  );
}

function ScrollStory({ chapter, index }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -18]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.62, 1, 1, 0.78]);
  const boardY = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, -56]);
  const boardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [1.8, 0, -1.4]);
  const boardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.88, 1], [0.52, 1, 1, 0.72]);

  return (
    <section ref={ref} className={`scroll-story shell story-${index + 1}`} aria-labelledby={`story-${index + 1}-title`}>
      <motion.div
        className="story-copy"
        style={shouldReduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
      >
        <p className="kicker">{chapter.label}</p>
        <h2 id={`story-${index + 1}-title`}>{chapter.title}</h2>
        <p>{chapter.text}</p>
      </motion.div>

      <motion.div
        className="story-proof"
        style={shouldReduceMotion ? undefined : { y: boardY, rotate: boardRotate, opacity: boardOpacity }}
        aria-label={`${chapter.title} proof points`}
      >
        <div className="story-proof-label">
          <Sparkles aria-hidden="true" size={18} />
          <span>Creator Growth Lab</span>
        </div>
        <div className="story-chips">
          {chapter.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Offer() {
  return (
    <section className="offer-section shell" id="offer" aria-labelledby="offer-title">
      <ScrollReveal className="offer-panel">
        <p className="kicker">{content.offer.kicker}</p>
        <h2 id="offer-title">{content.offer.title}</h2>
        <p>{content.offer.text}</p>
      </ScrollReveal>

      <div className="offer-list">
        {content.offer.points.map((point, index) => (
          <ScrollReveal key={point.title} className="offer-point" delay={index * 0.08}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-section shell" id="process" aria-labelledby="process-title">
      <ScrollReveal className="section-head">
        <p className="kicker">{content.process.kicker}</p>
        <h2 id="process-title">{content.process.title}</h2>
      </ScrollReveal>

      <div className="process-board">
        {content.process.steps.map((step, index) => (
          <ScrollReveal key={step} className="process-step" delay={index * 0.08}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function Systems() {
  const icons = [ScanLine, Zap, ShieldCheck, TrendingUp];

  return (
    <section className="systems-section shell" id="systems" aria-labelledby="systems-title">
      <ScrollReveal className="systems-copy">
        <p className="kicker">{content.systems.kicker}</p>
        <h2 id="systems-title">{content.systems.title}</h2>
        <p>{content.systems.text}</p>
      </ScrollReveal>

      <ScrollReveal className="systems-console" delay={0.08}>
        {content.systems.rows.map(([action, label], index) => {
          const Icon = icons[index];
          return (
            <div className="console-row" key={action}>
              <span className="console-icon">
                <Icon aria-hidden="true" size={19} />
              </span>
              <strong>{label}</strong>
              <em>{action}</em>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}

function Fit() {
  return (
    <section className="fit-section shell" id="fit" aria-labelledby="fit-title">
      <ScrollReveal className="section-head">
        <p className="kicker">{content.fit.kicker}</p>
        <h2 id="fit-title">{content.fit.title}</h2>
        <p>{content.fit.text}</p>
      </ScrollReveal>

      <div className="fit-columns">
        <FitColumn title="Best fit" tone="yes" items={content.fit.best} />
        <FitColumn title="Not a fit" tone="no" items={content.fit.not} />
      </div>
    </section>
  );
}

function FitColumn({ title, tone, items }) {
  return (
    <ScrollReveal className={`fit-column ${tone}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

function Faq() {
  return (
    <section className="faq-section shell" aria-labelledby="faq-title">
      <ScrollReveal className="section-head compact">
        <p className="kicker">Good questions</p>
        <h2 id="faq-title">Simple answers before we talk.</h2>
      </ScrollReveal>

      <div className="faq-list">
        {content.faq.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function LeadForm({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", instagram: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your backend/Airtable/Google Sheets
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <motion.div
      className="lead-form-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lead-form-panel"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="form-close" onClick={onClose} aria-label="Close form">
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <h3>{content.leadForm.title}</h3>
            <p>{content.leadForm.text}</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={content.leadForm.fields.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder={content.leadForm.fields.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder={content.leadForm.fields.instagram}
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                required
              />
              <button type="submit" className="form-submit">
                {content.leadForm.submit}
              </button>
            </form>

            <a href={content.instagramUrl} target="_blank" rel="noreferrer" className="form-skip">
              {content.leadForm.skip}
            </a>
          </>
        ) : (
          <div className="form-success">
            <CheckCircle2 size={48} />
            <h3>Request received!</h3>
            <p>We'll analyze your content and reach out within 24 hours.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function FinalCta() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="final-cta shell" id="talk" aria-labelledby="cta-title">
      <ScrollReveal className="cta-panel">
        <div>
          <p className="kicker">{content.cta.kicker}</p>
          <h2 id="cta-title">{content.cta.title}</h2>
          <p>{content.cta.text}</p>
        </div>
        <ExternalCta microCopy={content.cta.ctaMicroCopy} onClick={(e) => {
          e.preventDefault();
          setShowForm(true);
        }} />
      </ScrollReveal>

      <AnimatePresence>
        {showForm && <LeadForm onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </section>
  );
}

function ScrollReveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={shouldReduceMotion ? undefined : { y: [0, -2, 0] }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function StickyMobileCta() {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollThreshold = windowHeight * 0.5;
      const footerThreshold = documentHeight - windowHeight - 400;

      setIsVisible(latest > scrollThreshold && latest < footerThreshold && window.innerWidth <= 879);
    });
  }, [scrollY]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="sticky-mobile-cta"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <button
              className="cta-link"
              onClick={() => setShowForm(true)}
            >
              <span>Get free content audit</span>
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && <LeadForm onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollProgress />
      <StickyMobileCta />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <ChapterMarker>{content.chapters[0].label}</ChapterMarker>
        <ScrollStory chapter={content.chapters[0]} index={0} />
        <Offer />
        <ChapterMarker>{content.chapters[1].label}</ChapterMarker>
        <ScrollStory chapter={content.chapters[1]} index={1} />
        <Process />
        <ChapterMarker>{content.chapters[2].label}</ChapterMarker>
        <ScrollStory chapter={content.chapters[2]} index={2} />
        <Systems />
        <Fit />
        <Faq />
        <FinalCta />
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>Instagram: @varad.th</span>
        </div>
      </footer>
    </>
  );
}

export default App;
