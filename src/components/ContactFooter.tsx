import React, { useState } from 'react';
import { RoleType, roleData, personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MessageSquare, 
  Download, 
  Check, 
  Copy, 
  ExternalLink, 
  GraduationCap, 
  Languages,
  ArrowUp
} from 'lucide-react';

interface ContactFooterProps {
  activeRole: RoleType;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ activeRole }) => {
  const isNetwork = activeRole === 'network';
  const currentRoleInfo = roleData[activeRole];
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-16 pb-12 relative border-t border-white/10 bg-[#05070e] overflow-hidden">
      
      {/* Background Glow */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-20 -z-10 ${
          isNetwork ? 'bg-cyan-500' : 'bg-emerald-500'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main CTA Glass Card */}
        <div className={`p-8 sm:p-12 rounded-3xl liquid-glass border transition-all duration-500 relative overflow-hidden ${
          isNetwork 
            ? 'border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]' 
            : 'border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)]'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-slate-300">
                <span className={`w-2 h-2 rounded-full ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                <span>Let's Discuss Opportunities</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to deliver secure, resilient enterprise infrastructure?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Whether you need an experienced <strong className={isNetwork ? 'text-cyan-300' : 'text-emerald-300'}>{currentRoleInfo.tabLabel}</strong> to deploy firewalls, switching, and virtualization or to lead enterprise infrastructure rollouts from BoQ to sign-off, I'm ready to contribute immediately.
              </p>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all shadow-lg ${
                    isNetwork 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25' 
                      : 'bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 shadow-emerald-500/25'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+62 811 145 597)</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Direct ATS Download Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Official Curriculum Vitae (ATS-Formatted)
              </span>

              <div className="space-y-3">
                {/* Network CV Button */}
                <a
                  href="/cv/Pathrawut_CV_Network_Engineer_ATS.pdf"
                  download="Pathrawut_CV_Network_Engineer_ATS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-xs font-mono group ${
                    isNetwork 
                      ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/20 shadow-sm' 
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Download className={`w-4 h-4 ${isNetwork ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <div>
                      <div className="font-semibold text-white">Network Engineer ATS CV</div>
                      <div className="text-[10px] text-slate-400">PDF • Fortinet, Palo Alto, Aruba</div>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors">Download →</span>
                </a>

                {/* PM CV Button */}
                <a
                  href="/cv/Pathrawut_CV_IT_Project_Manager_ATS.pdf"
                  download="Pathrawut_CV_IT_Project_Manager_ATS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-xs font-mono group ${
                    !isNetwork 
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/20 shadow-sm' 
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Download className={`w-4 h-4 ${!isNetwork ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <div>
                      <div className="font-semibold text-white">IT Project Manager ATS CV</div>
                      <div className="text-[10px] text-slate-400">PDF • BoQ, Governance, B2B</div>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors">Download →</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Contact & Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          
          {/* Item 1: Email */}
          <div className="p-5 rounded-2xl liquid-glass border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <Mail className="w-5 h-5 text-slate-400" />
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="text-xs text-slate-400 font-mono">Direct Email</div>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block truncate"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Item 2: Phone / WhatsApp */}
          <div className="p-5 rounded-2xl liquid-glass border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <Phone className="w-5 h-5 text-slate-400" />
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="text-xs text-slate-400 font-mono">Phone / WhatsApp</div>
            <a 
              href={personalInfo.whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors block truncate"
            >
              {personalInfo.phoneDisplay}
            </a>
          </div>

          {/* Item 3: LinkedIn */}
          <div className="p-5 rounded-2xl liquid-glass border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <Linkedin className="w-5 h-5 text-slate-400" />
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </div>
            <div className="text-xs text-slate-400 font-mono">LinkedIn Profile</div>
            <a 
              href={personalInfo.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block truncate"
            >
              in/pathrawut-wannachai
            </a>
          </div>

          {/* Item 4: Education & Languages */}
          <div className="p-5 rounded-2xl liquid-glass border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <GraduationCap className="w-5 h-5 text-slate-400" />
              <span className="text-[10px] font-mono text-slate-500">GPA 3.11</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">Binus University (2025)</div>
            <div className="text-xs text-slate-300 font-medium truncate">
              {personalInfo.education.degree}
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 pt-0.5">
              <Languages className="w-3 h-3 text-slate-500" />
              <span>English & Bahasa Indonesia</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Liquid Glass Enterprise Portfolio.
          </div>
          
          <div className="flex items-center gap-6">
            <span>Built with React + TypeScript + Tailwind CSS</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
