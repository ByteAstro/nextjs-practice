import React from 'react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-2xl text-center">
                You good bro,
                <br />
                You seem lost |
                Lets go&nbsp;
                <Link className='text-blue-400 underline' href={'/'}>home</Link>
            </h1>
        </div>
    )
}
