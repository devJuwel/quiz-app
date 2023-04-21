import React from 'react'


import classes from './header.module.css'
import Account from './Account'

const Header = () => {
  return (
    <>
    <nav className={classes.nav}>
  <ul>
    <li>
      <a href="index.html" className={classes.brand}>
        <img src="https://yt3.googleusercontent.com/gOYSj4AFkCeuoCnrZlkjXtGPkSzAQ9eLUrj8ZOf9zGhhxhUc7xdiu-C1H5Sjgedc8QeTnY4VkQ=s176-c-k-c0x00ffffff-no-rj" alt="Developer Juwel Logo" />
        <h3>Learn with Sumit</h3>
      </a>
    </li>
    
  </ul>
  <Account/>
</nav>

    </>
  )
}

export default Header
