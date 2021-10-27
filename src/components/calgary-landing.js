import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import {IntlContextConsumer, injectIntl} from "gatsby-plugin-react-intl"

const CalgaryLanding = ({intl}) => {
    const data = useStaticQuery(graphql `
    query calgaryLanding{
      bannerEn: file(relativePath: {eq: "snowrodeo-banner-en.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
        }
      }
    bannerFr: file(relativePath: {eq: "snowrodeo-banner-fr.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
        }
      }
    }
        `)

    const imageEn = data.bannerEn.childImageSharp.gatsbyImageData
    const imageFr = data.bannerFr.childImageSharp.gatsbyImageData
  
    return (
        <section id="calgary-landing">
          <IntlContextConsumer>
                {({languages, language: currentLocale}) => languages.map(language => (
                  <GatsbyImage
                  image={currentLocale === language ? 
                     imageEn : imageFr
                    }
                  style={{
                  minWidth: "100%"
              }}/>
                ))
}
            </IntlContextConsumer>
        </section>
    )
};

export default injectIntl(CalgaryLanding)
