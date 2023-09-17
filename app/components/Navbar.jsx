import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "./squidgame.png"

export default function Navbar() {
    return (
        <nav className=''>
            <Image
                src={Logo}
                alt='logo'
                width={40}
                quality={100}
                placeholder='blur'
            />
            <h1>sadugamer</h1>
            <Link href="/">dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}
