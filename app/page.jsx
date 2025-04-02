import Link from 'next/link';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const ways = [
    {
      title: `Viral Video ${currentYear}`,
      description: `${currentYear} সালের সমস্ত ভাইরাল হওয়া ভিডিও`,
      buttonText: 'Collections',
      buttonLink: '/collections',
    },
    {
      title: `Free Facebook Blue Batch Verification ${currentYear}`,
      description: `${currentYear} ফ্রিতে ফেসবুক ব্লু ভেরিফিকেশন করে নিন, সীমিত কয়েকজনই পাবেন!`,
      buttonText: 'Blue Verification',
      buttonLink: '/blue-verification',
    },
    {
      title: `Free Diamond top up ${currentYear}`,
      description: `${currentYear} সালে আমাদের পক্ষ থেকে থাকছে সেরা কয়েকজনের জন্যে ফ্রিতে ফ্রি ফায়ার ডাইমন্ড টপ আপ!`,
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
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{way.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{way.description}</p>
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
          <p>© {currentYear} Copyright by Viral Video</p>
        </div>
      </footer>
    </main>
  );
}
