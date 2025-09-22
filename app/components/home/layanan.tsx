import { useEffect, useState } from "react";
import axios from "axios";
import CardPaket from "../ui/card-subpaket";

type Subpaket = {
  id: number;
  nama_subpaket: string;
  harga: number;
  paket_id: number;
  benefit: string[];
};

export default function Layanan() {
  const [paket, setPaket] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  const [subpaket, setSubpaket] = useState<Subpaket[]>([]);

  useEffect(() => {

    const fetchPaket = async () => {
      try {
        const response = await axios.get("http://localhost:3000/paket");
        console.log(response.data);
        setPaket(response.data);
        if (response.data.length > 0) {
          setActiveTab(response.data[0].id); // otomatis pilih paket pertama
        }
      } catch (error) {
        console.error("Error fetching paket data:", error);
      }
    };

    fetchPaket();

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/layanan");
        console.log(response.data);
        setSubpaket(response.data);
      } catch (error) {
        console.error("Error fetching subpaket data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="text-center mt-12 mb-6">
        <div className="flex justify-center space-x-3">
          {paket.map((p: any) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-4 py-2 rounded border border-blue-500 ${
                activeTab === p.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              Paket {p.nama_paket}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-warp justify-center items-start">
          {subpaket .filter((s) => s.paket_id === Number(activeTab)) .map((sub) => {
              const mainBenefits = sub.benefit.slice(0, 4);
              const extraBenefits = sub.benefit.slice(4);

              return (
                <CardPaket
                  key={sub.id}
                  id={sub.id}
                  nama_subpaket={sub.nama_subpaket}
                  harga={sub.harga}
                  benefits={mainBenefits}
                  extraBenefits={extraBenefits}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
