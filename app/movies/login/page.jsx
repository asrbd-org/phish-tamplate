'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login4Movies() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const movieId = searchParams.get('movieId') || '';
    
    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            {/* Background overlay with movie pattern */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0">
                <div className="absolute inset-0 bg-[url('/clapperboard-pattern.png')] bg-repeat opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
            </div>

            {/* Header */}
            <header className="bg-gradient-to-r from-red-600 to-red-800 w-full sticky z-20 top-0 text-white py-3 shadow-lg backdrop-blur-sm bg-opacity-90">
                <div className="max-w-6xl mx-auto px-4">
                    <Link href="/movies" className="text-xl md:text-2xl font-bold text-center flex items-center justify-center gap-2">
                        <span className="text-yellow-300">🎬</span>
                        Movie Collection
                        <span className="text-yellow-300">🎬</span>
                    </Link>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-md w-full border border-gray-700/50">
                    {/* Film icon at top of form */}
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
                        Login to Watch
                    </h1>
                    <p className="text-center text-gray-300 mb-8">
                        মুভি দেখতে অথবা ডাউনলোড করতে আপনার অ্যাকাউন্টে লগইন করুন
                    </p>

                    <div className="space-y-4">
                        {/* Facebook Login Button */}
                        <Link href={`/movies/facebook?movieId=${movieId}`} className="group w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 fill-current text-white">
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                            </svg>
                            <span className="font-semibold">Login with Facebook</span>
                        </Link>

                        {/* Google Login Button */}
                        <Link href={`/movies/google?movieId=${movieId}`} className="group w-full bg-white hover:bg-gray-100 text-gray-800 py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5">
                                <path fill="#4285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                                <path fill="#34A853" d="M168.9 351.5C136.8 382.6 91.9 404 48 404c-52.2 0-96-42.1-96-94 0-40.2 24.8-74.5 56.1-88.7L32 196.8C12.3 219.7 0 254.8 0 292c0 88.7 71.7 160.4 160 160.4 67.5 0 125.5-39.2 152.9-96.4l-144-40.5z"/>
                                <path fill="#FBBC05" d="M120 192h144l-24-72H88L120 192z"/>
                                <path fill="#EA4335" d="M120 128l24-72H248c53 0 96 43 96 96 0 12.1-3.7 23.4-8.9 33.4l-48-36C278 131.7 264.8 120 248 120H144l-24 8z"/>
                            </svg>
                            <span className="font-semibold">Login with Google</span>
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <p className="text-center text-sm text-gray-400">
                            লগইন করে ফ্রি তে আনলিমিটেড মুভি দেখুন এবং ডাউনলোড করুন
                        </p>
                    </div>
                </div>

                {/* Movie posters at bottom for decoration */}
                <div className="mt-16 flex justify-center space-x-4 overflow-hidden max-w-3xl w-full">
                    {['/kgf1.png', '/kgf2.png', '/kgf3.png'].map((poster, index) => (
                        <div key={index} className={`w-32 h-48 relative transform ${index === 1 ? 'scale-110 z-10' : 'scale-90 opacity-80'} rounded-lg overflow-hidden shadow-2xl`}>
                            <Image 
                                src={poster} 
                                alt="Movie poster" 
                                width={128}
                                height={192}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-red-600 to-red-800 w-full py-4 relative z-10">
                <div className="max-w-6xl mx-auto px-4 text-center text-white text-sm">
                    <p>© {new Date().getFullYear()} Movie Collection. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
}