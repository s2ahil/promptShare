import Image from 'next/image'
import Feed from "@/components/Feed"
export default function Page() {
  return (
    <section className='w-full flex-center flex-col'>
      {/* hello */}
      <h1 className='head_text text-center'>
        Discover & share
        <br className='max-md:hidden'></br>
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      {/* feed */}
      <Feed></Feed>
    </section>
  )
}


//
