import { Octokit } from '@octokit/rest'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

interface FetcherOptions {
  owner: string;
  repo: string;
  path: string;
  token: string;
  userAgent: string
}

// Fetches a blogpost from a GitHub repo
export async function getPostData(options: FetcherOptions, fileName: string) : Promise<BlogPost> {

  const octokit = new Octokit({
    request: {
      fetch: undefined,
    },
    auth: options.token,
    userAgent: options.userAgent,
  });
  
  const response = await octokit.rest.repos.getContent({
    owner: options.owner,
    repo: options.repo,
    path: options.path + fileName
  });
  
  // the response should be an array
  if(Array.isArray(response.data) || response.data.type !== 'file') {
    throw new Error('Response data is not a file')
  }

  // convert content to base64 and then to utf-8
  const content = Buffer.from(response.data.content, 'base64').toString('utf-8')
  
  // use matter to parse the content
  const matterResult = matter(content)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const blogPost = {
    id: matterResult.data.id,
    title: matterResult.data.title,
    content: processedContent.toString(),
    date: matterResult.data.date,
    tags: matterResult.data.tags,
  }
  
  
  return blogPost
}

// Fetches all markdown files from a GitHub repo
export async function listMarkdownFiles(options: FetcherOptions) {

  const octokit = new Octokit({
    request: {
      fetch: undefined,
    },
    auth: options.token,
    userAgent: options.userAgent,
  });
  
  try {
    const response = await octokit.rest.repos.getContent({
      owner: options.owner,
      repo: options.repo,
      path: options.path
    })
  
  if(Array.isArray(response.data)) {
    const markdownFiles = response.data.filter((file: any) => file.name.endsWith('.md')).map((file: any) => file.name)
    return markdownFiles
  }}
  catch(error) {
    console.log(`error in listMarkdownFiles: ${error}`)
  }

  return []
}

// Fetches all markdown files from a GitHub repo and returns an array of BlogPost objects
export async function getAllMarkdownFiles(options: FetcherOptions) : Promise<BlogPost[]> {
  const markdownFiles = await listMarkdownFiles(options)
  const blogPosts = await Promise.all(markdownFiles.map(async (fileName) => {
    const fileContents = await getPostData(options, options.path + fileName)
    const { data } = matter(fileContents)
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      date: data.date,
      tags: data.tags,
    }
  }))
  return blogPosts
}





