'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaLock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      alert(`Login berhasil!\nEmail: ${email}`);
      router.push('/dashboard');
    } else {
      alert('Login gagal. Coba lagi.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 font-[Inter]">
      {/* Card Login */}
      <div className="bg-white/10 backdrop-blur-xl shadow-xl border border-white/20 rounded-3xl px-10 py-12 w-full max-w-md">
        {/* Logo dan Judul */}
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt="Logo Kampus" width={65} height={65} className="mb-2" />
          <h1 className="text-2xl font-semibold text-white tracking-wide">Login SIAKAD</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute top-3.5 left-3 text-white/60" />
            <input
              type="text"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 bg-white/20 text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-white/60" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 bg-white/20 text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-white/80 mt-6 text-sm">
          Belum punya akun?{' '}
          <Link
            href="/register"
            className="underline text-indigo-300 hover:text-yellow-300 transition duration-200"
          >
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
