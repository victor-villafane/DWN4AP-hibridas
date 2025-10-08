import React from 'react'

const Layout = ( { children, ...res } ) => {
  return (
    <div {...res} >
        <header>Soy un nav</header>
        {children}
        <footer>Soy un footer</footer>
    </div>
  )
}

export default Layout