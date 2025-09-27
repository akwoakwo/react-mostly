import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("produk", "routes/produk.tsx"),
    route("pemesanan", "routes/pemesanan.tsx"),
    route("profil", "routes/profil.tsx")
] satisfies RouteConfig;
