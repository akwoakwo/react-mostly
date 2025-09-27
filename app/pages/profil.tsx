import { useState } from "react";
import Sidebar from "../components/profil/sidebar";
import PengaturanProfil from "../components/profil/pengaturan-profil";
import RiwayatPemesanan from "../components/profil/riwayat-pesan";

export default function ProfilPage() {
  const [activeMenu, setActiveMenu] = useState<"pengaturan" | "riwayat">(
    "pengaturan"
  );

  const user = {
    name: "Ananda Ramadana",
    email: "ananda@email.com",
    phone: "081234567890",
    avatar: "public/img/admin.jpg",
  };

  const riwayat = [
    {
      id: 1,
      tanggal: "12 September 2025",
      paket: "Paket Bisnis",
      desain: "Desain Katalog 1",
      harga: "Rp 2.000.000",
      status: "Selesai",
    },
    {
      id: 2,
      tanggal: "1 Agustus 2025",
      paket: "Paket Basic",
      desain: "Custom",
      harga: "Rp 1.000.000",
      status: "Proses",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar user={user} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Konten */}
      <main className="flex-1 p-8">
        {activeMenu === "pengaturan" && <PengaturanProfil user={user} />}
        {activeMenu === "riwayat" && <RiwayatPemesanan data={riwayat} />}
      </main>
    </div>
  );
}
