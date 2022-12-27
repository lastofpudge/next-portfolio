import { FC, PropsWithChildren } from 'react'

import '@/styles/globals.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>
}

export default Layout
