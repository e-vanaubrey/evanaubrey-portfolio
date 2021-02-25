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
          <svg id="hamburger" className="ham hamRotate ham1" viewBox="0 0 100 100" width="48">
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path
            className="line middle"
            d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>
          </button>

          <nav className={cn(styles.nav, showNav && styles.showNav)}>
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
