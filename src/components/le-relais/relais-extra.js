import React, {useState} from 'react';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import {GatsbyImage} from 'gatsby-plugin-image';
import {useStaticQuery, graphql} from 'gatsby';
import {Modal} from '../modal';

const RelaisExtra = () => {
    const data = useStaticQuery(graphql `
    query relaisExtra{
      backgroundOne: file(relativePath: {eq: "covid-relais.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      backgroundTwo: file(relativePath: {eq: "relais-wc.jpg"}) {
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
        <div className="flex flex-col">
            <h1 className="mb-12 self-center">COVID-19</h1>
            <p>As of September 7, 2021, most foreign travelers are able to enter Canada IF
                the fulfillment of the requirements here are met:
            </p>
            <a
                href="https://travel.gc.ca/travel-covid/travel-restrictions/covid-vaccinated-travellers-enter
                ing-canada#determine-fully"
                rel="noopener noreferrer"
                to
                target="_blank"
                className="underline mb-6">
                https://travel.gc.ca/travel-covid/travel-restrictions/covid-vaccinated-travellers-enter
                ing-canada#determine-fully
            </a>
            <p className="font-bold">Currently you must have one of the following vaccines
                to be eligible for entry into Canada:
            </p>
            <p className="font-semibold">Accepted COVID-19 vaccines in Canada
            </p>
            <ul className="list-disc">
                <li>Pfizer-BioNTech (Comirnaty, tozinameran, BNT162b2)</li>
                <li>Moderna (mRNA-1273)</li>
                <li>AstraZeneca/COVISHIELD (ChAdOx1-S, Vaxzevria, AZD1222)</li>
                <li>Janssen/Johnson & Johnson (Ad26.COV2.S)</li>
            </ul>
            <p className="font-semibold">Vaccines &nbsp;<u>NOT</u>&nbsp; currently accepted for “fully vaccinated” status in Canada:
            </p>
            <ul className="list-disc">
                <li>Bharat Biotech (Covaxin, BBV152 A, B, C)</li>
                <li>Cansino (Convidecia, Ad5-nCoV)</li>
                <li>Gamalaya (Sputnik V, Gam-Covid-Vac)</li>
                <li>Sinopharm (BBIBP-CorV, Sinopharm-Wuhan)</li>
                <li>Sinovac (CoronaVac, PiCoVacc)</li>
                <li>Vector Institute (EpiVacCorona)</li>
                <li>Other</li>
            </ul>
            <p>
                Unfortunately, there are no special exemptions for entry into Canada. The list
                of accepted vaccines might expand in the future but we have no guarantee if that
                will happen or if so, when.
                <i>
                    <b>As such the best advice we can provide at this time is to ensure that your
                        athletes are fully vaccinated with one of the Canadian-approved vaccines.</b>
                </i>
            </p>
            <p className="font-bold">
                All travelers into Canada will need to:
            </p>
            <ul className="list-disc">
                <li>
                    have downloaded the “ArriveCan” app and filled out the “in app” information
                    within 72 hours of arrival into Canada;</li>
                <li>provide proof of a negative PCR test taken within 72 hours of arrival into
                    Canada;</li>
                <li>provide proof of “fully vaccinated status” with one of the recognized
                    Canadian vaccines.</li>
            </ul>
            <p>Currently in Canada there are some restrictions with respect to wearing of
                masks in indoor public places and providing of proof of vaccination to get into
                restaurants, etc. However, as is the case everywhere in the world, mandates and
                restrictions evolve rapidly and have changed frequently. As such we will provide
                an update as to the anticipated restrictions closer to the date of arrival for
                the events.</p>
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
                    href="https://www.fis-ski.com/DB/freestyle-freeski/freeski/calhttps://www.fis-ski.com/DB/freestyle-freeski/moguls-aerials/calendar-results.html?eventselection=&place=&sectorcode=FS&seasoncode=2022&categorycode=WC&disciplinecode=AE,AET&gendercode=&racedate=&racecodex=&nationcode=&seasonmonth=X-2022&saveselection=-1&seasonselection="
                    rel="noopener noreferrer" target="_blank"
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

export default RelaisExtra;