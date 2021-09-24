import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {BgImage} from 'gbimage-bridge';
import {FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"

const CalgaryLanding = ({intl}) => {
    const data = useStaticQuery(graphql `
    query calgaryLanding{
      background: file(relativePath: {eq: "calgary-wc-bg.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
        }
      }
    }
        `)

    const bgImage = data.background.childImageSharp.gatsbyImageData

    return (
        <section id="calgary-landing">
            <BgImage
                className="h-screen"
                image={bgImage}
                style={{
                minWidth: "100%",
                minHeight: "100vh"
            }}>
                <h1
                    className="hero text-white flex flex-wrap items-center justify-center h-full p-5"><FormattedMessage id="calgary_landing.header"/></h1>
            </BgImage>
        </section>
    )
};

export default injectIntl(CalgaryLanding)
