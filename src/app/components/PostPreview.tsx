import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { FaBookReader, FaRegCalendarAlt } from 'react-icons/fa'
import { read } from 'fs'

type Props = {
  id: string,
  title: string,
  date: string,
  readTime: number,
}

function PostPreview({id, title, date, readTime}: Props) {
  return (
    <article className="prose mb-8">
      <header>
        <p className="text-3xl text-slate-900 m-0">{title}</p>
        <div className="flex items-center">
          <FaRegCalendarAlt className="inline-block mr-2" />
          <span className="text-sm text-slate-500 m-0">{date}</span>

          <FaBookReader className="inline-block ml-4 mr-2" />
          <span className="text-sm text-slate-500 m-0">{readTime} min read</span>

        </div>
        
        <p className="m-0"><Link href={`/posts/${id}`}>More Details</Link></p>
      </header>
    </article>
  )
}

export default PostPreview

// <ReactMarkdown className="">{preview}</ReactMarkdown>