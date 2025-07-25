'use client';

import Sidebar from './Sidebar';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // Tangani logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  // Sembunyikan sidebar jika sedang di halaman login atau register
  const hideSidebar = pathname === '/login' || pathname === '/register';

  return (
    <div className="flex">
      {!hideSidebar && <Sidebar onLogout={handleLogout} />}
      <main className={`flex-1 ${hideSidebar ? '' : 'ml-64'} p-4`}>{children}</main>
    </div>
  );
}
