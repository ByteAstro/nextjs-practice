"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';

export default function profilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");
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

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setData(res.data.data._id);
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen py-2'>
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <hr />
            <h2 className='p-3 mt-3 rounded border border-green-500 text-center w-3/4'>
                {data === "nothing" ? "Nothing" : (
                    <Link href={`/profile/${data}`}>{data}</Link>
                )}
            </h2>
            <hr />
            <button className='bg-orange-500 hover:bg-orange-800 mt-4 text-white font-bold py-2 px-4 rounded'
                onClick={logout}
            >Logout</button>
            <button className='bg-purple-500 hover:bg-purple-800 mt-4 text-white font-bold py-2 px-4 rounded'
                onClick={getUserDetails}
            >GetUser Details</button>
        </div>
    )
}
