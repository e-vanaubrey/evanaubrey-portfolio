import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      location
    }
  }
`

function LayoutContainer (props) {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav () {
    setShowNav(true);
    document.getElementById('hamburger').classList.add('active');
  }
  function handleHideNav () {
    setShowNav(false);
    document.getElementById('hamburger').classList.remove('active');
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
