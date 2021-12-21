import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import {GatsbyImage} from 'gatsby-plugin-image';

const TremblantAthletes = () => {
    const data = useStaticQuery(graphql ` 
    query tremblantAthletes {
      mikael: file(relativePath: {eq: "tremblant-athletes/mikael.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      justine: file(relativePath: {eq: "tremblant-athletes/justine.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      sofiane: file(relativePath: {eq: "tremblant-athletes/sofiane.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      laurent: file(relativePath: {eq: "tremblant-athletes/laurent.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      chloe: file(relativePath: {eq: "tremblant-athletes/chloe.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      brenden: file(relativePath: {eq: "tremblant-athletes/brenden.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      gabriel: file(relativePath: {eq: "tremblant-athletes/gabriel.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      kerrian: file(relativePath: {eq: "tremblant-athletes/kerrian.jpg"}) {
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
                            image={data.mikael.childImageSharp.gatsbyImageData}
                            alt="Mikael Kingsbury"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Mikaël Kingsbury</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/mikael-kingsbury/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.justine.childImageSharp.gatsbyImageData}
                            alt="Justine Dufour-Lapointe"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Justine Dufour-Lapointe</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/justine-dufour-lapointe/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.sofiane.childImageSharp.gatsbyImageData}
                            alt="Sofiane Gagnon"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Sofiane Gagnon</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/sofiane-gagnon/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.laurent.childImageSharp.gatsbyImageData}
                            alt="Laurent Dumais"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Laurent Dumais</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/laurent-dumais/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.chloe.childImageSharp.gatsbyImageData}
                            alt="Chloe Dufour-Lapointe"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Chloé Dufour-Lapointe</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/chloe-dufour-lapointe/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.brenden.childImageSharp.gatsbyImageData}
                            alt="Brenden Kelly"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Brenden Kelly</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/brenden-kelly/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.gabriel.childImageSharp.gatsbyImageData}
                            alt="Gabriel Dufresne"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Gabriel Dufresne</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/gabriel-dufresne/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.kerrian.childImageSharp.gatsbyImageData}
                            alt="Kerrian Chunlaud"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Kerrian Chunlaud</p>
                        <a
                            className="bg-fcPurple pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/kerrian-chunlaud/" rel="noopener noreferrer" target="_blank"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default TremblantAthletes;
