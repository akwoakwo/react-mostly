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
import { useSearchParams } from "react-router";
import LoginForm from "~/components/LoginForm";
import RegisterForm from "~/components/RegisterForm";
import toast from "react-hot-toast";
import { useLocalStorage } from "@uidotdev/usehooks";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [accessToken, setAccessToken] = useLocalStorage<string | null>("accessToken", null);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [kategori, setKategori] = useState<Kategori[]>([]);
  const [produk, setProduk] = useState<Produk[]>([]);
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

  const onChangeSearch = (e: any) => {
    const filter = searchParams.getAll("filter");
    const value = e.target.value.toLowerCase();
    console.log(value);
    setSearchParams((prev) => {
      console.log(prev);
      return {
        filter: filter,
        search: value
      }
    })
  }

  const handleFilterChange = (id: number) => {
    let ids = searchParams.getAll("filter");
    const search = searchParams.get("search");
    // add id to array if not exist, else remove it
    if (ids.includes(id.toString())) {
      ids = ids.filter((i) => i !== id.toString());
    }
    else {
      ids.push(id.toString());
    }

    setSearchParams({
      search: search || "",
      filter: ids
    });

  };

  const checkUser = async () => {
    // parsed token from localstorage, patters `number|token`
    const parsedToken = accessToken ? accessToken.split("|") : null;

    try {
      const response = await axios.post("https://f2b1d437f676.ngrok-free.app/api/user", {}, {
        headers: {
          Authorization: `Bearer ${parsedToken ? parsedToken[1] : ""}`,
        }
      });
      console.log(response.data);
      toast.success("User is logged in");
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("Please login first");
    }
  }

  const handleLogout = async () => {
    // remove accessToken from localstorage
    const parsedToken = accessToken ? accessToken.split("|") : null;
    try {
      // const response = await axios.post("https://f2b1d437f676.ngrok-free.app/api/logout", {}, {
      //   headers: {
      //     Authorization: `Bearer ${parsedToken ? parsedToken[1] : ""}`,
      //   }
      // });
      // console.log(response.data);
      toast.success("Logout successful");
      setAccessToken(null);
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("There was an error during logout");
    }
  }
  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">Memuat data...</div>
    );
  }

  return (
    <main>
      {/* Modal */}
      <Modal show={modalLogin} setter={setModalLogin} modalName="Modal Login">
        <LoginForm setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
      </Modal>

      <Modal show={modalRegister} setter={setModalRegister} modalName="Modal Register">
        <RegisterForm setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
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
            {
              accessToken ?
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-orange-500 font-bold"
                >
                  Logout
                </button>
                :
                <>
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
                </>
            }

            <button
              onClick={checkUser}
              className="px-4 py-2 border border-blue-500 bg-transparent text-blue-500 rounded-lg font-bold hover:bg-blue-500 hover:text-white"
            >
              Check User
            </button>
          </div>
        </nav>

        {/* Produk */}
        <section className="bg-white py-15">
          <div className="text-center mb-8">
            <input type="text" placeholder="cari" onChange={onChangeSearch} value={searchParams.get('search') || ""} />
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
                      <input
                        type="checkbox"
                        id={`kategori-${item.id}`}
                        checked={searchParams.getAll('filter').includes(String(item.id))}
                        onChange={() => handleFilterChange(Number(item.id))}
                        className="mr-2" />
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
                    const filteredProduk = searchParams.getAll('filter').length > 0
                      ? produk.filter((k: any) => searchParams.getAll('filter').includes(String(k.kategori_id)))
                      : produk;
                    if (filteredProduk.length === 0) {
                      return <div className="col-span-full text-center text-gray-500">Tidak ada produk ditemukan.</div>;
                    }

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
