'use client';
import {
  FaHome,
  FaCalendarAlt,
  FaGraduationCap,
  FaMoneyBillWave,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Sidebar({ onLogout }) {
  const router = useRouter();

  const menuItems = [
    { icon: <FaHome />, label: 'Beranda', path: '/dashboard' },
    { icon: <FaCalendarAlt />, label: 'Jadwal', path: '/jadwal' },
    { icon: <FaGraduationCap />, label: 'KHS', path: '/khs' },
    { icon: <FaMoneyBillWave />, label: 'Tagihan', path: '/tagihan' },
    { icon: <FaChalkboardTeacher />, label: 'Dosen', path: '/dosen' },
    { icon: <FaUserGraduate />, label: 'Mahasiswa', path: '/mahasiswa' },
  ];

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#0F172A] text-white flex flex-col shadow-lg z-50">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        SIAKAD Kampus
      </div>
      <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigate(item.path)}
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <button
        onClick={onLogout}
        className="flex items-center gap-2 p-4 bg-red-600 hover:bg-red-700 transition text-white font-medium"
      >
        <FaSignOutAlt /> Logout
      </button>
    </aside>
  );
}
