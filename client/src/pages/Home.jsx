import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Database, BookOpen, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        } else {
            navigate('/signup');
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section - MDN Style */}
            <div className="relative bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                            Learn Web Development & DSA
                            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                The Right Way
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            A structured, comprehensive learning platform for aspiring developers. Master the fundamentals and advance your career.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={handleGetStarted}
                                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <Link
                                to="/courses"
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                Browse Courses
                            </Link>
                        </div>
                        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>Free to start</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>10,000+ students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>Expert instructors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Succeed
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive resources designed to take you from beginner to professional
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Curriculum</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Follow a proven learning path designed by industry experts. No more scattered tutorials.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Practice</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Learn by doing with interactive exercises and real-world projects.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Award className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Monitor your learning journey with detailed progress tracking and achievements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learning Paths */}
            <div className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Learning Path
                        </h2>
                        <p className="text-xl text-gray-600">
                            Start with the fundamentals or dive into advanced topics
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Web Development */}
                        <Link to="/learn/Web Development" className="group">
                            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Code className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                                        Beginner Friendly
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    Web Development
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Master HTML, CSS, JavaScript, React, and modern web technologies
                                </p>
                                <div className="flex items-center text-blue-600 font-semibold">
                                    Start Learning
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* DSA */}
                        <Link to="/learn/DSA" className="group">
                            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Database className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                                        Interview Prep
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    Data Structures & Algorithms
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Ace coding interviews with comprehensive DSA coverage
                                </p>
                                <div className="flex items-center text-blue-600 font-semibold">
                                    Start Learning
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* System Design */}
                        <Link to="/learn/System Design" className="group">
                            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <Zap className="h-6 w-6 text-green-600" />
                                    </div>
                                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                                        Advanced
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    System Design
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Learn to design scalable, distributed systems
                                </p>
                                <div className="flex items-center text-blue-600 font-semibold">
                                    Start Learning
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                            <div className="text-blue-100 text-lg">Courses</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10k+</div>
                            <div className="text-blue-100 text-lg">Students</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
                            <div className="text-blue-100 text-lg">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                            <div className="text-blue-100 text-lg">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of students learning to code with LearnHub
                    </p>
                    <button
                        onClick={handleGetStarted}
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                    >
                        Create Free Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
