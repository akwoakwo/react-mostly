import { useState } from "react";
import Modal from "../components/modal";
import Profil from "../components/home/profil";
import Layanan from "../components/home/layanan";
import Produk from "../components/home/produk";
import Testimoni from "../components/home/testimoni";

import { FcGoogle } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import LoginForm from "~/components/LoginForm";
import RegisterForm from "~/components/RegisterForm";

const tampilkanModalLogin = (setModalLogin: any) => {
  setModalLogin(true);
};

const accordionItems = [
  {
    id: "layanan1",
    title: "Pembuatan Website",
    content:
      "Kami membangun website modern, responsif, dan SEO friendly untuk mendukung pertumbuhan bisnis Anda.",
  },
  {
    id: "layanan2",
    title: "Hosting & Server",
    content:
      "Layanan hosting cepat, aman, dan stabil untuk menjaga website Anda selalu online tanpa hambatan.",
  },
  {
    id: "layanan3",
    title: "Desain UI/UX",
    content:
      "Desain antarmuka modern yang menarik dan mudah digunakan untuk meningkatkan pengalaman pengguna.",
  },
  {
    id: "layanan4",
    title: "Maintenance & Support",
    content:
      "Dukungan teknis dan pemeliharaan rutin agar website Anda tetap optimal dan bebas dari masalah.",
  },
];

const accordionKontak = [
  {
    id: "kontak1",
    pertanyaan: "Berapa lama waktu pembuatan website?",
    jawaban: "Biasanya sekitar 2–4 minggu tergantung kompleksitas website.",
  },
  {
    id: "kontak2",
    pertanyaan: "Apakah bisa request desain custom?",
    jawaban: "Ya, kami bisa menyesuaikan desain sesuai kebutuhan bisnis Anda.",
  },
  {
    id: "kontak3",
    pertanyaan: "Apakah ada layanan maintenance?",
    jawaban: "Tentu, kami menyediakan paket maintenance bulanan.",
  },
];

export function Welcome() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState("layanan1");
  const [activeKontak, setActiveKontak] = useState("kontak1");

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
        <div className="absolute bottom-0 right-15 w-[600px]">
          <img src="public/img/homepage.png" alt="" />
        </div>

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

        {/* Hero */}
        <section className="w-4/5 mx-auto mt-20">
          <div className="text-blue-500">
            <h1 className="text-[60px] font-bold leading-tight">
              Jasa Pembuatan <br /> Website Profesional
            </h1>
            <p className="w-1/2 text-1xl mt-6">
              Tingkatkan citra & kepercayaan bisnismu dengan website desain
              profesional harga mulai dari 500 ribuan, dengan fitur lengkap
              aktif 24 jam dengan jangkauan tanpa batas
            </p>
            <button className="bg-blue-500 text-white rounded-lg px-24 py-2 mt-8 font-semibold hover:bg-orange-500">
              Produk
            </button>
          </div>
        </section>

        {/* Tools */}
        <section className="bg-white mt-55 py-12 overflow-hidden relative">
          <div className="slide-track flex space-x-20">
            <img src="public/img/logo/html.png" alt="HTML" className="h-16 w-auto" />
            <img src="public/img/logo/css.png" alt="CSS" className="h-16 w-auto" />
            <img src="public/img/logo/bootstrap.png" alt="Bootstrap" className="h-16 w-auto" />
            <img src="public/img/logo/javascript.png" alt="JavaScript" className="h-16 w-auto" />
            <img src="public/img/logo/react.png" alt="React" className="h-16 w-auto" />
            <img src="public/img/logo/tailwind.png" alt="Tailwind" className="h-16 w-auto" />
            <img src="public/img/logo/typescript.png" alt="Typescript" className="h-16 w-auto" />
            <img src="public/img/logo/laravel.png" alt="Laravel" className="h-16 w-auto" />

            <img src="public/img/logo/html.png" alt="HTML" className="h-16 w-auto" />
            <img src="public/img/logo/css.png" alt="CSS" className="h-16 w-auto" />
            <img src="public/img/logo/bootstrap.png" alt="Bootstrap" className="h-16 w-auto" />
            <img src="public/img/logo/javascript.png" alt="JavaScript" className="h-16 w-auto" />
            <img src="public/img/logo/react.png" alt="React" className="h-16 w-auto" />
            <img src="public/img/logo/tailwind.png" alt="Tailwind" className="h-16 w-auto" />
            <img src="public/img/logo/typescript.png" alt="Typescript" className="h-16 w-auto" />
            <img src="public/img/logo/laravel.png" alt="Laravel" className="h-16 w-auto" />

            <img src="public/img/logo/html.png" alt="HTML" className="h-16 w-auto" />
            <img src="public/img/logo/css.png" alt="CSS" className="h-16 w-auto" />
            <img src="public/img/logo/bootstrap.png" alt="Bootstrap" className="h-16 w-auto" />
            <img src="public/img/logo/javascript.png" alt="JavaScript" className="h-16 w-auto" />
            <img src="public/img/logo/react.png" alt="React" className="h-16 w-auto" />
            <img src="public/img/logo/tailwind.png" alt="Tailwind" className="h-16 w-auto" />
            <img src="public/img/logo/typescript.png" alt="Typescript" className="h-16 w-auto" />
            <img src="public/img/logo/laravel.png" alt="Laravel" className="h-16 w-auto" />
          </div>
        </section>

        {/* Profil */}
        <section className="bg-white py-12">
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-dark font-bold text-[40px]">
                Mengapa <span className="text-blue-500">Mostly</span>
                <span className="text-orange-500">Web</span>?
              </h1>
              <p className="mt-2">
                Kami hadir untuk memberikan solusi digital terbaik dengan desain
                modern, performa optimal, dan teknologi terbaru.
              </p>
            </div>

            <div className="grid items-stretch mt-10 px-10 gap-6">
              <div className="col-span-12">
                <div className="bg-light-500 p-6 rounded-lg flex flex-col md:flex-row items-center">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <img
                      src="public/img/logo.png"
                      alt=""
                      className="w-[800px]"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="mb-0 text-dark">
                      MostlyWeb adalah penyedia jasa pembuatan website
                      profesional yang berfokus pada solusi digital modern untuk
                      mendukung pertumbuhan bisnis di berbagai sektor. Kami
                      menghadirkan desain yang elegan, responsif, serta ramah
                      pengguna sehingga website dapat diakses dengan optimal di
                      berbagai perangkat, baik desktop maupun mobile. Selain
                      itu, tim kami selalu mengutamakan performa, kecepatan,
                      serta keamanan website agar dapat memberikan pengalaman
                      terbaik bagi pelanggan Anda. Dengan layanan yang fleksibel
                      dan harga yang kompetitif, MostlyWeb siap menjadi mitra
                      strategis dalam mewujudkan kehadiran digital bisnis Anda
                      secara profesional dan terpercaya.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <Profil />
              </div>

              <div className="col-span-12 lg:col-span-4">
                <div className="bg-lime-200 rounded-lg flex flex-col justify-between h-full">
                  <div className="p-6">
                    <h5 className="font-bold text-[20px]">
                      Responsive di Semua Perangkat
                    </h5>
                    <p className="mt-2">
                      Website yang kami buat dapat dibuka dengan baik di
                      desktop, tablet, maupun smartphone tanpa mengurangi
                      kualitas tampilan maupun fungsi.
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <img
                      src="/img/profil-section5.png"
                      alt="Responsive Phone"
                      className="mx-auto max-h-64"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="py-12 px-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold">
                Layanan <span className="text-blue-500">Mostly</span>
                <span className="text-orange-500">Web</span>
              </h1>
              <p className="mt-2">
                Kami menyediakan berbagai layanan profesional untuk membantu
                bisnis Anda berkembang di dunia digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-[40px] font-bold mb-4">
                  Solusi Digital Bisnis Anda
                </h2>
                <p className="mb-4">
                  Dengan pengalaman di bidang teknologi informasi dan desain,
                  MostlyWeb menghadirkan layanan pembuatan website yang tidak
                  hanya menarik secara visual, tetapi juga dioptimalkan untuk
                  performa tinggi. Kami percaya bahwa website adalah identitas
                  digital yang penting bagi setiap bisnis.
                </p>
                <p>
                  Selain itu, kami juga menyediakan dukungan penuh mulai dari
                  hosting, pengelolaan server, hingga desain UI/UX modern yang
                  ramah pengguna. Semua layanan kami dirancang untuk memberikan
                  pengalaman terbaik kepada pelanggan Anda.
                </p>
              </div>

              <div className="space-y-4">
                {accordionItems.map((item) => (
                  <div key={item.id} className="rounded-lg overflow-hidden shadow-sm">
                    <button
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === item.id ? "" : item.id
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200">
                      <span>{item.title}</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${activeAccordion === item.id
                          ? "rotate-180"
                          : "rotate-0"
                          }`}
                      />
                    </button>
                    {activeAccordion === item.id && (
                      <div className="px-4 py-3 text-gray-700">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Layanan />
          </div>
        </section>

        {/* Produk */}
        <section id="produk" className="py-12 px-12 bg-white">
          <div className="container mx-auto px-4">
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

            <Produk />
          </div>
        </section>

        {/* Testimoni */}
        <section id="testimoni" className="py-12 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">
              Apa Kata Mereka Tentang{" "}
              <span className="text-blue-500">Mostly</span>
              <span className="text-orange-500">Web</span>?
            </h2>
            <p className="text-dark mt-2">
              Testimoni dari customer yang sudah menggunakan jasa pembuatan
              website kami.
            </p>
          </div>

          <Testimoni />
        </section>

        {/* Kontak */}
        <section className="py-10 bg-white">
          <div id="kontak" className="py-10 px- bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">
                  Pertanyaan yang Sering Muncul di{" "}
                  <span className="text-blue-500">Mostly</span>
                  <span className="text-orange-500">Web</span>
                </h2>
                <p className="text-dark mt-2">
                  Beberapa pertanyaan umum yang sering diajukan customer
                  terkait layanan pembuatan website kami.
                </p>
              </div>

              <div className="space-y-4">
                {accordionKontak.map((item) => (
                  <div key={item.id} className="w-full rounded-lg shadow-sm bg-white">
                    <button
                      className="w-full flex justify-between items-center p-4 font-semibold text-left"
                      onClick={() =>
                        setActiveKontak(
                          activeKontak === item.id ? "" : item.id
                        )
                      }>
                      {item.pertanyaan}
                      {activeKontak === item.id ? (
                        <IoIosArrowDown className="w-5 h-5 transform rotate-180" />
                      ) : (
                        <IoIosArrowDown className="w-5 h-5 transform rotate-0" />
                      )}
                    </button>
                    {activeKontak === item.id && (
                      <div className="px-4 pb-4 text-gray-600">
                        {item.jawaban}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-500 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Masih Ragu? Konsultasi Gratis Sekarang!
                </h3>
                <p className="mb-6">
                  Diskusikan kebutuhan website Anda bersama tim kami dan temukan
                  solusi terbaik untuk bisnis Anda.
                </p>
                <a
                  href="https://wa.me/62895370888888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-light-500 text-dark">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
            <div className="mb-4 md:mb-0">
              <img src="/img/logo.png" alt="Logo" className="h-12 mx-auto md:mx-0" />
            </div>

            <div className="flex space-x-5 text-xl">
              <a href="https://wa.me/62XXXXXXXXXX" target="_blank" className="hover:text-green-500 transition">
                <FaWhatsapp />
              </a>
              <a href="mailto:yourmail@gmail.com" className="hover:text-red-500 transition">
                <FaEnvelope />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com/@yourusername" target="_blank" className="hover:text-black transition">
                <FaTiktok />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" className="hover:text-red-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-400 py-3 text-center text-sm text-dark">
            &copy; 2025 <span className="font-semibold">MostlyWeb</span>. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
