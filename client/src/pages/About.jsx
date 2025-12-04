import React from 'react';
import { Users, Target, Zap, Award, Heart, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-24">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 fade-in">
                            About LearnHub
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto fade-in">
                            Empowering the next generation of developers with structured, high-quality learning paths
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="slide-in-left">
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                We believe that learning to code should be accessible, structured, and enjoyable for everyone.
                                LearnHub was created to solve the problem of scattered learning resources and provide a clear
                                path from beginner to professional developer.
                            </p>
                            <p className="text-lg text-gray-600">
                                Our platform combines expert-curated content, interactive learning, and progress tracking to
                                help you achieve your coding goals faster and more effectively.
                            </p>
                        </div>
                        <div className="slide-in-right">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600">What drives us every day</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 hover-lift">
                            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-ring">
                                <Target className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality First</h3>
                            <p className="text-gray-600">
                                Every course is carefully crafted by industry experts to ensure you learn the right way.
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover-lift">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-ring">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Student Success</h3>
                            <p className="text-gray-600">
                                Your success is our success. We're committed to helping you reach your goals.
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 hover-lift">
                            <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-ring">
                                <Zap className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly evolve our platform to provide the best learning experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="scale-in">
                            <div className="text-5xl font-bold text-white mb-2">10k+</div>
                            <div className="text-indigo-200 text-lg">Students</div>
                        </div>
                        <div className="scale-in" style={{ animationDelay: '0.1s' }}>
                            <div className="text-5xl font-bold text-white mb-2">50+</div>
                            <div className="text-indigo-200 text-lg">Courses</div>
                        </div>
                        <div className="scale-in" style={{ animationDelay: '0.2s' }}>
                            <div className="text-5xl font-bold text-white mb-2">95%</div>
                            <div className="text-indigo-200 text-lg">Success Rate</div>
                        </div>
                        <div className="scale-in" style={{ animationDelay: '0.3s' }}>
                            <div className="text-5xl font-bold text-white mb-2">24/7</div>
                            <div className="text-indigo-200 text-lg">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-600">Passionate educators and developers</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                                <img
                                    src={`https://images.unsplash.com/photo-${1500648767791 + i}-a0fda9be7e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`}
                                    alt="Team member"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member {i}</h3>
                                    <p className="text-indigo-600 font-semibold mb-3">Senior Instructor</p>
                                    <p className="text-gray-600 text-sm">
                                        Passionate about teaching and helping students succeed in their coding journey.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
