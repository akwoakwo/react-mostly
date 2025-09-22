import Produk from "~/pages/produk";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Produk" },
        { name: "Produk Page", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <Produk />;
}