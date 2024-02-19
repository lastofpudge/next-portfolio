import type { AppProps } from 'next/app'

import MainProvider from '@/providers/mainProvider'

type TypeAppProps = AppProps

if (typeof window !== 'undefined') {
  require('@/libs/gsap/gsap.min')
  const { SplitText } = require('@/libs/gsap/SplitText.min.js')
  const { MotionPathPlugin } = require('@/libs/gsap/MotionPathPlugin.min.js')

  gsap.registerPlugin(SplitText, MotionPathPlugin)
}

const App = ({ Component, pageProps }: TypeAppProps) => {
  const AnyComponent = Component as any;

  return (
    <>
      <MainProvider>
        <AnyComponent {...pageProps} />
      </MainProvider>
    </>
  )
}

export default App
