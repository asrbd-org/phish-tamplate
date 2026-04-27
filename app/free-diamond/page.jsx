import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Free Diamond Top-up - Limited Time Offer',
  description: 'Get free diamonds for your favorite game. Register now for this limited time offer and enhance your gaming experience with free diamonds.',
  keywords: ['free diamonds', 'game top-up', 'free game currency', 'diamond giveaway', 'gaming rewards'],
  openGraph: {
    title: 'Free Diamond Top-up - Limited Time Offer',
    description: 'Get free diamonds for your favorite game. Register now for this limited time offer and enhance your gaming experience with free diamonds.'
  },
  twitter: {
    title: 'Free Diamond Top-up - Limited Time Offer',
    description: 'Get free diamonds for your favorite game. Register now for this limited time offer and enhance your gaming experience with free diamonds.'
  }
};

export default function FreeDiamond() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-purple-950/40 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
              <span className="text-4xl animate-bounce">💎</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ফ্রি ডায়মন্ড পাওয়ার সুযোগ!</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>💎</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="text-7xl md:text-8xl animate-pulse">💎</div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            আপনার <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">গেমিং যাত্রা</span> শুরু করুন
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">সীমিত সময়ের জন্য বিশেষ অফার! বিনামূল্যে ডায়মন্ড পান এবং আপনার প্রিয় গেমে জয়ী হন।</p>
          
          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-2xl p-6 mb-8 backdrop-blur">
            <p className="text-gray-400 mb-3">অফার শেষ হতে যাচ্ছে:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="bg-purple-950/50 border border-purple-500/30 rounded-lg px-4 py-2">
                <p className="text-2xl font-bold text-purple-300">02</p>
                <p className="text-xs text-gray-400">দিন</p>
              </div>
              <div className="bg-purple-950/50 border border-purple-500/30 rounded-lg px-4 py-2">
                <p className="text-2xl font-bold text-pink-300">14</p>
                <p className="text-xs text-gray-400">ঘণ্টা</p>
              </div>
              <div className="bg-purple-950/50 border border-purple-500/30 rounded-lg px-4 py-2">
                <p className="text-2xl font-bold text-purple-300">38</p>
                <p className="text-xs text-gray-400">মিনিট</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="max-w-2xl mx-auto mb-12">
          <Link href="free-diamond/form" className="block group">
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl text-lg md:text-xl transition-all duration-300 transform group-hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">
              🎮 এখনই রেজিস্ট্রেশন করুন - ফ্রি ডায়মন্ড পান!
            </button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/30 rounded-2xl p-6 backdrop-blur hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2">তাৎক্ষণিক ডেলিভারি</h3>
            <p className="text-gray-400 text-sm">রেজিস্ট্রেশন সম্পন্ন করার পর ২ ঘণ্টার মধ্যে ডায়মন্ড পাবেন</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/20 to-transparent border border-pink-500/30 rounded-2xl p-6 backdrop-blur hover:border-pink-500/50 transition-all">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-lg mb-2">সম্পূর্ণ নিরাপদ</h3>
            <p className="text-gray-400 text-sm">আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং এনক্রিপ্ট করা</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/30 rounded-2xl p-6 backdrop-blur hover:border-blue-500/50 transition-all">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="font-bold text-lg mb-2">বিশ্বস্ত প্ল্যাটফর্ম</h3>
            <p className="text-gray-400 text-sm">৫০,০০০+ সন্তুষ্ট ব্যবহারকারী আমাদের বিশ্বাস করেন</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">সফল ব্যবহারকারীদের মতামত</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'রাকিব হাসান', city: 'ঢাকা', text: 'আমি ১০০০ ডায়মন্ড পেয়েছি! সত্যিই অসাধারণ সার্ভিস।', avatar: '👨' },
              { name: 'নাজমা আক্তার', city: 'চট্টগ্রাম', text: 'খুবই সহজ এবং দ্রুত প্রক্রিয়া। ধন্যবাদ!', avatar: '👩' },
              { name: 'করিম সাহেব', city: 'খুলনা', text: 'এটা সত্যিই কাজ করে। সবাইকে রেকমেন্ড করছি।', avatar: '👨' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-xl p-6 backdrop-blur hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.city}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
                <div className="text-yellow-400 mt-3">★★★★★</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur text-center">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-purple-300">৫০K+</p>
              <p className="text-gray-400 text-sm">খুশি গ্রাহক</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-300">২.৫M+</p>
              <p className="text-gray-400 text-sm">সফল ডায়মন্ড হস্তান্তর</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-300">①००%</p>
              <p className="text-gray-400 text-sm">গ্যারান্টিড সেফ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-gradient-to-r from-purple-950/50 to-pink-950/50 backdrop-blur py-8 mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-2">© ২০২৬ Free Diamond Platform. সকল অধিকার সংরক্ষিত।</p>
          <p className="text-xs text-gray-500">শিক্ষামূলক উদ্দেশ্যে তৈরি - ASRBD দ্বারা</p>
        </div>
      </footer>
    </div>
  );
}
