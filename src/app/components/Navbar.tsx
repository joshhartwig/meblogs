import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-2 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Josh Hartwig</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-2xl">
                    <Link className="text-white/90 hover:text-white" href="https://github.com/gitdagray">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://twitter.com/yesdavidgray">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
  )
}

export default Navbar