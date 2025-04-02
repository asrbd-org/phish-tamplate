import Image from 'next/image';
import Link from 'next/link';
import { thumData } from '../assets/assets';

export default function Collections() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-blue-600 min-w-full fixed z-10 top-0 text-white py-2 shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">ভাইরাল ভিডিও ২০২৫</h1>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto my-10 p-6">
        {/* Main title */}
        <div className="text-center mb-8 mt-4">
          <h2 className="text-3xl font-bold mb-2 text-blue-800 dark:text-blue-300">২০২৫ সালের সব থেকে ভাইরাল হওয়া ভিডিও</h2>
          <p className="text-gray-600 dark:text-gray-300">সবচেয়ে জনপ্রিয় ভিডিও দেখুন এখনই</p>
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {thumData.map(({ id, title, image }) => (
            <div key={id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative">
                <Image
                  src={image}
                  width={600}
                  height={300}
                  alt={title || 'Thumbnail image'}
                  className="w-full h-48 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="font-medium">ভিডিও দেখুন</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-sm text-red-600 font-medium">ট্রেন্ডিং</span>
                  </div>
                  <Link href={`/collections/login?videoId=${id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors">
                    দেখুন
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 fixed bottom-0 min-w-full dark:bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Copywrite by Virul Video</p>
        </div>
      </footer>
    </main>
  );
}
