import * as React from "react"
import PropTypes from "prop-types"
import {injectIntl} from "gatsby-plugin-react-intl"
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image"

import Header from "./header"
import Language from "./language";
import "./layout.scss"

const Layout = ({children, intl}) => {
    const data = useStaticQuery(graphql `
    query logo {
        placeholderImage: file(relativePath: {eq: "fc-logo-white-stacked.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 100, quality: 100)
          }
        }
      }
  `);

    const image = getImage(data.placeholderImage)

    return (
        <>
        <Language />
            <Header siteTitle={intl.formatMessage({id: "title"})}/>
            <main>{children}</main>
            <footer
                className="text-white bg-fcBlue p-10 font-regular flex flex-col items-center">
                <a href="https://freestylecanada.ski/">
                    <GatsbyImage className="mb-5" image={image} alt="Freestyle Canada Logo"/>
                </a>
                © {new Date().getFullYear()}, Freestyle Canada
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default injectIntl(Layout)
