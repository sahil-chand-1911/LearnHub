import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Clock, BarChart, Star, Users, Award } from 'lucide-react';

const coursesData = [
    {
        id: 1,
        title: 'Complete React Guide',
        category: 'Web Development',
        level: 'Beginner',
        duration: '20h',
        students: '12.5k',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Master React.js from scratch. Learn hooks, Redux, and build 3 real-world projects.',
    },
    {
        id: 2,
        title: 'Node.js API Masterclass',
        category: 'Web Development',
        level: 'Intermediate',
        duration: '15h',
        students: '8.2k',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1629904853716-f004c428fc71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Build robust REST APIs with Node.js, Express, and MongoDB. Includes auth and security.',
    },
    {
        id: 3,
        title: 'DSA for Interviews',
        category: 'DSA',
        level: 'Advanced',
        duration: '40h',
        students: '15.3k',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Crack top tech interviews. Covers Arrays, Linked Lists, Trees, Graphs, and DP.',
    },
    {
        id: 4,
        title: 'Tailwind CSS Pro',
        category: 'Web Development',
        level: 'Beginner',
        duration: '8h',
        students: '6.7k',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Learn to build beautiful, responsive layouts rapidly with utility-first CSS.',
    },
    {
        id: 5,
        title: 'System Design 101',
        category: 'System Design',
        level: 'Advanced',
        duration: '12h',
        students: '9.1k',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Learn how to design scalable systems. Load balancing, caching, sharding, and more.',
    },
    {
        id: 6,
        title: 'JavaScript Deep Dive',
        category: 'Web Development',
        level: 'Intermediate',
        duration: '25h',
        students: '11.4k',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Understand the weird parts of JS: Closures, Event Loop, Prototypes, and Async.',
    },
];

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredCourses = coursesData.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const getLevelColor = (level) => {
        switch (level) {
            case 'Beginner':
                return 'bg-green-100 text-green-800';
            case 'Intermediate':
                return 'bg-yellow-100 text-yellow-800';
            case 'Advanced':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 fade-in">
                        Explore Our Courses
                    </h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto fade-in">
                        Find the perfect course to upgrade your skills and advance your career
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search and Filter */}
                <div className="mb-12 space-y-6">
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-lg shadow-sm"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {['All', 'Web Development', 'DSA', 'System Design'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={course.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift border border-gray-100 fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src={course.image}
                                    alt={course.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${getLevelColor(course.level)}`}>
                                        {course.level}
                                    </span>
                                </div>
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <BookOpen className="h-4 w-4 text-indigo-600" />
                                    <span className="text-sm font-semibold text-indigo-600">{course.category}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {course.description}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4 text-indigo-500" />
                                        <span>{course.students}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4 text-indigo-500" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <Link
                                    to={`/learn/${course.category}`}
                                    className="block w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                                >
                                    Enroll Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <BookOpen className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
