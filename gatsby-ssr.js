import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <>
      <script
        key="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        crossOrigin="anonymous"
        defer
      />
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </>,
  ]);
};
