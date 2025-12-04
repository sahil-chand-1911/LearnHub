import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, CheckCircle, BookOpen, ExternalLink } from 'lucide-react';

const TopicDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [topic, setTopic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [completing, setCompleting] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchTopic();
    }, [id]);

    const fetchTopic = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/topics/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTopic(response.data);
        } catch (error) {
            console.error('Error fetching topic:', error);
        } finally {
            setLoading(false);
        }
    };

    const markComplete = async () => {
        setCompleting(true);
        try {
            await axios.post(
                `http://localhost:3000/api/progress/${id}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Topic marked as complete!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error marking complete:', error);
            alert('Failed to mark as complete');
        } finally {
            setCompleting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!topic) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Topic not found</h2>
                    <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-700">
                        Go back to dashboard
                    </Link>
                </div>
            </div>
        );
    }

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <Link to={`/learn/${topic.category}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to {topic.category}
                </Link>

                {/* Topic Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(topic.difficulty)}`}>
                                    {topic.difficulty}
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
                                    {topic.category}
                                </span>
                            </div>
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{topic.title}</h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none mb-8">
                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {topic.content}
                        </div>
                    </div>

                    {/* Resources */}
                    {topic.resources && (
                        <div className="mt-8 p-6 bg-indigo-50 rounded-xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="h-5 w-5 mr-2 text-indigo-600" />
                                Additional Resources
                            </h3>
                            <div className="space-y-2">
                                {topic.resources.split(',').map((resource, index) => (
                                    <a
                                        key={index}
                                        href={resource.trim()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-indigo-600 hover:text-indigo-700"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        {resource.trim()}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mark Complete Button */}
                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={markComplete}
                            disabled={completing}
                            className="flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                        >
                            <CheckCircle className="h-5 w-5 mr-2" />
                            {completing ? 'Marking Complete...' : 'Mark as Complete'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicDetail;
