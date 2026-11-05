# Portofolio — Aufa Fahmi Azhar S

Portofolio pribadi modern berbasis HTML, CSS, dan JavaScript vanilla. Tanpa framework, tanpa build step.

---

## 🚀 Cara Menjalankan Secara Lokal

### Metode 1 — Buka langsung di browser
```
Buka file  index.html  di browser mana pun (double-click).
```
> [!NOTE]  
> Beberapa fitur (font Google, ikon Lucide) memerlukan koneksi internet karena dimuat dari CDN.

### Metode 2 — Live Server (direkomendasikan)
1. Install ekstensi **Live Server** di VS Code.  
2. Klik kanan `index.html` → **Open with Live Server**.  
3. Browser akan otomatis memuat `http://127.0.0.1:5500`.

### Metode 3 — XAMPP / WAMP / MAMP
Salin folder ini ke direktori `htdocs` / `www`, lalu akses:
```
http://localhost/portofolio/
```

---

## 🔧 Mengganti Placeholder

Cari semua komentar `TODO` di dalam kode untuk menemukan bagian yang perlu diisi.

| Placeholder | Lokasi | Keterangan |
|---|---|---|
| `[email]` | `index.html`, `js/main.js` | Alamat email aktif Anda |
| `[nomor]` | `index.html` | Nomor WhatsApp format internasional (cth: `6281234567890`) |
| `[username-linkedin]` | `index.html` | Username LinkedIn Anda |
| `[username-github]` | `index.html` | Username GitHub Anda |
| `[your-formspree-id]` | `index.html` | ID endpoint dari [formspree.io](https://formspree.io) |
| URL repositori proyek | `index.html` (tombol Repositori) | Ganti `href="#"` dengan URL repo GitHub Tugas Akhir |
| URL laporan | `index.html` (tombol Laporan) | Ganti `href="#"` dengan URL dokumen laporan |
| Skor British Council | `index.html`, `js/main.js` (i18n) | Isi skor/level setelah sertifikat tersedia |
| Foto profil | `index.html` (komentar `TODO` di `.photo-frame`) | Simpan foto di `assets/foto.jpg` lalu ganti `<div class="photo-placeholder">` dengan `<img src="assets/foto.jpg" alt="Foto Aufa Fahmi Azhar S" width="240" height="240" loading="lazy" />` |

### Cara mendapatkan Formspree endpoint (gratis)
1. Daftar di [https://formspree.io](https://formspree.io).  
2. Buat form baru → salin endpoint (format: `https://formspree.io/f/xxxxxxxx`).  
3. Tempelkan sebagai nilai `action` pada `<form>` di `index.html`.

---

## 📁 Struktur File

```
portofolio/
├── index.html              ← Halaman utama (single page)
├── css/
│   └── style.css           ← Semua gaya, variabel CSS, responsive
├── js/
│   └── main.js             ← Interaktivitas, animasi, i18n, canvas
├── assets/
│   ├── CV-Aufa-Fahmi-Azhar-S.pdf   ← CV (siapkan file ini)
│   ├── favicon.svg         ← Favicon SVG (siapkan atau buat)
│   ├── favicon.png         ← Favicon PNG fallback
│   └── og-image.png        ← Gambar Open Graph untuk media sosial (1200×630px)
└── README.md               ← Dokumentasi ini
```

> [!IMPORTANT]  
> Pastikan file `assets/CV-Aufa-Fahmi-Azhar-S.pdf` sudah ada agar tombol "Unduh CV" berfungsi.

---

## 🌐 Deploy ke GitHub Pages

### Langkah 1 — Buat repositori GitHub
1. Login ke [github.com](https://github.com).
2. Klik **New repository**.
3. Beri nama (cth: `portofolio`) dan set ke **Public**.
4. Jangan centang "Initialize this repository with a README" (kita akan push manual).

### Langkah 2 — Push kode ke GitHub
```bash
# Di dalam folder portofolio/
git init
git add .
git commit -m "Initial commit: portofolio website"
git branch -M main
git remote add origin https://github.com/[username-github]/[nama-repo].git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages
1. Buka repositori Anda di GitHub.
2. Klik tab **Settings**.
3. Di sidebar kiri, klik **Pages**.
4. Pada bagian **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Klik **Save**.

### Langkah 4 — Akses situs
Setelah beberapa menit, situs Anda akan tersedia di:
```
https://[username-github].github.io/[nama-repo]/
```

> [!TIP]  
> Setelah deploy, perbarui `og:url` di `index.html` dengan URL GitHub Pages Anda.

### Langkah 5 — Update di masa mendatang
```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push
```
GitHub Pages akan otomatis memperbarui situs dalam 1–2 menit.

---

## ♿ Aksesibilitas & Performa

- **Kontras warna**: memenuhi standar WCAG AA (rasio ≥ 4,5:1 untuk teks normal).
- **Keyboard navigation**: semua elemen interaktif terjangkau via Tab; fokus terlihat jelas.
- **Reduced-motion**: animasi otomatis dimatikan jika pengguna mengaktifkan `prefers-reduced-motion`.
- **Lazy loading**: gambar menggunakan `loading="lazy"`.
- **Semantic HTML5**: heading hierarki benar, landmark roles, aria-label pada ikon.
- **No horizontal scroll**: layout mobile-first, telah diuji di 375px, 768px, dan 1440px.

---

## 🎨 Kustomisasi Desain

Semua token desain (warna, font, spacing) didefinisikan sebagai CSS custom properties di `:root` dalam `css/style.css`. Edit satu tempat, berubah di seluruh situs:

```css
:root {
  --red-primary: #E10600;
  --red-deep:    #8F0A0A;
  --red-soft:    #FF4D4D;
  --bg:          #0B0B0F;
  --surface:     #14141A;
  /* ... */
}
```

---

## 📄 Lisensi

Kode ini dibuat khusus untuk Aufa Fahmi Azhar S. Silakan gunakan dan modifikasi sesuai kebutuhan.

