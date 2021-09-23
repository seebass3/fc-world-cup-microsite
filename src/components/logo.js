import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { Link } from 'gatsby-plugin-react-intl'

const Logo = () => {
    const data = useStaticQuery(graphql `
    query {
        placeholderImage: file(relativePath: {eq: "fc-logo-white.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 180)
          }
        }
      }
  `);

    const image = getImage(data.placeholderImage)

    return (
        <Link to="/"><GatsbyImage image={image} alt="Freestyle Canada Logo"/></Link>
    )
};

export default Logo;
