import type { Route } from "./+types/home";
import Profil from "../pages/profil";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profil" },
    { name: "Profil Page", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Profil />;
}