import React, { useState, useEffect } from 'react';
import { RoleType, roleData, personalInfo } from '../data/portfolioData';
import { 
  Network, 
  Briefcase, 
  Download, 
  Menu, 
  X, 
  Sparkles, 
  FileText
} from 'lucide-react';

interface NavbarProps {
  activeRole: RoleType;
  onRoleChange: (role: RoleType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRole, onRoleChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNetwork = activeRole === 'network';
  const currentRoleInfo = roleData[activeRole];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#05070e]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3' 
          : 'bg-transparent py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 border ${
              isNetwork 
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/40 text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                : 'bg-gradient-to-br from-emerald-500/20 to-indigo-600/20 border-emerald-500/40 text-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]'
            }`}>
              <span className="font-mono font-bold text-sm">PW</span>
              <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-ping ${
                isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'
              }`} />
              <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${
                isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'
              }`} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-slate-200 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono flex items-center gap-1.5 text-slate-400">
                <span className={`w-1.5 h-1.5 rounded-full ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                {currentRoleInfo.tabLabel} Mode
              </span>
            </div>
          </a>

          {/* Desktop Dual-CV Toggle Switcher */}
          <div className="hidden md:flex items-center">
            <div className="p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner flex items-center relative">
              <button
                type="button"
                onClick={() => onRoleChange('network')}
                className={`relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isNetwork
                    ? 'text-cyan-300 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-pressed={isNetwork}
              >
                <Network className={`w-3.5 h-3.5 ${isNetwork ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>Network Engineer</span>
              </button>

              <button
                type="button"
                onClick={() => onRoleChange('pm')}
                className={`relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  !isNetwork
                    ? 'text-emerald-300 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-pressed={!isNetwork}
              >
                <Briefcase className={`w-3.5 h-3.5 ${!isNetwork ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>IT Project Manager</span>
              </button>

              {/* Animated Background Slider */}
              <div 
                className={`absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out border ${
                  isNetwork 
                    ? 'left-1 w-[calc(50%-4px)] bg-gradient-to-r from-cyan-500/25 to-blue-600/25 border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]' 
                    : 'left-[calc(50%+2px)] w-[calc(50%-4px)] bg-gradient-to-r from-emerald-500/25 to-indigo-600/25 border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                }`}
              />
            </div>
          </div>

          {/* Nav Links & Action Buttons */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#about" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#metrics" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
              Impact
            </a>
            <a href="#skills" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
              Expertise
            </a>
            <a href="#projects" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#experience" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#interview-scheduler" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
              Schedule
            </a>
            <a href="#contact" className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
              Contact
            </a>

            {/* ATS CV Quick Download */}
            <a
              href={currentRoleInfo.cvFilePath}
              download={currentRoleInfo.cvFileName}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 border ${
                isNetwork 
                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]' 
                  : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>ATS CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl liquid-glass border border-white/10 space-y-4 animate-in fade-in slide-in-from-top duration-200">
            {/* Mobile Role Switcher */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Select Persona Mode
              </span>
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black/40 border border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    onRoleChange('network');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                    isNetwork 
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-600/30 text-cyan-300 border border-cyan-400/40 shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Network</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onRoleChange('pm');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                    !isNetwork 
                      ? 'bg-gradient-to-r from-emerald-500/30 to-indigo-600/30 text-emerald-300 border border-emerald-400/40 shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>IT PM</span>
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10"
              >
                About
              </a>
              <a 
                href="#metrics" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10"
              >
                Impact
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10"
              >
                Expertise
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10"
              >
                Projects
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10"
              >
                Experience
              </a>
              <a 
                href="#interview-scheduler" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10"
              >
                Schedule
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10"
              >
                Contact
              </a>
            </div>

            {/* Mobile Download Button */}
            <a
              href={currentRoleInfo.cvFilePath}
              download={currentRoleInfo.cvFileName}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isNetwork 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border-cyan-400/40' 
                  : 'bg-gradient-to-r from-emerald-500/20 to-indigo-600/20 text-emerald-300 border-emerald-400/40'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Download ATS CV ({currentRoleInfo.tabLabel})</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
