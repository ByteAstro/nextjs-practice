"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {

    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Successful", response.data);
            toast("Login Successful!");
            router.push("/profile")
        } catch (error: any) {
            console.log("Login failed", error);
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center space-y-1">
            <h1 className="text-2xl">
                Login
            </h1>
            <hr className="bg-white w-48 m-8" /><br />
            <label htmlFor="email">email</label>
            <input className="text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="password">password</label>
            <input className="text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            /> <br />
            <button className="p-2 border border-gray-300 rounded-lg px-8 mt-8 mb-4 focus:outline-none"
                onClick={onLogin}
            >Login</button>
            <p>Or Visit&nbsp;
                <Link className="text-blue-400 underline" href={'/signup'}>signup</Link>
            </p>
        </div>
    )
}
