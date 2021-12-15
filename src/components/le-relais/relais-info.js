import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {FormattedMessage} from "gatsby-plugin-react-intl"
import {BgImage} from 'gbimage-bridge';

const RelaisInfo = () => {
    const data = useStaticQuery(graphql `
    query relaisInfo{
      thumbnail: file(relativePath: {eq: "relais-wc-bg.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
`);

    const bgImage = data.thumbnail.childImageSharp.gatsbyImageData;

    return (
        <section id="event-info">
            <div className="container mx-auto">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center py-10">
                    <div className="h-96 lg:h-full w-full rounded-lg overflow-hidden">
                        <BgImage
                            objectFit="contain"
                            image={bgImage}
                            alt="Le Relais"
                            style={{
                            minWidth: "100%",
                            minHeight: "100%"
                        }}/>
                    </div>
                    <div className="lg:px-8 py-8 mx-auto">
                        <div className="hero-relais__heading">
                            <h1><FormattedMessage id="relais_info.header"/></h1><br/>
                            <h2><FormattedMessage id="relais_info.sub_header"/></h2>
                        </div>
                        <p><FormattedMessage id="relais_info.text"/></p>
                        <a
                            className="bg-fcOrange text-white font-ultra mt-8 uppercase flex items-center justify-center w-64 h-12"
                            href="https://medias3.fis-ski.com/pdf/2022/FS/8158/2022FS8158INVI.pdf" rel="noopener noreferrer" to target="_blank"><FormattedMessage id="relais_info.button"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default RelaisInfo;
