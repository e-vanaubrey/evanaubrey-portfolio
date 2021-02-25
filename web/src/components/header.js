import { Link } from 'gatsby'
import React, { Component } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { StaticQuery, graphql } from 'gatsby'
import Icon from './icon'
import { cn } from '../lib/helpers'

import styles from './header.module.scss'

import Headshot from '../assets/img/headshot.png'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { onHideNav, onShowNav, showNav, siteTitle } = this.props
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.branding}>
            
          </div>


          <div className={styles.headshot}>
            <Link to='/'>
              <img className={styles.headshotImg} src={Headshot} />
              <div className={styles.headerName}>Evan Aubrey</div>
              <div className={styles.headerTagline}>Design. Build. Play.</div>
            </Link>
          </div>


          <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol='hamburger' />
          </button>

          <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol='hamburger' />
          </button>
            <ul>
              <li>
                <Link to='/archive/'>Archive</Link>
              </li>
              <li className={styles.toggleModeButton}>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => {
                    // Don't render anything at compile time. Deferring rendering until we
                    // know which theme to use on the client avoids incorrect initial
                    // state being displayed.
                    if (theme == null) {
                      return null
                    }
                    return (
                      <div>
                        <input
                          type="checkbox"
                          id="toggle"
                          onChange={(e) =>
                            toggleTheme(e.target.checked ? 'dark' : 'light')
                          }
                          checked={theme === 'dark'}
                        />
                        <label htmlFor="toggle"></label>
                      </div>
                    )
                  }}
                </ThemeToggler>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
