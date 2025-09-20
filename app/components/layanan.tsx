import { useState } from "react";

export const paket = [
  { id: 1, nama_paket: "Pribadi" },
  { id: 2, nama_paket: "Bisnis" },
  { id: 3, nama_paket: "Desain" },
];

const subpaket = [
  {
    id: 1,
    paket_id: 1,
    nama_subpaket: "Individu",
    harga: 225000,
    benefit: [
      "1 Halaman Website",
      "Landing Page Design",
      "Responsive Design",
      "Copy Writing",
      "Support 24/7",
      "Akses Dashboard Website",
      "Integrasi Media Sosial",
    ],
  },
  {
    id: 2,
    paket_id: 1,
    nama_subpaket: "Kelompok",
    harga: 500000,
    benefit: [
      "3 Halaman Website",
      "Landing Page Design",
      "Responsive Design",
      "Copy Writing",
      "Support 24/7",
      "Akses Dashboard Website",
      "Integrasi Media Sosial",
      "Fitur Google Maps",
      "Analytic Traffic",
    ],
  },
  {
    id: 3,
    paket_id: 1,
    nama_subpaket: "Komunitas",
    harga: 750000,
    benefit: [
      "5 Halaman Website",
      "Landing Page Design",
      "Responsive Design",
      "Free Logo Design",
      "Copy Writing",
      "Support 24/7",
      "Akses Dashboard Website",
      "Integrasi Media Sosial",
      "Fitur Google Maps",
      "Analytic Traffic",
      "Video Manual Penggunaan Website",
    ],
  },
  {
    id: 4,
    paket_id: 2,
    nama_subpaket: "Perintis",
    harga: 1300000,
    benefit: [
      "5 - 10 Halaman Website",
      "Free Domain (.com, .id, .co.id)",
      "Responsive Design",
      "Custom Web Design",
      "Copy Writing",
      "Free Logo Design",
      "Support 24/7",
      "Akses Dashboard Website",
      "Integrasi Media Sosial",
      "Katalog Produk",
      "Fitur Google Maps",
      "Analytic Traffic",
      "Video Manual Penggunaan Website",
    ],
  },
  {
    id: 5,
    paket_id: 2,
    nama_subpaket: "Regular",
    harga: 1825000,
    benefit: [
      "11 - 20 Halaman Website",
      "Free Domain (.com, .id, .co.id)",
      "Responsive Design",
      "Custom Web Design",
      "Copy Writing",
      "Free Logo Design",
      "Support 24/7",
      "Akses Dashboard Website",
      "Integrasi Media Sosial",
      "Katalog Produk",
      "Fitur Google Maps",
      "Analytic Traffic",
      "Video Manual Penggunaan Website",
    ],
  },
  {
    id: 6,
    paket_id: 2,
    nama_subpaket: "Profesional",
    harga: 3500000,
    benefit: [
      "21 - 35 Halaman Website",
      "Free Domain (.com, .id, .co.id)",
      "Shared Hosting",
      "Responsive Design",
      "Custom Web Design",
      "Copy Writing",
      "Free Logo Design",
      "Multi Bahasa (Indonesia & Inggris)",
      "Support 24/7",
      "Akses Dashboard Website",
      "Integrasi Media Sosial",
      "Katalog Produk",
      "Fitur Google Maps",
      "Analytic Traffic",
      "Video Manual Penggunaan Website",
    ],
  },
  {
    id: 7,
    paket_id: 3,
    nama_subpaket: "Desain Dasar",
    harga: 150000,
    benefit: [
      "1 - 3 Halaman Website",
      "Landing Page Design",
      "Responsive Design",
      "Copy Writing",
    ],
  },
  {
    id: 8,
    paket_id: 3,
    nama_subpaket: "Desain Menengah",
    harga: 350000,
    benefit: [
      "4 - 8 Halaman Website",
      "Landing Page Design",
      "Responsive Design",
      "Copy Writing",
    ],
  },
  {
    id: 9,
    paket_id: 3,
    nama_subpaket: "Desain Atas",
    harga: 600000,
    benefit: [
      "8 - 15 Halaman Website",
      "Landing Page Design",
      "Responsive Design",
      "Copy Writing",
      "Free Logo Design",
    ],
  },
];

export default function Layanan() {
  const [activeTab, setActiveTab] = useState(paket[0].id);

  return (
    <>
      <div className="text-center mt-12 mb-6">
        <div className="flex justify-center space-x-3">
          {paket.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-4 py-2 rounded border border-blue-500 ${
                activeTab === p.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              Paket {p.nama_paket}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-warp justify-center items-start">
          {subpaket
            .filter((s) => s.paket_id === activeTab)
            .map((sub) => {
              const mainBenefits = sub.benefit.slice(0, 4);
              const extraBenefits = sub.benefit.slice(4);

              return (
                <div key={sub.id} className="rounded-xl border border-gray-300 shadow-sm p-10 flex flex-col justify-between min-h-[400px] bg-white w-80 m-6" style={{ boxShadow: "0 2px 8px 0 rgba(52,44,84,0.08)" }}>
                  <div>
                    <div className="text-xs font-bold text-gray-500 mb-1 text-[15px]">
                      {sub.nama_subpaket}
                    </div>
                    <div className="text-2xl font-bold text-[#342C54] mb-2 mt-5">
                      Rp {sub.harga.toLocaleString("id-ID")}
                    </div>
                    <a href={`/pemesanan/${sub.id}`} className="block bg-[#342C54] hover:bg-[#2a2344] text-white py-2 rounded-lg w-full text-center text-[15px] mt-5 mb-4 transition">
                      Pesan Sekarang
                    </a>
                    <ul className="text-sm text-gray-700 space-y-2 mb-4">
                      {mainBenefits.map((b, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-[#342C54] mr-2 text-lg">
                            &#10003;
                          </span>{" "}
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-3 border-t border-gray-200">
                    {extraBenefits.length > 0 ? (
                      <details>
                        <summary className="flex items-center justify-between text-sm text-[#342C54] font-medium cursor-pointer select-none outline-none">
                          Lihat Selengkapnya
                          <span className="ml-2 text-lg font-bold">+</span>
                        </summary>
                        <ul className="text-sm text-gray-700 space-y-2 mt-5">
                          {extraBenefits.map((b, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-[#342C54] mr-2 text-lg">
                                &#10003;
                              </span>{" "}
                              {b}
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <div className="h-7"></div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
