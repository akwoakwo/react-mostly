import axios, { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm({ setModalLogin, setModalRegister }: { setModalLogin: any, setModalRegister: any }) {
    const [registerForm, setRegisterForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://f2b1d437f676.ngrok-free.app/api/register", registerForm);
            console.log(response.data);
            toast.success("Registration successful!");

        } catch (error: any) {
            // show error message to alert
            console.error("There was an error!", error.response.data.errors);
            if (error.response.data.errors) {
                setErrors(Object.values(error.response.data.errors).flat().join(", "));
                toast.error("There was an error!");
            }
        }
    }

    return <>
        <div className="form font-poppins">
            <h1 className="font-extrabold text-center mb-4 mt-2">
                <span className="text-blue-500 text-[20px]">Mostly</span>
                <span className="text-orange-500 text-[20px]">Web</span>
            </h1>

            <form action="" className="grid gap-4">
                {errors && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> {errors}</span>
                </div>}
                <p className="text-blue-500 font-semibold">
                    Silahkan Daftarkan Akun Anda
                </p>
                <div className="grid gap-4">
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full shadow-md py-2 px-2 rounded-lg"
                            placeholder="Nama"
                            name="name"
                            value={registerForm.name}
                            onChange={(e) => {
                                setRegisterForm((prev) => ({ ...prev, name: e.target.value }))
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full shadow-md py-2 px-2 rounded-lg"
                            placeholder="No HP"
                            name="phone"
                            value={registerForm.phone}
                            onChange={(e) => {
                                setRegisterForm((prev) => ({ ...prev, phone: e.target.value }))
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="email"
                            className="w-full shadow-md py-2 px-2 rounded-lg"
                            placeholder="Email"
                            name="email"
                            value={registerForm.email}
                            onChange={(e) => {
                                setRegisterForm((prev) => ({ ...prev, email: e.target.value }))
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="password"
                            className="w-full shadow-md py-2 px-2 rounded-lg"
                            placeholder="Password"
                            name="password"
                            value={registerForm.password}
                            onChange={(e) => {
                                setRegisterForm((prev) => ({ ...prev, password: e.target.value }))
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="password"
                            className="w-full shadow-md py-2 px-2 rounded-lg"
                            placeholder="Konfirmasi Password"
                            name="password_confirmation"
                            value={registerForm.password_confirmation}
                            onChange={(e) => {
                                setRegisterForm((prev) => ({ ...prev, password_confirmation: e.target.value }))
                            }}
                        />
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black">
                    Daftar
                </button>
                <p className="text-blue-500 font-semibold">Atau Daftar Dengan</p>
                <button className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2">
                    <FcGoogle size={24} />
                </button>
                <p className="text-blue-500 mt-4 font-semibold">
                    Sudah memiliki akun? Silahkan{" "}
                    <a
                        onClick={() => {
                            setModalLogin(true);
                            setModalRegister(false);
                        }}
                        className="text-orange-500 hover:text-blue-500"
                        href="#"
                    >
                        Masuk
                    </a>
                </p>
            </form>
        </div>
    </>
}