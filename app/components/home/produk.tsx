import { useEffect, useState } from "react";
import axios from "axios";

export default function Produk() {
  const [kategori, setKategori] = useState<any>([]);
  const [activeKategori, setActiveKategori] = useState<number>(1);

  const [produk, setProduk] = useState<any>([]);

  useEffect(() => {

    const fetchKategori = async () => {
      try {
        const response = await axios.get('http://localhost:3000/kategori');
        setKategori(response.data);
      } catch (error) {
        console.error('Error fetching kategori:', error);
      }
    };  

    fetchKategori();

    const fetchProduk = async () => {
      try {
        const response = await axios.get('http://localhost:3000/produk');
        setProduk(response.data);
      } catch (error) {
        console.error('Error fetching produk:', error);
      }
    };

    fetchProduk();
  }, []);

  return (
    <>    
        <div className="flex justify-center flex-wrap gap-6 mb-10 mt-10">
          {kategori.map((item: any) => (
            <div key={item.id} onClick={() => setActiveKategori(item.id)} className={`w-[70px] h-[200px] border-2 border-gray-300 flex items-center justify-center cursor-pointer font-semibold transition-all writing-mode-vertical-rl rotate-180 ${
                activeKategori === Number(item.id)
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              style={{ writingMode: "vertical-rl" }}>
              {item.nama_kategori}
            </div>
          ))}
          <a href="/produk" className="w-[70px] h-[200px] flex items-center justify-center font-semibold bg-blue-500 text-white text-center cursor-pointer transition-all rotate-180" style={{ writingMode: "vertical-rl" }}>
            Selengkapnya
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
          {produk .filter((s: any) => s.kategori_id === Number(activeKategori)) .map((p: any) => (
              <div key={p.id} className="bg-white shadow-md rounded-lg overflow-hidden mt-7">
                <img src={`public/img/${p.gambar_produk}`} alt={p.nama_produk} className="w-full object-cover" />
                <div className="p-4">
                  <h5 className="font-semibold text-lg">{p.nama_produk}</h5>
                  <div className="gap-3 flex">
                    <a href={`/preview/${p.id}`} className="inline-block mt-3 px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                      Preview
                    </a>
                    <a href={`/pemesanan`} className="inline-block mt-3 px-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-blue-500 hover:text-white transition">
                      Gunakan Desain
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </>
  );
}
