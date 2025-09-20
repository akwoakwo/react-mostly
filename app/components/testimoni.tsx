"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type TestimoniType = {
  id: number;
  nama: string;
  gambar: string;
  rating: number;
  ulasan: string;
};

const dataTestimoni: TestimoniType[] = [
  {
    id: 1,
    nama: "Andi Wijaya",
    gambar: "public/img/admin.jpg",
    rating: 5,
    ulasan: "Pelayanan cepat dan hasil websitenya memuaskan",
  },
  {
    id: 2,
    nama: "Siti Rahma",
    gambar: "public/img/admin.jpg",
    rating: 4,
    ulasan: "Tampilan website sangat menarik dan mudah digunakan",
  },
  {
    id: 3,
    nama: "Budi Santoso",
    gambar: "public/img/admin.jpg",
    rating: 5,
    ulasan: "Support 24/7 benar-benar membantu bisnis saya",
  },
  {
    id: 4,
    nama: "Budi Santoso",
    gambar: "public/img/admin.jpg",
    rating: 5,
    ulasan: "Support 24/7 benar-benar membantu bisnis saya",
  },
  {
    id: 5,
    nama: "Budi Santoso",
    gambar: "public/img/admin.jpg",
    rating: 5,
    ulasan: "Support 24/7 benar-benar membantu bisnis saya",
  },
];

export default function Testimoni() {
  return (
    <>
        <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="pb-10"
        >
          {dataTestimoni.map((item) => (
            <SwiperSlide key={item.id} className="!w-[280px] md:!w-[320px]">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <img src={item.gambar} alt={item.nama} className="w-12 h-12 rounded-full mr-3 object-cover" />
                  <h6 className="font-semibold">{item.nama}</h6>
                </div>

                <div className="mb-3 text-yellow-500 text-lg">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <p className="italic text-gray-700 mb-6">"{item.ulasan}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
