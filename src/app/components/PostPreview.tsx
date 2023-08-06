import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

type Props = {
  id: string,
  title: string,
  date: string,
}

function PostPreview({id, title, date}: Props) {
  
  return (
    <article className="prose mb-8 mt-8">
      <header>
        <p className="text-4xl my-0 text-slate-900">{title}</p>
        <p className="text-sm mt-0 mb-4 text-slate-500">{date}</p>
      </header>
      <p><Link href={`/posts/${id}`} >More Details</Link></p>
    </article>
  )
}

export default PostPreview

// <ReactMarkdown className="">{preview}</ReactMarkdown>