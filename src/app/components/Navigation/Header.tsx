import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { BsBrightnessHigh } from 'react-icons/bs'

const Header = () => {
  return (
    <header className="px-1 mr-auto ml-auto w-full min-w-lg max-w-lg">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <span className="text-lg font-bold">joshhartwig</span>
            <span>developer - manager - dad</span>
          </div>
        </Link>

        <div className="flex items-center space-x-5">
          <Link
            className="text-black/90 hover:text-white"
            href="https://github.com/gitdagray"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            className="text-black/90 hover:text-white"
            href="https://twitter.com/yesdavidgray"
          >
            <FaTwitter size={18} />
          </Link>

          <Link
            className="text-black/90 hover:text-white"
            href="https://twitter.com/yesdavidgray"
          >
            <BsBrightnessHigh size={18} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
