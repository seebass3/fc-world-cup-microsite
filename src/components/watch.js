import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import PropTypes from "prop-types"
import {GatsbyImage} from 'gatsby-plugin-image';

const Watch = ({color, stream}) => {
    const data = useStaticQuery(graphql `
    query watch {
        cbc: file(relativePath: {eq: "cbc-logo.png"}) {
          childImageSharp {
            gatsbyImageData(width: 350)
          }
        }
      } 
`);

    const cbcLogo = data.cbc.childImageSharp.gatsbyImageData;

    return (
        <section id="watch">
            <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
                <div className="bg-black flex justify-center">
                    <div
                        className="flex flex-col px-10 py-24 justify-center items-center text-center">
                        <h1 className="text-white mb-3"><FormattedMessage id="watch.how"/></h1>
                        <p className="text-white"><FormattedMessage id="watch.brought"/></p>
                        <a href="https://www.cbc.ca/sports" rel="noopener noreferrer" target="_blank">
                            <GatsbyImage image={cbcLogo} alt="CBC Sports Logo"/>
                        </a>
                    </div>
                </div>
                <div className={`${color} flex justify-center`}>
                    <div className="flex flex-col px-10 py-24 justify-center items-center">
                        <h1 className="text-white mb-2"><FormattedMessage id="watch.broadcast"/></h1>
                        <div className="flex flex-wrap px-4 justify-center">
                            <a
                                href="https://www.cbc.ca/sports/broadcast"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="bg-black text-white font-ultra uppercase flex items-center justify-center w-64 h-12 m-2"><FormattedMessage id="navigation.schedule"/></a>
                            {/* <a
                                href={`${stream}`}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="bg-black text-white font-ultra uppercase flex items-center justify-center w-64 h-12 m-2"><FormattedMessage id="watch.stream"/></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

Watch.propTypes = {
    color: PropTypes.string.isRequired,
    stream: PropTypes.string.isRequired
}

export default Watch;