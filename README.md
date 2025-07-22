# 🚀 React Project Showcase: A Deep Dive into Modern Concepts

Selamat datang di repositori ini. Proyek ini berevolusi dari sebuah latihan dasar menjadi sebuah studi kasus komprehensif yang mengimplementasikan berbagai konsep fundamental hingga tingkat lanjut dalam pengembangan aplikasi web modern menggunakan React.

Proyek ini mendemonstrasikan pemahaman dalam arsitektur, manajemen state, interaksi API, dan optimasi pengalaman pengguna.

live demo : https://my-first-react-five-liard.vercel.app/

---

## 🏛️ Arsitektur dan Fondasi Proyek

Proyek ini dibangun di atas fondasi yang kokoh, menekankan pada struktur dan navigasi yang scalable.

* **Atomic Design:** Sejak awal, proyek ini dirancang menggunakan prinsip Atomic Design untuk menciptakan komponen UI yang reusable, konsisten, dan mudah dikelola, mulai dari atom (input, button) hingga halaman yang utuh.
* **React Router DOM v6:** Mengimplementasikan routing sisi klien secara penuh, termasuk:
    * **Dynamic Routes:** Membuat halaman detail produk yang dinamis berdasarkan parameter URL.
    * **Nested Routes:** Mengelola layout dan halaman yang lebih kompleks di dalam sebuah section.
    * **Error Handling:** Menggunakan `useRouteError` untuk menangani halaman 404 secara elegan.
* **Deployment-Ready:** Konfigurasi untuk deployment ke platform modern seperti **Vercel** sudah disiapkan.

---

## 🧠 Evolusi Manajemen State (State Management)

Salah satu fokus utama proyek ini adalah eksplorasi berbagai teknik manajemen state di React, dari yang paling sederhana hingga solusi global yang canggih.

1.  **Local State (Hooks Dasar):**
    * **`useState`:** Digunakan untuk mengelola state lokal sederhana seperti state pada form, dan logika dasar untuk menambah produk ke keranjang (`add to cart`).
    * **`useRef`:** Dimanfaatkan untuk mengakses dan memanipulasi elemen DOM secara langsung jika diperlukan.
    * **`useEffect`:** Digunakan untuk menangani *side effects*, seperti fetching data dan logika yang meniru siklus hidup `componentDidUpdate`.

2.  **Complex Local & Global State (Hooks Lanjutan):**
    * **`useReducer`:** Diimplementasikan untuk mengelola state yang lebih kompleks dan memiliki banyak transisi, seperti kalkulasi total harga pada keranjang belanja.
    * **`useContext`:** Digunakan untuk menyediakan state global ke seluruh aplikasi tanpa *prop drilling*, contohnya pada fitur **Dark Mode** dan status dialog keranjang belanja.

3.  **Global State Management (Redux):**
    * **Redux Toolkit:** Proyek ini mengadopsi Redux Toolkit sebagai standar modern untuk manajemen state global yang efisien dan minim boilerplate.
    * **Slice:** Menggunakan `createSlice` untuk mengorganisir *reducers*, *actions*, dan *state* secara modular per fitur, membuat codebase lebih terstruktur.

---

## ✨ Fitur dan Konsep yang Diimplementasikan

Berikut adalah daftar fitur dan konsep teknis yang telah diterapkan dalam proyek ini:

* **Interaksi API dengan Axios:** Melakukan *asynchronous request* untuk mengambil (GET) dan mengirim (POST) data, seperti pada proses otentikasi login dan pencarian produk.
* **Custom Hooks:** Membuat *reusable hooks* kustom untuk mengisolasi dan menggunakan kembali logika stateful, meningkatkan kebersihan kode.
* **Otentikasi (Authentication):** Mengimplementasikan alur login pengguna menggunakan request `POST` ke sebuah API.
* **Conditional Rendering:** Menerapkan logika untuk menampilkan elemen UI yang berbeda berdasarkan state atau data tertentu.
* **Pencarian Produk:** Fitur pencarian untuk memfilter data produk yang diambil dari API.
* **Styling:** Menggunakan CSS murni dan integrasi dengan **Font Awesome** untuk ikonografi.

---

## 🔧 Teknologi yang Digunakan

* **React.js** (v18+)
* **React Router DOM** (v6)
* **Redux Toolkit**
* **Axios**
* **Vite**
* **Font Awesome**
* **Vercel** (untuk Deployment)

---

## ⚙️ Cara Menjalankan Proyek

1.  **Clone repositori:**
    ```sh
    git clone https://github.com/ManikTzyyy/myFirstReact.git
    ```
2.  **Masuk ke direktori:**
    ```sh
    cd myFirstReact
    ```
3.  **Instal dependencies:**
    ```sh
    npm install
    ```
4.  **Jalankan development server:**
    ```sh
    npm run dev
    ```