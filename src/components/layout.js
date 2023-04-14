import * as React from 'react'
import { container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout