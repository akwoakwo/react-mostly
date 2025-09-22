import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function LoginForm({ setModalLogin, setModalRegister }: { setModalLogin: any, setModalRegister: any }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_, setAccessToken] = useLocalStorage("accessToken", null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // handle login logic here
        try {
            const response = await axios.post("https://f2b1d437f676.ngrok-free.app/api/login", {
                email,
                password,
            })

            console.log(response.data);
            setAccessToken(response.data.access_token);
            toast.success("Login successful!");
            // setValue(response.data.access_token);
        } catch (error) {
            console.error("There was an error!", error);
            toast.error("Invalid email or password");
        }
    }

    return <>
        <div className="form font-poppins">
            <h1 className="font-extrabold text-center mb-4 mt-2">
                <span className="text-blue-500 text-[20px]">Mostly</span>
                <span className="text-orange-500 text-[20px]">Web</span>
            </h1>

            <form action="" className="grid gap-4">
                <p className="text-blue-500 font-semibold">
                    Silahkan Masukan Akun Anda
                </p>
                <div className="grid gap-4">
                    <div className="w-full">
                        <input
                            type="email"
                            className="w-full shadow-md py-2 px-2 rounded-lg"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="password"
                            className="w-full shadow-md py-2 px-2 rounded-lg"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black">
                    Masuk
                </button>
                <p className="text-blue-500 font-semibold">Atau Masuk Dengan</p>
                <button className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2">
                    <FcGoogle size={24} />
                </button>
                <p className="text-blue-500 mt-4 font-semibold">
                    Belum memiliki akun? Silahkan{" "}
                    <a
                        onClick={() => {
                            setModalLogin(false);
                            setModalRegister(true);
                        }}
                        className="text-orange-500 hover:text-blue-500"
                        href="#"
                    >
                        Daftar Akun
                    </a>
                </p>
            </form>
        </div>
    </>
}