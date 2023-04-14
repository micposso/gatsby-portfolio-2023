import React, { useState, useEffect, useRef } from 'react'

import BIRDS from 'vanta/dist/vanta.birds.min'

const About = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (

    <div ref={myRef} className='scroll-child'>

    </div>

  )
}

export const Head = () => <title>About Me</title>

export default About
