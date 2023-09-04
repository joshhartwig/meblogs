import Posts from './components/Posts'
export const revalidate = 0

export default function Home() {
  return (
    <main className="lg:py-4 bg-white mr-auto ml-auto w-full min-w-lg max-w-lg">
      <div className="flex flex-col justify-between mx-auto min-w-lg max-w-lg space-y-2">
        <div className="space-y-1">
          <h2 className="font-mono text-lg tracking-tighter mb-4 mt-4 font-semibold">
            Posts
          </h2>
        </div>
        <Posts />
      </div>
    </main>
  )
}
