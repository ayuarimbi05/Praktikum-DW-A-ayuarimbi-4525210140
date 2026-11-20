# Pertemuan 10 – Selaras Coffee
Pertemuan 10 – Selaras Coffee

Nama: Ayu Arimbi
NPM: 4525210140
Mata Kuliah: Praktikum Desain Web A
Website company profile satu halaman untuk UMKM **Selaras Coffee**, dibuat menggunakan Bootstrap 5 dan custom CSS.

## Struktur folder

```text
Pertemuan10-Selaras-Coffee/
├── index.html
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
└── README.md
```

## Cara menjalankan

1. Ekstrak folder project jika masih berbentuk ZIP.
2. Buka folder `Pertemuan10-Selaras-Coffee` di Visual Studio Code.
3. Pastikan koneksi internet aktif karena Bootstrap CSS dan Bootstrap Bundle JS dimuat melalui CDN.
4. Klik kanan `index.html`, lalu pilih **Open with Live Server**. Jika tidak menggunakan Live Server, file `index.html` juga dapat dibuka langsung di browser.
5. Uji navbar hamburger, tombol Cerita Selaras, tombol Lihat detail pada setiap produk, alert promo, dan form kontak.

## Komponen yang diterapkan

- **Navbar:** `navbar`, `navbar-expand-lg`, `navbar-toggler`, `collapse`, dan menu anchor.
- **Hero:** `container`, `row`, `col-12`, `col-lg-6`, tombol CTA, dan ilustrasi CSS.
- **Alert:** `alert`, `alert-dismissible`, `fade`, `show`, dan `data-bs-dismiss="alert"`.
- **Card:** tiga kartu produk dengan grid `col-12 col-md-6 col-lg-4`.
- **Modal:** modal cerita dan modal detail produk. Isi modal detail berubah sesuai tombol produk yang diklik.
- **Form:** `form-control`, `form-select`, label, validasi HTML, dan simulasi pesan berhasil.
- **Footer:** informasi hak cipta dan tautan media sosial.
- **Bootstrap Bundle JS:** mengaktifkan interaksi navbar collapse, alert, dan modal.

## Branding dan responsive design

Warna utama disimpan sebagai CSS variables pada `:root` di `CSS/style.css`. Custom stylesheet dipanggil setelah Bootstrap CSS sehingga class khusus dapat mengubah tampilan komponen Bootstrap. Layout dimulai dari ukuran layar kecil, lalu disesuaikan pada breakpoint 576px, 768px, dan 992px.

## Penjelasan perubahan, masalah, dan solusi

1. **Identitas website:** contoh materi menggunakan tema program studi/dashboard. Konten diganti menjadi company profile Selaras Coffee dengan warna cokelat, krem, dan aksen karamel agar sesuai identitas kedai kopi.
2. **Navbar responsif:** memakai `navbar-expand-lg` dan `collapse`. Pada layar kecil menu berubah menjadi tombol hamburger; pada layar laptop menu tampil horizontal.
3. **Hero:** dibuat dua kolom pada layar besar dan bertumpuk pada layar kecil. Ilustrasi cangkir dibuat dengan CSS sehingga project tidak membutuhkan file gambar tambahan.
4. **Kartu produk:** tiga kartu disusun memakai grid Bootstrap. `col-12` membuat satu kolom di HP, `col-md-6` dua kolom di tablet, dan `col-lg-4` tiga kolom di laptop.
5. **Alert dan modal:** Bootstrap Bundle JS ditambahkan agar tombol tutup alert, navbar collapse, dan modal dapat berfungsi. Modal detail menggunakan atribut `data-product` dan `data-description` untuk menampilkan informasi produk yang dipilih.
6. **Form kontak:** validasi menggunakan atribut `required` dan JavaScript untuk menampilkan pesan simulasi. Form belum mengirim data ke email/server karena tugas ini tidak meminta backend.
7. **Custom CSS:** variabel warna, custom button, card, form, modal, dan media query ditambahkan. CSS khusus diletakkan setelah Bootstrap agar override berjalan.

## Pengujian tampilan yang perlu dilakukan

Gunakan Developer Tools browser (tekan `F12`, lalu aktifkan Device Toolbar) untuk memeriksa tiga ukuran berikut:

- HP: lebar sekitar **390 px** – navbar hamburger, konten satu kolom, dan tombol tidak terpotong.
- Tablet: lebar sekitar **768 px** – kartu mulai tersusun dua kolom.
- Laptop: lebar sekitar **1366 px** – navbar horizontal dan tiga kartu sejajar.

Ambil screenshot halaman pada ketiga ukuran tersebut untuk bukti pengumpulan praktikum.

## Langkah memasukkan project ke repository GitHub

Karena folder repository lokal bisa berbeda pada setiap laptop, salin folder `Pertemuan10-Selaras-Coffee` hasil ekstrak ke dalam folder repository lokal `Praktikum-DW-A-ayuarimbi-4525210140`. Setelah itu buka PowerShell pada folder repository tersebut dan jalankan satu per satu:

```powershell
git status
git add Pertemuan10-Selaras-Coffee
git commit -m "Menambahkan tugas Pertemuan 10 Selaras Coffee"
git pull --rebase origin main
git push origin main
```

Jika nama branch utama di repository bukan `main`, sesuaikan nama branch pada perintah `pull` dan `push`. Jika `git pull --rebase` menampilkan konflik, selesaikan konflik terlebih dahulu sebelum menjalankan `git push`.
