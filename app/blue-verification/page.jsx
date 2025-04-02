import Image from 'next/image';
import Link from 'next/link';

export default function BlueVerification() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 fixed w-full top-0 text-white py-2 shadow-md z-10">
        <div className="flex w-full gap-2 md:gap-5 text-lg md:text-2xl items-center justify-center px-2">
          <strong>সুখবর!</strong>
          <strong>সুখবর!</strong>
          <strong>সুখবর!</strong>
        </div>
      </header>

      {/* Page Content */}
      <div className="pt-16 pb-24 px-4 max-w-3xl mx-auto">
        <div className="text-center my-4 md:my-8">
          <p className="text-base md:text-lg text-black font-bold">• এখান থেকে আপনার ফেইসবুক একাউন্টটি নিরাপদে ভেরিফাই করুন।</p>
          
          <h2 className="text-lg md:text-xl font-bold text-red-600 my-4 md:my-6">• Official Site For FB ID Verify</h2>
          
          <div className="border-2 border-red-500 inline-block my-4">
            <Image 
              src="/verify.png" 
              width={400} 
              height={120} 
              alt="Facebook Verification" 
              className="mx-auto w-full max-w-[300px] md:max-w-[400px] h-auto"
              priority
            />
          </div>
          
          <h3 className="text-lg md:text-xl font-bold text-red-600 my-3 md:my-4">• আমরা বিনামূল্যে ফেইসবুক একাউন্ট Verify করি।</h3>
          
          <p className="text-base md:text-lg text-black my-3 md:my-4">• আপনার ফেইসবুক একাউন্টকে হ্যাকিং/ডিজেবল থেকে নিরাপদ রাখতে Verify করুন।</p>
          
          <div className="my-3 md:my-4">
            <div className="border border-blue-500 inline-block bg-blue-100 text-red-600 px-3 md:px-4 py-1 text-xs md:text-sm">
              আপনার এনআইডি কার্ডের ছবি তুলে এখানে verify করুন
            </div>
          </div>
          
          <div className="my-4 md:my-6">
            <Image 
              src="/nid.png" 
              width={350} 
              height={200} 
              alt="NID Card" 
              className="mx-auto w-full max-w-[280px] md:max-w-[350px] h-auto"
              priority
            />
          </div>
          
          <div className="border text-blue-600 border-red-500 text-center py-2 my-3 md:my-4 text-sm md:text-base px-2">
            <p>আপনার NID না থাকলে Fake NID Card দিয়ে বাদ Verify করা হবে</p>
          </div>
          
          <div className="my-6 md:my-8 border border-gray-300 p-3 md:p-4 max-w-[250px] md:max-w-sm mx-auto">
            <Image 
              src="/verify-done.png" 
              width={300} 
              height={200} 
              alt="Verification Done" 
              className="mx-auto w-full h-auto"
              priority
            />
          </div>
          
          <p className="text-base md:text-lg font-bold text-black my-3 md:my-4">• Verify করতে নিচে ক্লিক করুন •</p>
          
          <div className="flex justify-center items-center my-3 md:my-4">
            <div className="text-xl md:text-2xl text-black font-bold">••••</div>
          </div>
          
          <Link href='/blue-verification/submit'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-md text-base md:text-lg my-3 md:my-4 transition-colors duration-200">
              Verify My ID
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 fixed bottom-0 w-full dark:bg-gray-900 py-4 md:py-6 px-4 text-center text-gray-600 dark:text-gray-400 text-xs md:text-sm z-10">
        © {new Date().getFullYear()} Copywrite by Blue Verification
      </footer>
    </main>
  );
}
