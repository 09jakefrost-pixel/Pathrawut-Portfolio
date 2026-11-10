import React, { useState } from 'react';
import { RoleType } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBanner } from './components/MetricsBanner';
import { SkillsBento } from './components/SkillsBento';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { InterviewScheduler } from './components/InterviewScheduler';
import { ContactFooter } from './components/ContactFooter';
import { Network, Briefcase } from 'lucide-react';

export const App: React.FC = () => {
  const [activeRole, setActiveRole] = useState<RoleType>('network');

  const isNetwork = activeRole === 'network';

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Liquid Glass Ambient Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Dynamic primary orb */}
        <div 
          className={`absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full blur-[110px] opacity-20 transition-colors duration-500 ease-in-out ${
            isNetwork ? 'bg-cyan-500' : 'bg-emerald-500'
          }`} 
        />
        {/* Secondary orb */}
        <div 
          className={`absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full blur-[115px] opacity-15 transition-colors duration-500 ease-in-out ${
            isNetwork ? 'bg-blue-600' : 'bg-indigo-600'
          }`} 
        />
        {/* Lower orb */}
        <div 
          className={`absolute bottom-1/4 -left-24 w-[340px] h-[340px] rounded-full blur-[100px] opacity-10 transition-colors duration-500 ease-in-out ${
            isNetwork ? 'bg-cyan-600' : 'bg-emerald-600'
          }`} 
        />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        />
      </div>

      {/* Main Navigation */}
      <Navbar activeRole={activeRole} onRoleChange={setActiveRole} />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection activeRole={activeRole} onRoleChange={setActiveRole} />

        {/* Impact Metrics Banner */}
        <MetricsBanner activeRole={activeRole} />

        {/* Bento Grid Skills */}
        <SkillsBento activeRole={activeRole} />

        {/* 4 Flagship Case Studies */}
        <FeaturedProjects activeRole={activeRole} />

        {/* Career Progression & Experience Timeline */}
        <ExperienceTimeline activeRole={activeRole} />

        {/* Interactive HR & Recruiter Interview Scheduler */}
        <InterviewScheduler activeRole={activeRole} />
      </main>

      {/* Contact & ATS Downloads Footer */}
      <ContactFooter activeRole={activeRole} />

      {/* Floating Bottom Quick-Switch Pill */}
      <aside aria-label="Role Switcher" className="fixed bottom-6 right-6 z-40">
        <div className="p-1 rounded-full liquid-glass border border-white/20 shadow-2xl backdrop-blur-xl flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveRole('network')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              isNetwork 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
            title="Switch to Network Engineer Mode"
          >
            <Network className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Network</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveRole('pm')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              !isNetwork 
                ? 'bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
            title="Switch to IT Project Manager Mode"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">IT PM</span>
          </button>
        </div>
      </aside>

    </div>
  );
};

export default App;
