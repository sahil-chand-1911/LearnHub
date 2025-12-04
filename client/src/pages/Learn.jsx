import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { BookOpen, CheckCircle, Clock, BarChart, ArrowLeft } from 'lucide-react';

const Learn = () => {
    const { category } = useParams();
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('ALL');
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchTopics();
    }, [category, filter]);

    const fetchTopics = async () => {
        try {
            const params = { category };
            if (filter !== 'ALL') {
                params.difficulty = filter;
            }

            const response = await axios.get('http://localhost:3000/api/topics', {
                headers: { Authorization: `Bearer ${token}` },
                params,
            });
            setTopics(response.data.topics || []);
        } catch (error) {
            console.error('Error fetching topics:', error);
        } finally {
            setLoading(false);
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'BEGINNER':
                return 'bg-green-100 text-green-800';
            case 'INTERMEDIATE':
                return 'bg-yellow-100 text-yellow-800';
            case 'ADVANCED':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
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
                {/* Header */}
                <div className="mb-8">
                    <Link to="/dashboard" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Dashboard
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        {category} <span className="text-gradient">Learning Path</span>
                    </h1>
                    <p className="text-xl text-gray-600">Master {category} step by step</p>
                </div>

                {/* Filters */}
                <div className="mb-8 flex gap-3">
                    {['ALL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'].map((level) => (
                        <button
                            key={level}
                            onClick={() => setFilter(level)}
                            className={`px-6 py-2 rounded-xl font-semibold transition-all ${filter === level
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Topics List */}
                <div className="space-y-4">
                    {topics.map((topic, index) => (
                        <Link
                            key={topic.id}
                            to={`/topic/${topic.id}`}
                            className="block bg-white rounded-2xl shadow-lg p-6 hover-lift border border-gray-100 fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                            <BookOpen className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                {topic.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(topic.difficulty)}`}>
                                                    {topic.difficulty}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 line-clamp-2">{topic.content.substring(0, 150)}...</p>
                                </div>
                                <div className="ml-4">
                                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
                                        <CheckCircle className="h-5 w-5 text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {topics.length === 0 && (
                    <div className="text-center py-20">
                        <BookOpen className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No topics found</h3>
                        <p className="text-gray-500">Topics for this category will be added soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Learn;
