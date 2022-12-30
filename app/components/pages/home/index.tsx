import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect } from 'react'

import Figure from '@/components/Figure'
import Header from '@/components/layout/Header'
import Slider from '@/components/slider'
import useCursor from '@/hooks/useCursor'
import Meta from '@/utils/meta'

const { SplitText } = require( '@/libs/gsap/SplitText.min.js' )

const Home: NextPage = () => {
  useCursor()

  const runEffects = useCallback( () => {
    const Text = new SplitText( '.js-title', { type: 'chars' } )

    gsap.from( Text.chars,  { x: -40, autoAlpha: 0, duration: 1 } )
    gsap.fromTo(
        '.p-slider',
        {},
        { autoAlpha: 1, duration: 1.5, delay: 1}
      )
  }, [] )

  useEffect( () => {
    if (typeof window !== 'undefined') {
      runEffects()
    }
  } )

  return (
    <div>
      <Meta title='Portfolio' />
      <div id='cursor'></div>
      <div id='cursor-border'></div>
      <div className='section-full'>
        <Link href='https://github.com/lastofpudge' className='git-link' data-cursor='pointer2'>
          <Image src='/next-portfolio/git.svg' height={80} width={80} alt='Github' />
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
