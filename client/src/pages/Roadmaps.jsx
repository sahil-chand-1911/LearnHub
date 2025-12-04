import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Layers, Server, Smartphone, Cloud, ArrowRight } from 'lucide-react';

const Roadmaps = () => {
    const roadmaps = [
        {
            id: 1,
            title: 'Frontend Development',
            icon: Code,
            color: 'from-blue-500 to-cyan-500',
            description: 'Master HTML, CSS, JavaScript, React, and modern frontend tools',
            steps: ['HTML & CSS Basics', 'JavaScript Fundamentals', 'React.js', 'State Management', 'Testing'],
            duration: '6 months',
        },
        {
            id: 2,
            title: 'Backend Development',
            icon: Server,
            color: 'from-green-500 to-emerald-500',
            description: 'Learn Node.js, databases, APIs, and server-side programming',
            steps: ['Node.js Basics', 'Express.js', 'Databases (SQL/NoSQL)', 'REST APIs', 'Authentication'],
            duration: '6 months',
        },
        {
            id: 3,
            title: 'Full Stack Development',
            icon: Layers,
            color: 'from-purple-500 to-pink-500',
            description: 'Become a complete web developer with frontend and backend skills',
            steps: ['Frontend Basics', 'Backend Basics', 'Database Design', 'Deployment', 'DevOps'],
            duration: '12 months',
        },
        {
            id: 4,
            title: 'Data Structures & Algorithms',
            icon: Database,
            color: 'from-orange-500 to-red-500',
            description: 'Master DSA for coding interviews and competitive programming',
            steps: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'System Design'],
            duration: '4 months',
        },
        {
            id: 5,
            title: 'Mobile Development',
            icon: Smartphone,
            color: 'from-indigo-500 to-purple-500',
            description: 'Build native and cross-platform mobile applications',
            steps: ['React Native Basics', 'Mobile UI/UX', 'Native Features', 'State Management', 'Publishing'],
            duration: '5 months',
        },
        {
            id: 6,
            title: 'Cloud & DevOps',
            icon: Cloud,
            color: 'from-teal-500 to-green-500',
            description: 'Learn cloud platforms, CI/CD, and modern DevOps practices',
            steps: ['AWS/Azure Basics', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring'],
            duration: '4 months',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-extrabold text-white mb-4 fade-in">Learning Roadmaps</h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto fade-in">
                        Follow structured paths designed by industry experts to master your chosen technology
                    </p>
                </div>
            </div>

            {/* Roadmaps Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roadmaps.map((roadmap, index) => {
                        const Icon = roadmap.icon;
                        return (
                            <div
                                key={roadmap.id}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border border-gray-100 fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`h-2 bg-gradient-to-r ${roadmap.color}`}></div>
                                <div className="p-8">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${roadmap.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{roadmap.title}</h3>
                                    <p className="text-gray-600 mb-6">{roadmap.description}</p>

                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-gray-700">Learning Path</span>
                                            <span className="text-sm font-semibold text-indigo-600">{roadmap.duration}</span>
                                        </div>
                                        <div className="space-y-2">
                                            {roadmap.steps.map((step, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                                        {i + 1}
                                                    </div>
                                                    {step}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        to="/signup"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        Start Learning
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Not Sure Where to Start?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8">
                        Take our quick assessment to find the perfect learning path for you
                    </p>
                    <Link
                        to="/signup"
                        className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Roadmaps;
