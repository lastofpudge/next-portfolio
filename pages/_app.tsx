import type { AppProps } from 'next/app'

import MainProvider from '@/providers/mainProvider'

type TypeAppProps = AppProps

if (typeof window !== 'undefined') {
  // @ts-ignore
  require('@/libs/gsap/gsap.min')
  // @ts-ignore
  const { SplitText } = require('@/libs/gsap/SplitText.min.js')
  const { MotionPathPlugin } = require('@/libs/gsap/MotionPathPlugin.min.js')
  // @ts-ignore
  gsap.registerPlugin(SplitText, MotionPathPlugin)
}

const App = ({ Component, pageProps }: TypeAppProps) => {
  return (
    <>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </>
  )
}

export default App
