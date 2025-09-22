import type { Route } from "./+types/home";
import Pemesanan from "~/pages/pemesanan";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pemesanan" },
    { name: "Pemesanan Page", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Pemesanan />;
}
