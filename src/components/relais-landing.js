import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import {BgImage} from 'gbimage-bridge';
import {Link} from 'react-scroll';
import {IconContext} from "react-icons";
import {IoIosArrowDown} from 'react-icons/io';

const RelaisLanding = () => {
    const data = useStaticQuery(graphql `
    query relaisLanding{
      background: file(relativePath: {eq: "relais-wc-bg.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
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
    const lerelaisImage = data.lerelais.childImageSharp.gatsbyImageData

    return (
        <section id="relais-landing">
            <BgImage
                className="h-hero"
                image={bgImage}>
                <div id="overlay"></div>
                <div className="flex h-full items-center">
                    <div className="p-10 h-full">
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            imgStyle={{ objectFit: "contain" }}
                            image={lerelaisImage}
                            alt="Le Relais World Cup Logo"/>
                    </div>
                </div>
                <IconContext.Provider
                    value={{
                    color: "#da7b3b",
                    className: "w-20 h-20 inline-block",
                    style: {
                        verticalAlign: 'middle'
                    }
                }}>
                    <Link to="relais-info" title="Next Section" smooth duration={1100}>
                        <div
                            className="absolute bottom-0 left-0 w-full text-center mb-4 cursor-pointer"><IoIosArrowDown/></div>
                    </Link>
                </IconContext.Provider>
            </BgImage>
        </section>
    )
};

export default RelaisLanding
