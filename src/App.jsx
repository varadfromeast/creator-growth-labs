import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Lightbulb,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { content } from "./content";

const ease = [0.16, 1, 0.3, 1];

function Button({ children, className = "", onClick, type = "button" }) {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} />
    </button>
  );
}

function Header({ onApply }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="shell nav">
        <a className="brand" href="#main" aria-label="Creator Growth Lab home">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>Creator Growth Lab</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {content.nav.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <Button className="nav-button" onClick={onApply}>Apply</Button>
      </div>
    </header>
  );
}

function VentureBlueprint() {
  return (
    <motion.div
      className="venture-blueprint"
      initial={{ opacity: 0, y: 24, rotate: 1.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.18, ease }}
      aria-label="Creator and studio inputs combine into a recurring software venture"
    >
      <div className="blueprint-top">
        <span>Product partnership</span>
        <span className="status"><CircleDot size={14} aria-hidden="true" /> Selective</span>
      </div>
      <div className="blueprint-inputs">
        <div className="blueprint-input creator-input">
          <Users size={21} aria-hidden="true" />
          <span>Creator</span>
          <strong>Trust<br />Distribution<br />Expertise</strong>
        </div>
        <span className="plus" aria-hidden="true">+</span>
        <div className="blueprint-input studio-input">
          <Code2 size={21} aria-hidden="true" />
          <span>Studio</span>
          <strong>Validate<br />Build<br />Operate</strong>
        </div>
      </div>
      <div className="blueprint-output">
        <Sparkles size={20} aria-hidden="true" />
        <div>
          <span>Paid product</span>
          <strong>Useful software people keep paying for.</strong>
        </div>
        <ArrowRight size={20} aria-hidden="true" />
      </div>
      <div className="blueprint-terms">
        <span>Shared ownership</span>
        <span>Recurring revenue</span>
        <span>Clear launch terms</span>
      </div>
    </motion.div>
  );
}

function Hero({ onApply }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease }}
        >
          <p className="signal">{content.hero.signal}</p>
          <h1 id="hero-title">{content.hero.title}</h1>
          <p className="hero-lead">{content.hero.lead}</p>
          <div className="hero-actions">
            <Button onClick={onApply}>{content.hero.cta}</Button>
            <a className="text-link" href="#model">
              {content.hero.secondaryCta}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
          <p className="hero-note"><Check size={16} aria-hidden="true" />{content.hero.note}</p>
        </motion.div>
        <VentureBlueprint />
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof-section" id="proof" aria-labelledby="proof-title">
      <div className="shell">
        <div className="proof-intro">
          <h2 id="proof-title">{content.proof.title}</h2>
          <p>{content.proof.text}</p>
        </div>
        <div className="proof-examples">
          {content.proof.examples.map((example) => (
            <a href={example.url} target="_blank" rel="noreferrer" key={example.product}>
              <span>{example.creator}</span>
              <strong>{example.product}</strong>
              <p>{example.story}</p>
              <small>{example.proof}<ArrowUpRight size={14} aria-hidden="true" /></small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Model() {
  const columns = [
    { ...content.model.creator, className: "creator-side" },
    { ...content.model.studio, className: "studio-side" },
  ];
  return (
    <section className="model-section" id="model" aria-labelledby="model-title">
      <div className="shell">
        <div className="section-intro">
          <h2 id="model-title">{content.model.title}</h2>
          <p>{content.model.intro}</p>
        </div>
        <div className="model-split">
          {columns.map((column) => (
            <div className={`model-column ${column.className}`} key={column.label}>
              <p>{column.label}</p>
              <h3>{column.title}</h3>
              <ul>
                {column.points.map((point) => (
                  <li key={point}><Check size={18} aria-hidden="true" />{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="together-line">{content.model.together}</p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="why-section">
      <div className="shell why-grid">
        <div>
          <Lightbulb aria-hidden="true" size={30} />
          <h2>{content.why.title}</h2>
          <p>{content.why.text}</p>
        </div>
        <div className="outcome-list" aria-label="What a software business still needs">
          {content.why.outcomes.map((outcome, index) => (
            <div key={outcome}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{outcome}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-section shell" id="process" aria-labelledby="process-title">
      <h2 id="process-title">{content.process.title}</h2>
      <ol className="process-list">
        {content.process.steps.map((step, index) => (
          <li key={step.title}>
            <span>{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Fit() {
  return (
    <section className="fit-section" id="fit" aria-labelledby="fit-title">
      <div className="shell fit-grid">
        <div className="fit-copy">
          <h2 id="fit-title">{content.fit.title}</h2>
          <p>{content.fit.text}</p>
        </div>
        <div className="fit-lists">
          <div>
            <h3>Strong fit</h3>
            <ul>
              {content.fit.yes.map((item) => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="not-fit">
            <h3>Not this model</h3>
            <ul>
              {content.fit.no.map((item) => <li key={item}><X size={17} aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Deal() {
  return (
    <section className="deal-section shell">
      <div>
        <span>Partnership, not outsourcing</span>
        <h2>{content.deal.title}</h2>
      </div>
      <p>{content.deal.text}</p>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq-section shell" aria-labelledby="faq-title">
      <h2 id="faq-title">Before you apply.</h2>
      <div className="faq-list">
        {content.faq.map((item) => (
          <details key={item.q}>
            <summary>{item.q}<ChevronDown size={19} aria-hidden="true" /></summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta({ onApply }) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-inner">
        <div>
          <h2>{content.finalCta.title}</h2>
          <p>{content.finalCta.text}</p>
        </div>
        <div>
          <Button onClick={onApply}>{content.finalCta.cta}</Button>
          <small>{content.finalCta.note}</small>
        </div>
      </div>
    </section>
  );
}

function ApplicationForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "", email: "", instagram: "", category: "", problem: "",
  });
  const [state, setState] = useState("idle");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const update = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setState("submitting");
    try {
      const response = await fetch(content.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Creator product partnership landing page" }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <motion.div
      className="form-overlay"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="form-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-title"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease }}
      >
        <button className="form-close" onClick={onClose} aria-label="Close application form">
          <X size={22} />
        </button>
        {state === "success" ? (
          <div className="form-success">
            <span><Check size={28} /></span>
            <h2>{content.leadForm.successTitle}</h2>
            <p>{content.leadForm.successText}</p>
            <button className="text-link" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 id="form-title">{content.leadForm.title}</h2>
            <p className="form-intro">{content.leadForm.text}</p>
            <form onSubmit={submit}>
              <div className="field-row">
                <label>Name<input name="name" required placeholder={content.leadForm.fields.name} value={formData.name} onChange={update} /></label>
                <label>Email<input name="email" type="email" required placeholder={content.leadForm.fields.email} value={formData.email} onChange={update} /></label>
              </div>
              <div className="field-row">
                <label>Channel<input name="instagram" required placeholder={content.leadForm.fields.instagram} value={formData.instagram} onChange={update} /></label>
                <label>Audience category<input name="category" required placeholder={content.leadForm.fields.category} value={formData.category} onChange={update} /></label>
              </div>
              <label>Recurring audience problem<textarea name="problem" required rows="4" placeholder={content.leadForm.fields.problem} value={formData.problem} onChange={update} /></label>
              {state === "error" && <p className="form-error" role="alert">{content.leadForm.error}</p>}
              <Button className="form-submit" type="submit">
                {state === "submitting" ? content.leadForm.submitting : content.leadForm.submit}
              </Button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Header onApply={() => setShowForm(true)} />
      <main id="main">
        <Hero onApply={() => setShowForm(true)} />
        <Proof />
        <Model />
        <Why />
        <Process />
        <Fit />
        <Deal />
        <Faq />
        <FinalCta onApply={() => setShowForm(true)} />
      </main>
      <footer className="site-footer">
        <div className="shell">
          <span>Creator Growth Lab</span>
          <a href={content.instagramUrl} target="_blank" rel="noreferrer">@varad.th</a>
        </div>
      </footer>
      <AnimatePresence>
        {showForm && <ApplicationForm onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </>
  );
}
