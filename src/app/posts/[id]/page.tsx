import { getPosts, getPostsByName } from '@/shared/lib/PostFetcher'
import { notFound } from "next/navigation"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { FaBookReader, FaRegCalendarAlt } from 'react-icons/fa'


export default async function Post( { params }: { params: { id: string } }) {
  const { id } = params
  const post = await getPostsByName(id)

  if(!post) { notFound() }

  return (
    
    <div className='blog-post px-16 lg:pt-16 lg:pb-24 mx-auto max-w-2xl'>
      <div className='blog-post-title'>
        <p className="prose prose-2xl prose-stone">{post.title}</p>
      </div>
      <div className='blog-post-details flex items-center'>
        <FaRegCalendarAlt className='inline-block mr-2 prose prose-zinc' />
        <p className='inline-block ml-4 mr-2 prose prose-zinc'>{post.date}</p>

        <FaBookReader className='inline-block ml-4 mr-2 prose prose-zinc' />
        <p className='inline-block ml-4 mr-2 prose prose-zinc'>Reading Time: {post.readTime} mins</p>
      </div>

      <ReactMarkdown className="prose prose-slate">
        {post.content}
      </ReactMarkdown>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params
  const post = await getPostsByName(id)

  if(!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: post.title,
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  if(!posts) { return [] }
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      }
    }
  })
}
