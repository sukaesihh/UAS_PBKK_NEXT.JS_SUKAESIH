'use client';
import { useState } from 'react';

const dosenList = [
  { id: 1, nama: 'Dr. Andi Wijaya, M.Kom', nidn: '12345678', matkul: 'Pemrograman Web', prodi: 'Informatika', foto: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, nama: 'Dr. Siti Rohmah, M.T', nidn: '87654321', matkul: 'Jaringan Komputer', prodi: 'Sistem Informasi', foto: 'https://i.pravatar.cc/100?img=2' },
  { id: 3, nama: 'Ahmad Fadli, M.Sc', nidn: '11223344', matkul: 'Struktur Data', prodi: 'Teknik Komputer', foto: 'https://i.pravatar.cc/100?img=3' },
  { id: 4, nama: 'Prof. Budi Santoso, M.Kom', nidn: '99887766', matkul: 'AI & Machine Learning', prodi: 'Informatika', foto: 'https://i.pravatar.cc/100?img=4' },
];

const prodiList = ['Semua', ...new Set(dosenList.map(d => d.prodi))];

export default function DosenPage() {
  const [selectedProdi, setSelectedProdi] = useState('Semua');

  const filteredDosen = selectedProdi === 'Semua'
    ? dosenList
    : dosenList.filter(d => d.prodi === selectedProdi);

  return (
    <div className="min-h-screen bg-[#f5f7fa] px-6 py-10 md:px-16 font-sans">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">📘 Daftar Dosen Pengajar</h1>
        <p className="text-gray-600 text-lg">Filter berdasarkan Program Studi</p>
      </div>

      <div className="mb-6">
        <select
          className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
          value={selectedProdi}
          onChange={(e) => setSelectedProdi(e.target.value)}
        >
          {prodiList.map((prodi, index) => (
            <option key={index} value={prodi}>
              {prodi}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDosen.map((dosen) => (
          <div key={dosen.id} className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-6 flex gap-4 items-start">
            <img src={dosen.foto} alt={dosen.nama} className="w-16 h-16 rounded-full object-cover border-2 border-blue-200" />
            <div>
              <div className="mb-2 text-lg font-semibold text-blue-800">{dosen.nama}</div>
              <div className="text-sm text-gray-600 mb-1">NIDN: {dosen.nidn}</div>
              <div className="text-sm text-gray-700 mb-1">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-medium mr-2">
                  {dosen.matkul}
                </span>
              </div>
              <div className="text-xs text-gray-500">Prodi: {dosen.prodi}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
