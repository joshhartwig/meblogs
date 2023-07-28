import { getPostData, listMarkdownFiles } from '../src/shared/lib/Fetcher'

const options = {
  owner: process.env.GITHUB_OWNER as string,
  repo: process.env.GITHUB_REPO as string,
  path: process.env.GITHUB_PATH as string, 
  token: process.env.GITHUB_TOKEN as string,
  userAgent: process.env.GITHUB_USER_AGENT as string,
}

test('getPostData returns a string', async () => {
  const result = await getPostData(options, 'dallas.md');
  expect(typeof result).toBe('string');
});


test('listMarkdownFiles returns an array', async () => {
  const markdownFiles = await listMarkdownFiles(options)
      .then((markdownFiles) => {
        expect(Array.isArray(markdownFiles)).toBe(true)
      })
})