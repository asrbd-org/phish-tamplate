import Image from 'next/image';
import Link from 'next/link';
import { thumData } from '../assets/assets';

export const metadata = {
  title: 'Viral Videos Collection 2025',
  description: 'Watch the most viral videos of 2025. Our collection features the most popular and trending videos that everyone is talking about.',
  keywords: ['viral videos', 'trending videos', 'popular videos', '2025 videos', 'video collection'],
  openGraph: {
    title: 'Viral Videos Collection 2025',
    description: 'Watch the most viral videos of 2025. Our collection features the most popular and trending videos that everyone is talking about.'
  },
  twitter: {
    title: 'Viral Videos Collection 2025',
    description: 'Watch the most viral videos of 2025. Our collection features the most popular and trending videos that everyone is talking about.'
  }
};

export default function Collections() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 w-full sticky z-10 top-0 text-white py-3 shadow-lg backdrop-blur-sm bg-opacity-90">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-center flex items-center justify-center gap-2">
            <span className="text-yellow-300">★</span>
            ভাইরাল ভিডিও ২০২৫
            <span className="text-yellow-300">★</span>
          </h1>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 relative z-10">
        {/* Main title */}
        <div className="text-center mb-8 mt-6 md:mt-8">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold">২০২৫ সালের সব থেকে ভাইরাল হওয়া ভিডিও</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-4">সবচেয়ে জনপ্রিয় ভিডিও দেখুন এখনই</p>
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
          {thumData.map(({ id, title, image }) => (
            <Link 
              href={`/collections/login?videoId=${id}`} 
              key={id}
              className="block group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full border border-gray-200 dark:border-gray-700">
                <div className="relative aspect-video">
                  <Image
                    src={image}
                    fill
                    alt={title || 'Thumbnail image'}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="font-medium flex items-center gap-2">
                        <span className="text-yellow-400">▶</span>
                        ভিডিও দেখুন
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    ট্রেন্ডিং
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">{title}</h3>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      জনপ্রিয়
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">দেখুন</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-500 w-full dark:from-gray-900 dark:to-gray-800 py-4 md:py-6 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center text-white text-sm">
          <p>© {new Date().getFullYear()} Copywrite by Virul Video</p>
        </div>
      </footer>
    </main>
  );
}
