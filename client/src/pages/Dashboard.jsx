import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BookOpen, TrendingUp, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [progress, setProgress] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const [statsRes, progressRes] = await Promise.all([
                axios.get('http://localhost:3000/api/progress/stats', {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                axios.get('http://localhost:3000/api/progress', {
                    headers: { Authorization: `Bearer ${token}` },
                }),
            ]);
            setStats(statsRes.data);
            setProgress(progressRes.data);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Welcome back, <span className="text-gradient">{user.email?.split('@')[0]}</span>!
                    </h1>
                    <p className="text-xl text-gray-600">Continue your learning journey</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                <BookOpen className="h-6 w-6 text-indigo-600" />
                            </div>
                            <span className="text-sm font-semibold text-indigo-600">Total</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{stats?.totalCompleted || 0}</div>
                        <div className="text-sm text-gray-500">Topics Completed</div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-green-600" />
                            </div>
                            <span className="text-sm font-semibold text-green-600">Progress</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                            {stats?.completionRate?.toFixed(0) || 0}%
                        </div>
                        <div className="text-sm text-gray-500">Completion Rate</div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Award className="h-6 w-6 text-indigo-600" />
                            </div>
                            <span className="text-sm font-semibold text-indigo-600">Available</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{stats?.totalTopics || 0}</div>
                        <div className="text-sm text-gray-500">Total Topics</div>
                    </div>
                </div>

                {/* Learning Paths */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Learning</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/learn/Web Development" className="group">
                            <div className="bg-gradient-to-br from-indigo-600 to-indigo-600 rounded-2xl p-8 text-white hover-lift">
                                <BookOpen className="h-12 w-12 mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                                <p className="text-indigo-100 mb-4">Master React, Node.js, and modern web technologies</p>
                                <div className="flex items-center text-sm font-semibold">
                                    Start Learning <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/learn/DSA" className="group">
                            <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl p-8 text-white hover-lift">
                                <TrendingUp className="h-12 w-12 mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-2">DSA</h3>
                                <p className="text-pink-100 mb-4">Ace coding interviews with data structures & algorithms</p>
                                <div className="flex items-center text-sm font-semibold">
                                    Start Learning <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/learn/System Design" className="group">
                            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white hover-lift">
                                <Award className="h-12 w-12 mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-2">System Design</h3>
                                <p className="text-green-100 mb-4">Learn to design scalable distributed systems</p>
                                <div className="flex items-center text-sm font-semibold">
                                    Start Learning <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Recent Progress */}
                {progress.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Progress</h2>
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <div className="space-y-4">
                                {progress.slice(0, 5).map((item) => (
                                    <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                <CheckCircle className="h-5 w-5 text-green-600" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">{item.topic.title}</div>
                                                <div className="text-sm text-gray-500">{item.topic.category}</div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {new Date(item.completedAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
