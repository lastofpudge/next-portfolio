import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import Figure from '@/components/layout/Figure'
import Header from '@/components/layout/Header'
import Slider from '@/components/layout/slider'
import useCursor from '@/hooks/useCursor'

const Home: NextPage = () => {
  useCursor()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      const Text = new SplitText('.js-title', { type: 'chars' })
      // @ts-ignore
      TweenMax.staggerFrom(Text.chars, 1, { x: -40, autoAlpha: 0 }, 0.05).fromTo(
        '.p-slider',
        {},
        { autoAlpha: 1, duration: 1.5 }
      )
    }
  }, [])

  return (
    <div>
      <div id='cursor'></div>
      <div id='cursor-border'></div>
      <div className='section-full'>
        <Link href='https://github.com/lastofpudge' className='git-link' data-cursor='pointer2'>
          <Image src='/git.svg' height={80} width={80} alt='Github' />
        </Link>
        <div className='container container-flow'>
          <Header />
          <div className='marquee'>
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
            <span>figma</span>
            <span>react/-native</span>
          </div>
          <Figure />
        </div>
        <main>
          <div className='container container-fluid'>
            <div className='p-items'>
              <div className='p-info'>
                <h1 className='js-title'>
                  Websites <br />
                  Portfolio{' '}
                </h1>
              </div>
              <Slider />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
