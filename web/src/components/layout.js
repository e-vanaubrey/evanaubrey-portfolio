import React, { Component } from 'react'
import Header from './header'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/layout.scss'
import styles from './layout.module.scss'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      weatherDescription: '',
      location: 'Test'
    };
  }

  componentDidMount() {
    var key = '999b3ca70b7c1cb898a59bc8fa08ef92';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 'Seattle' + '&units=imperial&appid=' + key)
      .then(function (resp) { return resp.json() }) // Convert data to json
      .then(function (data) {
        return data;
      })
      .then(weather => {
        this.setState({ weather: Math.round(weather.main.temp), weatherDescription: weather.weather[0].description })
      })
      .catch(function () {
        // catch any errors
      });
  }

  render() {
    var { children, onHideNav, onShowNav, showNav, siteTitle } = this.props
    return (
      <>
        <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav}/>
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>
          <div className={styles.footerWrapper}>

            <StaticQuery
              query={graphql`
                              query SiteLocationQuery {
                                site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
                                  location
                                }
                              }
                              `}
              render={data => (
                <div>
                  <div className={styles.weatherDescription}>
                    {data.site.location} {this.state.weather}°F {this.state.weatherDescription}
                  </div>
                </div>
              )}
            />

            <div className={styles.siteInfo}>
              © {new Date().getFullYear()}, Built by Evan Aubrey
            </div>
          </div>
        </footer>
      </>
    )
  }

}

export default Layout
