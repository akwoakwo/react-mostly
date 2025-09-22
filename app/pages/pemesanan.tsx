import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Pemesanan() {
    const subpaket = {
        id: 1,
        nama_subpaket: "Paket Bisnis",
        harga: 2500000,
        benefit: [
        "Gratis Domain 1 Tahun",
        "Hosting 1GB",
        "Desain Responsif",
        "SEO Basic",
        ],
        paket: {
        nama_paket: "Bisnis",
        },
    };

    const produk = {
        id: 5,
        nama_produk: "Digital Store Website",
        gambar_produk: "sampul_digital.png",
    };

    const [opsiDesain, setOpsiDesain] = useState("produk");

    return (
        <main>
            <div className="container mx-auto my-10 px-4 text-poppins">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">FORM PEMESANAN</h2>

                    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                        <h4 className="text-xl font-bold text-gray-500 mb-2">
                            {subpaket.nama_subpaket}
                        </h4>
                    <h3 className="text-3xl font-semibold text-dark mb-4">
                        Rp {subpaket.harga.toLocaleString("id-ID")}
                    </h3>
                    <h5 className="font-semibold mb-2">Benefit :</h5>
                        <ul className="list-disc list-inside space-y-1">
                            {subpaket.benefit.length > 0 ? (
                            subpaket.benefit.map((b, i) => (
                                <li key={i} className="text-gray-700">
                                {b}
                                </li>
                            ))
                            ) : (
                            <li className="text-gray-400">Tidak ada benefit terdaftar</li>
                            )}
                        </ul>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <h5 className="font-bold text-xl text-gray-500 mb-4">Detail Pemesanan</h5>
                        <form className="space-y-5">
                            <div>
                                <h5 className="font-semibold mb-3">Pilih Opsi Desain Website :</h5>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <input className="mt-2" type="radio" name="opsiDesain" value="produk" checked={opsiDesain === "produk"} onChange={(e) => setOpsiDesain(e.target.value)} />
                                        <label className="cursor-pointer">
                                            Menggunakan Desain Produk Katalog Tersedia
                                        </label>
                                    </div>

                                    {opsiDesain === "produk" && (
                                        <div className="bg-white shadow rounded-lg overflow-hidden">
                                            <img src={`/img/${produk.gambar_produk}`} alt={produk.nama_produk} className="w-full h-full object-cover rounded" />
                                            <div className="p-4">
                                                <h6 className="font-semibold mb-2">{produk.nama_produk}</h6>
                                                <button type="button" className="px-3 py-1 text-sm border border-blue-500 text-dark rounded hover:bg-blue-500 hover:text-white transition" >
                                                    Ganti Desain
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-3">
                                        <input className="mt-2" type="radio" name="opsiDesain" value="custom" checked={opsiDesain === "custom"} onChange={(e) => setOpsiDesain(e.target.value)} />
                                        <label className="cursor-pointer">Membawa Desain Sendiri</label>
                                    </div>

                                    {opsiDesain === "custom" && (
                                        <div className="ml-6 text-sm text-dark">
                                            <p className="mb-2">Kirim desain Anda:</p>
                                            <div className="flex flex-col gap-3 mb-4">
                                                <div>
                                                    <label className="block mb-1 text-gray-700">Link Desain</label>
                                                    <input type="url" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                                </div>

                                                <div>
                                                    <label className="block mb-1 text-gray-700">Upload File (PDF)</label>
                                                    <input type="file" accept=".pdf" className="w-full px-3 py-2 border rounded cursor-pointer" />
                                                </div>
                                            </div>

                                            <p className="mb-2">Atau hubungi kami via:</p>
                                            <div className="flex gap-4 text-2xl">
                                            <a href="https://wa.me/6281234567890" target="_blank" className="text-green-500 hover:scale-110 transition-transform">
                                                <FaWhatsapp />
                                            </a>
                                            <a href="mailto:emailanda@gmail.com" className="text-red-500 hover:scale-110 transition-transform">
                                                <FaEnvelope />
                                            </a>
                                            <a href="https://instagram.com/username" target="_blank" className="text-pink-500 hover:scale-110 transition-transform">
                                                <FaInstagram />
                                            </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {subpaket.paket.nama_paket === "Bisnis" && (
                            <div>
                                <label className="block mb-1 font-semibold">
                                    Nama Domain Web :
                                </label>
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Domain yang diinginkan" className="flex-1 border rounded p-2" required />
                                    <select className="border rounded p-2">
                                        <option>.com</option>
                                        <option>.id</option>
                                        <option>.co.id</option>
                                    </select>
                                </div>
                            </div>
                            )}

                            <div>
                                <label className="block mb-1 font-semibold">
                                    Catatan Tambahan :
                                </label>
                                <textarea className="w-full border rounded p-2" rows={3} placeholder="Tuliskan catatan jika ada"></textarea>
                            </div>

                            <div className="flex justify-center gap-3">
                            <button type="submit" className="px-5 py-2 bg-blue-500 text-white rounded font-bold hover:bg-orange-500">
                                Lanjutkan Pemesanan
                            </button>
                            <a href="/" className="px-5 py-2 bg-gray-400 text-white rounded font-bold hover:bg-gray-500">
                                Kembali
                            </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
