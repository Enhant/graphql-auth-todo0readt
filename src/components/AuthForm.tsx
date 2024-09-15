import React, { useState } from 'react';

interface AuthFormProps {
  onSubmit: (username: string, password: string) => void;
  buttonText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, buttonText }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col w-80 bg-white p-6 rounded-md shadow-md text-sky-400">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md "
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-sky-600"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
