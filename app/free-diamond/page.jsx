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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 via-purple-900 to-black text-white">
      {/* Diamond Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small diamonds */}
        <div className="absolute inset-0 bg-[url('/diamond-pattern.png')] bg-repeat bg-[length:100px_100px] opacity-10"></div>
        
        {/* Large floating diamonds */}
        <div className="hidden md:block absolute top-1/4 -left-20 w-40 h-40 opacity-20">
          <div className="w-full h-full bg-[url('/diamond.png')] bg-contain bg-no-repeat bg-center rotate-12 animate-pulse"></div>
        </div>
        <div className="hidden md:block absolute top-2/3 -right-20 w-60 h-60 opacity-20">
          <div className="w-full h-full bg-[url('/diamond.png')] bg-contain bg-no-repeat bg-center -rotate-12 animate-pulse"></div>
        </div>
        <div className="hidden lg:block absolute bottom-1/4 left-1/3 w-32 h-32 opacity-15">
          <div className="w-full h-full bg-[url('/diamond.png')] bg-contain bg-no-repeat bg-center rotate-45 animate-pulse"></div>
        </div>
        
        {/* Glowing effects */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-purple-500 opacity-10 blur-3xl"></div>
      </div>

      <header className="text-center py-12 px-4 md:py-16 relative z-10">
        <div className="inline-block mb-6">
          <h1 className="mx-auto text-9xl animate-bounce" >💎</h1>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold z-10 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">ফ্রি ডায়মন্ড পাওয়ার সুযোগ!</h1>
        <p className="text-lg md:text-xl text-blue-300 max-w-2xl mx-auto">আপনার প্রিয় গেমে বিনামূল্যে ডায়মন্ড পেতে এখনই রেজিস্টার করুন</p>
        
        <div className="flex justify-center gap-2 mt-6">
          <span className="inline-block w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="inline-block w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></span>
          <span className="inline-block w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-200"></span>
        </div>
      </header>

      <section className="text-center py-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_25px_rgba(66,153,225,0.3)] border border-blue-500/30">
          <div className="relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full shadow-lg">
              <p className="text-4xl">💎</p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-6 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">আপনার ফ্রি ডায়মন্ড পেতে রেজিস্ট্রেশন করুন</h2>
          <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto">সীমিত সময়ের জন্য বিশেষ অফার! এখনই রেজিস্ট্রেশন করে নিশ্চিত করুন আপনার ফ্রি ডায়মন্ড।</p>
          
          <Link href="free-diamond/form" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-lg md:text-xl overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(129,140,248,0.5)]">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              💎 রেজিস্ট্রেশন করুন
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          
          <div className="mt-8 text-sm text-blue-300">
            <div className="inline-block border border-blue-400/30 rounded-full px-4 py-1 bg-blue-900/30">
              ৫০০০+ ব্যবহারকারী ইতিমধ্যে ডায়মন্ড পেয়েছেন
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">সফল ব্যবহারকারীদের অভিজ্ঞতা</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { name: "রাকিব হাসান", location: "ঢাকা", image: "/people1-male.png", text: "আমি ১০০০ ডায়মন্ড পেয়েছি! এটা সত্যিই কাজ করে। ধন্যবাদ!" },
            { name: "সাবরিনা আক্তার", location: "চট্টগ্রাম", image: "/people2-female.png", text: "সহজ প্রক্রিয়া এবং দ্রুত ডেলিভারি। খুবই ভালো সার্ভিস!" },
            { name: "কামরুল ইসলাম", location: "খুলনা", image: "/people3-male.png", text: "বিশ্বাস করতে পারিনি যে এটা ফ্রি! ধন্যবাদ এই সুযোগের জন্য।" },
            { name: "নাজমা বেগম", location: "সিলেট", image: "/people4-female.png", text: "প্রতিদিন গেম খেলার জন্য ডায়মন্ড পাওয়া খুবই সহজ হয়ে গেছে!" },
            { name: "তানভীর আহমেদ", location: "রাজশাহী", image: "/people5-male.png", text: "এই সাইট থেকে ২০০০ ডায়মন্ড পেয়েছি। সত্যিই অসাধারণ!" },
            { name: "মাহফুজ রহমান", location: "বরিশাল", image: "/people6-male.png", text: "খুব দ্রুত ডায়মন্ড পেয়ে গেলাম। অসাধারণ সার্ভিস!" },
            { name: "ফারজানা আক্তার", location: "রংপুর", image: "/people1-female.png", text: "নিয়মিত গেম খেলার জন্য এই ডায়মন্ড খুবই উপকারী হয়েছে।" },
            { name: "শাহরিয়ার কবির", location: "ময়মনসিংহ", image: "/people2-male.png", text: "রেজিস্ট্রেশন করার পরই ডায়মন্ড পেয়ে গেলাম। খুবই ভালো লাগলো!" },
            { name: "তাসনিম জাহান", location: "কুমিল্লা", image: "/people3-female.png", text: "সহজেই ১৫০০ ডায়মন্ড পেলাম। এখন আমার গেম খেলা আরও মজাদার!" },
            { name: "আরিফ হোসেন", location: "গাজীপুর", image: "/people4-male.png", text: "বন্ধুদের মধ্যে সবার আগে আমি ডায়মন্ড পেলাম। ধন্যবাদ!" },
            { name: "লামিয়া ইসলাম", location: "নারায়ণগঞ্জ", image: "/people5-female.png", text: "এত সহজে ডায়মন্ড পাওয়া যাবে ভাবতেই পারিনি। অসাধারণ!" }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(66,153,225,0.3)]">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur"></div>
                  <Image src={testimonial.image} alt="User" width={50} height={50} className="rounded-full relative z-10 border-2 border-white/20" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                  <p className="text-blue-300 text-sm flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-blue-300 ml-2">আজকে</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-sm text-blue-300 relative z-10">
        <div className="max-w-4xl mx-auto px-4 border-t border-blue-500/20 pt-8">

          <p className="text-center mb-2">* অফারটি সীমিত সময়ের জন্য প্রযোজ্য</p>
          <p className="text-xs text-blue-400/70">© Copyright {new Date().getFullYear()} Free Diamond Top-up.</p>
        </div>
      </footer>
    </div>
  );
}
