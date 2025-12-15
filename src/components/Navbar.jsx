import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const servicesRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navItems = [
        { label: 'Home', href: '#' },
        {
            label: 'Services',
            href: '#',
            dropdown: [
                { label: 'Web Development', href: '#' },
                { label: 'Mobile Apps', href: '#' },
                { label: 'UI/UX Design', href: '#' },
                { label: 'Digital Marketing', href: '#' },
                { label: 'Cloud Solutions', href: '#' }
            ]
        },
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' }
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="hrink-0 flex items-center">
                            <div className="h-8 w-8 rounded-lg  flex items-center justify-center mr-3">
                                <img src="/logo.png" alt="Sammunat_llc Logo" />
                            </div>
                            <span className="text-xl font-bold text-[#0F172A]">SAMMUNAT LLC</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative" ref={item.dropdown ? servicesRef : null}>
                                {item.dropdown ? (
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex items-center text-[#334155] hover:text-[#0F172A] transition-colors duration-200 font-medium"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="text-[#334155] hover:text-[#0F172A] transition-colors duration-200 font-medium"
                                    >
                                        {item.label}
                                    </a>
                                )}

                                {/* Services Dropdown */}
                                {item.dropdown && servicesOpen && (
                                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                                        {item.dropdown.map((service) => (
                                            <a
                                                key={service.label}
                                                href={service.href}
                                                className="block px-4 py-2 text-[#334155] hover:bg-[#FFF7ED] hover:text-[#0F172A] transition-colors duration-200"
                                            >
                                                {service.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* We're Hiring Button */}
                        <button className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative px-6 py-2.5 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-all duration-300 transform group-hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                                We're Hiring
                                <span className="absolute -top-1 -right-1 h-3 w-3">
                                    {/* Subtle ping with opacity control */}
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40 animate-ping"></span>
                                    {/* Solid green dot with subtle border */}
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-emerald-300"></span>
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button className="relative">
                            <div className="px-4 py-2 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors duration-300 shadow-md text-sm">
                                Hiring
                                <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#EA580C] rounded-full"></span>
                            </div>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#334155] hover:text-[#0F172A] hover:bg-[#FFF7ED] focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-[#334155] hover:text-[#0F172A] hover:bg-[#FFF7ED] rounded-lg"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {servicesOpen && (
                                            <div className="pl-6 space-y-1">
                                                {item.dropdown.map((service) => (
                                                    <a
                                                        key={service.label}
                                                        href={service.href}
                                                        className="block px-3 py-2 text-sm text-[#334155] hover:text-[#0F172A] hover:bg-[#FFF7ED] rounded-lg"
                                                    >
                                                        {service.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="block px-3 py-3 text-base font-medium text-[#334155] hover:text-[#0F172A] hover:bg-[#FFF7ED] rounded-lg"
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;