import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default function Intro() {
  return (
    <section className="items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-7xl text-accent-4 md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
      <img style={{width: 70,
            display: 'inline-block',
            marginRight: 20,
            }} src="/blog/trends-everywhere-icon.png"></img> Trends Everywhere Blog
      </h1>
      <h4 className="text-accent-3 text-center md:text-left text-2xl mt-5">
        How to hunt and analyse Internet trends before the explode
      </h4>
    </section>
  )
}
