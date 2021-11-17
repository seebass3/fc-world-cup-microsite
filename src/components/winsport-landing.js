import React, {useEffect, useRef, useState} from 'react';
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import {BgImage} from 'gbimage-bridge';
import {Link} from 'react-scroll';
import {IconContext} from "react-icons";
import {IoIosArrowDown} from 'react-icons/io';

import PageNav from "./page-nav";
import MobileNav from './mobile-nav';

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

    const [isSticky,
        setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().bottom <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    return (
        <section id="winsport-landing">
            <BgImage className="h-hero" image={bgImage}>
                <div
                    className="bg-gradient-to-t lg:bg-gradient-to-r from-white via-transparent to-transparent h-full w-full absolute z-0"></div>
                <div className="flex h-full items-center">
                    <div className="p-10 h-full">
                        <GatsbyImage
                            style={{
                            height: "100%",
                            width: "100%"
                        }}
                            imgStyle={{
                            objectFit: "contain"
                        }}
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
                    <Link to="page-nav" title="Next Section" smooth duration={1100}>
                        <div
                            className="absolute bottom-0 left-0 w-full text-center mb-4 cursor-pointer"><IoIosArrowDown/></div>
                    </Link>
                </IconContext.Provider>
            </BgImage>
            <nav id="page-nav">
                <div
                    className={`sticky-wrapper hidden sm:block${isSticky
                    ? ' sticky-nav'
                    : ' '}`}
                    ref={ref}>
                    <div className="bg-rodeoGold sticky-inner shadow-lg">
                        <PageNav/>
                    </div>
                </div>
                <div className="bg-rodeoGold">
                    <MobileNav/>
                </div>
            </nav>
        </section>
    )
};

export default WinsportLanding;
