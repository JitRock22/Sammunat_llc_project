import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest updates</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none w-full sm:w-80"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center">
                    <img src="/logo.png" alt="Sammunat LLC logo" />
                </div>
                <span className="text-xl font-bold">SAMMUNAT LLC</span>
              </div>
              <p className="text-gray-400 mb-6">
                We deliver innovative digital solutions that transform businesses and drive growth.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#F97316] transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Projects', 'About Us', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#F97316] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  'Video Production',
                  'CRM Solutions', 
                  'Web Development',
                  'ERP Systems',
                  'Mobile Apps',
                  'UI/UX Design'
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#F97316] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#F97316] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">
                      127 N Higgins Ave Ste 307d<br />
                      Missoula, MT 59802<br />
                      USA
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#F97316] flex-shrink-0" />
                  <a 
                    href="tel:+971588749689" 
                    className="text-gray-400 hover:text-[#F97316] transition-colors"
                  >
                    +971 588749689
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#F97316] flex-shrink-0" />
                  <a 
                    href="mailto:contact@sammunat.com" 
                    className="text-gray-400 hover:text-[#F97316] transition-colors"
                  >
                    contact@sammunat.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sammunat. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              <a href="#" className="hover:text-[#F97316] transition-colors mx-3">Privacy Policy</a>
              <a href="#" className="hover:text-[#F97316] transition-colors mx-3">Terms of Service</a>
              <a href="#" className="hover:text-[#F97316] transition-colors mx-3">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;