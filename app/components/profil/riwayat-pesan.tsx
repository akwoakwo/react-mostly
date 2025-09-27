import axios from "axios";
import { useEffect, useState } from "react";
import pkg from "lodash";
import { useSearchParams } from "react-router";
const { debounce } = pkg;

const getTransactions = async (data: any) => {
  try {
    const baseUrl = 'http://localhost:8000/api/transactions';
    const params = new URLSearchParams();
    if (data?.page) {
      params.append('page', data.page);
    }
    const perPage = data.perPage ? data.perPage : 2;
    params.append('per_page', perPage.toString());
    if (data?.search) {
      params.append('search', data.search);
    }
    const url = `${baseUrl}?${params.toString()}`;
    // url = "http://localhost:8000/api/transactions?page=1&per_page=5&search=..."
    const response = await axios.get(url);
    data.setData(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default function RiwayatPemesanan() {
  const [paginatedData, setPaginatedData] = useState<any>({ data: [], links: [] })
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('search'))
    getTransactions({
      setData: setPaginatedData,
      search: searchParams.get('search') || ''
    })
  }, [])

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


  const debouncedSearch = debounce((e) => {
    setSearchParams({ search: e.target.value });
    getTransactions({ search: e.target.value, setData: setPaginatedData })
  }, 500);


  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Riwayat Pemesanan</h2>

      <div className="overflow-x-auto">
        <input
          onChange={debouncedSearch}
          type="text" className="border-2 w-full rounded p-1" placeholder="cari" />
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
            {paginatedData.data.map((item: any, idx: number) => (
              <tr
                key={idx}
                className={`text-center ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
              >
                <td className="px-6 py-3 border">{item.tanggal_transaksi}</td>
                <td className="px-6 py-3 border">{item.service_name}</td>
                <td className="px-6 py-3 border">{item.package_name}</td>
                <td className="px-6 py-3 border font-semibold text-gray-800">{item.total_harga}</td>
                <td className="px-6 py-3 border">{getStatusBadge(item.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* pagination block */}
        <div className="mt-4 flex justify-end space-x-2">
          <button
            disabled={paginatedData.current_page == 1}
            onClick={() => getTransactions({ setData: setPaginatedData, search: searchParams.get('search') || '', page: 1 })}
            className={`px-3 py-1 rounded ${paginatedData.current_page == 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition`}
          >First Page</button>
          {
            paginatedData.links.map((link: any, idx: number) => {
              if (idx == 0 || idx == paginatedData.links.length - 1) {
                return null;
              }

              return (
                <button
                  key={idx}
                  disabled={link.active}
                  onClick={() => getTransactions({ setData: setPaginatedData, search: searchParams.get('search') || '', page: link.page })}
                  className={`px-3 py-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition`}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                ></button>
              )
            }
            )
          }
          <button
            disabled={paginatedData.current_page == paginatedData.last_page}
            onClick={() => getTransactions({ setData: setPaginatedData, search: searchParams.get('search') || '', page: paginatedData.last_page })}
            className={`px-3 py-1 rounded ${paginatedData.current_page == paginatedData.last_page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition`}
          >Last Page</button>
        </div>
      </div>
    </div>
  );
}
