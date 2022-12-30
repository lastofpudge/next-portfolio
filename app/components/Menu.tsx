import Link from 'next/link'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

const Menu: FC = () => {
  const ref = useRef<HTMLButtonElement | null>( null )
  const [isOpen, setIsOpen] = useState( false )

  const clickFunction = useCallback( () => {
    let ww, opa, delay

    document.body.classList.toggle( 'open-menu' )

    if (!isOpen) {
      ww = '100%'
      opa = 1
      delay = [1, 1.5, 2, 2.5]
    } else {
      ww = '0%'
      opa = 0
      delay = [0, 0, 0, 0]
    }

    setIsOpen( !isOpen )

    gsap.to( '.menu-info', {
      duration: 1,
      width: ww,
      ease: 'power1.inOut'
    } )

    gsap.to( '.js-anim-1', {
      duration: 0.5,
      delay: delay[0],
      ease: 'power1.inOut',
      opacity: opa
    } )

    gsap.to( '.js-anim-2', {
      duration: 0.5,
      delay: delay[1],
      ease: 'power1.inOut',
      opacity: opa
    } )

    gsap.to( '.js-anim-3', {
      duration: 0.5,
      delay: delay[2],
      ease: 'power1.inOut',
      opacity: opa
    } )

    gsap.to( '.js-anim-4', {
      duration: 0.5,
      delay: delay[3],
      ease: 'power1.inOut',
      opacity: opa
    } )
  }, [isOpen] )

  useEffect( () => {
    const curRef = ref.current
    curRef?.addEventListener( 'click', clickFunction )

    return () => curRef?.removeEventListener( 'click', clickFunction )
  }, [clickFunction] )

  return (
    <>
      <button className='menu' data-cursor='pointer' ref={ref}>
        <span></span>
      </button>
      <div className='menu-info' data-cursor='pointer2'>
        <div className='menu-skills'>
          <ul>
            <li className='js-anim-1'>Additional related projects apps:</li>
            <li className='js-anim-2'>
              <Link target='_blank' rel='nofollow' href='https://apps.apple.com/nl/app/do-metals-b-v/id1606400713'>
                Company promo app ios
              </Link>
              <br />
              <Link target='_blank' rel='nofollow'
                    href='https://play.google.com/store/apps/details?id=com.app.dometals'>
                Company promo app android
              </Link>
            </li>
            <li className='js-anim-3'>
              <Link target='_blank' rel='nofollow' href='https://play.google.com/store/apps/details?id=com.omnifix.fox'>
                Digital task manager android
              </Link>
              <br />
              <Link target='_blank' rel='nofollow'
                    href='https://apps.apple.com/nl/developer/kirill-chistiakov/id1370860836'>
                Digital task manager ios
              </Link>
            </li>
            <li className='js-anim-4'>
              <Link target='_blank' rel='nofollow' href='https://gmodal-docs.vercel.app/'>
                Modern tiny modal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu
