import { v4 as uuidv4 } from 'uuid'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { getFormattedDate, getReadingTime } from './Utility'

type Filetree = {
  "tree": [
      {
          "path": string,
      }
  ]
}

// returns all posts from a specific repo
export async function getPosts() : Promise<BlogPost[] | undefined> {
  const res = await fetch(`https://api.github.com/repos/joshhartwig/meblogposts/git/trees/main?recursive=1`,{
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  })

  if(!res.ok) return undefined

  // the api returns a tree structure
  const repoTree : Filetree = await res.json()

  // filter out all files that are not markdown
  const files = repoTree.tree.map(obj => obj.path).filter(path => path.endsWith('.md'))

  // get the post data for each file
  const posts: BlogPost[] = []
  for(const file of files) {
    const post = await getPostsByName(file)
    if(post) posts.push(post)
  }

  return posts.sort((a,b) => a.date < b.date ? 1 : -1)  //sort in ascending order
}

// returns a single post by filename
export async function getPostsByName(filename: string) : Promise<BlogPost | undefined> {
  const res = await fetch(`https://raw.githubusercontent.com/joshhartwig/meblogposts/main/${filename}`,{
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  })

  if(!res.ok) return undefined

  const rawMD = await res.text()
  if(rawMD === '404: Not Found') return undefined

  const frontMatter = matter(rawMD)
  const date = getFormattedDate(frontMatter.data.date)

  const blogPost = {
    id: filename,
    title: frontMatter.data.title,
    date: date,
    tags: frontMatter.data.tags,
    content: frontMatter.content,
    readTime: getReadingTime(frontMatter.content),
  }
  
  return blogPost
}





