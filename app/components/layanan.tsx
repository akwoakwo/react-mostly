import axios from "axios";
import { useEffect, useState } from "react";
import CardPaket from "./ui/CardPaket";

export default function Layanan() {
  const [paket, setPaket] = useState<any>([]);
  const [activeTab, setActiveTab] = useState(1);

  const [subpaket, setSubpaket] = useState<any>([]);

  useEffect(() => {

    const fetchPaket = async () => {
      try {
        const response = await axios.get("http://localhost:3000/paket");
        setPaket(response.data);
      } catch (error) {
        console.log("Error fetching paket:", error);
      }
    }
    fetchPaket();

    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/layanan");
        setSubpaket(response.data);
        console.log("Fetched Data:", response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="text-center mt-12 mb-6">
        <div className="flex justify-center space-x-3">
          {paket.map((p: any) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveTab(p.id);
              }}
              className={`px-4 py-2 rounded border border-blue-500 ${activeTab === p.id
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
          {
            subpaket.length === 0 ?
              "Loading..." :
              subpaket
                .filter((s: any) => s.paket_id === activeTab)
                .map((sub: any) => {
                  const mainBenefits = sub.benefit.slice(0, 4);
                  const extraBenefits = sub.benefit.slice(4);

                  return (
                    <CardPaket
                      key={sub.id}
                      id={sub.id}
                      nama_subpaket={sub.nama_subpaket}
                      harga={sub.harga}
                      benefit={mainBenefits}
                      extraBenefits={extraBenefits}
                    />
                  );
                })
          }
        </div>
      </div>
    </>
  );
}
