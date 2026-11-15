# Tugas Praktikum Pertemuan 9 - Dashboard Akademik

**Nama:** Ayu Arimbi  
**NPM:** 4525210140  
**Mata Kuliah:** Praktikum Desain Web

## Deskripsi
Halaman Dashboard Akademik dibuat menggunakan Bootstrap 5 melalui CDN. Halaman berisi empat kartu statistik dan tabel data mahasiswa sebanyak sepuluh baris. Tampilan kartu menyesuaikan ukuran layar HP, tablet, dan laptop.

## Struktur Folder
- `index.html` : struktur halaman dashboard.
- `css/style.css` : CSS tambahan.

## Penjelasan Bootstrap
- **container** digunakan untuk membungkus isi halaman agar memiliki jarak dari tepi dan posisi konten lebih teratur.
- **row** digunakan untuk membuat baris dan mengelompokkan kolom.
- **column** (`col-12`, `col-md-6`, `col-lg-3`) digunakan untuk membagi lebar konten di dalam baris. Kartu tampil satu kolom pada HP, dua kolom pada tablet, dan empat kolom pada laptop.

## Perubahan Tampilan Responsif
1. **HP:** setiap kartu memakai `col-12`, sehingga empat kartu ditampilkan satu per satu dalam satu kolom.
2. **Tablet:** class `col-md-6` membuat kartu tersusun menjadi dua kolom.
3. **Laptop:** class `col-lg-3` membuat kartu tersusun menjadi empat kolom dalam satu baris.

## Komponen dan Utility yang Digunakan
- `bg-primary`, `text-white`, `py-4` untuk tampilan header.
- `container`, `row`, dan `col-*` untuk grid system.
- `card`, `card-body`, dan `shadow-sm` untuk kartu statistik.
- `table-striped`, `table-hover`, dan `table-responsive` untuk tabel responsif.
- `badge` untuk menunjukkan status mahasiswa.
- `btn` dan `btn-sm` untuk tombol.

## Masalah dan Solusi
- **Masalah:** tabel memiliki banyak kolom sehingga dapat melebar pada layar HP.
- **Solusi:** tabel dibungkus dengan `table-responsive`, sehingga dapat digeser ke samping pada layar kecil.
- **Masalah:** kartu statistik dapat terlihat terlalu sempit jika disusun empat kolom pada layar kecil.
- **Solusi:** menggunakan breakpoint `col-12 col-md-6 col-lg-3` agar jumlah kolom berubah sesuai ukuran layar.

## Bukti Screenshot
Ambil screenshot halaman pada tiga ukuran layar melalui fitur Inspect / Device Toolbar di browser:
- HP (contoh lebar 390 px)
- Tablet (contoh lebar 768 px)
- Laptop (contoh lebar 1366 px)

Catatan: data mahasiswa pada tugas ini merupakan data contoh untuk keperluan praktikum.
