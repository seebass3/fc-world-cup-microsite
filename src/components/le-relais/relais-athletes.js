import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import {GatsbyImage} from 'gatsby-plugin-image';

const RelaisAthletes = () => {
    const data = useStaticQuery(graphql ` 
    query relaisAthletes {
      marion: file(relativePath: {eq: "relais-athletes/marion.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      lewis: file(relativePath: {eq: "relais-athletes/lewis.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      miha: file(relativePath: {eq: "relais-athletes/miha.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      emile: file(relativePath: {eq: "relais-athletes/emile.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      flavie: file(relativePath: {eq: "relais-athletes/flavie.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      naomy: file(relativePath: {eq: "relais-athletes/naomy.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }     
    `);

    return (
        <section id="athletes" className="container mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
                <h1>
                    <FormattedMessage id="athletes"/>
                </h1>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.marion.childImageSharp.gatsbyImageData}
                            alt="Marion Thenault"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Marion Thénault</p>
                        <a
                            className="bg-fcOrange pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/marion-thenault/" rel="noopener noreferrer" to target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.lewis.childImageSharp.gatsbyImageData}
                            alt="Lewis Irving"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Lewis Irving</p>
                        <a
                            className="bg-fcOrange pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/lewis-irving/" rel="noopener noreferrer" to target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.miha.childImageSharp.gatsbyImageData}
                            alt="Miha Fontaine"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Miha Fontaine</p>
                        <a
                            className="bg-fcOrange pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/miha-fontaine/" rel="noopener noreferrer" to target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.emile.childImageSharp.gatsbyImageData}
                            alt="Émile Nadeau"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Émile Nadeau</p>
                        <a
                            className="bg-fcOrange pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/emile-nadeau/" rel="noopener noreferrer" to target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.flavie.childImageSharp.gatsbyImageData}
                            alt="Flavie Aumond"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Flavie Aumond</p>
                        <a
                            className="bg-fcOrange pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/flavie-aumond/" rel="noopener noreferrer" to target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.naomy.childImageSharp.gatsbyImageData}
                            alt="Naomy Boudreau-Guertin"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Naomy Boudreau-Guertin</p>
                        <a
                            className="bg-fcOrange pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/naomy-boudreau-guertin/" rel="noopener noreferrer" to target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default RelaisAthletes;
