import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import {BgImage} from 'gbimage-bridge';
import {Link} from 'gatsby-plugin-react-intl'
import styled from 'styled-components'

const Landing = () => {
    const data = useStaticQuery(graphql `
    query landingPage {
      background: file(relativePath: {eq: "background.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      tremblant: file(relativePath: {eq: "tremblant-logo-scaled.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED width: 500)
        }
      }
      lerelais: file(relativePath: {eq: "relais-logo-scaled.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED width: 500)
        }
      }
    }
        `)

    const bgImage = data.background.childImageSharp.gatsbyImageData
    const tremblantImage = data.tremblant.childImageSharp.gatsbyImageData
    const lerelaisImage = data.lerelais.childImageSharp.gatsbyImageData

    return (
        <section id="home-landing">
            <BgImage
                className="h-screen"
                image={bgImage}>
                <div id="overlay"></div>
                <div
                    className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-2 justify-items-center h-full">
                    <div className="p-5 lg:row-start-1 w-full h-full">
                        <Link to="/le-relais" className="w-full h-full">
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                imgStyle={{ objectFit: "contain" }}
                                image={lerelaisImage}
                                alt="Le Relais World Cup Logo"/>
                        </Link>
                    </div>
                    <div className="p-5 lg:row-start-2 w-full h-full">
                        <Link to="/tremblant" className="w-full h-full">
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                imgStyle={{ objectFit: "contain" }}
                                image={tremblantImage}
                                alt="Tremblant World Cup Logo"/>
                        </Link>
                    </div>
                </div>
            </BgImage>
        </section>
    )
};

export default Landing;
