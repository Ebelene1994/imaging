import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldAlert, ExternalLink 
} from 'lucide-react';
import { CENTER_INFO } from '../data/knowledgeBase';
import { SocialIcons } from '../components/SocialIcons';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page" className="bg-slate-50 min-h-screen py-12 px-4 sm:px-8 font-sans">
      <SEO
        title="Contact & Location | Glims Imaging Center Laurel MD"
        description="Contact Glims Imaging Center in Laurel, MD. View our phone numbers, hours, office location, directions, and send us a direct message."
        canonical="/contact"
      />
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#2AA84A] font-extrabold text-xs uppercase tracking-widest bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B4EA2]">
            Contact & Location Details
          </h1>
          <p className="text-sm text-slate-600">
            We look forward to welcoming you to our Laurel, Maryland center or answering any questions about your upcoming scan.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1: Address */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B4EA2] flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#0B4EA2]">Facility Address</h3>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {CENTER_INFO.address.full}
            </p>
            <p className="text-[11px] text-slate-500">
              Suite #207 (Ground Level Parking Available)
            </p>
            <a
              href={CENTER_INFO.address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#2AA84A] hover:underline pt-2"
            >
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Box 2: Phone & WhatsApp */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2AA84A] flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#2AA84A]">Phone & WhatsApp</h3>
            <div className="space-y-1 text-xs text-slate-700 font-medium">
              <p>Primary: <a href={`tel:${CENTER_INFO.phones.primary.replace(/\D/g, '')}`} className="font-bold text-[#0B4EA2]">{CENTER_INFO.phones.primary}</a></p>
              <p>Secondary: <a href={`tel:${CENTER_INFO.phones.secondary.replace(/\D/g, '')}`} className="font-bold text-[#0B4EA2]">{CENTER_INFO.phones.secondary}</a></p>
              <p>WhatsApp: <span className="font-mono text-emerald-700 font-bold">{CENTER_INFO.phones.whatsappDisplay}</span></p>
            </div>
            <p className="text-[11px] text-amber-600 font-semibold pt-1">
              ⚡ 24/7 Emergency Care Available
            </p>
          </div>

          {/* Box 3: Email */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7A2CA5] flex items-center justify-center font-bold">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#7A2CA5]">Email Communication</h3>
            <div className="space-y-1 text-xs text-slate-700 font-medium">
              <p>Email: <a href={`mailto:${CENTER_INFO.email}`} className="text-[#0B4EA2] underline break-all">{CENTER_INFO.email}</a></p>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Emails answered within 1-2 business hours.
            </p>
          </div>
        </div>

        {/* Social Media Connect Banner */}
        <div className="bg-gradient-to-r from-[#0B4EA2] to-blue-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-widest block mb-1">
              Join Our Healthcare Community
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Follow Glims Imaging Center On Social Media
            </h3>
            <p className="text-xs text-blue-100 mt-1 max-w-xl">
              Stay updated with ultrasound health tips, 3D/4D keepsakes, patient stories, and center announcements across all our platforms.
            </p>
          </div>
          <SocialIcons variant="colorful" className="flex items-center gap-3 shrink-0" iconClassName="w-5 h-5" />
        </div>

        {/* Form and Hours Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Hours Card */}
          <div className="lg:col-span-5 bg-[#0B4EA2] text-white p-8 rounded-3xl shadow-xl space-y-6">
            <div>
              <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-widest block mb-1">
                FACILITY SCHEDULE
              </span>
              <h3 className="text-2xl font-black text-white">Office Hours</h3>
              <p className="text-xs text-blue-100 mt-1">
                Walk-ins welcome with physician script, or schedule online 24/7.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/10 border border-white/10">
                <span className="font-medium text-slate-200">Monday – Friday</span>
                <span className="font-bold text-white">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/10 border border-white/10">
                <span className="font-medium text-slate-200">Saturday</span>
                <span className="font-bold text-emerald-300">9:00 AM – 3:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/10 border border-white/10">
                <span className="font-medium text-slate-200">Sunday</span>
                <span className="font-bold text-amber-200">Closed / By Appointment</span>
              </div>
              <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-300/30 text-amber-300 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span className="font-bold">24/7 Emergency Care Available</span>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-800/80">
              <span className="text-xs font-bold text-emerald-300 block mb-1">
                Directions Note:
              </span>
              <p className="text-xs text-blue-100 leading-relaxed">
                Located off Greenview Drive near Baltimore-Washington Parkway in Laurel, MD. Look for Suite #207.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0B4EA2]">Send Us A Message</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Have a question about prep, insurance, or scheduling? Fill out the form below.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#2AA84A] mx-auto" />
                <h4 className="font-bold text-[#2AA84A] text-base">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Thank you! Our Laurel imaging team will get back to you shortly. You can also reach us immediately at (301) 615-2877.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#0B4EA2] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B4EA2] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="(301) 615-2877"
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B4EA2] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B4EA2] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B4EA2] outline-none"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Appointment Booking">Appointment Booking Inquiry</option>
                    <option value="Mobile Ultrasound">Mobile Bedside Ultrasound Request</option>
                    <option value="3D/4D & Gender Reveal">3D/4D or Gender Reveal Package</option>
                    <option value="Insurance / Billing">Insurance & Self-Pay Pricing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="How can we assist your imaging needs today?"
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B4EA2] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B4EA2] hover:bg-blue-800 text-white font-extrabold py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Location & Map Section */}
        <div id="contact-map" className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[#0B4EA2] font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Facility Location
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Find Us in Laurel, MD
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {CENTER_INFO.address.full}
              </p>
            </div>
            <a
              href="https://www.google.com/maps?ll=39.089499,-76.844688&z=16&t=m&hl=en&gl=US&mapclient=embed&q=14504+Greenview+Dr+Ste+207+Laurel,+MD+20708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2AA84A] hover:bg-green-700 text-white px-5 py-3 rounded-full text-xs font-bold shadow-md transition-colors self-start sm:self-auto shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative">
            <iframe
              title="Glims Imaging Center Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=14504+Greenview+Dr+Ste+207+Laurel,+MD+20708&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
