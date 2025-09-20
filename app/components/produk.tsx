import { useState } from "react";

const kategoriList = [
  { id: 1, nama_kategori: "Teknologi Digital" },
  { id: 2, nama_kategori: "Otomotif" },
  { id: 3, nama_kategori: "Lifestyle" },
  { id: 4, nama_kategori: "Kesehatan" },
  { id: 5, nama_kategori: "Pendidikan" },
  { id: 6, nama_kategori: "Makanan & Minuman" },
  { id: 7, nama_kategori: "Olahraga" },
  { id: 8, nama_kategori: "Properti" },
  { id: 9, nama_kategori: "Profil & Portofolio" },
  { id: 10, nama_kategori: "Media Publikasi" },
  { id: 11, nama_kategori: "Traveling" },
];

const produkList = [
  {
    id: 1,
    kategori_id: 1,
    nama_produk: "Digital Store Website",
    gambar_produk: "sampul_digital.png",
  },
  {
    id: 2,
    kategori_id: 4,
    nama_produk: "Skincare Beauty Website",
    gambar_produk: "sampul_bakery.png",
  },
  {
    id: 3,
    kategori_id: 2,
    nama_produk: "Automotive Website",
    gambar_produk: "sampul_digital.png",
  },
  {
    id: 4,
    kategori_id: 1,
    nama_produk: "Digital Store 2 Website",
    gambar_produk: "sampul_digital.png",
  },
];

export default function Produk() {
  const [activeKategori, setActiveKategori] = useState(1);

  const filteredProduk = produkList.filter(
    (item) => item.kategori_id === activeKategori
  );

  return (
    <>    
        <div className="flex justify-center flex-wrap gap-6 mb-10 mt-10">
          {kategoriList.map((item) => (
            <div key={item.id} onClick={() => setActiveKategori(item.id)} className={`w-[70px] h-[200px] border-2 border-gray-300 flex items-center justify-center cursor-pointer font-semibold transition-all writing-mode-vertical-rl rotate-180 ${
                activeKategori === item.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              style={{ writingMode: "vertical-rl" }}>
              {item.nama_kategori}
            </div>
          ))}
          <a href="/desain-produk" className="w-[70px] h-[200px] flex items-center justify-center font-semibold bg-blue-500 text-white text-center cursor-pointer transition-all rotate-180" style={{ writingMode: "vertical-rl" }}>
            Selengkapnya
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
          {filteredProduk.length > 0 ? (
            filteredProduk.map((item) => (
              <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden mt-7">
                <img src={`public/img/${item.gambar_produk}`} alt={item.nama_produk} className="w-full object-cover" />
                <div className="p-4">
                  <h5 className="font-semibold text-lg">{item.nama_produk}</h5>
                  <a href={`/preview/${item.id}`} className="inline-block mt-3 px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                    Preview
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Belum ada produk pada kategori ini.
            </p>
          )}
        </div>
    </>
  );
}
