# Proyek Autentikasi Full-Stack (Express.js + Vanilla JS)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sebuah aplikasi web full-stack yang mengimplementasikan sistem otentikasi pengguna lengkap dari awal. Proyek ini dibangun untuk tujuan pembelajaran dan portofolio, mencakup registrasi lokal, login dengan JSON Web Token (JWT), dan login sosial menggunakan Google OAuth 2.0.

## ✨ Fitur Utama

-  **Backend REST API:** Dibangun dengan Node.js dan Express.js.
-  **Registrasi Pengguna Lokal:** Mendaftar dengan nama, email, dan password yang di-hash menggunakan `bcrypt`.
-  **Login Pengguna Lokal:** Otentikasi pengguna dan menghasilkan JWT sebagai sesi.
-  **Login dengan Akun Google:** Alur otentikasi OAuth 2.0 menggunakan Passport.js.
-  **Route Terproteksi:** Middleware untuk memvalidasi JWT dan melindungi endpoint tertentu.
-  **Manajemen Database:** Menggunakan PostgreSQL sebagai database dan Prisma sebagai ORM untuk interaksi yang aman dan intuitif.
-  **Frontend Vanilla:** Antarmuka pengguna yang sederhana dan fungsional dibangun hanya dengan HTML, CSS, dan JavaScript (tanpa framework).
-  **Manajemen Token:** Menyimpan JWT di `localStorage` pada sisi klien untuk menjaga sesi pengguna.

## 🛠️ Teknologi yang Digunakan

### Backend

-  [Node.js](https://nodejs.org/)
-  [Express.js](https://expressjs.com/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [Prisma ORM](https://www.prisma.io/)
-  [JSON Web Token (JWT)](https://jwt.io/)
-  [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
-  [Passport.js](http://www.passportjs.org/) (Strategi `passport-google-oauth20`)
-  [Dotenv](https://github.com/motdotla/dotenv)

### Frontend

-  HTML5
-  CSS3
-  JavaScript (ES6+)
-  Fetch API

## 🚀 Memulai Proyek

Untuk menjalankan proyek ini di mesin lokal Anda, ikuti langkah-langkah berikut.

### Prasyarat

Pastikan Anda sudah menginstal perangkat lunak berikut:

-  [Node.js](https://nodejs.org/en/download/) (v16 atau lebih tinggi)
-  [Git](https://git-scm.com/downloads)
-  [PostgreSQL](https://www.postgresql.org/download/)

### Instalasi

1. **Clone repositori ini:**

   ```bash
   git clone [https://github.com/hasibashari/express-auth-project.git)
   cd nama-repo-anda
   ```

2. **Setup Backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Konfigurasi Environment Variables:**
   Buat file `.env` di dalam folder `backend` dengan menyalin dari `.env.example` (jika ada) atau buat baru. Isi dengan variabel berikut:

   ```env
   # URL Koneksi Database PostgreSQL Anda
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"

   # Port untuk server backend
   PORT=3001

   # Kunci rahasia untuk menandatangani JWT (buat string yang panjang dan acak)
   JWT_SECRET=kunci_rahasia_anda_yang_sangat_aman

   # Kredensial dari Google Cloud Console untuk OAuth 2.0
   GOOGLE_CLIENT_ID=CLIENT_ID_DARI_GOOGLE
   GOOGLE_CLIENT_SECRET=CLIENT_SECRET_DARI_GOOGLE
   ```

4. **Setup Database:**
   Pastikan server PostgreSQL Anda berjalan. Buat database baru, lalu jalankan migrasi Prisma untuk membuat tabel.

   ```bash
   # (Di dalam folder backend)
   npx prisma migrate dev
   ```

5. **Jalankan Server Backend:**

   ```bash
   # (Di dalam folder backend)
   npm run dev
   ```

   Server akan berjalan di `http://localhost:3001`.

6. **Setup Frontend:**
   Tidak ada langkah instalasi untuk frontend. Cukup buka file `frontend/login.html` atau `frontend/register.html` di browser Anda.

   **Saran:** Gunakan ekstensi seperti **"Live Server"** di VS Code untuk menjalankan frontend. Ini akan membantu menghindari potensi masalah CORS yang tidak terduga dan memberikan alamat `http` yang sebenarnya (misal: `http://127.0.0.1:5500`), bukan `file:///`.

## 📖 Endpoint API

Berikut adalah daftar endpoint API yang tersedia:

| Method | Endpoint                | Deskripsi                                 | Akses  |
| ------ | ----------------------- | ----------------------------------------- | ------ |
| `POST` | `/auth/register`        | Mendaftarkan pengguna baru.               | Publik |
| `POST` | `/auth/login`           | Login pengguna dan mendapatkan token JWT. | Publik |
| `GET`  | `/auth/me`              | Mendapatkan data pengguna yang login.     | Privat |
| `GET`  | `/auth/google`          | Memulai alur otentikasi Google.           | Publik |
| `GET`  | `/auth/google/callback` | Callback dari Google setelah otentikasi.  | Publik |

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk detailnya.
