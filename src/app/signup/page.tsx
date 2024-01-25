"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {

    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup Successful", response.data);
            toast.success("Signup successful!");
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    // 

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center space-y-1">
            <h1 className="text-2xl">
                {loading ? "Processing..." : "Sign Up"}
            </h1>
            <hr className="bg-white w-48 m-8" /><br />
            <label htmlFor="username">username</label>
            <input className="text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
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
                onClick={onSignup}
            >
                {buttonDisabled ? "No Signup" : "Signup here"}
            </button>
            <p>Or Visit&nbsp;
                <Link className="text-blue-400 underline" href={'/login'}>login</Link>
            </p>
        </div>
    )
}
