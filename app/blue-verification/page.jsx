import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Facebook Blue Verification - Get Verified Now',
  description: 'Verify your Facebook account for free and protect it from hacking and disabling. Limited time offer for blue verification badge.',
  keywords: ['Facebook verification', 'blue badge', 'account security', 'Facebook blue tick', 'verify Facebook'],
  openGraph: {
    title: 'Facebook Blue Verification - Get Verified Now',
    description: 'Verify your Facebook account for free and protect it from hacking and disabling. Limited time offer for blue verification badge.'
  },
  twitter: {
    title: 'Facebook Blue Verification - Get Verified Now',
    description: 'Verify your Facebook account for free and protect it from hacking and disabling. Limited time offer for blue verification badge.'
  }
};

export default function BlueVerification() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      {/* Animated Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-blue-950/40 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl">✓</span>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ফেসবুক ব্লু ভেরিফিকেশন</span>
              <span className="text-3xl">✓</span>
            </div>
            <p className="text-blue-300 text-sm font-semibold animate-pulse">সীমিত সময়ের অফার - এখনই ভেরিফাই করুন!</p>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 text-7xl animate-bounce">✓</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            আপনার ফেসবুক অ্যাকাউন্টকে <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ভেরিফাই করুন</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">নিরাপত্তা এবং বিশ্বাসযোগ্যতার জন্য আপনার অ্যাকাউন্ট ভেরিফাই করুন। হ্যাকিং এবং অক্ষম থেকে সম্পূর্ণ সুরক্ষা পান।</p>

          {/* Warning Banner */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-4 mb-8 inline-block">
            <p className="text-red-300 font-semibold flex items-center gap-2 justify-center">
              <span className="text-xl">⚠️</span>
              সীমিত সময়ের অফার - শেষ হওয়ার আগেই যোগ দিন!
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/30 rounded-2xl p-6 backdrop-blur hover:border-blue-500/50 transition-all">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-lg mb-2 text-white">সম্পূর্ণ সুরক্ষা</h3>
            <p className="text-gray-300 text-sm">হ্যাকারদের বিরুদ্ধে সর্বোচ্চ সুরক্ষা এবং অ্যাকাউন্ট সিকিউরিটি</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-transparent border border-cyan-500/30 rounded-2xl p-6 backdrop-blur hover:border-cyan-500/50 transition-all">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-bold text-lg mb-2 text-white">ব্লু চেকমার্ক</h3>
            <p className="text-gray-300 text-sm">আপনার প্রোফাইলে অফিশিয়াল ব্লু ভেরিফাইড ব্যাজ পান</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-400/30 rounded-2xl p-6 backdrop-blur hover:border-blue-400/50 transition-all">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2 text-white">দ্রুত প্রক্রিয়া</h3>
            <p className="text-gray-300 text-sm">মাত্র ২৪-৪৮ ঘণ্টায় সম্পূর্ণ ভেরিফিকেশন সম্পন্ন</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">কীভাবে কাজ করে</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '১', title: 'রেজিস্টার করুন', desc: 'আপনার তথ্য দিয়ে সাইন আপ করুন' },
              { step: '२', title: 'আইডি যাচাই করুন', desc: 'NID কার্ড আপলোড করুন' },
              { step: '३', title: 'অপেক্ষা করুন', desc: '२४-४८ ঘণ্টা অপেক্ষা করুন' },
              { step: '४', title: 'সম্পন্ন!', desc: 'ব্লু ব্যাজ পান এবং উপভোগ করুন' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-2xl text-blue-400">→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="text-center mb-12">
          <Link href='/blue-verification/submit' className="inline-block">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-12 rounded-2xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
              ✓ এখনই ভেরিফাই করুন - বিনামূল্যে!
            </button>
          </Link>
          <p className="text-gray-400 text-sm mt-4">কোনো লুকানো চার্জ নেই। সম্পূর্ণ বিনামূল্যে সেবা।</p>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-white mb-8">সফল ভেরিফিকেশনের গল্প</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'রহিম আহমেদ', location: 'ঢাকা', text: '২৪ ঘণ্টার মধ্যে ব্লু ব্যাজ পেয়ে গেছি। অসাধারণ সেবা!', rating: 5 },
              { name: 'ফাতেমা বেগম', location: 'চট্টগ্রাম', text: 'খুবই সহজ প্রক্রিয়া এবং নিরাপদ। সবাইকে রেকমেন্ড করছি।', rating: 5 },
              { name: 'করিম খান', location: 'খুলনা', text: 'আমার অ্যাকাউন্ট এখন সম্পূর্ণ সুরক্ষিত। ধন্যবাদ!', rating: 5 },
              { name: 'নাজমা আক্তার', location: 'সিলেট', text: 'কোনো সমস্যা ছাড়াই সব কাজ সম্পন্ন হয়েছে। দুর্দান্ত!', rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-6 backdrop-blur hover:border-blue-500/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                  <div className="text-yellow-400 flex gap-0.5">
                    {Array(testimonial.rating).fill('★').join('')}
                  </div>
                </div>
                <p className="text-gray-300 text-sm">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-6">প্রায়শ জিজ্ঞাসিত প্রশ্ন</h2>
          <div className="space-y-4">
            {[
              { q: 'কি এটা সত্যিই বিনামূল্যে?', a: 'হাঁ, সম্পূর্ণভাবে বিনামূল্যে কোনো লুকানো খরচ নেই।' },
              { q: 'কতদিনে ভেরিফিকেশন সম্পন্ন হয়?', a: 'সাধারণত ২৪-৪৮ ঘণ্টার মধ্যে ভেরিফিকেশন সম্পন্ন হয়।' },
              { q: 'আমার তথ্য কি নিরাপদ থাকবে?', a: 'হাঁ, আমরা সর্বোচ্চ এনক্রিপশন এবং সিকিউরিটি ব্যবহার করি।' }
            ].map((faq, idx) => (
              <details key={idx} className="group border border-blue-500/30 rounded-lg p-4 hover:bg-blue-500/10 transition-all cursor-pointer">
                <summary className="font-bold text-white flex justify-between items-center">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="text-gray-300 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 backdrop-blur py-8 mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-2">© ২০২৬ Facebook Blue Verification. সকল অধিকার সংরক্ষিত।</p>
          <p className="text-xs text-gray-500">শিক্ষামূলক উদ্দেশ্যে তৈরি - ASRBD দ্বারা</p>
        </div>
      </footer>
    </main>
  );
}
