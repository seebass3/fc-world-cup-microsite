import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import {BgImage} from 'gbimage-bridge';
import {Link} from 'react-scroll';
import {IconContext} from "react-icons";
import {IoIosArrowDown} from 'react-icons/io';

const WinsportLanding = () => {
    const data = useStaticQuery(graphql `
    query winsportLanding{
      background: file(relativePath: {eq: "rodeo-background.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
        }
      }
      rodeo: file(relativePath: {eq: "rodeo-logo-scaled.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED width:500)
        }
      }
    }
        `)

        const bgImage = data.background.childImageSharp.gatsbyImageData
        const rodeoImage = data.rodeo.childImageSharp.gatsbyImageData
  
    return (
        <section id="winsport-landing">
            <BgImage
                className="h-hero"
                image={bgImage}>
                <div className="bg-gradient-to-t lg:bg-gradient-to-r from-white via-transparent to-transparent h-full w-full absolute z-0"></div>
                <div className="flex h-full items-center">
                    <div className="p-10 h-full">
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            imgStyle={{ objectFit: "contain" }}
                            image={rodeoImage}
                            alt="Winsport World Cup Logo"/>
                    </div>
                </div>
                <IconContext.Provider
                    value={{
                    color: "#c7ab81",
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

export default WinsportLanding;
