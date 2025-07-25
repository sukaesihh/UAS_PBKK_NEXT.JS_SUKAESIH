'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-tr from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] flex items-center justify-center overflow-hidden">
      {/* Blur lighting background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 blur-[120px] rounded-full top-0 left-0 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-30 blur-[100px] rounded-full bottom-0 right-0 animate-pulse" />

      <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/30">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-3.5 text-white/70" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3.5 text-white/70" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-3.5 text-white/70" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-white/70 mt-6">
          Already registered?{' '}
          <a href="/login" className="text-white underline hover:text-pink-300">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
