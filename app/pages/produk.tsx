import { useEffect, useState } from "react";
import axios from "axios";

import Modal from "../components/modal";

import { FcGoogle } from "react-icons/fc";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

type Kategori = {
  id: number;
  nama_kategori: string;
};

type Produk = {
  id: number;
  kategori_id: number;
  nama_produk: string;
  gambar_produk: string;
};

const tampilkanModalLogin = (setModalLogin: any) => {
  setModalLogin(true);
};

export default function Produk() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [kategori, setKategori] = useState<Kategori[]>([]);
  const [produk, setProduk] = useState<Produk[]>([]);
  const [selectedKategori, setSelectedKategori] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const response = await axios.get("http://localhost:3000/kategori");
        setKategori(response.data);
      } catch (error) {
        console.error("Error fetching kategori:", error);
      }
    };

    const fetchProduk = async () => {
      try {
        const response = await axios.get("http://localhost:3000/produk");
        setProduk(response.data);
      } catch (error) {
        console.error("Error fetching produk:", error);
      }
    };

    Promise.all([fetchKategori(), fetchProduk()]).finally(() =>
      setLoading(false)
    );
  }, []);

  const handleFilterChange = (id: number) => {
    setSelectedKategori((prev) => {
        const updated = prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id];
        return updated;
    });
    };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">Memuat data...</div>
    );
  }

  return (
    <main>
      {/* Modal */}
      <Modal show={modalLogin} setter={setModalLogin} modalName="Modal Login">
        <div className="form font-poppins">
          <h1 className="font-extrabold text-center mb-4 mt-2">
            <span className="text-blue-500 text-[20px]">Mostly</span>
            <span className="text-orange-500 text-[20px]">Web</span>
          </h1>

          <form action="" className="grid gap-4">
            <p className="text-blue-500 font-semibold">
              Silahkan Masukan Akun Anda
            </p>
            <div className="grid gap-4">
              <div className="w-full">
                <input
                  type="email"
                  className="w-full shadow-md py-2 px-2 rounded-lg"
                  placeholder="Email"
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  className="w-full shadow-md py-2 px-2 rounded-lg"
                  placeholder="Password"
                />
              </div>
            </div>
            <button className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black">
              Masuk
            </button>
            <p className="text-blue-500 font-semibold">Atau Masuk Dengan</p>
            <button className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2">
              <FcGoogle size={24} />
            </button>
            <p className="text-blue-500 mt-4 font-semibold">
              Belum memiliki akun? Silahkan{" "}
              <a
                onClick={() => {
                  setModalLogin(false);
                  setModalRegister(true);
                }}
                className="text-orange-500 hover:text-blue-500"
                href="#"
              >
                Daftar Akun
              </a>
            </p>
          </form>
        </div>
      </Modal>

      <Modal show={modalRegister} setter={setModalRegister} modalName="Modal Register">
        <div className="form font-poppins">
          <h1 className="font-extrabold text-center mb-4 mt-2">
            <span className="text-blue-500 text-[20px]">Mostly</span>
            <span className="text-orange-500 text-[20px]">Web</span>
          </h1>

          <form action="" className="grid gap-4">
            <p className="text-blue-500 font-semibold">
              Silahkan Daftarkan Akun Anda
            </p>
            <div className="grid gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full shadow-md py-2 px-2 rounded-lg"
                  placeholder="Nama"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full shadow-md py-2 px-2 rounded-lg"
                  placeholder="No HP"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  className="w-full shadow-md py-2 px-2 rounded-lg"
                  placeholder="Email"
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  className="w-full shadow-md py-2 px-2 rounded-lg"
                  placeholder="Password"
                />
              </div>
            </div>
            <button className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black">
              Daftar
            </button>
            <p className="text-blue-500 font-semibold">Atau Daftar Dengan</p>
            <button className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2">
              <FcGoogle size={24} />
            </button>
            <p className="text-blue-500 mt-4 font-semibold">
              Sudah memiliki akun? Silahkan{" "}
              <a
                onClick={() => {
                  setModalLogin(true);
                  setModalRegister(false);
                }}
                className="text-orange-500 hover:text-blue-500"
                href="#"
              >
                Masuk
              </a>
            </p>
          </form>
        </div>
      </Modal>

      <div className="bg-light-500 min-h-screen font-poppins">
        {/* Navbar */}
        <nav className="px-20 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src="public/img/logo.png" alt="Logo" className="w-24" />
          </div>

          <ul className="flex space-x-10 font-bold text-blue-500">
            <li>
              <a href="#" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Profil
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Layanan
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Kontak
              </a>
            </li>
          </ul>

          <div className="space-x-3">
            <button
              onClick={() => tampilkanModalLogin(setModalLogin)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-orange-500 font-bold"
            >
              Login
            </button>
            <button
              onClick={() => tampilkanModalLogin(setModalRegister)}
              className="px-4 py-2 border border-blue-500 bg-transparent text-blue-500 rounded-lg font-bold hover:bg-blue-500 hover:text-white"
            >
              Register
            </button>
          </div>
        </nav>

        {/* Produk */}
        <section className="bg-white py-15">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">
                    Produk <span className="text-blue-500">Mostly</span>
                    <span className="text-orange-500">Web</span>
                </h2>
                <p className="text-dark mt-2 mx-auto">
                    Beberapa desain website yang telah kami bangun dan dapat
                    dijadikan referensi untuk custom website sesuai kebutuhan Anda.
                </p>
            </div>
            <div className="max-w-7xl mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                    <div className="bg-white shadow rounded-lg p-4">
                        <h5 className="font-bold mb-3">Filter Kategori</h5>
                        {kategori.map((item) => (
                            <div key={item.id} className="flex items-center mb-2">
                                <input type="checkbox" id={`kategori-${item.id}`} checked={selectedKategori.includes(Number(item.id))} onChange={() => handleFilterChange(Number(item.id))} className="mr-2" />
                                <label htmlFor={`kategori-${item.id}`} className="text-sm">
                                    {item.nama_kategori}
                                </label>
                            </div>
                        ))}
                    </div>
                    </div>

                    <div className="md:col-span-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {(() => {
                              const filteredProduk = selectedKategori.length > 0
                                  ? produk.filter((k: any) => selectedKategori.includes(Number(k.kategori_id)))
                                  : produk;
                              if (filteredProduk.length === 0) {
                                  return <div className="col-span-full text-center text-gray-500">Tidak ada produk ditemukan.</div>;
                              }
                              console.log("Selected kategori:", selectedKategori);
                              console.log("Filtered produk:", filteredProduk);

                              return filteredProduk.map((k) => (
                                  <div key={k.id} className="bg-white shadow rounded-lg overflow-hidden">
                                      <img src={`/img/${k.gambar_produk}`} alt={k.nama_produk} className="w-full h-40 object-cover" />
                                      <div className="p-4">
                                          <h5 className="font-semibold">{k.nama_produk}</h5>
                                          <div className="mt-3 flex gap-2">
                                              <a href={`/preview/${k.id}`} className="px-3 py-1 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                                                  Preview
                                              </a>
                                              <button className="px-3 py-1 text-sm bg-orange-500 text-white rounded hover:bg-blue-500 transition">
                                                  Gunakan Desain
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              ));
                          })()}
                      </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-light-500 text-dark">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
            <div className="mb-4 md:mb-0">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="h-12 mx-auto md:mx-0"
              />
            </div>

            <div className="flex space-x-5 text-xl">
              <a
                href="https://wa.me/62XXXXXXXXXX"
                target="_blank"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:yourmail@gmail.com"
                className="hover:text-red-500 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com/@yourusername"
                target="_blank"
                className="hover:text-black transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                className="hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-400 py-3 text-center text-sm text-dark">
            &copy; 2025 <span className="font-semibold">MostlyWeb</span>. All
            rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
