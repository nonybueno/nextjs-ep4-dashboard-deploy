"use client"

import React from 'react'
import Logo from '../../../public/next.svg'
import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

function Navbar({ session }) {
  return (
    <nav className='shadow-xl'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-4'>
                <div>
                    <Link href="/">
                        <Image src={Logo} height={100} width={100} alt='nextjs Logo'/>
                    </Link>
                </div>
                <ul className='flex'>
                    {!session ? (
                        <>
                            <li className='mx-3'><Link href="/login">Login</Link></li>
                            <li className='mx-3'><Link href="/register">Register</Link></li>
                        </>
                    ):(
                            <li className='mx-3'>
                                <Link href="/welcome" className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Profile</Link>
                                <a onClick={()=> signOut()} className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Logout</a>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar