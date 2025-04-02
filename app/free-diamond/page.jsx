import Image from 'next/image';

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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <header className="text-center py-8 px-4 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">ফ্রি ডায়মন্ড পাওয়ার সুযোগ!</h1>
        <p className="text-lg md:text-xl text-blue-300">আপনার প্রিয় গেমে বিনামূল্যে ডায়মন্ড পেতে এখনই রেজিস্টার করুন</p>
      </header>

      <section className="text-center py-12 px-4">
        <div className="max-w-4xl mx-auto bg-blue-800 bg-opacity-20 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">আপনার ফ্রি ডায়মন্ড পেতে রেজিস্ট্রেশন করুন</h2>
          <p className="text-lg md:text-xl text-blue-200 mb-8">সীমিত সময়ের জন্য বিশেষ অফার! এখনই রেজিস্ট্রেশন করে নিশ্চিত করুন আপনার ফ্রি ডায়মন্ড।</p>
          <a href="free-diamond/form" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            রেজিস্ট্রেশন করুন
          </a>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
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
            <div key={index} className="bg-blue-800 bg-opacity-30 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt="User" width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-blue-300 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-sm text-blue-300">
        <p>* অফারটি সীমিত সময়ের জন্য প্রযোজ্য</p>
      </footer>
    </div>
  );
}
