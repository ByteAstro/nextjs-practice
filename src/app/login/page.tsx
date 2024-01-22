"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function LoginPage() {

    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {

    }

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
