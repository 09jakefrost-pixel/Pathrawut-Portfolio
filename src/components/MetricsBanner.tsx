import React from 'react';
import { RoleType, keyImpactMetrics } from '../data/portfolioData';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Layers, 
  Sparkles,
  Award
} from 'lucide-react';

interface MetricsBannerProps {
  activeRole: RoleType;
}

export const MetricsBanner: React.FC<MetricsBannerProps> = ({ activeRole }) => {
  const isNetwork = activeRole === 'network';

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={`w-6 h-6 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`} />;
      case 'TrendingUp':
        return <TrendingUp className={`w-6 h-6 ${isNetwork ? 'text-blue-400' : 'text-indigo-400'}`} />;
      case 'Users':
        return <Users className={`w-6 h-6 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`} />;
      case 'Layers':
        return <Layers className={`w-6 h-6 ${isNetwork ? 'text-blue-400' : 'text-indigo-400'}`} />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="metrics" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className={`w-4 h-4 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`} />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                Proven Track Record
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Key Enterprise Impact Metrics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Quantified results achieved through hands-on technical design and disciplined project governance across Jakarta, West Java, and Central Java.
          </p>
        </div>

        {/* 4 Metrics Liquid Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyImpactMetrics.map((metric) => (
            <div
              key={metric.id}
              className={`p-6 rounded-2xl liquid-glass border transition-all duration-300 relative group overflow-hidden ${
                isNetwork 
                  ? 'border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]' 
                  : 'border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]'
              }`}
            >
              {/* Subtle Corner Glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${
                isNetwork ? 'bg-cyan-500' : 'bg-emerald-500'
              }`} />

              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {getMetricIcon(metric.iconName)}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Verified Metric
                </span>
              </div>

              <div className="space-y-1">
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                  isNetwork ? 'text-white group-hover:text-cyan-300' : 'text-white group-hover:text-emerald-300'
                }`}>
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {metric.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isNetwork 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                  : 'bg-gradient-to-r from-emerald-500 to-indigo-500'
              }`} />
            </div>
          ))}
        </div>

        {/* Supporting Geographic Banner */}
        <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
            <span>Regional Coverage: Jakarta • Bekasi • Tangerang • Cikarang • Semarang / Central Java</span>
          </div>
          <div className="text-slate-500">
            Pathra Raya Sejahtera • 100% Scope Compliance
          </div>
        </div>

      </div>
    </section>
  );
};
