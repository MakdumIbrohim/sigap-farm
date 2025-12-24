# Flowchart dan Algoritma Aplikasi SIGAP FARM

## Gambaran Aplikasi
SIGAP FARM (Sistem Informasi Geospasial untuk Pertanian Pasca-Bencana) adalah sistem informasi geospasial untuk manajemen pertanian pasca-bencana. Aplikasi ini menyediakan overview dashboard, pemetaan interaktif, manajemen lahan pertanian, dan kemampuan pelacakan bencana.

## Flowchart Navigasi Utama

```mermaid
flowchart TD
    A[Pengguna Mengakses Aplikasi] --> B[Halaman Root /]
    B --> C[Redirect ke /dashboard]
    C --> D[Halaman Dashboard Dimuat]

    D --> E[Tampilkan Overview]
    E --> F[Tampilkan Kartu Statistik]
    E --> G[Tampilkan Status Lahan]
    E --> H[Tampilkan Aktivitas Terbaru]
    E --> I[Tampilkan Bencana Terbaru]
    E --> J[Tampilkan Aksi Cepat]

    J --> K[Link Lihat Peta]
    J --> L[Link Lahan Pertanian]
    J --> M[Link Buat Laporan]
    J --> N[Link Pengaturan]

    D --> O[Navigasi Sidebar]
    O --> P[Dashboard]
    O --> Q[Peta]
    O --> R[Lahan Pertanian]
    O --> S[Bencana]
    O --> T[Laporan]
    O --> U[Pengaturan]

    K --> Q
    L --> R
```

## Flowchart Halaman Peta

```mermaid
flowchart TD
    A[Halaman Peta Dimuat] --> B[Inisialisasi Peta dengan Tampilan Default]
    B --> C[Muat Layer Dasar - OpenStreetMap]

    A --> D[Tampilkan Panel Filter]
    D --> E[Legenda Peta]
    D --> F[Kontrol Layer]

    F --> G[Toggle Zona Bencana]
    F --> H[Toggle Lahan Pertanian]
    F --> I[Toggle Tampilan Satelit]

    A --> J[Tampilkan Kontrol Peta]
    J --> K[Tampilkan Semua Bencana]
    J --> L[Hanya Banjir]
    J --> M[Hanya Kekeringan]

    C --> N[Render Zona Bencana]
    C --> O[Render Lahan Pertanian]

    G --> P{Status Toggle?}
    P -->|Aktif| N
    P -->|Non-aktif| Q[Sembunyikan Zona Bencana]

    H --> R{Status Toggle?}
    R -->|Aktif| O
    R -->|Non-aktif| S[Sembunyikan Lahan Pertanian]

    I --> T{Status Toggle?}
    T -->|Aktif| U[Beralih ke Layer Satelit]
    T -->|Non-aktif| V[Beralih ke OpenStreetMap]

    K --> W[Filter: Tampilkan Semua Tipe Bencana]
    L --> X[Filter: Tampilkan Hanya Banjir]
    M --> Y[Filter: Tampilkan Hanya Kekeringan]

    W --> Z[Update Tampilan Peta]
    X --> Z
    Y --> Z
```

## Flowchart Manajemen Lahan Pertanian

```mermaid
flowchart TD
    A[Halaman Lahan Pertanian Dimuat] --> B[Ambil Data Lahan]
    B --> C[Tampilkan Tabel Lahan]

    C --> D[Tampilkan Detail Lahan]
    D --> E[Nama Lahan]
    D --> F[Pemilik]
    D --> G[Luas dalam Hektar]
    D --> H[Jenis Tanaman]
    D --> I[Jumlah Bencana]
    D --> J[Status Kualitas Tanah]

    C --> K[Link Lihat Detail per Baris]

    K --> L[Navigasi ke Halaman Detail Lahan]
    L --> M[Tampilkan Informasi Detail Lahan]
    M --> N[Overview Lahan]
    M --> O[Riwayat Bencana]
    M --> P[Informasi Tanaman]
    M --> Q[Analisis Tanah]
    M --> R[Aksi Pemulihan]

    A --> S[Tombol Tambah Lahan Baru]
    S --> T[Buka Form Pembuatan Lahan]
    T --> U[Input Detail Lahan]
    U --> V[Validasi Input]
    V --> W{Valid?}
    W -->|Ya| X[Simpan ke Database]
    W -->|Tidak| Y[Tampilkan Error Validasi]
    Y --> U

    X --> Z[Redirect ke Daftar Lahan]
    Z --> A
```

## Algoritma Pelacakan Bencana

```mermaid
flowchart TD
    A[Input Data Bencana] --> B[Terima Laporan Bencana]
    B --> C[Validasi Data Bencana]
    C --> D{Data Valid?}

    D -->|Tidak| E[Kembalikan Pesan Error]
    D -->|Ya| F[Proses Informasi Bencana]

    F --> G[Ekstrak Koordinat Lokasi]
    F --> H[Tentukan Tipe Bencana]
    F --> I[Nilai Tingkat Keparahan]
    F --> J[Hitung Area Terdampak]

    G --> K[Update Layer Peta]
    H --> K
    I --> K
    J --> K

    K --> L[Identifikasi Lahan Terdampak]
    L --> M[Update Riwayat Bencana Lahan]
    M --> N[Hitung Estimasi Waktu Pemulihan]
    N --> O[Update Status Lahan]

    O --> P[Generate Notifikasi Peringatan]
    P --> Q[Kirim ke Stakeholder Terkait]
    Q --> R[Log Event Bencana]

    R --> S[Update Statistik Dashboard]
    S --> T[Refresh Data Overview]
```

## Algoritma Interaksi Pengguna

```mermaid
flowchart TD
    A[Mulai Interaksi Pengguna] --> B{Tipe Aksi Pengguna}

    B -->|Navigasi| C[Update Route URL]
    B -->|Interaksi Peta| D[Handle Event Peta]
    B -->|Penerapan Filter| E[Update Filter Data]
    B -->|Pengiriman Data| F[Proses Data Form]

    C --> G[Load Komponen Halaman Baru]
    G --> H[Ambil Data yang Diperlukan]
    H --> I[Render Konten Halaman]

    D --> J{Tipe Event}
    J -->|Toggle Layer| K[Update Visibilitas Layer]
    J -->|Zoom/Pan| L[Update Viewport Peta]
    J -->|Klik Fitur| M[Tampilkan Popup Fitur]

    K --> N[Re-render Peta]
    L --> N
    M --> O[Tampilkan Informasi Fitur]

    E --> P[Filter Koleksi Data]
    P --> Q[Update Komponen UI]
    Q --> R[Refresh Tampilan]

    F --> S[Validasi Data Input]
    S --> T{Hasil Validasi}
    T -->|Lulus| U[Kirim ke Backend]
    T -->|Gagal| V[Tampilkan Pesan Error]

    U --> W[Proses Response]
    W --> X{Status Response}
    X -->|Sukses| Y[Tampilkan Pesan Sukses]
    X -->|Error| Z[Tampilkan Pesan Error]

    Y --> AA[Update State UI]
    Z --> BB[Pertahankan State Form]

    AA --> CC[Akhiri Interaksi]
    BB --> CC
    I --> CC
    N --> CC
    O --> CC
    R --> CC
```

## Algoritma Utama

### 1. Algoritma Rendering Peta
```
1. Inisialisasi container peta dengan koordinat pusat dan level zoom
2. Muat layer tile dasar (OpenStreetMap atau Satelit)
3. Periksa pengaturan visibilitas layer dari store
4. Jika layer zona bencana diaktifkan:
   - Ambil data zona bencana
   - Buat overlay poligon dengan kode warna berdasarkan keparahan
   - Tambahkan informasi popup untuk setiap zona
5. Jika layer lahan pertanian diaktifkan:
   - Ambil data lahan pertanian
   - Buat overlay poligon untuk batas lahan
   - Tambahkan popup dengan detail lahan
6. Terapkan filter saat ini (tipe bencana, rentang tanggal, dll.)
7. Tambahkan kontrol zoom dan layer
8. Handle interaksi pengguna (zoom, pan, klik)
```

### 2. Perhitungan Statistik Dashboard
```
1. Query database untuk data lahan pertanian
2. Hitung total lahan pertanian
3. Hitung area terdampak bencana
4. Tentukan distribusi status lahan (sehat, perlu perhatian, kritis, tidak diketahui)
5. Hitung rata-rata waktu pemulihan
6. Hitung persentase tingkat respons
7. Generate data tren untuk periode terbaru
8. Update kartu dashboard dengan nilai yang dihitung
```

### 3. Penilaian Dampak Bencana
```
1. Terima data event bencana (tipe, lokasi, keparahan)
2. Tentukan radius dampak berdasarkan tipe bencana
3. Query lahan pertanian dalam area dampak
4. Untuk setiap lahan terdampak:
   - Update riwayat bencana
   - Nilai level kerusakan
   - Hitung timeline pemulihan
   - Update status kualitas tanah
5. Generate laporan dampak
6. Kirim notifikasi ke pemilik lahan terdampak
7. Update statistik seluruh sistem
```

Flowchart dan dokumentasi algoritma ini memberikan gambaran komprehensif tentang struktur aplikasi SIGAP FARM, alur pengguna, dan logika pemrosesan utama.