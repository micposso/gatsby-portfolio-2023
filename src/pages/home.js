import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import HALO from 'vanta/dist/vanta.halo.min'

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (

    <div ref={myRef} className='scroll-child'>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>

  )
}

export default Home;