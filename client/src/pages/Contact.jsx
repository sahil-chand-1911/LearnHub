import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-extrabold text-white mb-4 fade-in">Get in Touch</h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto fade-in">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 slide-in-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                <MessageSquare className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 slide-in-right">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">support@learnhub.com</p>
                                        <p className="text-gray-600">info@learnhub.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                                        <p className="text-gray-600">123 Learning Street</p>
                                        <p className="text-gray-600">San Francisco, CA 94102</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                            <p className="text-indigo-100 mb-6">
                                Check out our FAQ section or join our community Discord server for instant support from our team and fellow learners.
                            </p>
                            <button className="w-full px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all">
                                Visit FAQ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
