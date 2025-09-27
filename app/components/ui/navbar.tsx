import { useState } from "react";

const tampilkanModalLogin = (setModalLogin: any) => {
  setModalLogin(true);
};

export default function Navbar() {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    return (
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
    )
}