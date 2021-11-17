import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {FormattedMessage} from "gatsby-plugin-react-intl"
import {BgImage} from 'gbimage-bridge';

const WinsportInfo = () => {
    const data = useStaticQuery(graphql `
    query winsportInfo{
      image: file(relativePath: {eq: "rodeo-card.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
        `)

    const bgImage = data.image.childImageSharp.gatsbyImageData

    return (
        <section id="event-info">
            <div className="container mx-auto">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center py-10">
                    <div className="h-96 lg:h-full w-full rounded-lg overflow-hidden">
                        <BgImage
                            objectFit="contain"
                            image={bgImage}
                            alt="Winsport"
                            style={{
                            minWidth: "100%",
                            minHeight: "100%"
                        }}/>
                    </div>
                    <div className="lg:px-8 py-8 mx-auto">
                        <div className="hero-winsport__heading">
                            <h1><FormattedMessage id="winsport_info.header"/></h1><br/>
                            <h2><FormattedMessage id="winsport_info.sub_header"/></h2>
                        </div>
                        <p><FormattedMessage id="winsport_info.text"/></p>
                        <a
                            className="bg-rodeoGold text-white font-ultra mt-8 uppercase flex items-center justify-center w-64 h-12"
                            href="https://www.shredthenorth.ca/en/events/snow-rodeo/ski/info/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="winsport_info.button"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WinsportInfo
