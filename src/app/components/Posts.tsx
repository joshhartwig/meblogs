import { getPosts } from '@/shared/lib/PostFetcher'
import React from 'react'
import Post from './PostPreview'
import PostPreview from './PostPreview'


const Posts = async () => {
  const posts = await getPosts()

  const content = (posts) ? posts.map((post) => {
    return (
      <PostPreview
        key={post.id}
        id={post.id}
        title={post.title}
        date={post.date}
        readTime={post.readTime}
      />
    )
  }) : "No posts found."


  return (
    <>
      {
        content
      }
    </>
  )
}


export default Posts