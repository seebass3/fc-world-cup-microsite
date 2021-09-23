import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import {BgImage} from 'gbimage-bridge';
import {FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"

const RelaisLanding = ({intl}) => {
    const data = useStaticQuery(graphql `
    query tremblantLanding{
      background: file(relativePath: {eq: "relais-wc-bg.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      lerelais: file(relativePath: {eq: "relais-logo.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
        `)

    const bgImage = data.background.childImageSharp.gatsbyImageData
    const lerelaisImage = data.lerelais.childImageSharp.gatsbyImageData

    return (
        <BgImage
            className="h-hero"
            image={bgImage}
            style={{
            minWidth: "100%",
            minHeight: "100%"
        }}>
            <div id="overlay"></div>
            <div
                className="flex h-full">
                <div className="p-10">
                        <GatsbyImage
                            className="h-full"
                            objectFit="contain"
                            image={lerelaisImage}
                            alt="Le Relais World Cup Logo"/>
                </div>
            </div>
        </BgImage>
    )
};

export default injectIntl(RelaisLanding)
