'use client'
import { useState } from 'react'
import { Users, BadgeCheck, BadgeX, GraduationCap } from 'lucide-react'

export default function MahasiswaPage() {
  const mahasiswa = [
    { id: 1, nama: 'Andi Wijaya', nim: '220001', jurusan: 'Informatika', sudahBayar: true },
    { id: 2, nama: 'Siti Lestari', nim: '220002', jurusan: 'Sistem Informasi', sudahBayar: false },
    { id: 3, nama: 'Budi Hartono', nim: '220003', jurusan: 'Teknik Komputer', sudahBayar: true },
    { id: 4, nama: 'Dewi Anggraini', nim: '220004', jurusan: 'Sistem Informasi', sudahBayar: false },
    { id: 5, nama: 'Agus Saputra', nim: '220005', jurusan: 'Informatika', sudahBayar: true },
  ]

  const jurusanList = ['Semua', ...new Set(mahasiswa.map((m) => m.jurusan))]
  const [jurusanFilter, setJurusanFilter] = useState('Semua')

  const mahasiswaFiltered =
    jurusanFilter === 'Semua'
      ? mahasiswa
      : mahasiswa.filter((m) => m.jurusan === jurusanFilter)

  const sudahBayarCount = mahasiswaFiltered.filter((m) => m.sudahBayar).length
  const belumBayarCount = mahasiswaFiltered.length - sudahBayarCount

  return (
    <div className="p-6 md:p-10 bg-[#f9fafb] min-h-screen font-inter">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <GraduationCap className="w-10 h-10 text-blue-700" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Data Mahasiswa</h1>
          <p className="text-sm text-gray-500">Informasi lengkap daftar mahasiswa aktif</p>
        </div>
      </div>

      {/* Summary Cards & Filter */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
          <Users className="w-9 h-9 text-blue-700" />
          <div>
            <p className="text-gray-500 text-sm">Total Mahasiswa</p>
            <h2 className="text-2xl font-bold text-gray-800">{mahasiswaFiltered.length}</h2>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
          <BadgeCheck className="w-9 h-9 text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Sudah Bayar</p>
            <h2 className="text-xl font-semibold text-gray-800">{sudahBayarCount}</h2>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
          <BadgeX className="w-9 h-9 text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">Belum Bayar</p>
            <h2 className="text-xl font-semibold text-gray-800">{belumBayarCount}</h2>
          </div>
        </div>

        <div className="flex justify-end">
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm text-sm text-gray-700 bg-white focus:ring-blue-600 focus:border-blue-600"
            value={jurusanFilter}
            onChange={(e) => setJurusanFilter(e.target.value)}
          >
            {jurusanList.map((jurusan) => (
              <option key={jurusan} value={jurusan}>
                {jurusan}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabel */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-700 text-white text-sm uppercase font-medium tracking-wider">
            <tr>
              <th className="py-4 px-6 text-left">No</th>
              <th className="py-4 px-6 text-left">Nama</th>
              <th className="py-4 px-6 text-left">NIM</th>
              <th className="py-4 px-6 text-left">Jurusan</th>
              <th className="py-4 px-6 text-left">Status Bayar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {mahasiswaFiltered.map((mhs, index) => (
              <tr key={mhs.id} className="hover:bg-gray-50 transition duration-200">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6 font-medium flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {mhs.nama.charAt(0)}
                  </div>
                  {mhs.nama}
                </td>
                <td className="py-4 px-6">{mhs.nim}</td>
                <td className="py-4 px-6">{mhs.jurusan}</td>
                <td className="py-4 px-6">
                  {mhs.sudahBayar ? (
                    <span className="text-green-600 font-semibold">Sudah</span>
                  ) : (
                    <span className="text-red-500 font-semibold">Belum</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
