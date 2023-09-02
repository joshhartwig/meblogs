import React from 'react'
import Link from 'next/link'

type Props = {
  id: string
  title: string
  date: string
  readTime: number
  description: string
}

function PostPreview({ id, title, date, readTime, description }: Props) {
  return (
    <li>
      <Link
        href={`/posts/${id}`}
        className="space-y-1.5 !no-underline flex flex-col mb-3"
      >
        <div>
          <span className="font-medium underline underline-offset-4 lowercase">
            {title}
          </span>
        </div>

        <div>
          <span className="text-gray-600">{description}</span>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview

//<Link href={`/posts/${id}`}>
