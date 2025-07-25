export default function TagihanPage() {
  const tagihan = [
    { id: 1, semester: 'Ganjil 2024/2025', jenis: 'UKT', jumlah: 3500000, status: 'Belum Lunas' },
    { id: 2, semester: 'Genap 2024/2025', jenis: 'UKT', jumlah: 3500000, status: 'Lunas' },
    { id: 3, semester: 'KKN', jenis: 'Biaya Tambahan', jumlah: 500000, status: 'Belum Lunas' },
    { id: 4, semester: 'Ganjil 2023/2024', jenis: 'UKT', jumlah: 3500000, status: 'Lunas' },
  ];

  const formatRupiah = (angka) => {
    return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const jumlahLunas = tagihan.filter((t) => t.status === 'Lunas').length;
  const jumlahBelum = tagihan.filter((t) => t.status === 'Belum Lunas').length;

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen font-inter">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">🧾 Tagihan Mahasiswa</h1>

      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-5 shadow-sm">
          <h3 className="text-green-800 text-lg font-semibold">Mahasiswa Sudah Bayar</h3>
          <p className="text-3xl font-bold text-green-900 mt-2">{jumlahLunas}</p>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 shadow-sm">
          <h3 className="text-yellow-800 text-lg font-semibold">Mahasiswa Belum Bayar</h3>
          <p className="text-3xl font-bold text-yellow-900 mt-2">{jumlahBelum}</p>
        </div>
      </div>

      {/* Tabel Tagihan */}
      <div className="overflow-hidden rounded-xl shadow-lg border border-blue-100 bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-50 text-blue-800 text-sm font-semibold uppercase">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Semester</th>
              <th className="px-6 py-4 text-left">Jenis Tagihan</th>
              <th className="px-6 py-4 text-left">Jumlah</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-blue-950 text-sm">
            {tagihan.map((item, index) => (
              <tr key={item.id} className="hover:bg-blue-50 transition duration-200">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.semester}</td>
                <td className="px-6 py-4">{item.jenis}</td>
                <td className="px-6 py-4 font-semibold">{formatRupiah(item.jumlah)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      item.status === 'Lunas'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
