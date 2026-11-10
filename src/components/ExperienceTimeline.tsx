import React from 'react';
import { RoleType, roleData, sharedExperiences } from '../data/portfolioData';
import { 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2
} from 'lucide-react';

interface ExperienceTimelineProps {
  activeRole: RoleType;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ activeRole }) => {
  const currentRoleInfo = roleData[activeRole];
  const isNetwork = activeRole === 'network';
  const current = currentRoleInfo.currentRole;

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                Career Progression & Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience & Roles
            </h2>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span className="text-slate-500">Current View:</span>
            <span className={`font-semibold ${isNetwork ? 'text-cyan-300' : 'text-emerald-300'}`}>
              {currentRoleInfo.tabLabel} Perspective
            </span>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 sm:before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/40 before:via-white/10 before:to-transparent">
          
          {/* 1. CURRENT ROLE: Pathra Raya Sejahtera (Dynamic based on activeRole) */}
          <div className="relative">
            {/* Timeline Center Node */}
            <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 -top-1 w-8 h-8 rounded-full border-2 bg-[#05070e] flex items-center justify-center z-10 transition-colors duration-500 ${
              isNetwork 
                ? 'border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                : 'border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
            }`}>
              <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'
              }`} />
            </div>

            {/* Content Container */}
            <div className="ml-10 sm:ml-0 sm:w-full">
              <div className={`p-6 sm:p-8 rounded-3xl liquid-glass border transition-all duration-500 relative group overflow-hidden ${
                isNetwork 
                  ? 'border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.12)]' 
                  : 'border-emerald-500/30 shadow-[0_0_35px_rgba(16,185,129,0.12)]'
              }`}>
                {/* Glow accent */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none ${
                  isNetwork ? 'bg-cyan-500' : 'bg-emerald-500'
                }`} />

                {/* Role Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${
                        isNetwork 
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' 
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      }`}>
                        {current.badge || 'Active Position'}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {current.companyType}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                      isNetwork ? 'text-cyan-300' : 'text-emerald-300'
                    }`}>
                      {current.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
                      <div className="flex items-center gap-1.5 text-white font-medium">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{current.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{current.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{current.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Scope: 12 B2B Projects
                    </span>
                    <span className="text-xs font-mono text-slate-300 font-semibold">
                      Jakarta • West Java • Central Java
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Key Role Highlights & Responsibilities ({currentRoleInfo.tabLabel} Focus)
                  </span>

                  <div className="grid grid-cols-1 gap-2.5">
                    {current.highlights.map((bullet, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isNetwork ? 'text-cyan-400' : 'text-emerald-400'
                        }`} />
                        <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* 2. SHARED EXPERIENCE: Metamorphosys & Alifindo */}
          {sharedExperiences.map((exp) => (
            <div key={exp.company} className="relative">
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 -top-1 w-6 h-6 rounded-full border border-white/20 bg-[#05070e] flex items-center justify-center z-10">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
              </div>

              {/* Content Container */}
              <div className="ml-10 sm:ml-0 sm:w-full">
                <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-white/10 hover:border-white/20 transition-all duration-300 relative group">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {exp.companyType}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
                        <span className="text-slate-200 font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 self-start">
                      Foundation Experience
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {exp.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-slate-500 mt-1">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
