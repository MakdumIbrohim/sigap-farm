# Flowchart Aplikasi SIGAP FARM

## Alur Utama Aplikasi

SIGAP FARM adalah sistem informasi geospasial untuk manajemen pertanian pasca-bencana yang membantu petani dan pemangku kepentingan dalam:

1. **Monitoring Lahan Pertanian** - Melacak kondisi lahan secara real-time
2. **Pelacakan Bencana** - Mendeteksi dan memantau dampak bencana pada lahan
3. **Perencanaan Pemulihan** - Membuat strategi pemulihan pasca-bencana
4. **Pelaporan dan Analisis** - Generate laporan untuk pengambilan keputusan

## Alur Kerja Utama Sistem

```mermaid
flowchart TD
    A[Pengguna Masuk ke SIGAP FARM] --> B[Halaman Dashboard]
    B --> C[Tampilkan Statistik Keseluruhan]
    C --> D[Total Lahan: 1,248]
    C --> E[Bencana Aktif: 12]
    C --> F[Area Terdampak: 42 km²]
    C --> G[Laporan Dibuat: 24]

    B --> H[Pilih Menu Utama]
    H --> I[Lihat Peta Interaktif]
    H --> J[Kelola Lahan Pertanian]
    H --> K[Lihat Data Bencana]
    H --> L[Buat Laporan Baru]

    I --> M[Peta Menampilkan Layer]
    M --> N[Zona Bencana - Warna Merah/Kuning]
    M --> O[Lahan Pertanian - Warna Hijau]
    M --> P[Kontrol Filter Bencana]

    J --> Q[Daftar Semua Lahan]
    Q --> R[Tampilkan Tabel Lahan]
    R --> S[Nama Lahan, Pemilik, Luas, Status]
    R --> T[Pilih Lahan untuk Detail]

    T --> U[Halaman Detail Lahan]
    U --> V[Informasi Lengkap Lahan]
    V --> W[Riwayat Bencana]
    V --> X[Jenis Tanaman]
    V --> Y[Kualitas Tanah]
    V --> Z[Rencana Pemulihan]

    K --> AA[Data Bencana Terbaru]
    AA --> BB[Filter berdasarkan Tipe]
    BB --> CC[Banjir, Kekeringan, Gempa, dll]
    BB --> DD[Dampak pada Lahan]

    L --> EE[Form Pembuatan Laporan]
    EE --> FF[Input Data Kerusakan]
    FF --> GG[Pilih Lahan Terdampak]
    FF --> HH[Upload Foto/Dokumen]
    FF --> II[Kirim Laporan]

    II --> JJ[Sistem Memproses]
    JJ --> KK[Update Status Lahan]
    KK --> LL[Kirim Notifikasi]
    LL --> MM[Update Dashboard Statistik]
```

## Alur Monitoring Harian

```mermaid
flowchart TD
    A[Setiap Hari - Sistem Monitoring] --> B[Periksa Data Sensor Lahan]
    B --> C[Kumpulkan Data Cuaca]
    C --> D[Analisis Kondisi Tanah]
    D --> E[Deteksi Perubahan Status]

    E --> F{Status Lahan?}
    F -->|Normal| G[Lanjut Monitoring]
    F -->|Perlu Perhatian| H[Kirim Peringatan Kuning]
    F -->|Kritis| I[Kirim Peringatan Merah]

    H --> J[Petani Dapat Notifikasi]
    I --> J
    J --> K[Petani Cek Dashboard]
    K --> L[Lihat Detail Lahan]
    L --> M[Evaluasi Kondisi]
    M --> N{Perlu Tindakan?}

    N -->|Ya| O[Buat Laporan Kerusakan]
    N -->|Tidak| P[Lanjut Monitoring]

    O --> Q[Sistem Verifikasi]
    Q --> R{Valid?}
    R -->|Ya| S[Jadwalkan Tim Assessment]
    R -->|Tidak| T[Minta Data Tambahan]
    T --> O

    S --> U[Tim Kunjungi Lokasi]
    U --> V[Verifikasi Kerusakan]
    V --> W[Update Status Lahan]
    W --> X[Buat Rencana Pemulihan]
    X --> Y[Alokasikan Bantuan]
```

## Alur Respons Bencana

```mermaid
flowchart TD
    A[Bencana Terjadi] --> B[Sistem Deteksi Otomatis]
    B --> C[Atau Laporan Manual]
    C --> D[Verifikasi Data Bencana]

    D --> E[Tentukan Tipe Bencana]
    E --> F[Banjir/Kekeringan/Gempa/Longsor]
    F --> G[Hitung Radius Dampak]

    G --> H[Identifikasi Lahan Terdampak]
    H --> I[Update Status Lahan ke 'Terdampak']
    I --> J[Kirim Notifikasi Darurat]

    J --> K[Petani Terima Peringatan]
    K --> L[Evakuasi jika Diperlukan]
    L --> M[Petani Laporkan Kerusakan]

    M --> N[Tim Assessment Bergerak]
    N --> O[Evaluasi Kerusakan Fisik]
    O --> P[Hitung Kerugian]
    P --> Q[Tentukan Prioritas Bantuan]

    Q --> R[Koordinasi dengan Pemerintah]
    R --> S[Alokasikan Bantuan]
    S --> T[Distribusi Bantuan]
    T --> U[Monitoring Pemulihan]

    U --> V[Update Progress]
    V --> W[Generate Laporan]
    W --> X[Evaluasi Efektivitas Respons]
```

## Algoritma Terstruktur Aplikasi SIGAP FARM

### 1. ALGORITMA MONITORING LAHAN HARIAN

**DIMULAI DARI:** Sistem monitoring otomatis yang berjalan 24/7

**KONDISI AWAL:**
- Database lahan pertanian sudah terisi
- Sensor cuaca dan tanah aktif
- Sistem notifikasi siap

**LANGKAH-LANGKAH:**

1. **Pengumpulan Data** (Setiap 1 jam)
   - Baca data sensor kelembaban tanah
   - Ambil data cuaca dari API eksternal
   - Catat curah hujan dan suhu

2. **Analisis Kondisi** (Setiap 6 jam)
   - Bandingkan data dengan threshold normal
   - Hitung indeks kesehatan tanah (0-100)
   - Deteksi anomali: kekeringan, kelembaban berlebih

3. **Klasifikasi Status** (Setiap 12 jam)
   - **Normal (70-100)**: Kondisi baik, lanjut monitoring
   - **Perlu Perhatian (40-69)**: Kirim notifikasi peringatan
   - **Kritis (0-39)**: Kirim notifikasi darurat

4. **Tindakan Otomatis**
   - Jika kritis: Kirim SMS/email ke petani
   - Update status lahan di dashboard
   - Log ke database untuk analisis tren

**KONDISI AKHIR:** Status lahan terupdate, petani mendapat notifikasi jika perlu

---

### 2. ALGORITMA DETEKSI BENCANA

**DIMULAI DARI:** Sistem menerima data dari berbagai sumber

**KONDISI AWAL:**
- Sistem monitoring aktif
- Database zona risiko tersedia
- Sistem notifikasi darurat siap

**LANGKAH-LANGKAH:**

1. **Penerimaan Data Input**
   - Data sensor: curah hujan ekstrem, gempa, dll
   - Laporan manual dari petani/pemerintah
   - Data satelit untuk banjir/kekeringan

2. **Validasi Data**
   - Periksa akurasi sensor
   - Cross-reference dengan data stasiun cuaca resmi
   - Filter noise dan false positive

3. **Analisis Pola**
   - Bandingkan dengan pola bencana historis
   - Hitung intensitas berdasarkan skala (1-5)
   - Tentukan tipe bencana spesifik

4. **Penentuan Level Peringatan**
   - **Level 1 (Hijau)**: Potensi rendah, pantau saja
   - **Level 2 (Kuning)**: Potensi sedang, siapkan langkah pencegahan
   - **Level 3 (Merah)**: Potensi tinggi, aktifkan protokol darurat

5. **Distribusi Peringatan**
   - Kirim ke petani di zona terdampak
   - Update dashboard dengan zona risiko
   - Berkoordinasi dengan BPBD setempat

**KONDISI AKHIR:** Semua stakeholder mendapat informasi akurat tentang bencana

---

### 3. ALGORITMA PENILAIAN DAMPAK BENCANA

**DIMULAI DARI:** Setelah bencana terdeteksi atau dilaporkan

**KONDISI AWAL:**
- Data bencana sudah tervalidasi
- Koordinat lokasi bencana diketahui
- Database lahan pertanian lengkap

**LANGKAH-LANGKAH:**

1. **Penentuan Area Dampak**
   - Hitung radius berdasarkan tipe bencana:
     - Banjir: radius 5-20km tergantung intensitas
     - Gempa: radius berdasarkan magnitudo
     - Kekeringan: area berdasarkan curah hujan
   - Buat polygon area terdampak

2. **Identifikasi Lahan Terdampak**
   - Query database lahan dalam polygon
   - Hitung jarak setiap lahan dari pusat bencana
   - Kategorikan: langsung terdampak, tidak langsung

3. **Assessment Kerusakan**
   - **Visual Assessment**: Foto udara/satelit
   - **Ground Survey**: Tim survey lapangan
   - **Sensor Data**: Perubahan data sensor drastis

4. **Klasifikasi Tingkat Kerusakan**
   - **Ringan (0-25%)**: Tanaman masih bisa diselamatkan
   - **Sedang (26-50%)**: Perlu perawatan intensif
   - **Berat (51-75%)**: Perlu tanam ulang sebagian
   - **Kritis (76-100%)**: Tanam ulang total

5. **Update Database**
   - Update status lahan
   - Catat riwayat bencana
   - Update statistik dashboard

**KONDISI AKHIR:** Setiap lahan memiliki assessment kerusakan yang akurat

---

### 4. ALGORITMA PERENCANAAN PEMULIHAN

**DIMULAI DARI:** Setelah assessment dampak selesai

**KONDISI AWAL:**
- Data kerusakan lahan sudah ada
- Informasi jenis tanaman tersedia
- Data biaya dan ketersediaan bahan ada

**LANGKAH-LANGKAH:**

1. **Evaluasi Kebutuhan**
   - Tentukan jenis tanaman pengganti
   - Hitung luas area yang perlu ditanami ulang
   - Identifikasi kebutuhan bibit, pupuk, pestisida

2. **Perhitungan Waktu Pemulihan**
   - **Ringan**: 1-2 minggu (perawatan saja)
   - **Sedang**: 2-4 minggu (perbaikan + tanam tambahan)
   - **Berat**: 1-3 bulan (tanam ulang sebagian)
   - **Kritis**: 3-6 bulan (persiapan lahan + tanam ulang total)

3. **Estimasi Biaya**
   - Biaya bibit per hektar
   - Biaya tenaga kerja
   - Biaya pupuk dan pestisida
   - Biaya transportasi dan distribusi

4. **Prioritas Bantuan**
   - Lahan kritis mendapat prioritas tinggi
   - Pertimbangkan jumlah petani terdampak
   - Evaluasi dampak ekonomi

5. **Pembuatan Rencana**
   - Timeline kegiatan harian/mingguan
   - Jadwal distribusi bantuan
   - Monitoring progress pemulihan

**KONDISI AKHIR:** Rencana pemulihan terstruktur siap dieksekusi

---

### 5. ALGORITMA MANAJEMEN LAPORAN

**DIMULAI DARI:** Petani membuat laporan kerusakan

**KONDISI AWAL:**
- Form laporan tersedia
- Sistem validasi aktif
- Database laporan kosong untuk laporan baru

**LANGKAH-LANGKAH:**

1. **Input Data Laporan**
   - Pilih lahan yang terdampak
   - Upload foto kerusakan
   - Isi detail: jenis kerusakan, estimasi luas, dll

2. **Validasi Otomatis**
   - Periksa kelengkapan data
   - Validasi format foto (ukuran, tipe file)
   - Cross-check dengan data bencana

3. **Verifikasi Manual**
   - Tim validator meninjau laporan
   - Bandingkan dengan data lapangan
   - Konfirmasi atau minta revisi

4. **Proses Approval**
   - Jika valid: setujui dan proses bantuan
   - Jika perlu revisi: kirim feedback ke petani
   - Jika ditolak: berikan alasan penolakan

5. **Distribusi Bantuan**
   - Update status laporan
   - Kirim notifikasi ke petani
   - Jadwalkan distribusi bantuan

**KONDISI AKHIR:** Laporan diproses, bantuan terdistribusi, database terupdate

## Ringkasan Alur Aplikasi SIGAP FARM

Aplikasi SIGAP FARM bekerja dengan alur sebagai berikut:

### 1. **Masuk ke Dashboard**
   - Pengguna mengakses aplikasi → redirect otomatis ke dashboard
   - Dashboard menampilkan ringkasan data: statistik lahan, bencana aktif, area terdampak

### 2. **Monitoring Lahan Harian**
   - Sistem memantau kondisi lahan 24/7
   - Deteksi perubahan status lahan (normal → perhatian → kritis)
   - Kirim notifikasi otomatis ke petani jika ada masalah

### 3. **Respons Bencana**
   - Deteksi bencana otomatis atau laporan manual
   - Identifikasi lahan terdampak dalam radius bencana
   - Update status lahan dan kirim peringatan darurat

### 4. **Manajemen Laporan**
   - Petani membuat laporan kerusakan
   - Tim assessment verifikasi di lapangan
   - Sistem buat rencana pemulihan dan alokasi bantuan

### 5. **Pemetaan dan Visualisasi**
   - Peta interaktif menampilkan zona bencana (merah/kuning)
   - Lahan pertanian (hijau) dengan status terkini
   - Filter berdasarkan tipe bencana

### Algoritma Utama Sistem:

**Algoritma Deteksi Bencana:**
1. Kumpulkan data cuaca, sensor, dan laporan
2. Analisis pola untuk mendeteksi anomali
3. Hitung probabilitas terjadinya bencana
4. Kirim peringatan dini jika threshold tercapai

**Algoritma Assessment Dampak:**
1. Terima data bencana (lokasi, tipe, intensitas)
2. Hitung radius dampak berdasarkan tipe bencana
3. Identifikasi semua lahan dalam radius tersebut
4. Klasifikasi kerusakan: Ringan/Sedang/Berat/Kritis

**Algoritma Perencanaan Pemulihan:**
1. Evaluasi kerusakan per lahan
2. Hitung waktu dan biaya pemulihan
3. Buat rencana prioritas bantuan
4. Monitor progress pemulihan

Flowchart di atas menunjukkan bagaimana SIGAP FARM membantu petani dari deteksi dini bencana hingga pemulihan pasca-bencana secara terstruktur dan sistematis.