import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"
import {BgImage} from 'gbimage-bridge';

const TremblantInfo = ({intl}) => {
    const data = useStaticQuery(graphql `
    query tremblantInfo{
      image: file(relativePath: {eq: "tremblant-card.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
        `)

    const bgImage = data.image.childImageSharp.gatsbyImageData

    return (
        <section id="relais-info">
            <div className="container mx-auto">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center py-10">
                    <div className="h-96 lg:h-full w-full rounded-lg overflow-hidden">
                        <BgImage
                            objectFit="contain"
                            image={bgImage}
                            alt="Mont Tremblant"
                            style={{
                            minWidth: "100%",
                            minHeight: "100%"
                        }}/>
                    </div>
                    <div className="lg:px-8 py-8 mx-auto">
                        <div className="hero-tremblant__heading">
                            <h1><FormattedMessage id="tremblant_info.header"/></h1><br/>
                            <h2><FormattedMessage id="tremblant_info.sub_header"/></h2>
                        </div>
                        <p><FormattedMessage id="tremblant_info.text"/></p>
                        <p><FormattedMessage id="coming_soon"/></p>
                        <a
                            className="bg-fcPurple text-white font-ultra mt-8 uppercase flex items-center justify-center w-64 h-12"
                            href=""><FormattedMessage id="soon_button"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default injectIntl(TremblantInfo)
