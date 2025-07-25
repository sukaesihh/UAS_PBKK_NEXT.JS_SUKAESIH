import { NextResponse } from 'next/server';

let users = []; // Simulasi database sementara (memory only)

export async function POST(request) {
  const { name, email, password } = await request.json();

  // Validasi input
  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Semua data wajib diisi.' }, { status: 400 });
  }

  // Cek apakah email sudah terdaftar
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return NextResponse.json({ error: 'Email sudah terdaftar.' }, { status: 409 });
  }

  // Simpan pengguna baru
  users.push({ name, email, password });

  return NextResponse.json({ message: 'Registrasi berhasil!' }, { status: 201 });
}
