import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      <div className="flex space-x-4">
        <Link href="/register" className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Register
        </Link>
        <Link href="/login" className="p-4 bg-green-500 text-white rounded-md hover:bg-green-600">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
