export default function Header({ user }) {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg p-4 flex justify-between items-center rounded-xl mb-6">
      <h2 className="text-2xl font-bold text-white tracking-wide">
        🎓 Dashboard Mahasiswa
      </h2>
      <div className="text-sm text-white opacity-90">
        Hai, <span className="font-semibold">{user.name}</span>
      </div>
    </div>
  );
}
