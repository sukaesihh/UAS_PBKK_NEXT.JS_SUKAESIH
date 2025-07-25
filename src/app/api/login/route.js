import { NextResponse } from 'next/server';

let users = []; // Simulasi database sementara (pastikan sama dengan register)

export async function POST(request) {
  const { email, password } = await request.json();

  // Validasi input
  if (!email || !password) {
    return NextResponse.json({ error: 'Email dan password wajib diisi.' }, { status: 400 });
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Login berhasil!', user }, { status: 200 });
}
