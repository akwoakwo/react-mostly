import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
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
    )
}