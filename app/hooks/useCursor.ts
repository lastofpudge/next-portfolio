const useCursor = () => {
  if (typeof window !== 'undefined') {
    const cursor = document.querySelector('#cursor')
    const cursorBorder = document.querySelector('#cursor-border')
    const cursorPos = { x: 0, y: 0 }
    const cursorBorderPos = { x: 0, y: 0 }

    document.addEventListener('mouseout', function (event) {
      setTimeout(() => {
        if (
          event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight
        ) {
          document.body.classList.add('out')
        } else {
          document.body.classList.remove('out')
        }
      }, 200)
    })

    document.addEventListener('mousemove', e => {
      cursorPos.x = e.clientX
      cursorPos.y = e.clientY
      // @ts-ignore
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })

    requestAnimationFrame(function loop() {
      const easting = 8
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting

      // @ts-ignore
      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`
      requestAnimationFrame(loop)
    })

    document.querySelectorAll('[data-cursor]').forEach(item => {
      item.addEventListener('mouseover', e => {
        // @ts-ignore
        if (item.dataset.cursor === 'pointer') {
          // @ts-ignore
          cursorBorder.style.backgroundColor = 'rgba(255, 255, 255, .6)'
          // @ts-ignore
          cursorBorder.style.setProperty('--size', '30px')
        }
        // @ts-ignore
        if (item.dataset.cursor === 'pointer2') {
          // @ts-ignore
          cursorBorder.style.backgroundColor = 'white'
          // @ts-ignore
          cursorBorder.style.mixBlendMode = 'difference'
          // @ts-ignore
          cursorBorder.style.setProperty('--size', '80px')
        }
      })
      item.addEventListener('mouseout', e => {
        // @ts-ignore
        cursorBorder.style.backgroundColor = 'unset'
        // @ts-ignore
        cursorBorder.style.mixBlendMode = 'unset'
        // @ts-ignore
        cursorBorder.style.setProperty('--size', '50px')
      })
    })
  }
}

export default useCursor
