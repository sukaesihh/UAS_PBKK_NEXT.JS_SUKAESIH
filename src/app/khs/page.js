'use client';

import { useState } from 'react';

const khsMahasiswa = {
  'Rina Kartika': [
    { kode: 'IF201', mataKuliah: 'Pemrograman Web', sks: 3, nilai: 'A', mutu: 12 },
    { kode: 'IF202', mataKuliah: 'Basis Data', sks: 3, nilai: 'A-', mutu: 11.1 },
    { kode: 'IF203', mataKuliah: 'Struktur Data', sks: 3, nilai: 'B+', mutu: 9.9 },
    { kode: 'IF204', mataKuliah: 'Jaringan Komputer', sks: 2, nilai: 'B', mutu: 6 },
    { kode: 'IF205', mataKuliah: 'Kecerdasan Buatan', sks: 2, nilai: 'A', mutu: 8 },
  ],
  'Budi Santoso': [
    { kode: 'IF201', mataKuliah: 'Pemrograman Web', sks: 3, nilai: 'B', mutu: 9 },
    { kode: 'IF202', mataKuliah: 'Basis Data', sks: 3, nilai: 'B+', mutu: 9.9 },
    { kode: 'IF203', mataKuliah: 'Struktur Data', sks: 3, nilai: 'C+', mutu: 6.9 },
    { kode: 'IF204', mataKuliah: 'Jaringan Komputer', sks: 2, nilai: 'B-', mutu: 5.4 },
  ],
  'Sinta Wulandari': [
    { kode: 'IF201', mataKuliah: 'Pemrograman Web', sks: 3, nilai: 'A', mutu: 12 },
    { kode: 'IF202', mataKuliah: 'Basis Data', sks: 3, nilai: 'A', mutu: 12 },
    { kode: 'IF203', mataKuliah: 'Struktur Data', sks: 3, nilai: 'A', mutu: 12 },
    { kode: 'IF204', mataKuliah: 'Jaringan Komputer', sks: 2, nilai: 'A', mutu: 8 },
  ],
};

export default function KHSPage() {
  const [selectedName, setSelectedName] = useState('Rina Kartika');

  const khsData = khsMahasiswa[selectedName] || [];
  const totalSKS = khsData.reduce((sum, m) => sum + m.sks, 0);
  const totalMutu = khsData.reduce((sum, m) => sum + m.mutu, 0);
  const ipk = totalSKS > 0 ? (totalMutu / totalSKS).toFixed(2) : '0.00';

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-green-700 flex items-center gap-2">
          🎓 Kartu Hasil Studi (KHS)
        </h1>

        <div className="bg-white border rounded-lg p-6 shadow-md mb-8">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Pilih Mahasiswa:
          </label>
          <select
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          >
            {Object.keys(khsMahasiswa).map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto bg-white border rounded-lg shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-green-600 text-white text-left text-base">
              <tr>
                <th className="py-3 px-4">Kode</th>
                <th className="py-3 px-4">Mata Kuliah</th>
                <th className="py-3 px-4">SKS</th>
                <th className="py-3 px-4">Nilai</th>
                <th className="py-3 px-4">Mutu</th>
              </tr>
            </thead>
            <tbody>
              {khsData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{item.kode}</td>
                  <td className="py-2 px-4">{item.mataKuliah}</td>
                  <td className="py-2 px-4">{item.sks}</td>
                  <td className="py-2 px-4">{item.nilai}</td>
                  <td className="py-2 px-4">{item.mutu}</td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-semibold text-base">
                <td colSpan="2" className="py-2 px-4 text-right">Total</td>
                <td className="py-2 px-4">{totalSKS}</td>
                <td className="py-2 px-4">IPK</td>
                <td className="py-2 px-4">{ipk}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
