import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import {BgImage} from 'gbimage-bridge';
import {FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"
import {Link} from 'gatsby-plugin-react-intl'

import Slider from "react-slick";
import styled from "styled-components"
import {IconContext} from "react-icons";
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';

const SliderWrap = styled.div `
overflow: hidden; 

.slick-prev {
    left: .1rem;
    z-index:100;
    height: auto;
}
.slick-next {
    right: 3rem;
    z-index:100;
    height: auto;
}

.slick-next:before,
.slick-prev:before {
  content: "" !important;
}
`
const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    nextArrow: (
        <div>
            <div className="prev-slick-arrow">
                <IconContext.Provider
                    value={{
                    color: "white",
                    className: "w-16 h-16 inline-block"
                }}><IoIosArrowForward/></IconContext.Provider>
            </div>
        </div>
    ),
    prevArrow: (
        <div>
            <div className="prev-slick-arrow">
                <IconContext.Provider
                    value={{
                    color: "white",
                    className: "w-16 h-16 inline-block"
                }}><IoIosArrowBack/></IconContext.Provider>
            </div>
        </div>
    )
};

const Landing = ({intl}) => {
    const data = useStaticQuery(graphql `
    query landingPage {
      backgroundTremblant: file(relativePath: {eq: "tremblant-wc-bg.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
        }
      }
      backgroundRodeo: file(relativePath: {eq: "rodeo-background.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
        }
      }
    backgroundRelais: file(relativePath: {eq: "relais-background.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH placeholder:BLURRED)
       }
      }
    }
        `)

    const bgImage1 = data.backgroundRodeo.childImageSharp.gatsbyImageData
    const bgImage2 = data.backgroundRelais.childImageSharp.gatsbyImageData
    const bgImage3 = data.backgroundTremblant.childImageSharp.gatsbyImageData

    return (
        <section id="home-landing">

            <SliderWrap>
                <Slider {...settings}>
                    <BgImage className="h-hero" image={bgImage1}>
                        <div
                            className="bg-gradient-to-t lg:bg-gradient-to-tr from-black via-transparent to-transparent h-full w-full absolute z-0"></div>
                        <div className="flex h-full items-center relative">
                            <div className="p-10 h-full text-white flex flex-col justify-end">
                                <h1><FormattedMessage id="calgary_info.header"/></h1>
                                <a
                                    class="bg-rodeoGold text-white font-ultra mt-4 uppercase flex items-center justify-center w-64 h-12"
                                    href=""><FormattedMessage id="learnmore"/></a>
                            </div>
                        </div>
                    </BgImage>
                    <BgImage className="h-hero" image={bgImage2}>
                        <div
                            className="bg-gradient-to-t lg:bg-gradient-to-tr from-black via-transparent to-transparent h-full w-full absolute"></div>
                        <div className="flex h-full items-center relative">
                            <div className="p-10 h-full text-white flex flex-col justify-end">
                                <h1><FormattedMessage id="relais_info.header"/></h1>
                                <a
                                    class="bg-fcOrange text-white font-ultra mt-4 uppercase flex items-center justify-center w-64 h-12"
                                    href=""><FormattedMessage id="learnmore"/></a>
                            </div>
                        </div>
                    </BgImage>
                    <BgImage className="h-hero" image={bgImage3}>
                        <div
                            className="bg-gradient-to-t lg:bg-gradient-to-tr from-black via-transparent to-transparent h-full w-full absolute"></div>
                        <div className="flex h-full items-center relative">
                            <div className="p-10 h-full text-white flex flex-col justify-end">
                                <h1><FormattedMessage id="tremblant_info.header"/></h1>
                                <a
                                    class="bg-fcPurple text-white font-ultra mt-4 uppercase flex items-center justify-center w-64 h-12"
                                    href=""><FormattedMessage id="learnmore"/></a>
                            </div>
                        </div>
                    </BgImage>
                </Slider>
            </SliderWrap>
        </section>
    )
};

export default injectIntl(Landing)
