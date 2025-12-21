'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dasbor SIGAP FARM</h1>
            <p className="text-gray-600 mt-2">Sistem Informasi Geospasial untuk Pertanian Pasca-Bencana</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Tambah Laporan Baru
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Ekspor Data
            </button>
          </div>
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <div className="text-green-800 text-sm font-medium">Total Lahan</div>
            <div className="text-2xl font-bold text-green-900 mt-1">1,248</div>
            <div className="text-green-700 text-xs mt-1">+12% dari bulan lalu</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="text-blue-800 text-sm font-medium">Bencana Aktif</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">12</div>
            <div className="text-blue-700 text-xs mt-1">3 peringatan kritis</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <div className="text-amber-800 text-sm font-medium">Area Terdampak</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">42 km²</div>
            <div className="text-amber-700 text-xs mt-1">+5% dari minggu lalu</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
            <div className="text-purple-800 text-sm font-medium">Laporan Dibuat</div>
            <div className="text-2xl font-bold text-purple-900 mt-1">24</div>
            <div className="text-purple-700 text-xs mt-1">8 bulan ini</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Farm Status Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Status Lahan</h2>
            <span className="text-sm text-gray-500">Diperbarui 5 menit yang lalu</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                <span className="text-gray-600">Sehat</span>
              </div>
              <span className="font-medium">842</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                <span className="text-gray-600">Perlu Perhatian</span>
              </div>
              <span className="font-medium">216</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                <span className="text-gray-600">Kritis</span>
              </div>
              <span className="font-medium">190</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-500 mr-3"></div>
                <span className="text-gray-600">Tidak Diketahui</span>
              </div>
              <span className="font-medium">124</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h2>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Peringatan bencana baru diterbitkan</p>
                <p className="text-xs text-gray-500">Wilayah Jawa Tengah - 2 jam yang lalu</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Laporan dibuat</p>
                <p className="text-xs text-gray-500">Penilaian Kalimantan Timur - 4 jam yang lalu</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Data diperbarui</p>
                <p className="text-xs text-gray-500">Lahan Sumatra Barat - 6 jam yang lalu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistik Cepat</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Waktu Pemulihan Rata-rata</span>
              <span className="font-medium">42 hari</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Kehilangan Hasil Rata-rata</span>
              <span className="font-medium">28%</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Tingkat Respons</span>
              <span className="font-medium text-green-600">87%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Waktu Aktif Sistem</span>
              <span className="font-medium text-green-600">99.9%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Disasters */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Bencana Terbaru</h2>
            <Link href="/disasters" className="text-green-600 hover:text-green-800 text-sm">
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800">Banjir di Jawa Tengah</h3>
                  <span className="text-sm text-gray-500">2 hari yang lalu</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Curah hujan tinggi menyebabkan banjir luas yang mempengaruhi area pertanian.</p>
                <div className="mt-2 flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Tingkat Tinggi
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h3 className="font-medium text-gray-800 mb-3">Tren Bencana</h3>
            <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-sm">Grafik tren bencana akan muncul di sini</p>
            </div>
          </div>
        </div>

        {/* Quick Actions and Resources */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Aksi Cepat</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/map" className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="p-3 rounded-full bg-green-100 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Lihat Peta</span>
              </Link>
              
              <Link href="/lands" className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="p-3 rounded-full bg-blue-100 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Lahan Pertanian</span>
              </Link>
              
              <Link href="/reports" className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="p-3 rounded-full bg-purple-100 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Buat Laporan</span>
              </Link>
              
              <Link href="/settings" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 rounded-full bg-gray-100 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Pengaturan</span>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sumber Daya & Panduan</h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Panduan Pemulihan Pasca Bencana</p>
                  <p className="text-xs text-gray-500">PDF • 2.4 MB</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Nomor Telepon Bantuan Petani</p>
                  <p className="text-xs text-gray-500">Informasi Kontak</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Waktu Respon Darurat</p>
                  <p className="text-xs text-gray-500">Dokumen Kebijakan Terbaru</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}