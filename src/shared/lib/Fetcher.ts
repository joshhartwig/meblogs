import { Octokit } from "@octokit/rest";

interface FetcherOptions {
  owner: string;
  repo: string;
  path: string;
  token: string;
  userAgent: string
}

// Fetches a single markdown file from a GitHub repo
export async function getPostData(options: FetcherOptions, fileName: string) : Promise<string> {

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
  
  if(Array.isArray(response.data) || response.data.type !== 'file') {
    throw new Error('Response data is not a file')
  }

  const markdownContent = Buffer.from(response.data.content, 'base64').toString('utf-8')
  
  return markdownContent
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



