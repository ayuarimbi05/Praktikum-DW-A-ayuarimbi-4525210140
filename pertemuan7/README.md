# Praktikum Desain Web - Pertemuan 7

**Nama:** Ayu Arimbi  
**NPM:** 4525210140

## Form Registrasi TechFest 2026

### 1. Deskripsi Project

Pada pertemuan 7 ini, saya membuat form registrasi untuk event TechFest 2026 menggunakan HTML dan CSS. Form ini digunakan untuk mengisi data peserta yang ingin mengikuti event.

Form dibuat menggunakan materi form HTML yang sudah dipelajari, seperti input, radio, checkbox, select, textarea, upload file, dan tombol submit serta reset.

### 2. File Project

- `index.html` — berisi struktur dan form registrasi.
- `style.css` — digunakan untuk mengatur tampilan form agar lebih rapi.

### 3. Fitur Form

Form registrasi ini memiliki beberapa bagian, yaitu:

- Nama lengkap peserta.
- Email peserta.
- Nomor telepon.
- Pilihan jenis peserta menggunakan radio.
- Pilihan sesi event menggunakan checkbox.
- Pilihan ukuran kaos menggunakan select.
- Alasan mengikuti event menggunakan textarea.
- Upload kartu identitas.
- Checkbox persetujuan.
- Tombol Daftar dan Reset.

### 4. Validasi Form

Validasi dibuat menggunakan atribut HTML tanpa JavaScript.

Beberapa aturan validasi yang digunakan:

1. `required` untuk memastikan bagian yang wajib diisi tidak kosong.
2. `minlength="3"` untuk membatasi nama minimal 3 karakter.
3. `type="email"` untuk memeriksa format email.
4. `pattern="[0-9]{10,15}"` untuk memastikan nomor telepon terdiri dari 10 sampai 15 digit angka.
5. `minlength="10"` untuk memastikan alasan mengikuti event minimal 10 karakter.
6. `accept=".jpg,.jpeg,.png,.pdf"` untuk membatasi jenis file yang ditampilkan pada pemilih file.

### 5. Pengujian Form

Pengujian dilakukan dengan mencoba beberapa input yang salah untuk melihat apakah validasi berjalan sesuai aturan.

| No. | Field | Input Uji | Hasil yang Diharapkan | Hasil Aktual |
|---|---|---|---|---|
| 1 | Nama | Dikosongkan | Browser meminta nama diisi. | Diisi sesuai hasil pengujian di browser. |
| 2 | Email | `ayu123` | Browser menolak format email yang tidak sesuai. | Diisi sesuai hasil pengujian di browser. |
| 3 | Nomor telepon | `0812abcd` | Browser menolak nomor yang tidak sesuai pola angka. | Diisi sesuai hasil pengujian di browser. |
| 4 | Jenis peserta | Tidak memilih radio | Browser meminta jenis peserta dipilih. | Diisi sesuai hasil pengujian di browser. |
| 5 | Ukuran kaos | Tidak memilih ukuran | Browser meminta ukuran kaos dipilih. | Diisi sesuai hasil pengujian di browser. |
| 6 | Alasan mengikuti event | `Mau ikut` | Browser meminta alasan minimal 10 karakter. | Diisi sesuai hasil pengujian di browser. |
| 7 | Upload identitas | Tidak memilih file | Browser meminta file diunggah. | Diisi sesuai hasil pengujian di browser. |
| 8 | Persetujuan | Tidak dicentang | Browser meminta persetujuan dicentang. | Diisi sesuai hasil pengujian di browser. |

### 6. Validasi yang Wajib Dilakukan di Server

Validasi dari HTML membantu pengguna mengisi form dengan benar, tetapi belum cukup untuk menjamin keamanan data.

Validasi tetap perlu dilakukan di server, terutama untuk memeriksa data yang dikirim, format dan panjang input, serta jenis dan ukuran file yang diunggah. File juga perlu diperiksa agar tidak mengandung konten berbahaya.

Sesuai materi, penggunaan `method="post"` saja tidak menjamin keamanan. Pengiriman data tetap perlu didukung HTTPS dan validasi server.

### 7. Masalah dan Solusi

**Masalah:** Form perlu memiliki beberapa aturan validasi agar data yang dimasukkan tidak sembarangan.

**Solusi:** Saya menggunakan atribut HTML seperti `required`, `minlength`, `type="email"`, dan `pattern`. Saya juga menggunakan CSS untuk mengatur tampilan form agar lebih mudah dibaca.

Karena project ini hanya menggunakan HTML dan CSS, form belum terhubung ke server atau database sehingga data registrasi belum disimpan.

### 8. Screenshot

Berikut adalah screenshot hasil tampilan form registrasi pada perangkat desktop dan mobile.

**Tampilan Desktop**

![Tampilan Desktop](screenshot/device.jpg.png)

**Tampilan Mobile**

![Tampilan Mobile](screenshot/mobile.jpg.png)


### 9. Cara Menjalankan

1. Buka folder project di Visual Studio Code.
2. Pastikan file `index.html` dan `style.css` berada di folder yang sama.
3. Buka file `index.html` menggunakan browser.
4. Isi form dan coba beberapa input yang salah untuk menguji validasi.
