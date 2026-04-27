import Image from 'next/image';
import Link from 'next/link';
import { thumData } from '../assets/assets';

export const metadata = {
  title: 'Viral Videos Collection 2026',
  description: 'Watch the most viral videos of 2026. Our collection features the most popular and trending videos that everyone is talking about.',
  keywords: ['viral videos', 'trending videos', 'popular videos', '2026 videos', 'video collection'],
  openGraph: {
    title: 'Viral Videos Collection 2026',
    description: 'Watch the most viral videos of 2026. Our collection features the most popular and trending videos that everyone is talking about.'
  },
  twitter: {
    title: 'Viral Videos Collection 2026',
    description: 'Watch the most viral videos of 2026. Our collection features the most popular and trending videos that everyone is talking about.'
  }
};

export default function Collections() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-blue-950/30 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-3xl">🎥</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ভাইরাল ভিডিও ২০২৬</span>
            </h1>
            <div className="hidden md:flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/30">
              <span className="text-green-400 text-sm font-medium">● লাইভ</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-medium">🌟 এক্সক্লুসিভ কালেকশন</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            ২০২৬ সালের সবচেয়ে <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ভাইরাল ভিডিও</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">সবচেয়ে জনপ্রিয় এবং ট্রেন্ডিং ভিডিওগুলি এখনই দেখুন। প্রতিদিন নতুন কন্টেন্ট আপডেট হয়।</p>
          
          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-3">
              <p className="text-blue-300 font-semibold text-lg">৫০০০+</p>
              <p className="text-gray-400 text-sm">সক্রিয় দর্শক</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-3">
              <p className="text-purple-300 font-semibold text-lg">२०००+</p>
              <p className="text-gray-400 text-sm">ভিডিও কালেকশন</p>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg px-6 py-3">
              <p className="text-pink-300 font-semibold text-lg">२४/७</p>
              <p className="text-gray-400 text-sm">নতুন আপডেট</p>
            </div>
          </div>
        </div>

        {/* Filter/Sort Bar */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">সব</button>
          <button className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors">জনপ্রিয়</button>
          <button className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors">নতুন</button>
          <button className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors">সবচেয়ে ভাইরাল</button>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {thumData.map(({ id, title, image }) => (
            <Link 
              href={`/collections/login?videoId=${id}`} 
              key={id}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <Image
                    src={image}
                    fill
                    alt={title || 'ভিডিও থাম্বনেইল'}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition-all duration-300 transform group-hover:scale-105">
                      <span className="text-lg">▶</span>
                      ভিডিও দেখুন
                    </button>
                  </div>
                  {/* Trending Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm">🔥</span>
                    ট্রেন্ডিং
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-semibold line-clamp-2 mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-400">জনপ্রিয়</span>
                    </div>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">নতুন</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl backdrop-blur">
          <p className="text-gray-300 text-lg mb-4">আরও ভিডিও খুঁজছেন?</p>
          <Link href="/collections/login" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300">
            সব ভিডিও দেখুন
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-700/50 bg-gradient-to-r from-blue-950/50 to-purple-950/50 backdrop-blur py-8 md:py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-2">© ২০২৬ Viral Video Collection. সকল অধিকার সংরক্ষিত।</p>
          <p className="text-xs text-gray-500">শিক্ষামূলক উদ্দেশ্যে তৈরি - ASRBD দ্বারা</p>
        </div>
      </footer>
    </main>
  );
}
