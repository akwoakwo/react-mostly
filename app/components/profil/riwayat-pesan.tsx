interface RiwayatItem {
  tanggal: string;
  paket: string;
  desain: string;
  harga: string;
  status: string;
}

interface RiwayatPemesananProps {
  data: RiwayatItem[];
}

export default function RiwayatPemesanan({ data }: RiwayatPemesananProps) {
  // fungsi untuk kasih badge warna status
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "selesai":
        return <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">Selesai</span>;
      case "proses":
        return <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">Proses</span>;
      case "dibatalkan":
        return <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">Dibatalkan</span>;
      default:
        return <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">{status}</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Riwayat Pemesanan</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-center">
              <th className="px-6 py-3 border">Tanggal Pesan</th>
              <th className="px-6 py-3 border">Jenis Paket</th>
              <th className="px-6 py-3 border">Desain</th>
              <th className="px-6 py-3 border">Harga</th>
              <th className="px-6 py-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={idx}
                className={`text-center ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
              >
                <td className="px-6 py-3 border">{item.tanggal}</td>
                <td className="px-6 py-3 border">{item.paket}</td>
                <td className="px-6 py-3 border">{item.desain}</td>
                <td className="px-6 py-3 border font-semibold text-gray-800">{item.harga}</td>
                <td className="px-6 py-3 border">{getStatusBadge(item.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
