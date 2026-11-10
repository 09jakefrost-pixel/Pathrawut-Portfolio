import React, { useState, useEffect } from 'react';
import { RoleType, personalInfo } from '../data/portfolioData';
import { 
  Calendar, 
  Clock, 
  Video, 
  Building, 
  User, 
  Briefcase, 
  Copy, 
  Check, 
  MessageSquare, 
  Mail, 
  Languages, 
  Sparkles,
  Send,
  CalendarCheck2
} from 'lucide-react';

interface InterviewSchedulerProps {
  activeRole: RoleType;
}

type Language = 'id' | 'en';
type MeetingPlatform = 'Google Meet' | 'Zoom' | 'Microsoft Teams';

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM (13:00)',
  '02:00 PM (14:00)',
  '03:00 PM (15:00)',
  '04:00 PM (16:00)',
  '05:00 PM (17:00)'
];

const POSITION_CHIPS = [
  'Network Engineer',
  'IT Project Manager',
  'IT Infrastructure Specialist',
  'Cybersecurity & Network Engineer'
];

export const InterviewScheduler: React.FC<InterviewSchedulerProps> = ({ activeRole }) => {
  const isNetwork = activeRole === 'network';

  // Get current date in YYYY-MM-DD format for min date
  const todayStr = new Date().toISOString().split('T')[0];
  
  // Tomorrow as initial default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  // State
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState(
    isNetwork ? 'Network Engineer' : 'IT Project Manager'
  );
  const [isCustomPosition, setIsCustomPosition] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultDateStr);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedPlatform, setSelectedPlatform] = useState<MeetingPlatform>('Google Meet');
  const [language, setLanguage] = useState<Language>('id');
  const [copied, setCopied] = useState(false);

  // Sync position placeholder when role changes if user hasn't explicitly customized it
  useEffect(() => {
    if (!isCustomPosition) {
      setPosition(isNetwork ? 'Network Engineer' : 'IT Project Manager');
    }
  }, [activeRole, isCustomPosition]);

  // Format date readable
  const getFormattedDate = (dateString: string, lang: Language): string => {
    if (!dateString) return lang === 'id' ? '[Pilih Tanggal]' : '[Select Date]';
    try {
      const [year, month, day] = dateString.split('-').map(Number);
      const dateObj = new Date(year, month - 1, day);
      if (isNaN(dateObj.getTime())) return dateString;

      return dateObj.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const formattedDate = getFormattedDate(selectedDate, language);

  // Generate Message Text
  const generateMessage = (): string => {
    const rName = recruiterName.trim() || (language === 'id' ? 'Bapak/Ibu HR' : 'Hiring Team');
    const cName = companyName.trim() || (language === 'id' ? 'PT [Nama Perusahaan]' : '[Company Name]');
    const pos = position.trim() || (isNetwork ? 'Network Engineer' : 'IT Project Manager');

    if (language === 'id') {
      return `Halo Pathrawut, salam kenal. Saya ${rName} dari ${cName}.

Kami telah meninjau profil dan portofolio Anda untuk posisi ${pos}, dan kami sangat tertarik dengan rekam jejak serta kompetensi yang Anda miliki.

Kami ingin mengundang Anda untuk sesi interview / wawancara teknis yang dijadwalkan pada:
📅 Tanggal: ${formattedDate}
⏰ Waktu: ${selectedTime} WIB
💻 Platform: ${selectedPlatform}

Mohon konfirmasi ketersediaan Anda terkait jadwal di atas. Apabila Anda membutuhkan penyesuaian jadwal atau waktu alternatif, silakan beri tahu kami.

Terima kasih dan sampai jumpa di sesi wawancara.

Salam hangat,
${rName}
${cName}`;
    }

    return `Hello Pathrawut, nice to connect with you. I am ${rName} from ${cName}.

We have reviewed your profile and portfolio for the ${pos} position, and we are very impressed by your hands-on background and project delivery achievements.

We would like to invite you for an interview session scheduled as follows:
📅 Date: ${formattedDate}
⏰ Time: ${selectedTime} (WIB / GMT+7)
💻 Platform: ${selectedPlatform}

Please kindly confirm if this schedule works for you or if you would prefer an alternative time slot.

Thank you, and we look forward to speaking with you.

Best regards,
${rName}
${cName}`;
  };

  const generatedMessage = generateMessage();

  // Email subject
  const emailSubject = language === 'id'
    ? `Undangan Interview - ${position || 'IT Role'} - ${companyName || 'Perusahaan'} | ${personalInfo.name}`
    : `Interview Invitation - ${position || 'IT Role'} - ${companyName || 'Company'} | ${personalInfo.name}`;

  // WhatsApp & Mailto Links
  const whatsappUrl = `https://wa.me/62811145597?text=${encodeURIComponent(generatedMessage)}`;
  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(generatedMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="interview-scheduler" className="py-16 sm:py-24 relative overflow-hidden">
      
      {/* Dynamic Background Ambient Orb */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-20 -z-10 ${
          isNetwork ? 'bg-cyan-500' : 'bg-emerald-500'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CalendarCheck2 className={`w-4 h-4 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`} />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                Interactive HR & Recruiter Tool
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Schedule an Interview
            </h2>
          </div>

          {/* Language Toggle Pill */}
          <div className="flex items-center gap-2 self-start md:self-auto p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Languages className="w-3.5 h-3.5 text-slate-400 ml-2" />
            <button
              type="button"
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                language === 'id'
                  ? isNetwork
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm'
                    : 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Bahasa Indonesia
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                language === 'en'
                  ? isNetwork
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm'
                    : 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form Inputs */}
          <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl liquid-glass border transition-all duration-500 space-y-6 ${
            isNetwork 
              ? 'border-white/10 hover:border-cyan-500/30' 
              : 'border-white/10 hover:border-emerald-500/30'
          }`}>
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className={`w-3.5 h-3.5 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`} />
                Interview Details Form
              </span>
              <span className="text-[11px] font-mono text-slate-500">Instant Sync</span>
            </div>

            {/* Inputs: HR Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="recruiter-name" className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>HR / Recruiter Name</span>
                </label>
                <input
                  id="recruiter-name"
                  type="text"
                  value={recruiterName}
                  onChange={(e) => setRecruiterName(e.target.value)}
                  placeholder="e.g. Budi Santoso / Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="company-name" className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>Company Name (PT)</span>
                </label>
                <input
                  id="company-name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. PT Maju Bersama Tbk"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans"
                />
              </div>
            </div>

            {/* Input: Position to Hire + Quick Chips */}
            <div className="space-y-2">
              <label htmlFor="position-hire" className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                <span>Position to Hire</span>
              </label>

              <input
                id="position-hire"
                type="text"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                  setIsCustomPosition(true);
                }}
                placeholder={isNetwork ? "Network Engineer" : "IT Project Manager"}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans"
              />

              {/* Quick Select Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {POSITION_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => {
                      setPosition(chip);
                      setIsCustomPosition(true);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all border ${
                      position === chip
                        ? isNetwork
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                        : 'bg-white/5 text-slate-400 border-white/5 hover:text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input: Date Picker */}
            <div className="space-y-1.5">
              <label htmlFor="interview-date" className="text-xs font-medium text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Interview Date (Tanggal & Bulan)</span>
                </span>
                <span className={`text-[11px] font-mono ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`}>
                  {formattedDate}
                </span>
              </label>
              
              <input
                id="interview-date"
                type="date"
                min={todayStr}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all font-mono"
              />
            </div>

            {/* Input: Time Slot Selection (1-hour increments 09:00 - 17:00) */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Interview Time (Jam Meeting)</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Western Indonesia Time (WIB)
                </span>
              </label>

              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-mono transition-all border text-center ${
                        isSelected
                          ? isNetwork
                            ? 'bg-cyan-500/25 text-cyan-200 border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.25)] font-semibold'
                            : 'bg-emerald-500/25 text-emerald-200 border-emerald-400/50 shadow-[0_0_12px_rgba(16,185,129,0.25)] font-semibold'
                          : 'bg-white/[0.03] text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200 hover:bg-white/[0.06]'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input: Meeting Platform Selection */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-slate-400" />
                <span>Meeting Platform</span>
              </label>

              <div className="grid grid-cols-3 gap-2">
                {(['Google Meet', 'Zoom', 'Microsoft Teams'] as MeetingPlatform[]).map((platform) => {
                  const isSelected = selectedPlatform === platform;
                  return (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => setSelectedPlatform(platform)}
                      className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                        isSelected
                          ? isNetwork
                            ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-200 shadow-sm'
                            : 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200 shadow-sm'
                          : 'bg-white/[0.03] border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
                      }`}
                    >
                      <Video className={`w-4 h-4 ${isSelected ? (isNetwork ? 'text-cyan-400' : 'text-emerald-400') : 'text-slate-500'}`} />
                      <span className="text-xs font-medium">{platform}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Auto-Generated Chat Preview */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Terminal / Chat Bubble Card */}
            <div className={`rounded-3xl liquid-glass border transition-all duration-500 overflow-hidden shadow-2xl relative ${
              isNetwork 
                ? 'border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.12)]' 
                : 'border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.12)]'
            }`}>
              
              {/* Chat Header Bar */}
              <div className="p-4 px-6 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      isNetwork ? 'bg-cyan-500/20 text-cyan-300' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      PW
                    </div>
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#05070e]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Pathrawut Wannachai
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <span>Recipient</span>
                      <span>•</span>
                      <span className={isNetwork ? 'text-cyan-400' : 'text-emerald-400'}>
                        {isNetwork ? 'Network Engineer' : 'IT Project Manager'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400">
                    {language.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Chat Bubble Body */}
              <div className="p-6 sm:p-8 space-y-4 bg-black/20">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Generated Invitation Message</span>
                </div>

                {/* Preformatted chat text box */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap select-all">
                  {generatedMessage}
                </div>

                {/* Message Meta summary */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono text-slate-400 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${isNetwork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                    <span>{formattedDate} • {selectedTime}</span>
                  </div>
                  <span>Via {selectedPlatform}</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-5 bg-white/[0.04] border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                
                {/* Copy Message */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all border ${
                    copied
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Message'}</span>
                </button>

                {/* Send via WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>

                {/* Send via Email */}
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all"
                  title="Open default email client"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Send via Email</span>
                </a>

              </div>

            </div>

            {/* Recruiter Convenience Tip */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono text-slate-400 flex items-start gap-2.5">
              <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${isNetwork ? 'text-cyan-400' : 'text-emerald-400'}`} />
              <div>
                <span className="text-slate-300 font-semibold block mb-0.5">Direct Recruiter Routing:</span>
                <span>Clicking <strong>Send via WhatsApp</strong> opens Pathrawut's direct number (+62 811 145 597) with this complete invitation pre-filled and ready to send with one tap.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
