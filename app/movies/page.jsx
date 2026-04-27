import Image from 'next/image';
import Link from 'next/link';
import { movieData } from '../assets/assets';

export const metadata = {
  title: 'Movie Collection - Watch Latest Movies',
  description: 'Explore our collection of the latest and greatest movies. Find popular titles and watch them online.',
  keywords: ['movies', 'latest movies', 'movie collection', 'watch movies', 'popular movies'],
  openGraph: {
    title: 'Movie Collection - Watch Latest Movies',
    description: 'Explore our collection of the latest and greatest movies. Find popular titles and watch them online.'
  },
  twitter: {
    title: 'Movie Collection - Watch Latest Movies',
    description: 'Explore our collection of the latest and greatest movies. Find popular titles and watch them online.'
  }
};

export default function Movies() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-red-950 to-gray-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/40 border-b border-red-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-3xl">🎬</span>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">সিনেমা কালেকশন</span>
            </h1>
            <div className="hidden md:flex items-center gap-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/30">
              <span className="text-yellow-400 text-sm font-medium">🔥 ট্রেন্ডিং</span>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-medium">🌟 এক্সক্লুসিভ কালেকশন</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            সর্বশেষ এবং জনপ্রিয় <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">সিনেমা দেখুন</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">হলিউড, বলিউড এবং দেশীয় সিনেমার বিশাল সংগ্রহ। নতুন রিলিজ প্রতি সপ্তাহে আপডেট হয়।</p>
          
          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-6 py-3">
              <p className="text-red-300 font-semibold text-lg">५०००+</p>
              <p className="text-gray-400 text-sm">সিনেমা</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg px-6 py-3">
              <p className="text-orange-300 font-semibold text-lg">१००+</p>
              <p className="text-gray-400 text-sm">নতুন এই মাসে</p>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg px-6 py-3">
              <p className="text-pink-300 font-semibold text-lg">HD/4K</p>
              <p className="text-gray-400 text-sm">সর্বোচ্চ মান</p>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition-colors">সব</button>
          <button className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors">হলিউড</button>
          <button className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors">বলিউড</button>
          <button className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors">বাংলা</button>
          <button className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors">নতুন</button>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {movieData.map(({ id, title, image }) => (
            <Link 
              href={`/movies/login?movieId=${id}`} 
              key={id}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 h-full hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]">
                {/* Poster */}
                <div className="relative aspect-[2/3] overflow-hidden bg-gray-900">
                  <Image
                    src={image}
                    fill
                    alt={title || 'সিনেমার পোস্টার'}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition-all duration-300 transform group-hover:scale-105">
                      <span className="text-lg">▶</span>
                      দেখুন
                    </button>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      🔥 জনপ্রিয়
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <span>★</span>
                    <span>৮.৫</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold line-clamp-2 mb-2 group-hover:text-red-400 transition-colors text-sm md:text-base">{title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>HD</span>
                    <span className="text-yellow-400">২০२५</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl backdrop-blur">
          <p className="text-gray-300 text-lg mb-4">আরও সিনেমা দেখতে লগইন করুন</p>
          <Link href="/movies/login" className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300">
            এখনই লগইন করুন
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 bg-gradient-to-r from-gray-950/50 to-red-950/50 backdrop-blur py-8 md:py-12 mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-2">© ২০২৬ Movie Collection. সকল অধিকার সংরক্ষিত।</p>
          <p className="text-xs text-gray-500">শিক্ষামূলক উদ্দেশ্যে তৈরি - ASRBD দ্বারা</p>
        </div>
      </footer>
    </main>
  );
}
