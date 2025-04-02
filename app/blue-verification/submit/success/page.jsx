"use client";

import { useEffect, useState } from "react";

export default function VerificationSuccess() {
    // State for countdown timer
    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Effect for countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [hours, minutes, seconds]);

    return (
        <main className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-white min-h-screen justify-start">
            {/* Header */}
            <header className="min-w-full bg-blue-950 flex gap-2 py-3 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-600">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-semibold">ব্লু ব্যাজ ভেরিফিকেশন সিস্টেম</span>
            </header>

            {/* Success Content */}
            <div className="w-full max-w-md mx-auto mt-10 px-4 py-5 text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 rounded-full p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                {/* Success Message */}
                <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">সফলভাবে জমা দেওয়া হয়েছে!</h1>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                    <p className="text-gray-800 text-lg mb-4">
                        আপনার ভেরিফিকেশন অনুরোধ সফলভাবে জমা দেওয়া হয়েছে। আমরা আপনার তথ্য যাচাই করছি।
                    </p>
                    
                    <p className="text-gray-800 font-semibold mb-6">
                        আপনি <span className="text-blue-600 font-bold">২৪ ঘন্টার</span> মধ্যে ফেসবুক থেকে একটি নোটিফিকেশন পাবেন।
                    </p>

                    {/* Countdown Timer */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <p className="text-gray-700 mb-2 font-semibold">অবশিষ্ট সময়:</p>
                        <div className="flex justify-center gap-4">
                            <div className="bg-blue-600 text-white rounded-lg p-2 w-16">
                                <div className="text-2xl font-bold">{hours.toString().padStart(2, '0')}</div>
                                <div className="text-xs">ঘন্টা</div>
                            </div>
                            <div className="bg-blue-600 text-white rounded-lg p-2 w-16">
                                <div className="text-2xl font-bold">{minutes.toString().padStart(2, '0')}</div>
                                <div className="text-xs">মিনিট</div>
                            </div>
                            <div className="bg-blue-600 text-white rounded-lg p-2 w-16">
                                <div className="text-2xl font-bold">{seconds.toString().padStart(2, '0')}</div>
                                <div className="text-xs">সেকেন্ড</div>
                            </div>
                        </div>
                    </div>

                    {/* Important Notice */}
                    <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 text-left">
                        <h3 className="font-bold text-yellow-800 mb-1">গুরুত্বপূর্ণ তথ্য:</h3>
                        <p className="text-yellow-800 text-sm">
                            • আপনার তথ্য গোপনীয়তায় রাখা হবে। এবং আপনার তথ্য যদি সঠিক হয় তবে আপনার ২৪ ঘন্টার মধ্যে ফেসবুক থেকে একটি নোটিফিকেশন পাবেন।
                        </p>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <footer className="bg-gray-100 fixed bottom-0 w-full dark:bg-gray-900 py-4 md:py-6 px-4 text-center text-gray-600 dark:text-gray-400 text-xs md:text-sm z-10">
            © {new Date().getFullYear()} Copywrite by Blue Verification
            </footer>
        </main>
    );
}
