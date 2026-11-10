import React, { useState } from 'react';
import { RoleType, roleData, personalInfo } from '../data/portfolioData';
import { 
  Download, 
  MapPin, 
  Mail, 
  Linkedin, 
  MessageSquare, 
  Shield, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeroSectionProps {
  activeRole: RoleType;
  onRoleChange: (role: RoleType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ activeRole, onRoleChange }) => {
  const [imageError, setImageError] = useState(false);
  const currentRole = roleData[activeRole];
  const isNetwork = activeRole === 'network';

  return (
    <section id="hero" className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Dynamic Background Ambient Glow */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 -z-10 ${
          isNetwork 
            ? 'bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent' 
            : 'bg-gradient-to-b from-emerald-500/20 via-indigo-600/10 to-transparent'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge & Dual Role Switcher Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono">
            <span className={`w-2 h-2 rounded-full animate-ping ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
            <span className={`font-semibold ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`}>
              Available for Enterprise B2B Projects
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Bekasi & Greater Jakarta</span>
          </div>

          {/* Interactive Dual-Mode Switcher */}
          <div className="flex items-center p-1 rounded-2xl liquid-glass border border-white/10 shadow-lg">
            <button
              type="button"
              onClick={() => onRoleChange('network')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                isNetwork 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Network Engineer</span>
            </button>

            <button
              type="button"
              onClick={() => onRoleChange('pm')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                !isNetwork 
                  ? 'bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>IT Project Manager</span>
            </button>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Persona Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                  Professional Portfolio
                </span>
                <span className="text-slate-600">•</span>
                <span className={`text-xs font-mono font-medium ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`}>
                  Tailored Mode Active
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {personalInfo.name}
              </h1>

              {/* Dynamic Animated Headline */}
              <div className="flex items-center gap-3 flex-wrap pt-1">
                <span className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent transition-all duration-500 ${
                  isNetwork 
                    ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500' 
                    : 'bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400'
                }`}>
                  {currentRole.headline}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/10 text-slate-300 border border-white/10">
                  2+ Yrs Hands-On
                </span>
              </div>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed max-w-2xl">
                {currentRole.subHeadline}
              </p>
            </div>

            {/* Glass Executive Summary Box */}
            <div className={`p-5 rounded-2xl liquid-glass border transition-all duration-500 relative overflow-hidden group ${
              isNetwork 
                ? 'border-cyan-500/20 hover:border-cyan-500/40' 
                : 'border-emerald-500/20 hover:border-emerald-500/40'
            }`}>
              <div className={`absolute top-0 left-0 w-1 h-full transition-colors duration-500 ${
                isNetwork ? 'bg-cyan-500' : 'bg-emerald-500'
              }`} />
              
              <div className="flex items-start gap-3">
                <Sparkles className={`w-5 h-5 mt-0.5 shrink-0 transition-colors duration-500 ${
                  isNetwork ? 'text-cyan-400' : 'text-emerald-400'
                }`} />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Executive Summary ({currentRole.tabLabel})
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {currentRole.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs: Download ATS CV & Connect */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={currentRole.cvFilePath}
                download={currentRole.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 shadow-lg ${
                  isNetwork 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02]' 
                    : 'bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02]'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Download ATS CV ({currentRole.tabLabel})</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all hover:border-white/20"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="truncate">{personalInfo.location.split(',')[0]}</span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-slate-200 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors truncate"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="truncate">LinkedIn Profile</span>
              </a>
              <div className="flex items-center gap-2 truncate">
                <GraduationCap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="truncate">Binus (GPA 3.11)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Visual Card with Glass Overlays */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Border */}
              <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-40 transition-all duration-700 ${
                isNetwork 
                  ? 'bg-gradient-to-tr from-cyan-500 via-blue-600 to-sky-400' 
                  : 'bg-gradient-to-tr from-emerald-500 via-indigo-600 to-teal-400'
              }`} />

              {/* Main Card Container */}
              <div className="relative rounded-3xl p-6 liquid-glass border border-white/10 shadow-2xl space-y-6">
                
                {/* Image & Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-slate-900 shrink-0">
                    {!imageError ? (
                      <img
                        src={personalInfo.avatarUrl}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover object-top"
                        onError={() => setImageError(true)}
                        loading="eager"
                      />
                    ) : (
                      /* Clean UI Avatar Fallback */
                      <div className={`w-full h-full flex flex-col items-center justify-center font-mono font-bold text-2xl ${
                        isNetwork 
                          ? 'bg-gradient-to-br from-cyan-900/60 to-blue-900/60 text-cyan-300' 
                          : 'bg-gradient-to-br from-emerald-900/60 to-indigo-900/60 text-emerald-300'
                      }`}>
                        <span>PW</span>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-normal mt-1">Verified</span>
                      </div>
                    )}
                    
                    <span className={`absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-[#05070e] ${
                      isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'
                    }`} />
                  </div>

                  <div className="space-y-1 min-w-0">
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      isNetwork 
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' 
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    }`}>
                      Binus University Graduate
                    </span>
                    <h2 className="text-base font-bold text-white truncate">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {personalInfo.education.degree}
                    </p>
                    <p className="text-[11px] font-mono text-slate-500">
                      {personalInfo.education.institution} • {personalInfo.education.gpa}
                    </p>
                  </div>
                </div>

                {/* Quick Persona Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    {isNetwork ? 'Technical Core Strengths' : 'Delivery & Governance Strengths'}
                  </span>
                  
                  <div className="space-y-2 text-xs">
                    {isNetwork ? (
                      <>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>Fortinet & Palo Alto Perimeter Firewalls</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>1/2.5/10G Aruba & Huawei Enterprise Switching</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>Proxmox VE Cluster & Synology RAID Redundancy</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>500+ IP Camera Surveillance & VMS Storage</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>12 B2B Enterprise Projects Delivered</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>IDR 500M – 2B BoQ Valuation & Costing Control</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>5–10 Field Engineers & Cabling Technicians Led</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>100% On-Time & Within Budget Project Track Record</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Bottom Quick Language & Status Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span>EN (Proficient)</span>
                    <span>•</span>
                    <span>ID (Native)</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                    isNetwork ? 'bg-cyan-500/20 text-cyan-300' : 'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {currentRole.currentRole.company.split('(')[0].trim()}
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
