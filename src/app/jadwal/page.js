export default function JadwalPage() {
  const jadwal = [
    { hari: 'Senin', mataKuliah: 'Pemrograman Web', dosen: 'Bapak Andi', jam: '08:00 - 10:00', ruang: 'Lab 1' },
    { hari: 'Selasa', mataKuliah: 'Basis Data', dosen: 'Ibu Sari', jam: '10:00 - 12:00', ruang: 'R.202' },
    { hari: 'Rabu', mataKuliah: 'Struktur Data', dosen: 'Bapak Rudi', jam: '13:00 - 15:00', ruang: 'R.103' },
    { hari: 'Kamis', mataKuliah: 'Jaringan Komputer', dosen: 'Ibu Lina', jam: '09:00 - 11:00', ruang: 'Lab 3' },
    { hari: 'Jumat', mataKuliah: 'Kecerdasan Buatan', dosen: 'Bapak Wahyu', jam: '07:00 - 09:00', ruang: 'R.301' },
  ];

  const warnaHari = {
    Senin: 'bg-blue-200 text-blue-800',
    Selasa: 'bg-green-200 text-green-800',
    Rabu: 'bg-yellow-200 text-yellow-800',
    Kamis: 'bg-purple-200 text-purple-800',
    Jumat: 'bg-pink-200 text-pink-800',
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 drop-shadow-md">📅 Jadwal Kuliah Mahasiswa</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-xl rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white text-sm uppercase">
            <tr>
              <th className="py-3 px-6 text-left">Hari</th>
              <th className="py-3 px-6 text-left">Mata Kuliah</th>
              <th className="py-3 px-6 text-left">Dosen</th>
              <th className="py-3 px-6 text-left">Jam</th>
              <th className="py-3 px-6 text-left">Ruang</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {jadwal.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${warnaHari[item.hari]}`}>
                    {item.hari}
                  </span>
                </td>
                <td className="py-3 px-6 font-semibold">{item.mataKuliah}</td>
                <td className="py-3 px-6">{item.dosen}</td>
                <td className="py-3 px-6">{item.jam}</td>
                <td className="py-3 px-6">{item.ruang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
