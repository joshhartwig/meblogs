import Image from 'next/image'
import Posts from './components/Posts'
export const revalidate = 0;

export default function Home() {
  return (
    <main className="px-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="flex flex-col justify-between px-4 mx-auto max-w-2xl">
        <Posts />
      </div>
      
    </main>
  )
}
