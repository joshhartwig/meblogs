import { getAllMarkdownFiles } from '@/shared/lib/Fetcher'
import React from 'react'
import PostPreview from './PostPreview'

const options = {
  owner: process.env.GITHUB_OWNER as string,
  repo: process.env.GITHUB_REPO as string,
  path: process.env.GITHUB_PATH as string, 
  token: process.env.GITHUB_TOKEN as string,
  userAgent: process.env.GITHUB_USER_AGENT as string,
}

const Posts = async () => {
  const posts: BlogPost[] = await getAllMarkdownFiles(options)

  if(!posts) {
    return <p>Sorry nothing to see here!</p>
  }

  return (
    <>
    {
      posts.map((p: BlogPost) => (
        <PostPreview key={p.id} title={p.title} date={p.date} content={p.content} />
      ))
    }
    </>
  )
}


export default Posts