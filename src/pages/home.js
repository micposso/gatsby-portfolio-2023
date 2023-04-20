import React, { useState, useEffect, useRef } from "react";

import HALO from "vanta/dist/vanta.halo.min";

const Home = ({ links }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className="scroll-child" id="home">
        <div className="background-profile"></div>

    </div>
  );
};

export default Home;
