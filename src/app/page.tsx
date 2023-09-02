import Posts from './components/Posts'
export const revalidate = 0

export default function Home() {
  return (
    <main className="lg:px-8 lg:py-4 bg-white">
      <div className="flex flex-col justify-between mx-auto min-w-lg max-w-lg space-y-2">
        <div className="space-y-1">
          <h2 className="font-mono text-lg tracking-tighter mb-4">Posts</h2>
        </div>

        <Posts />
      </div>
    </main>
  )
}
