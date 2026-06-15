"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, ChevronRight, Briefcase, Award, Code, Database, Settings, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
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

  return (
    <main className="min-h-screen bg-background text-primary selection:bg-accent/30">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter uppercase">Peach<span className="text-accent-dark">.</span></span>
          <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#resume" className="hover:text-primary transition">Resume</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent-dark font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Operations Data & Automation Specialist</h2>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.85]">
              Theerapong <br /> 
              <span className="text-muted/40 italic">Thanarodpaibun</span>
            </h1>
            <p className="max-w-2xl text-xl text-primary/80 leading-relaxed mb-12 font-medium">
              I turn warehouse movement, inventory records, and planning inputs into practical operating systems: cleaner dashboards, faster reports, and sharper decisions.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="bg-primary text-background px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent-dark transition-all duration-300">
                Contact
              </a>
              <a href="#projects" className="border border-primary/10 px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:border-primary transition-all duration-300">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-muted/20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { label: "Reporting Cycle Reduced", value: "2d → 1h" },
            { label: "Inventory Accuracy", value: "100%" },
            { label: "Based in", value: "Bangkok" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-5xl font-bold mb-3 tracking-tighter">{stat.value}</span>
              <span className="text-muted text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div>
              <h3 className="text-4xl font-bold mb-10 tracking-tight leading-tight">Bridging the gap between physical operations and data logic.</h3>
              <p className="text-lg text-primary/70 leading-relaxed mb-8">
                Peach combines hands-on warehouse discipline with planning analytics. The profile is strongest where a team needs someone who understands physical stock movement, can diagnose data gaps, and can build simple tools that make daily decisions faster.
              </p>
              <div className="p-8 bg-accent/20 rounded-[2rem] border border-accent/30">
                <h4 className="font-bold text-xs uppercase tracking-widest mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-accent-dark mr-3" />
                  Current Focus
                </h4>
                <p className="text-primary font-bold">Inventory visibility, stock accuracy, and automated reporting flows.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, i) => (
                <div key={i} className="p-8 bg-white/30 border border-muted/10 rounded-3xl hover:border-accent-dark/50 transition duration-500 group">
                  <div className="text-accent-dark mb-6 group-hover:scale-110 transition">{item.icon}</div>
                  <h4 className="font-bold text-sm uppercase tracking-tight mb-4">{item.category}</h4>
                  <ul className="space-y-2">
                    {item.skills.map((s, j) => (
                      <li key={j} className="text-xs text-muted font-medium flex items-center">
                        <ChevronRight className="w-3 h-3 mr-1 text-accent-dark" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-4">Case Studies</h2>
              <p className="text-muted uppercase tracking-widest text-[10px] font-bold">Measurable Operational Value</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group p-10 bg-white/40 border border-muted/10 rounded-[2.5rem] hover:bg-white/60 transition-all duration-700 flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <div className="text-accent-dark text-[10px] font-bold uppercase tracking-widest mb-4">{project.category}</div>
                  <h4 className="text-3xl font-bold mb-6 tracking-tight leading-tight">{project.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[9px] uppercase tracking-widest font-bold px-4 py-2 bg-background rounded-full border border-muted/10">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-primary/70 leading-relaxed text-lg mb-8">{project.description}</p>
                  <button className="flex items-center text-xs font-bold uppercase tracking-widest group-hover:text-accent-dark transition">
                    Read detailed scope <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="resume" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tighter mb-20">Career Timeline</h2>
          <div className="space-y-20">
            {experience.map((exp, i) => (
              <div key={i} className="group">
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-8 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary group-hover:text-accent-dark transition">{exp.role}</h4>
                    <p className="text-muted font-bold text-xs uppercase tracking-widest mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-black bg-primary/5 px-4 py-2 rounded-full uppercase tracking-widest">{exp.period}</span>
                </div>
                <p className="text-primary/70 font-medium mb-8 leading-relaxed italic">{exp.description}</p>
                <ul className="space-y-4">
                  {exp.details.map((detail, j) => (
                    <li key={j} className="flex items-start text-sm text-primary/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-dark mt-2 mr-4 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-32 p-12 bg-white/40 border border-muted/10 rounded-[3rem]">
            <div className="flex items-center mb-8 text-accent-dark">
              <GraduationCap className="w-8 h-8 mr-4" />
              <h3 className="text-3xl font-bold tracking-tight">Education</h3>
            </div>
            <h4 className="text-xl font-bold mb-2">Bachelor of Logistics and Supply Chain Management</h4>
            <p className="text-primary/70 font-medium mb-4">Dhurakij Pundit University, CIBA</p>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="px-4 py-2 bg-accent-dark text-background rounded-full text-[10px] font-bold uppercase tracking-widest">First Class Honours</span>
              <span className="text-xs font-bold text-muted">GPA 3.51</span>
              <span className="text-xs font-bold text-muted">2020 - 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section className="py-32 px-6 border-t border-muted/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-12">Public Experiments & Labs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#" className="p-10 bg-white/20 border border-muted/10 rounded-[2rem] hover:bg-accent/20 transition duration-500 group">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-accent-dark transition">ShopThip</h4>
              <p className="text-sm text-muted mb-6 font-medium">Modern shopping interface exercise</p>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent-dark transition" />
            </a>
            <a href="#" className="p-10 bg-white/20 border border-muted/10 rounded-[2rem] hover:bg-accent/20 transition duration-500 group">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-accent-dark transition">Moo Pak Zap</h4>
              <p className="text-sm text-muted mb-6 font-medium">Daily Thai horoscope automation concept</p>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent-dark transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-dark/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
            
            <h2 className="text-5xl md:text-8xl font-bold text-background mb-10 tracking-tighter leading-none">Ready for the <br /> <span className="text-accent italic">next operation?</span></h2>
            <p className="text-background/60 text-lg mb-16 max-w-xl mx-auto font-medium">
              I'm looking for roles where operations, data, and planning meet. Let's connect and build something efficient.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <a href="mailto:theerapong.thana@outlook.com" className="flex items-center space-x-4 text-xl font-bold text-background hover:text-accent transition">
                <Mail className="w-6 h-6" />
                <span>theerapong.thana@outlook.com</span>
              </a>
              <div className="hidden md:block w-px h-10 bg-background/10" />
              <a href="tel:+66808314717" className="flex items-center space-x-4 text-xl font-bold text-background hover:text-accent transition">
                <Phone className="w-6 h-6" />
                <span>+66 80 831 4717</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-muted/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-muted uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Theerapong Thanarodpaibun</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="https://github.com/peichh" className="hover:text-primary transition">Github</a>
            <a href="#" className="hover:text-primary transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}