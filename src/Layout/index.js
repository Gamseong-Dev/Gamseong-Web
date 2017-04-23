import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (
  props
) => (
  <div>
    <Header {...props} />
      {props.children}
    <Footer />
  </div>
)


export default Layout
