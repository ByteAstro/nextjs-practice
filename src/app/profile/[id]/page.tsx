import React from 'react'

export default function UserProfilePage({ params }: any) {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen py-2'>
            <h1 className='m-4'>Profile</h1>
            <hr />
            <p className='text-4xl'>Profile page
                <span className='p-2 ml-2 rounded bg-red-500 text-white'>
                    {params.id}
                </span>
            </p>
        </div>
    )
}
