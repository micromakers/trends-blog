import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl text-accent-4 md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a style={{color: '#1900FF'}} className="hover:underline">
        <img style={{width: 40,
        display: 'inline-block',
        marginRight: 20,
        verticalAlign: 'bottom'}} src="/blog/trends-everywhere-icon.png"></img>
        Trends Everywhere Blog
        </a>
      </Link>
    </h2>
  )
}
