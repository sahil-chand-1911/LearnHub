import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <BookOpen className="h-8 w-8 text-indigo-500" />
                            <span className="ml-2 text-xl font-bold text-white">LearnHub</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Empowering the next generation of developers with structured learning paths.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
                            <li><Link to="/courses" className="hover:text-indigo-400 transition-colors">Courses</Link></li>
                            <li><Link to="/roadmaps" className="hover:text-indigo-400 transition-colors">Roadmaps</Link></li>
                            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Learning Paths */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Learning Paths</h3>
                        <ul className="space-y-2">
                            <li><Link to="/learn/Web Development" className="hover:text-indigo-400 transition-colors">Web Development</Link></li>
                            <li><Link to="/learn/DSA" className="hover:text-indigo-400 transition-colors">DSA</Link></li>
                            <li><Link to="/learn/System Design" className="hover:text-indigo-400 transition-colors">System Design</Link></li>
                            <li><Link to="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-indigo-500" />
                                <span className="text-sm">support@learnhub.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-indigo-500" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-indigo-500" />
                                <span className="text-sm">San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} LearnHub. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
