import { getPosts, getPostsByName } from '@/shared/lib/PostFetcher'
import { notFound } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { FaBookReader, FaRegCalendarAlt } from 'react-icons/fa'

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params
  const post = await getPostsByName(id)

  if (!post) {
    notFound()
  }

  return (
    <div className="lg:py-4 bg-white mr-auto ml-auto w-full min-w-lg max-w-lg mt-4">
      <div className="blog-post-title text-center">
        <h1 className="prose-xl">{post.title}</h1>
      </div>

      <div className="blog-post-details flex items-center">
        <FaRegCalendarAlt className="inline-block mr-2 text-gray-600" />
        <span className="inline-block ml-4 mr-2">{post.date}</span>

        <FaBookReader className="inline-block ml-4 mr-2" />
        <span className="inline-block ml-4 mr-2 text-gray-600">
          Reading Time: {post.readTime} mins
        </span>
      </div>

      <ReactMarkdown className="mt-8 prose" rehypePlugins={[rehypeRaw]}>
        {post.content}
      </ReactMarkdown>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params
  const post = await getPostsByName(id)

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: post.title,
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  if (!posts) {
    return []
  }
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    }
  })
}
