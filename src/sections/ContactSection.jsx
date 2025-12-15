import React, { useState } from 'react';
import { 
  Send, 
  User,
  Mail, 
  Phone, 
  Building,
  MessageSquare,
  CheckCircle,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Video Production',
    'CRM Solutions',
    'Web Development',
    'ERP Systems',
    'Mobile Apps',
    'Cloud Solutions',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7ED] border border-orange-100 mb-6">
            <MessageSquare className="h-4 w-4 text-[#F97316]" />
            <span className="text-sm font-medium text-[#F97316] tracking-wide">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team
          </p>
        </motion.div>


        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration meeting"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Benefits Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Why Partner With Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: "24-hr response" },
                    { icon: CheckCircle, text: "Expert team" },
                    { icon: CheckCircle, text: "Flexible pricing" },
                    { icon: CheckCircle, text: "Ongoing support" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-[#334155]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { number: "24h", label: "Avg. Response" },
                { number: "98%", label: "Satisfaction" },
                { number: "500+", label: "Projects" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white border border-gray-100">
                  <div className="text-2xl font-bold text-[#F97316] mb-1">{stat.number}</div>
                  <div className="text-xs text-[#334155]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium text-green-800">Message sent successfully!</div>
                      <div className="text-sm text-green-700">We'll get back to you within 24 hours.</div>
                    </div>
                  </div>
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Send us a message</h3>
              <p className="text-[#334155] mb-8">
                Fill out the form below and our team will contact you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        Full Name *
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        Email Address *
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        Company
                      </div>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
                    isSubmitting 
                      ? 'bg-[#F97316]/70 cursor-not-allowed' 
                      : 'bg-[#F97316] hover:bg-[#EA580C]'
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-[#334155] text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;