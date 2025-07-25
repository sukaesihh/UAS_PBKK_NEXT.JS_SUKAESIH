'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import CardBox from '../../components/CardBox';

import {
  FiCalendar,
  FiBookOpen,
  FiCreditCard,
  FiDatabase,
  FiUsers,
  FiUserCheck
} from 'react-icons/fi';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (!savedUser) {
      router.push('/login');
    } else {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) return null;

  return (
    <main className="flex-1 bg-gray-50 min-h-screen p-6">
      <Header user={user} onLogout={handleLogout} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <CardBox title="Jadwal Kuliah" description="Lihat dan kelola jadwal harian Anda." icon={FiCalendar} />
        <CardBox title="Kartu Hasil Studi (KHS)" description="Nilai akademik semester berjalan." icon={FiBookOpen} />
        <CardBox title="Status Tagihan" description="Informasi keuangan dan pembayaran." icon={FiCreditCard} />
        <CardBox title="Data Mata Kuliah" description="Mata kuliah yang diambil saat ini." icon={FiDatabase} />
        <CardBox title="Data Dosen" description="Informasi dosen pengajar Anda." icon={FiUserCheck} />
        <CardBox title="Data Mahasiswa" description="Informasi mahasiswa." icon={FiUsers} />
      </div>
    </main>
  );
}
