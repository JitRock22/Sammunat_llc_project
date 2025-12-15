import React from 'react';
import Navbar from '../components/Navbar';
import heroimg from '../assets/hero_img.jpg';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="min-h-fit bg-gradient-to-b from-[#FFF7ED] to-white pb-8">
            {/* Navbar */}
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
        
                    <div className="lg:w-1/2 space-y-6 lg:pt-8 lg:-mt-6">
                        {/* Badge */}
                        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FFF7ED] border border-orange-100">
                            <Sparkles className="h-3 w-3 text-[#F97316] mr-2" />
                            <span className="text-xs font-medium text-[#F97316]">
                                Trusted by 500+ Companies
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                            Crafting{' '}
                            <span className="text-[#F97316] relative inline-block">
                                Project Specific
                                <svg className="absolute -bottom-1 left-0 w-full" width="200" height="6">
                                    <path d="M0,3 Q50,6 100,3 T200,3" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>{' '}
                            Solutions with Expertise.
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#334155] max-w-xl leading-relaxed">
                            We're a creative company that focuses on establishing long-term partnership with customers.
                            Our team delivers innovative solutions tailored to your unique business needs.
                        </p>


                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            {/* Explore Now Button */}
                            <button className="group relative overflow-hidden px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-all duration-300 hover:shadow-lg hover:shadow-orange-200">
                                <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                                    <span>Explore Now</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>

                            {/* Contact Us Button */}
                            <button className="group px-6 py-3 border border-[#F97316] text-[#F97316] font-semibold rounded-lg hover:bg-[#FFF7ED] transition-all duration-300">
                                <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                                    <Phone className="h-4 w-4" />
                                    <span>Contact Us</span>
                                </div>
                                <div className="h-0.5 w-0 group-hover:w-full bg-[#F97316] transition-all duration-300 mx-auto mt-0.5"></div>
                            </button>
                        </div>                      
                    </div>

                    {/* Right Side - Vector Image - Added lg:-mt-6 to move it up */}
                    <div className="lg:w-1/2 space-y-6 lg:pt-8 lg:-mt-6">
                        {/* Main Vector Image Container */}
                        <div className="relative">
                            {/* Background decorative elements - Adjusted positions */}
                            <div className="absolute -top-2 -right-2 h-32 w-32 rounded-full bg-gradient-to-br from-orange-100/50 to-transparent -z-10"></div>
                            <div className="absolute -bottom-2 -left-2 h-32 w-32 rounded-full bg-gradient-to-tr from-orange-50 to-transparent -z-10"></div>

                            {/* Vector Image Container */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                {/* Vector Image */}
                                <img
                                    src={heroimg}
                                    alt="Team collaboration and business solutions vector illustration"
                                    className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23FFF7ED'/%3E%3Cg fill='%23F97316' fill-opacity='0.1'%3E%3Ccircle cx='150' cy='100' r='80'/%3E%3Ccircle cx='450' cy='200' r='60'/%3E%3Ccircle cx='300' cy='300' r='70'/%3E%3C/g%3E%3Cg fill='none' stroke='%23F97316' stroke-width='2'%3E%3Cpath d='M100,200 Q200,100 300,200 T500,200'/%3E%3Cpath d='M100,250 Q250,150 400,250'/%3E%3C/g%3E%3Cg fill='%23F97316'%3E%3Ccircle cx='120' cy='180' r='8'/%3E%3Ccircle cx='300' cy='200' r='8'/%3E%3Ccircle cx='480' cy='220' r='8'/%3E%3C/g%3E%3Ctext x='300' y='180' text-anchor='middle' font-family='Arial' font-size='24' fill='%230F172A'%3EYour Vector Image%3C/text%3E%3Ctext x='300' y='220' text-anchor='middle' font-family='Arial' font-size='16' fill='%23334155'%3E(Replace with your vector)%3C/text%3E%3C/svg%3E";
                                    }}
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Floating badge - Adjusted position */}


                            {/* Floating stats card - Adjusted position */}
                            <div className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-lg p-3 max-w-[180px] border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
                                        <div className="h-4 w-4 rounded-full bg-[#F97316]"></div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#0F172A]">24/7 Support</div>
                                        <div className="text-xs text-[#334155]">Always available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;