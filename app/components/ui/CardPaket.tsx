export default function CardPaket({ id, nama_subpaket, harga, benefit, extraBenefits = [] }: any) {

    return (
        <div key={id} className="rounded-xl border border-gray-300 shadow-sm p-10 flex flex-col justify-between min-h-[400px] bg-white w-80 m-6" style={{ boxShadow: "0 2px 8px 0 rgba(52,44,84,0.08)" }}>
            <div>
                <div className="text-xs font-bold text-gray-500 mb-1 text-[15px]">
                    {nama_subpaket}
                </div>
                <div className="text-2xl font-bold text-[#342C54] mb-2 mt-5">
                    Rp {harga.toLocaleString("id-ID")}
                </div>
                <a href={`/pemesanan/${id}`} className="block bg-[#342C54] hover:bg-[#2a2344] text-white py-2 rounded-lg w-full text-center text-[15px] mt-5 mb-4 transition">
                    Pesan Sekarang
                </a>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    {benefit.map((b: any, i: any) => (
                        <li key={i} className="flex items-center">
                            <span className="text-[#342C54] mr-2 text-lg">
                                &#10003;
                            </span>{" "}
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-auto pt-3 border-t border-gray-200">
                {extraBenefits.length > 0 ? (
                    <details>
                        <summary className="flex items-center justify-between text-sm text-[#342C54] font-medium cursor-pointer select-none outline-none">
                            Lihat Selengkapnya
                            <span className="ml-2 text-lg font-bold">+</span>
                        </summary>
                        <ul className="text-sm text-gray-700 space-y-2 mt-5">
                            {extraBenefits.map((b: any, i: any) => (
                                <li key={i} className="flex items-center">
                                    <span className="text-[#342C54] mr-2 text-lg">
                                        &#10003;
                                    </span>{" "}
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </details>
                ) : (
                    <div className="h-7"></div>
                )}
            </div>
        </div>
    )
}

