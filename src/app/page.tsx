"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Briefcase, 
  Award, 
  Code, 
  Database, 
  Settings, 
  GraduationCap, 
  ArrowRight, 
  ArrowUp,
  Menu,
  X 
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 1200;
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const scroll = () => {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = easeInOutCubic(time);
      window.scroll(0, Math.ceil(timeFunction * (0 - start) + start));

      if (window.pageYOffset === 0 || time === 1) return;
      requestAnimationFrame(scroll);
    };

    scroll();
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Refreshable Reporting Pipeline",
      category: "Automation / Planning Analytics",
      description: "Built a Power Query and basic SQL workflow that replaced manual report preparation, reducing a recurring reporting cycle from 2 days to 1 hour. Standardized source extraction and transformation. Reduced manual copy-paste risk and rework. Improved management visibility through reusable dashboards.",
      tags: ["Power Query", "SQL", "Excel VBA"]
    },
    {
      title: "Spare Parts Location Planning",
      category: "Warehouse Optimization",
      description: "Analyzed part movement frequency to classify fast-moving, slow-moving, and dead stock, then reorganized locations to support faster issuing and clearer control.",
      tags: ["Inventory Optimization", "Logistics", "Process Design"]
    },
    {
      title: "Budget vs Demand Logic Tool",
      category: "Demand / Capacity Planning",
      description: "Developed a planning model to compare resource capacity with demand requirements, helping planners reduce manual judgment and align allocation decisions.",
      tags: ["Forecasting", "Data Analytics", "Planning"]
    }
  ];

  const experience = [
    {
      role: "Warehouse Specialist",
      company: "TITANICOM TECH (THAILAND) CO., LTD.",
      period: "Mar 2026 - Present",
      description: "Manages IT server spare parts inventory from receiving to issuance, returns, stock counting, location control, and reconciliation between physical stock and records.",
      details: [
        "Managed inbound receiving, outbound issuance, returns, cycle counts, and inventory record reconciliation for IT server spare parts.",
        "Analyzed movement history to classify fast-moving, slow-moving, and dead stock items for clearer storage and replenishment decisions.",
        "Reorganized warehouse locations around picking frequency to reduce walking distance and improve spare parts accessibility.",
        "Prepared recurring inventory and operations reports covering stock movement, usage, outstanding items, and warehouse performance indicators.",
        "Standardized storage arrangement, spare parts handling, and inventory update routines to improve process consistency."
      ]
    },
    {
      role: "Capacity Planner",
      company: "HANESBRANDS ROH ASIA LTD.",
      period: "Feb 2025 - Feb 2026",
      description: "Built automated reporting and planning tools using Power Query, basic SQL, and Excel logic to improve budget, demand, and resource visibility.",
      details: [
        "Built an automated reporting pipeline using Power Query and basic SQL to extract, transform, and refresh planning data.",
        "Replaced manual report preparation with reusable dashboard logic, reducing report cycle time from 2 days to 1 hour.",
        "Created a logic-based planning tool to compare budget, demand, and available resources for more consistent allocation decisions.",
        "Improved planning visibility by standardizing source data, transformation rules, and refresh routines."
      ]
    },
    {
      role: "Demand Planner",
      company: "HANESBRANDS ROH ASIA LTD.",
      period: "Jun 2024 - Dec 2024",
      description: "Analyzed sales trends, monitored inventory thresholds, initiated production orders, and investigated order cancellations through root cause analysis.",
      details: [
        "Analyzed sales trends with Excel Pivot Tables to support demand planning decisions and production order timing.",
        "Monitored inventory thresholds and initiated production orders for styles below safety levels to reduce stockout risk.",
        "Investigated order cancellations through root cause analysis, including factory delay and warehouse discrepancy factors.",
        "Supported planning reviews by connecting demand signals with inventory status and production needs."
      ]
    }
  ];

  const expertise = [
    {
      category: "Data Automation",
      skills: ["Advanced Power Query", "Excel VBA Automation", "Dashboard Tracking", "Reporting Flows"],
      icon: <Database className="w-5 h-5" />
    },
    {
      category: "Planning",
      skills: ["Capacity Planning", "Inventory Optimization", "Sales Trend Analysis", "Root Cause Analysis"],
      icon: <Award className="w-5 h-5" />
    },
    {
      category: "Warehouse Control",
      skills: ["Spare Parts Control", "Stock Reconciliation", "FIFO Management", "Inbound/Outbound Flow"],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      category: "Process Design",
      skills: ["Dynamics NAV", "Workflow Standardization", "Documentation", "Operating Routines"],
      icon: <Settings className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const viewportConfig = { once: true, amount: 0.1, margin: "0px 0px -100px 0px" };

  return (
    <main className="min-h-screen bg-background text-primary selection:bg-muted/30 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-700 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-accent-light shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold tracking-tighter uppercase group flex items-center"
          >
            <span className="group-hover:text-muted transition-colors duration-500">Peach</span>
            <span className="text-muted group-hover:scale-150 transition-transform duration-500 ml-0.5">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors duration-500 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muted transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary hover:text-muted transition-colors duration-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center space-y-12 p-6"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-4xl font-bold tracking-tighter uppercase hover:text-muted transition-colors duration-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-12 flex flex-col items-center space-y-4 text-muted font-bold text-xs uppercase tracking-widest">
              <a href="mailto:theerapong.thana@outlook.com">theerapong.thana@outlook.com</a>
              <a href="tel:+66808314717">+66 80 831 4717</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative pt-48 pb-24 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="text-muted font-bold uppercase text-[10px] mb-8"
            >
              Operations Data & Automation Specialist
            </motion.h2>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.85]">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="inline-block"
              >
                Theerapong
              </motion.span> <br /> 
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-accent italic inline-block"
              >
                Thanarodpaibun
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="max-w-2xl text-xl text-muted leading-relaxed mb-12 font-medium"
            >
              I turn warehouse movement, inventory records, and planning inputs into practical operating systems: cleaner dashboards, faster reports, and sharper decisions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#contact" className="group bg-primary text-background px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-muted transition-colors duration-500 flex items-center shadow-lg">
                Contact <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </a>
              <a href="#projects" className="border border-primary/20 px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:border-primary transition-colors duration-500">
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-accent-light">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { label: "Reporting Cycle Reduced", value: "2d → 1h" },
            { label: "Inventory Accuracy", value: "100%" },
            { label: "Based in", value: "Bangkok" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <span className="text-5xl font-bold mb-3 tracking-tighter text-primary">{stat.value}</span>
              <span className="text-muted text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              viewport={viewportConfig}
              transition={{ duration: 1 }}
            >
              <h3 className="text-4xl font-bold mb-10 tracking-tight leading-tight text-primary">Bridging the gap between physical operations and data logic.</h3>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Peach combines hands-on warehouse discipline with planning analytics. The profile is strongest where a team needs someone who understands physical stock movement, can diagnose data gaps, and can build simple tools that make daily decisions faster.
              </p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-accent-light/30 rounded-[2rem] border border-accent-light shadow-sm"
              >
                <h4 className="font-bold text-xs uppercase tracking-widest mb-4 flex items-center text-muted">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse" />
                  Current Focus
                </h4>
                <p className="text-primary font-bold">Inventory visibility, stock accuracy, and automated reporting flows.</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {expertise.map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -12, borderColor: "#27695e" }}
                  className="p-8 bg-white/20 border border-accent-light rounded-3xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h4 className="font-bold text-sm uppercase tracking-tight mb-4 text-primary">{item.category}</h4>
                  <ul className="space-y-2">
                    {item.skills.map((s, j) => (
                      <li key={j} className="text-xs text-muted font-medium flex items-center">
                        <ChevronRight className="w-3 h-3 mr-1 text-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 bg-accent-light/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={viewportConfig}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
          >
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-4 text-primary">Case Studies</h2>
              <p className="text-muted uppercase tracking-widest text-[10px] font-bold">Measurable Operational Value</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={viewportConfig}
                transition={{ duration: 1, delay: i * 0.15 }}
                whileHover={{ x: 15 }}
                className="group p-10 bg-white/30 border border-accent-light rounded-[2.5rem] flex flex-col md:flex-row gap-12 shadow-sm hover:shadow-2xl transition-shadow duration-1000"
              >
                <div className="md:w-1/3">
                  <div className="text-muted text-[10px] font-bold uppercase tracking-widest mb-4">{project.category}</div>
                  <h4 className="text-3xl font-bold mb-6 tracking-tight leading-tight text-primary">{project.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[9px] uppercase tracking-widest font-bold px-4 py-2 bg-background rounded-full border border-accent-light group-hover:border-primary/40 transition-colors duration-700">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted leading-relaxed text-lg mb-8">{project.description}</p>
                  <button className="flex items-center text-xs font-bold uppercase tracking-widest text-primary group-hover:text-muted transition-colors duration-500">
                    Read detailed scope <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="resume" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            viewport={viewportConfig}
            transition={{ duration: 1 }}
            className="text-5xl font-bold tracking-tighter mb-20 text-primary"
          >
            Career Timeline
          </motion.h2>
          <div className="space-y-20 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-accent-light md:left-[2.5rem]" />

            {experience.map((exp, i) => (
              <motion.div 
                key={i} 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={viewportConfig}
                transition={{ duration: 0.8 }}
                className="group relative pl-8 md:pl-20"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary md:left-[2.35rem] group-hover:scale-150 transition-transform duration-500 shadow-[0_0_12px_rgba(39,105,94,0.4)]" />
                
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-8 gap-4">
                  <div>
                    <motion.h4 
                      whileHover={{ color: "#57836f" }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl font-bold text-primary cursor-default"
                    >
                      {exp.role}
                    </motion.h4>
                    <p className="text-muted font-bold text-xs uppercase tracking-widest mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-black bg-primary/5 px-4 py-2 rounded-full uppercase tracking-widest whitespace-nowrap shadow-sm text-primary">{exp.period}</span>
                </div>
                <p className="text-muted font-medium mb-8 leading-relaxed italic border-l-2 border-accent-light pl-4">{exp.description}</p>
                <ul className="space-y-4">
                  {exp.details.map((detail, j) => (
                    <motion.li 
                      key={j} 
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 15 }}
                      viewport={viewportConfig}
                      transition={{ duration: 0.6, delay: j * 0.08 }}
                      className="flex items-start text-sm text-muted leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-4 shrink-0 opacity-60" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.96 }}
            viewport={viewportConfig}
            transition={{ duration: 1 }}
            className="mt-32 p-12 bg-white/20 border border-accent-light rounded-[3rem] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
            <div className="flex items-center mb-8 text-primary">
              <GraduationCap className="w-8 h-8 mr-4" />
              <h3 className="text-3xl font-bold tracking-tight">Education</h3>
            </div>
            <h4 className="text-xl font-bold mb-2 text-primary">Bachelor of Logistics and Supply Chain Management</h4>
            <p className="text-muted font-medium mb-6">Dhurakij Pundit University, CIBA</p>
            <div className="flex flex-wrap gap-4 items-center">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2.5 bg-primary text-background rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md transition-transform"
              >
                First Class Honours
              </motion.span>
              <span className="text-xs font-bold text-muted px-4 py-2 bg-background rounded-full border border-accent-light">GPA 3.51</span>
              <span className="text-xs font-bold text-muted px-4 py-2 bg-background rounded-full border border-accent-light">2020 - 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiments */}
      <section className="py-32 px-6 border-t border-accent-light">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-12"
          >
            Public Experiments & Labs
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a 
              href="#" 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={viewportConfig}
              whileHover={{ y: -8, backgroundColor: "rgba(172, 184, 159, 0.15)" }}
              transition={{ duration: 0.6 }}
              className="p-10 bg-white/20 border border-accent-light rounded-[2rem] group shadow-sm flex flex-col justify-between transition-colors duration-700"
            >
              <div>
                <h4 className="text-2xl font-bold mb-2 text-primary group-hover:text-muted transition-colors duration-500">ShopThip</h4>
                <p className="text-sm text-muted mb-6 font-medium">Modern shopping interface exercise</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-primary transition-colors duration-500 self-end" />
            </motion.a>
            <motion.a 
              href="#" 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={viewportConfig}
              whileHover={{ y: -8, backgroundColor: "rgba(172, 184, 159, 0.15)" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-10 bg-white/20 border border-accent-light rounded-[2rem] group shadow-sm flex flex-col justify-between transition-colors duration-700"
            >
              <div>
                <h4 className="text-2xl font-bold mb-2 text-primary group-hover:text-muted transition-colors duration-500">Moo Pak Zap</h4>
                <p className="text-sm text-muted mb-6 font-medium">Daily Thai horoscope automation concept</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-primary transition-colors duration-500 self-end" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            viewport={viewportConfig}
            transition={{ duration: 1.2 }}
            className="bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-muted/20 blur-[100px] rounded-full" />
            
            <motion.h2 
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 1 }}
              className="text-5xl md:text-8xl font-bold text-background mb-10 tracking-tighter leading-none"
            >
              Ready for the <br /> <span className="text-accent italic">next operation?</span>
            </motion.h2>
            <motion.p 
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-background/60 text-lg mb-16 max-w-xl mx-auto font-medium"
            >
              I'm looking for roles where operations, data, and planning meet. Let's connect and build something efficient.
            </motion.p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              <motion.a 
                whileHover={{ scale: 1.05, color: "#f9f2e2" }}
                transition={{ duration: 0.5 }}
                href="mailto:theerapong.thana@outlook.com" 
                className="flex items-center space-x-4 text-xl font-bold text-background transition-colors duration-500"
              >
                <Mail className="w-6 h-6" />
                <span>theerapong.thana@outlook.com</span>
              </motion.a>
              <div className="hidden lg:block w-px h-10 bg-background/10" />
              <motion.a 
                whileHover={{ scale: 1.05, color: "#f9f2e2" }}
                transition={{ duration: 0.5 }}
                href="tel:+66808314717" 
                className="flex items-center space-x-4 text-xl font-bold text-background transition-colors duration-500"
              >
                <Phone className="w-6 h-6" />
                <span>+66 80 831 4717</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-accent-light bg-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-muted uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Theerapong Thanarodpaibun</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="https://github.com/peichh" className="hover:text-primary transition-colors duration-500">Github</a>
            <a href="#" className="hover:text-primary transition-colors duration-500">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Back to Top FAB */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: "#57836f" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center shadow-2xl focus:outline-none"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}