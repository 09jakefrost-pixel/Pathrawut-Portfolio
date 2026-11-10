import React, { useState } from 'react';
import { RoleType, featuredProjects, ProjectShowcase } from '../data/portfolioData';
import { 
  ShieldAlert, 
  Wifi, 
  Database, 
  Camera, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Network,
  Briefcase
} from 'lucide-react';

interface FeaturedProjectsProps {
  activeRole: RoleType;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ activeRole }) => {
  const isNetwork = activeRole === 'network';
  // Allow per-card override or default to activeRole
  const [cardModes, setCardModes] = useState<Record<string, RoleType>>({});

  const getEffectiveRole = (projectId: string): RoleType => {
    return cardModes[projectId] || activeRole;
  };

  const toggleCardMode = (projectId: string) => {
    const current = getEffectiveRole(projectId);
    setCardModes(prev => ({
      ...prev,
      [projectId]: current === 'network' ? 'pm' : 'network'
    }));
  };

  const getProjectIcon = (iconName: string) => {
    const iconClass = `w-6 h-6 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`;
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className={iconClass} />;
      case 'Wifi': return <Wifi className={iconClass} />;
      case 'Database': return <Database className={iconClass} />;
      case 'Camera': return <Camera className={iconClass} />;
      default: return <Layers className={iconClass} />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                Enterprise Deployments
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Case Studies & Architectures
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Real-world enterprise systems deployed across Indonesia. Toggle each card between Network Engineering and PM delivery lenses.
          </p>
        </div>

        {/* 4 Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project: ProjectShowcase) => {
            const cardRole = getEffectiveRole(project.id);
            const isCardNetwork = cardRole === 'network';
            const details = isCardNetwork ? project.networkAngle : project.pmAngle;

            return (
              <div
                key={project.id}
                className={`rounded-3xl liquid-glass border transition-all duration-500 relative group overflow-hidden flex flex-col justify-between ${
                  isCardNetwork
                    ? 'border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]'
                    : 'border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]'
                }`}
              >
                {/* Top Bar with Badge, Budget Scope & Lens Toggle */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        {getProjectIcon(project.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                            {project.scope}
                          </span>
                          <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded border ${
                            isCardNetwork 
                              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' 
                              : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          }`}>
                            {project.budgetScope}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lens Switcher for this specific project */}
                    <button
                      type="button"
                      onClick={() => toggleCardMode(project.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                        isCardNetwork 
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20' 
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20'
                      }`}
                      title="Switch between Technical & PM perspective"
                    >
                      {isCardNetwork ? (
                        <>
                          <Network className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Eng Mode</span>
                        </>
                      ) : (
                        <>
                          <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                          <span>PM Mode</span>
                        </>
                      )}
                      <span className="text-slate-500 text-[10px]">↻</span>
                    </button>
                  </div>

                  {/* Title & Perspective Headline */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {details.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      {isCardNetwork ? 'Technical Implementation Scope' : 'Governance & PM Deliverables'}
                    </span>
                    <div className="space-y-2">
                      {details.keyDeliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isCardNetwork ? 'text-cyan-400' : 'text-emerald-400'
                          }`} />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Impact & Tech Stack Footer */}
                <div className="p-6 sm:p-8 pt-4 bg-white/[0.02] border-t border-white/10 space-y-4">
                  
                  {/* Verified Impact Callout */}
                  <div className={`p-3.5 rounded-xl border text-xs font-mono flex items-start gap-2.5 ${
                    isCardNetwork
                      ? 'bg-cyan-500/5 border-cyan-500/20 text-cyan-200'
                      : 'bg-emerald-500/5 border-emerald-500/20 text-emerald-200'
                  }`}>
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5 opacity-80" />
                    <div>
                      <span className="font-semibold block mb-0.5">Verified Business Impact:</span>
                      <span className="text-slate-300">{project.impact}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(isCardNetwork ? project.networkAngle.techStack : project.pmAngle.pmSkills).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
