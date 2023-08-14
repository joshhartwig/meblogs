import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import Container from '../Container'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-2 sticky top-0 drop-shadow-xl z-10">
     <Container>
        <div className="prose mx-auto flex justify-between items-center flex-col sm:flex-row">
            <div className="name">
              <span className="text-white/90 text-2xl"></span>
            </div>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-2xl">
                <Link className="text-white/90 hover:text-white" href="https://github.com/gitdagray">
                    <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://twitter.com/yesdavidgray">
                    <FaTwitter />
                </Link>
            </div>
        </div>
     </Container>
    </nav>
  )
}

export default Navbar