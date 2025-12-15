import React, { useState } from 'react';
import { 
  Video, 
  Globe, 
  Database, 
  Smartphone, 
  Palette, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  X,
  Play,
  Users,
  TrendingUp,
  Code,
  BarChart,
  MessageSquare,
  FileCode,
  ShoppingCart,
  Cpu,
  Target,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Video Production",
      icon: Video,
      description: "End-to-end video solutions from concept to delivery. Professional editing, motion graphics, and animation services.",
      features: [
        "4K/8K Video Editing",
        "Motion Graphics & VFX",
        "Color Grading & Correction",
        "Audio Post-Production",
        "YouTube & Social Media Optimization",
        "Corporate & Commercial Videos"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      stats: ["40% faster rendering", "100+ projects delivered", "4K quality guarantee"]
    },
    {
      id: 2,
      title: "CRM Solutions",
      icon: Users,
      description: "Custom CRM systems that streamline customer relationships and boost sales efficiency.",
      features: [
        "Custom CRM Development",
        "Sales Pipeline Automation",
        "Customer Analytics Dashboard",
        "Mobile CRM Applications",
        "Third-party Integration",
        "24/7 Support & Maintenance"
      ],
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: ["30% sales increase", "360° customer view", "Real-time analytics"]
    },
    {
      id: 3,
      title: "Web Development",
      icon: Code,
      description: "High-performance websites and web applications built with modern frameworks and best practices.",
      features: [
        "React/Next.js Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization",
        "Security & Maintenance"
      ],
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      stats: ["<2s load time", "100% mobile responsive", "SEO optimized"]
    },
    {
      id: 4,
      title: "ERP Systems",
      icon: Database,
      description: "Comprehensive ERP solutions to optimize business processes across all departments.",
      features: [
        "Inventory Management",
        "Accounting & Finance",
        "Supply Chain Management",
        "HR & Payroll Systems",
        "Reporting & Analytics",
        "Custom Module Development"
      ],
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      stats: ["50% process efficiency", "Real-time reporting", "Scalable architecture"]
    },
    {
      id: 5,
      title: "Mobile Apps",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications with exceptional user experience.",
      features: [
        "iOS & Android Development",
        "React Native & Flutter",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Maintenance & Updates"
      ],
      color: "from-red-600 to-orange-600",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      stats: ["5-star app store rating", "100k+ downloads", "99.9% uptime"]
    },
    {
      id: 6,
      title: "Cloud Solutions",
      icon: Cloud,
      description: "Secure and scalable cloud infrastructure solutions for modern businesses.",
      features: [
        "AWS/Azure/GCP Migration",
        "Serverless Architecture",
        "DevOps & CI/CD Pipeline",
        "Cloud Security & Compliance",
        "Disaster Recovery",
        "24/7 Monitoring"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      stats: ["99.95% uptime", "40% cost reduction", "Auto-scaling"]
    },
    {
      id: 7,
      title: "UI/UX Design",
      icon: Palette,
      description: "User-centered design solutions that drive engagement and conversions.",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "UI Design Systems",
        "Usability Testing",
        "Design Audit & Strategy",
        "Brand Identity Design"
      ],
      color: "from-yellow-600 to-amber-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
      stats: ["40% conversion increase", "90% user satisfaction", "Award-winning designs"]
    },
    {
      id: 8,
      title: "Digital Marketing",
      icon: Target,
      description: "Data-driven marketing strategies to increase visibility and drive growth.",
      features: [
        "SEO & Content Strategy",
        "Social Media Marketing",
        "PPC & Display Advertising",
        "Email Marketing Automation",
        "Analytics & Reporting",
        "Conversion Rate Optimization"
      ],
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      stats: ["300% ROI", "50% traffic increase", "Real-time campaign tracking"]
    }
  ];

  const ServiceModal = ({ service, onClose }) => {
    const Icon = service.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`${service.bgColor} p-8 relative overflow-hidden`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            
            <div className="flex items-center gap-6">
              <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#0F172A] mb-2">{service.title}</h3>
                <p className="text-lg text-[#334155]">{service.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-6">Key Features</h4>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[#334155]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-6">Results Delivered</h4>
                <div className="space-y-4">
                  {service.stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gray-50">
                      <div className="text-sm text-[#334155]">{stat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors shadow-lg hover:shadow-xl">
                  Start Project
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-[#F97316] text-[#F97316] font-semibold rounded-lg hover:bg-[#FFF7ED] transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7ED] border border-orange-100 mb-6">
            <Zap className="h-4 w-4 text-[#F97316]" />
            <span className="text-sm font-medium text-[#F97316] tracking-wide">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Specialized Services
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            We provide comprehensive digital solutions tailored to drive your business forward
          </p>
        </motion.div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "500+", label: "Projects Delivered", icon: CheckCircle },
            { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
            { number: "50+", label: "Expert Team", icon: Users },
            { number: "24/7", label: "Dedicated Support", icon: Headphones }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-[#F97316]/30 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-[#F97316] mb-3">{stat.number}</div>
                <div className="flex items-center justify-center gap-2 text-sm text-[#334155]">
                  <Icon className="h-4 w-4" />
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div 
                  className={`h-full rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-transparent transition-all duration-500 cursor-pointer ${service.bgColor}`}
                  onClick={() => setSelectedService(service)}
                >
                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#F97316] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#334155] text-sm mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F97316]"></div>
                          <span className="text-xs text-[#334155]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#F97316] group-hover:underline">
                        Learn More
                      </span>
                      <ArrowRight className="h-5 w-5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-[#FFF7ED] to-orange-50 border border-orange-100">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-[#334155] mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors shadow-lg hover:shadow-xl">
                Schedule a Call
              </button>
              <button className="px-8 py-3 border-2 border-[#F97316] text-[#F97316] font-semibold rounded-lg hover:bg-[#FFF7ED] transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;