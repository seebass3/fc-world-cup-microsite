import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';
import {Link} from 'react-scroll';
import {IconContext} from "react-icons";
import {IoIosArrowDown} from 'react-icons/io';

import PageNav from '../page-nav';
import MobileNav from '../mobile-nav';

const RelaisLanding = () => {
    const data = useStaticQuery(graphql `
    query relaisLanding{
      background: file(relativePath: {eq: "relais-background.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      lerelais: file(relativePath: {eq: "relais-logo-scaled.png"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED width: 500)
        }
      }
    }
`);

    const bgImage = data.background.childImageSharp.gatsbyImageData;
    const lerelaisImage = data.lerelais.childImageSharp.gatsbyImageData;

    return (
        <>
            <section id="relais-landing">
                <BgImage className="h-hero" image={bgImage}>
                    <div
                        className="h-full w-full absolute z-0 bg-white bg-opacity-50 lg:bg-opacity-0"></div>
                    <div className="flex h-full items-center">
                        <div className="p-10 h-full lg:bg-gradient-to-r from-white to-transparent">
                            <GatsbyImage
                                style={{
                                height: "100%",
                                width: "100%"
                            }}
                                imgStyle={{
                                objectFit: "contain"
                            }}
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
                        <Link to="page-nav" title="Next Section" smooth duration={1100}>
                            <div
                                className="absolute bottom-0 left-0 w-full text-center mb-4 cursor-pointer"><IoIosArrowDown/></div>
                        </Link>
                    </IconContext.Provider>
                </BgImage>
            </section>
            <PageNav color="bg-fcOrange"/>
            <MobileNav color="bg-fcOrange"/>
        </>
    )
};

export default RelaisLanding;
