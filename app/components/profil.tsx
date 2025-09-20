const benefits = [
  {
    img: "public/img/profil-section1.png",
    title: "Desain Modern",
    desc: "Website dengan desain profesional & menarik sesuai trend.",
    bg: "bg-red-300",
  },
  {
    img: "public/img/profil-section2.png",
    title: "Dipercaya Banyak Customer",
    desc: "Telah melayani ratusan customer dari berbagai industri dan kebutuhan.",
    bg: "bg-sky-500",
  },
  {
    img: "public/img/profil-section3.png",
    title: "Desain Bervariasi",
    desc: "Tersedia berbagai template website siap pakai yang dapat disesuaikan.",
    bg: "bg-yellow-200",
  },
  {
    img: "public/img/profil-section4.png",
    title: "Maintenance",
    desc: "Kami siap membantu & memberikan layanan purna jual.",
    bg: "bg-light-500",
  },
];

export default function Profil() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((item, idx) => (
        <div
            key={idx}
            className={`p-6 ${item.bg} text-dark rounded text-center`}
        >
            <img src={item.img} alt={item.title} className="w-24 mx-auto mb-3" />
            <h5 className="font-bold text-[20px]">{item.title}</h5>
            <p>{item.desc}</p>
        </div>
        ))}
    </div>
  );
}
