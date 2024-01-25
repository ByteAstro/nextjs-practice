"use client"
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';

export default function profilePage() {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
        } catch (error: any) {
            toast.error(error.response.data.error);
            console.log(error.message);
        }
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen py-2'>
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <hr />
            <button className='bg-orange-500 hover:bg-orange-800 mt-4 text-white font-bold py-2 px-4 rounded'
                onClick={logout}
            >Logout</button>
        </div>
    )
}
