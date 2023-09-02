import { getPosts } from '@/shared/lib/PostFetcher'
import React from 'react'
import PostPreview from './PostPreview'

const Posts = async () => {
  const posts = await getPosts()

  const content = posts
    ? posts.map((post) => {
        return (
          <ul key={post.id}>
            <PostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              description={post.description}
            />
          </ul>
        )
      })
    : 'No posts found.'

  return <>{content}</>
}

export default Posts
