import { getPosts } from '@/shared/lib/Fetcher'
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
  const posts =  await getPosts()
  console.log(posts)


  return (
    <>
    
    </>
  )
}


export default Posts