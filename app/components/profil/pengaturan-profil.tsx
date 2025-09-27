interface PengaturanProfilProps {
  user: {
    name: string;
    email: string;
    phone: string;
    avatar: string;
  };
}

export default function PengaturanProfil({ user }: PengaturanProfilProps) {
  return (
    <div className="bg-white rounded shadow p-6 w-full mx-auto">
      <div className="text-center mb-6">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-3 object-cover"
        />
        <input type="file" className="mt-2 text-sm" />
      </div>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Nama</label>
          <input
            type="text"
            defaultValue={user.name}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold">No HP</label>
          <input
            type="text"
            defaultValue={user.phone}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            defaultValue={user.email}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            placeholder="Isi jika ingin diubah"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded font-semibold"
        >
          Update Profil
        </button>
      </form>
    </div>
  );
}
