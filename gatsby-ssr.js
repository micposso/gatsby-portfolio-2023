import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      crossOrigin="anonymous"
      defer
    />
  ])
}