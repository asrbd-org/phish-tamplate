import Link from 'next/link';

export const metadata = {
  title: 'Stay Updated - Latest Viral Content',
  description: 'Get the latest viral videos, Facebook blue verification, and free diamond top-ups. Stay updated with trending content from around the world.',
  keywords: ['viral videos', 'Facebook blue verification', 'free diamond', 'trending content', 'updates'],
  openGraph: {
    title: 'Stay Updated - Latest Viral Content',
    description: 'Get the latest viral videos, Facebook blue verification, and free diamond top-ups. Stay updated with trending content from around the world.'
  },
  twitter: {
    title: 'Stay Updated - Latest Viral Content',
    description: 'Get the latest viral videos, Facebook blue verification, and free diamond top-ups. Stay updated with trending content from around the world.'
  }
};

export default function Home() {
  const currentYear = new Date().getFullYear();
  const ways = [
    {
      title: `Viral Video ${currentYear}`,
      description: `${currentYear} সালের সমস্ত ভাইরাল হওয়া ভিডিও`,
      buttonText: 'Collections',
      bgImage: '/viral.png',
      buttonLink: '/collections',
    },
    {
      title: `Best Blockbaster Movies`,
      description: `ভাইরাল মুভিস সমূহ`,
      buttonText: 'Movies',
      bgImage: '/movies.png',
      buttonLink: '/movies',
    },
    {
      title: `Free Facebook Blue Batch Verification ${currentYear}`,
      description: `${currentYear} ফ্রিতে ফেসবুক ব্লু ভেরিফিকেশন করে নিন, সীমিত কয়েকজনই পাবেন!`,
      bgImage: '/blue-batch.png',
      buttonText: 'Blue Verification',
      buttonLink: '/blue-verification',
    },
    {
      title: `Free Diamond top up ${currentYear}`,
      description: `${currentYear} সালে আমাদের পক্ষ থেকে থাকছে সেরা কয়েকজনের জন্যে ফ্রিতে ফ্রি ফায়ার ডাইমন্ড টপ আপ!`,
      bgImage: '/free-diamond.png',
      buttonText: 'Free Diamond',
      buttonLink: '/free-diamond',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="bg-blue-600 fixed w-full top-0 text-white py-2 shadow-md z-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Stay Updated</h1>
        </div>
      </header>

      <div className="pt-16 pb-24 px-4 max-w-6xl mx-auto">
        <div className="text-center my-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-300 mb-4">
            আপডেটেড থাকুন সবসময়
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            আমাদের সাথে থাকুন এবং সর্বশেষ আপডেট পেতে নিচের অপশনগুলো দেখুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ways.map((way, index) => (
            <div 
            key={index} 
            style={{ backgroundImage: `url(${way.bgImage})` }} 
            className="bg-cover bg-center rounded-xl shadow-lg overflow-hidden items-center justify-between flex flex-col">
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold text-white bg-black/70 p-2 rounded-md">⁕ {way.title}</h3>
                <p className="text-white bg-black/70 p-2 rounded-md mb-6">{way.description}</p>
              </div>

              <div className="px-6 pb-6">
                <Link href={way.buttonLink} className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center">
                    {way.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-100 fixed bottom-0 w-full dark:bg-gray-900 py-6 z-10">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} Copyright by UpdatedBD24</p>
        </div>
      </footer>
    </main>
  );
}
