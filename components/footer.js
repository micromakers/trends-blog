import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-4 border-t border-accent-2">
      <Container>
        <div className="py-28 text-white font-bold  flex flex-col lg:flex-row items-center">
          <div className="flex flex-col  lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a href="/" style={{display: 'block'}}>
          <img style={{width: 40,
            display: 'block',
            marginRight: 20,
            }} src="/blog/trends-everywhere-icon-white.png"></img>
              </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a target="_blank" href="https://twitter.com/trendsew">Follow us on Twitter</a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a target="_blank" href="https://chrome.google.com/webstore/detail/trends-everywhere-never-m/blilbgcjmmpbcjiopbifnoopnpfhdipg?hl=en">Free Chrome Extension</a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a target="_blank" href="/pricing">Pricing</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
