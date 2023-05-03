import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import NET from 'vanta/dist/vanta.net.min'

const Skills = ({ links }) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (

    <div ref={myRef} className='scroll-child' id="resume">
    </div>

  )
}

export const Head = () => <title>About Me</title>

export default Skills
