import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ChevronRight, Calendar, Tag, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const RecentWorkSection = () => {
  const [activeHover, setActiveHover] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      client: "TechRetail Inc.",
      year: "2025",
      description: "Complete overhaul of e-commerce platform with modern UI/UX, improved checkout flow, and 40% faster load times.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      client: "FinSecure Bank",
      year: "2024",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w-800&auto=format&fit=crop",
      tags: ["React Native", "Firebase", "iOS", "Android"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Healthcare Analytics Dashboard",
      category: "Data Visualization",
      client: "MediCare Solutions",
      year: "2024",
      description: "Real-time analytics dashboard for healthcare providers with predictive insights and patient tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      tags: ["D3.js", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI-Powered CRM System",
      category: "AI/ML",
      client: "SalesBoost AI",
      year: "2023",
      description: "Intelligent CRM with predictive lead scoring and automated customer journey mapping.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      tags: ["TensorFlow", "React", "FastAPI", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Travel Booking Portal",
      category: "Full Stack",
      client: "Global Travels",
      year: "2023",
      description: "Multi-vendor travel booking platform with integrated payment gateway and real-time availability.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop",
      tags: ["Next.js", "GraphQL", "Stripe", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "IoT Smart Home System",
      category: "IoT",
      client: "HomeTech Solutions",
      year: "2022",
      description: "Complete smart home ecosystem with cross-platform mobile app and voice assistant integration.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      tags: ["IoT", "React Native", "MQTT", "Raspberry Pi"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7ED] border border-orange-100 mb-4">
            <span className="text-sm font-medium text-[#F97316]">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-[#334155] max-w-2xl mx-auto">
            Explore our latest work delivering innovative solutions across various industries
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['All', 'Web Development', 'Mobile', 'AI/ML', 'IoT', 'Data'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full text-sm font-medium text-[#334155] hover:text-[#F97316] hover:bg-[#FFF7ED] transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setActiveHover(project.id)}
              onMouseLeave={() => setActiveHover(null)}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-semibold text-[#0F172A]">
                    {project.category}
                  </span>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-[#F97316] text-white px-3 py-1.5 rounded-full">
                  <span className="text-xs font-semibold">{project.year}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-[#334155]" />
                  <span className="text-sm text-[#334155]">{project.client}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#F97316] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[#334155] text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-xs font-medium text-[#334155] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: activeHover === project.id ? 1 : 0 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <motion.h4
                        className="text-2xl font-bold mb-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: activeHover === project.id ? 0 : 20,
                          opacity: activeHover === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        Project Details
                      </motion.h4>
                      
                      <motion.p
                        className="mb-6 text-gray-200"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: activeHover === project.id ? 0 : 20,
                          opacity: activeHover === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {project.description}
                      </motion.p>

                      <motion.div
                        className="flex justify-center gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: activeHover === project.id ? 0 : 20,
                          opacity: activeHover === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-2 px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-[#EA580C] transition-colors"
                        >
                          <Eye className="h-4 w-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-sm font-medium text-[#F97316] hover:text-[#EA580C]"
                    >
                      View Project
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#F97316] transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#F97316] transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="group px-8 py-3 bg-[#F97316] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#EA580C] transition-all duration-300">
            <span className="flex items-center gap-2">
              View All Projects
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWorkSection;