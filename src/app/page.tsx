import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hello, I&apos;m Yuma Yamazaki</h1>
            <p className="mt-6 text-lg leading-8">
              関東在住のエンジニアです<br />
              シンプルなモノ、効率化すること、クリエイティブなコトが大好きです
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/about" className="text-sm font-semibold leading-6">About me <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}