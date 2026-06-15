"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, ChevronRight, Briefcase, Award, Code } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Refreshable Reporting Pipeline",
      description: "Automated reporting system using Power Query and SQL that reduced cycle time from 2 days to 1 hour.",
      tags: ["Power Query", "SQL", "Excel VBA"],
      link: "#"
    },
    {
      title: "Warehouse Spare Parts Planning",
      description: "Optimized spare parts storage logic and location planning for IT server infrastructure.",
      tags: ["Inventory Optimization", "Logistics", "Process Design"],
      link: "#"
    },
    {
      title: "Budget vs Demand Tool",
      description: "Developed a planning model to compare resource capacity with demand requirements for better allocation.",
      tags: ["Forecasting", "Data Analytics", "Planning"],
      link: "#"
    }
  ];

  const experience = [
    {
      role: "Warehouse Specialist",
      company: "TITANICOM TECH (THAILAND) CO., LTD.",
      period: "Mar 2026 - Present",
      description: "Managing IT server spare parts inventory, stock accuracy, and location control."
    },
    {
      role: "Capacity Planner",
      company: "HANESBRANDS ROH ASIA LTD.",
      period: "Feb 2025 - Feb 2026",
      description: "Built automated reporting tools and logic-based planning models."
    },
    {
      role: "Demand Planner",
      company: "HANESBRANDS ROH ASIA LTD.",
      period: "Jun 2024 - Dec 2024",
      description: "Analyzed sales trends and monitored inventory thresholds for production orders."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-zinc-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter">PEICH<span className="text-blue-500">.</span></span>
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Resume</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-500 font-medium tracking-widest uppercase text-xs mb-6">Operations Data & Automation</h2>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Theerapong <br /> 
              <span className="text-zinc-500">Thanarodpaibun</span>
            </h1>
            <p className="max-w-xl text-lg text-zinc-400 leading-relaxed mb-10">
              I turn warehouse movement, inventory records, and planning inputs into practical operating systems: cleaner dashboards, faster reports, and sharper decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white transition-all duration-300">
                Let's Talk
              </a>
              <a href="#projects" className="border border-white/10 px-8 py-4 rounded-full font-bold text-sm hover:border-white transition-all duration-300">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-4xl font-bold mb-2">2d → 1h</div>
            <div className="text-zinc-500 text-sm uppercase tracking-widest">Reporting Cycle Reduced</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-zinc-500 text-sm uppercase tracking-widest">Inventory Accuracy Target</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">BKK</div>
            <div className="text-zinc-500 text-sm uppercase tracking-widest">Available for Operations Roles</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-bold mb-8">Bridging the gap between physical operations and data logic.</h3>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                My profile is strongest where a team needs someone who understands physical stock movement, can diagnose data gaps, and can build simple tools that make daily decisions faster.
              </p>
              <p>
                Currently focusing on inventory visibility, stock accuracy, and automated reporting flows that work for teams on the floor, not just in spreadsheets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Code className="w-5 h-5" />, label: "Data Automation" },
              { icon: <Briefcase className="w-5 h-5" />, label: "Warehouse Control" },
              { icon: <Award className="w-5 h-5" />, label: "Planning Logic" },
              { icon: <ExternalLink className="w-5 h-5" />, label: "Process Design" },
            ].map((skill, i) => (
              <div key={i} className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition">
                <div className="text-blue-500 mb-4">{skill.icon}</div>
                <div className="font-bold text-sm uppercase tracking-tight">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold">Selected Work</h2>
            <div className="text-zinc-500 text-sm uppercase tracking-widest">03 Total Projects</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:bg-zinc-800/50 transition-all duration-500">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition" />
                </div>
                <h4 className="text-xl font-bold mb-4">{project.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-zinc-400">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10 group">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-blue-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-zinc-500 mt-1 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[3rem] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready for the next operation?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
              I'm always looking for roles where operations, data, and planning meet. Let's connect and build something efficient.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a href="mailto:theerapong.thana@outlook.com" className="flex items-center space-x-3 text-xl font-bold text-white hover:text-blue-200 transition">
                <Mail className="w-6 h-6" />
                <span>theerapong.thana@outlook.com</span>
              </a>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <a href="tel:+66808314717" className="flex items-center space-x-3 text-xl font-bold text-white hover:text-blue-200 transition">
                <Phone className="w-6 h-6" />
                <span>+66 80 831 4717</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:row justify-between items-center text-xs text-zinc-500 uppercase tracking-widest font-bold">
          <p>© 2026 Theerapong Thanarodpaibun</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="https://github.com/peichh" className="hover:text-white transition">Github</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}