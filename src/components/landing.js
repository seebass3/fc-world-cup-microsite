import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import {BgImage} from 'gbimage-bridge';
import { Link } from 'gatsby-plugin-react-intl'

const Landing = () => {
    const data = useStaticQuery(graphql `
    query landingPage {
      background: file(relativePath: {eq: "background.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      tremblant: file(relativePath: {eq: "tremblant-logo.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
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
    const tremblantImage = data.tremblant.childImageSharp.gatsbyImageData
    const lerelaisImage = data.lerelais.childImageSharp.gatsbyImageData

    return (
        <BgImage
            className="h-screen"
            image={bgImage}
            style={{
            minWidth: "100%",
            minHeight: "100vh"
        }}>
            <div id="overlay"></div>
            <div
                className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-2 h-full">
                <div className="p-5 lg:row-start-1">
                    <Link to="/le-relais">
                        <GatsbyImage
                            className="h-full"
                            objectFit="contain"
                            image={lerelaisImage}
                            alt="Le Relais World Cup Logo"/>
                    </Link>
                </div>
                <div className="p-5 lg:row-start-2">
                    <Link to="/tremblant">
                        <GatsbyImage
                            className="h-full"
                            objectFit="contain"
                            image={tremblantImage}
                            alt="Tremblant World Cup Logo"/>
                    </Link>
                </div>
            </div>
        </BgImage>
    )
};

export default Landing;
