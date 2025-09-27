interface SidebarProps {
  user: {
    name: string;
    avatar: string;
  };
  activeMenu: "pengaturan" | "riwayat";
  setActiveMenu: (menu: "pengaturan" | "riwayat") => void;
}

export default function Sidebar({ user, activeMenu, setActiveMenu }: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      <div>
        <div className="text-center mb-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
          <h5 className="font-semibold">{user.name}</h5>
        </div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveMenu("pengaturan")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeMenu === "pengaturan"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              ⚙️ Pengaturan Profil
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveMenu("riwayat")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeMenu === "riwayat"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              📜 Riwayat Pemesanan
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-200">
              🚪 Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          Kembali ke Home
        </button>
      </div>
    </aside>
  );
}
