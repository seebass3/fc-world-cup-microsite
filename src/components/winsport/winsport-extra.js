import React, {useState} from 'react';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import {GatsbyImage} from 'gatsby-plugin-image';
import {useStaticQuery, graphql} from 'gatsby';
import {Modal} from '../modal';
const WinsportExtra = () => {
    const data = useStaticQuery(graphql `
    query winsportExtra{
      backgroundOne: file(relativePath: {eq: "covid-winsport.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      backgroundTwo: file(relativePath: {eq: "winsport-wc.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
`);

    const bgImage = data.backgroundOne.childImageSharp.gatsbyImageData;
    const bgImage2 = data.backgroundTwo.childImageSharp.gatsbyImageData;

    const [showModal,
        setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev)
    };

    const contentCovid = <div className="bg-gray-100 p-10 h-half overflow-y-scroll">
        <div className="flex flex-col items-center">
            <h1 className="mb-12">COVID-19</h1>
            <p>Canada's Covid-19 Management Plan for the Snow Rodeo Freeski Halfpipe FIS
                World Cups with specific information to applying to the host city of Calgary
                Alberta will be released closer to the event date.
            </p>
            <p>Please check back here later.</p>
        </div>
    </div>;

    return (
        <section id="page-footer" className="bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative extra-item__link" onClick={openModal}>
                    <GatsbyImage
                        objectFit="cover"
                        className="h-96 extra-item__img"
                        image={bgImage}
                        alt="Covid Background Image"/>
                    <div
                        className="flex h-full items-center justify-center absolute top-0 left-0 right-0 bottom-0 p-10">
                        <h2 className="text-white text-center uppercase">COVID-19</h2>
                    </div>
                </div>

                <a
                    href="https://www.fis-ski.com/DB/freestyle-freeski/freeski/calhttps://www.fis-ski.com/DB/freestyle-freeski/moguls-aerials/calendar-results.html?eventselection=&place=&sectorcode=FS&seasoncode=2022&categorycode=WC&disciplinecode=HP&gendercode=&racedate=&racecodex=&nationcode=&seasonmonth=X-2022&saveselection=-1&seasonselection="
                    rel="noopener noreferrer"
                    to
                    target="_blank"
                    className="relative extra-item__link">
                    <GatsbyImage
                        objectFit="cover"
                        className="h-96 extra-item__img"
                        image={bgImage2}
                        alt="WC Background Image"/>
                    <div className="square-bg"/>
                    <div
                        className="flex h-full items-center justify-center absolute top-0 left-0 right-0 bottom-0 p-10">
                        <h2 className="text-white text-center uppercase"><FormattedMessage id="fis_calendar.schedule"/></h2>
                    </div>
                </a>
            </div>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                modalContent={contentCovid}/>
        </section>
    )
};

export default WinsportExtra;