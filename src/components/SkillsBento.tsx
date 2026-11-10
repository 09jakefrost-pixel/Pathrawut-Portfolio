import React from 'react';
import { RoleType, roleData } from '../data/portfolioData';
import { 
  Shield, 
  Network, 
  Cpu, 
  Server, 
  Video, 
  Briefcase, 
  UserCheck, 
  Calculator, 
  Compass, 
  FolderKanban,
  Tag,
  Sparkles
} from 'lucide-react';

interface SkillsBentoProps {
  activeRole: RoleType;
}

export const SkillsBento: React.FC<SkillsBentoProps> = ({ activeRole }) => {
  const currentRole = roleData[activeRole];
  const isNetwork = activeRole === 'network';

  const getBentoIcon = (iconName: string) => {
    const iconClass = `w-6 h-6 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`;
    switch (iconName) {
      case 'Shield': return <Shield className={iconClass} />;
      case 'Network': return <Network className={iconClass} />;
      case 'Cpu': return <Cpu className={iconClass} />;
      case 'Server': return <Server className={iconClass} />;
      case 'Video': return <Video className={iconClass} />;
      case 'Briefcase': return <Briefcase className={iconClass} />;
      case 'UserCheck': return <UserCheck className={iconClass} />;
      case 'Calculator': return <Calculator className={iconClass} />;
      case 'Compass': return <Compass className={iconClass} />;
      case 'FolderKanban': return <FolderKanban className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                Core Competencies & Bento Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {currentRole.tabLabel} Areas of Expertise
            </h2>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span className="text-slate-500">Perspective:</span>
            <span className={`font-semibold ${isNetwork ? 'text-cyan-300' : 'text-emerald-300'}`}>
              {currentRole.tabLabel} Mode
            </span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentRole.expertiseList.map((card, index) => {
            const isWide = card.size === 'wide' || index === 0 || index === 4;

            return (
              <div
                key={card.id}
                className={`p-6 sm:p-8 rounded-3xl liquid-glass border transition-all duration-500 relative group overflow-hidden flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                } ${
                  isNetwork
                    ? 'border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]'
                    : 'border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]'
                }`}
              >
                {/* Background Ambient Spot */}
                <div 
                  className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none ${
                    isNetwork ? 'bg-cyan-500' : 'bg-emerald-500'
                  }`}
                />

                <div className="space-y-4">
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                      {getBentoIcon(card.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      0{index + 1} / 05
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Tags Pill Array */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                          isNetwork
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:border-cyan-500/40'
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 group-hover:border-emerald-500/40'
                        }`}
                      >
                        <Tag className="w-3 h-3 opacity-60" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle edge glow */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isNetwork 
                      ? 'bg-gradient-to-r from-transparent via-cyan-500 to-transparent' 
                      : 'bg-gradient-to-r from-transparent via-emerald-500 to-transparent'
                  }`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
