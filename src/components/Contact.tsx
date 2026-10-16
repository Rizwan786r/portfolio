import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity / Inquiry',
    message: ''
  });

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto link
    const mailtoUrl = `mailto:${PERSONAL_INFO.primaryEmail}?subject=${encodeURIComponent(
      formData.subject + ' - From ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Internship Opportunity / Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            I am actively seeking software development internship opportunities. Feel free to reach out directly.
          </p>
        </div>

        {/* Email Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Primary Email */}
          <div className="p-5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2.5 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Primary Email
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.primaryEmail}`}
                  className="text-sm font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.primaryEmail}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.primaryEmail)}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer shrink-0"
              title="Copy email address"
              aria-label="Copy primary email"
            >
              {copiedEmail === PERSONAL_INFO.primaryEmail ? (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Secondary Email */}
          <div className="p-5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Alternative Email
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.secondaryEmail}`}
                  className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.secondaryEmail}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.secondaryEmail)}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer shrink-0"
              title="Copy alternative email address"
              aria-label="Copy secondary email"
            >
              {copiedEmail === PERSONAL_INFO.secondaryEmail ? (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {copiedEmail && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 rounded-lg text-emerald-800 dark:text-emerald-300 text-xs text-center flex items-center justify-center gap-2 shadow-sm">
            <Check className="w-4 h-4" />
            <span>Copied {copiedEmail} to clipboard!</span>
          </div>
        )}

        {/* Quick Message Form & Details Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Details & Location */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Location &amp; Status</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Based in <strong className="text-slate-900 dark:text-white">Kadapa, Andhra Pradesh, India</strong>. Open to on-site, hybrid, and remote internship roles worldwide.
              </p>
              
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex justify-between py-1">
                  <span>University:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">NIAT × Annamacharya</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Major:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">Computer Science &amp; Eng.</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Role Interest:</span>
                  <span className="text-sky-600 dark:text-sky-300 font-semibold">Software Development Intern</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-sm">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                External Profiles
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-2 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-2 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Sender Form */}
          <div className="md:col-span-7 p-6 md:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Send a Direct Note</span>
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">Fast response</span>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Your message has been pre-formatted for direct transmission. Thank you for connecting!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team or internship opportunity..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-98 rounded-lg shadow-md shadow-sky-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
