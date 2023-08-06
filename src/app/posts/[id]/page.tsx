import { getPosts, getPostsByName } from '@/shared/lib/PostFetcher'
import { notFound } from "next/navigation"
import React from 'react'


export default async function Post( { params }: { params: { id: string } }) {
  const { id } = params
  const post = await getPostsByName(id)

  if(!post) { notFound() }

  return (
    <div>postid page {post.title}</div>
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
