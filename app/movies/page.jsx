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
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black pointer-events-none">
      </div>

      <header className="bg-gradient-to-r from-red-600 to-red-800 w-full sticky z-20 top-0 text-white py-3 shadow-lg backdrop-blur-sm bg-opacity-90">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-center flex items-center justify-center gap-2">
            <span className="text-yellow-300">🎬</span>
            Movie Collection
            <span className="text-yellow-300">🎬</span>
          </h1>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 relative z-10">
        <div className="text-center mb-10 mt-6 md:mt-8">
          <div className="inline-block bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Movies</h2>
          </div>
          <p className="text-gray-300 text-sm md:text-base mt-4">Explore popular and trending movies</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          {movieData.map(({ id, title, image }) => (
            <Link 
              href={`/movies/login?movieId=${id}`} 
              key={id}
              className="block group rounded-xl overflow-hidden bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-700/50 h-full hover:scale-[1.03]"
            >
              <div className="flex flex-col h-full">
                <div className="relative w-full h-auto">
                  <Image
                    src={image}
                    width={500}
                    height={750}
                    alt={title || 'Movie poster'}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="font-semibold flex items-center gap-2 text-base">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
                        </svg>
                        Watch Now
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-base md:text-lg font-semibold text-white line-clamp-2 mb-2" title={title}>{title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-red-400 flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      Top Rated
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <footer className="bg-gradient-to-r from-red-600 to-red-800 w-full py-4 md:py-6 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-white text-sm">
          <p>© {new Date().getFullYear()} Movie Collection. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
