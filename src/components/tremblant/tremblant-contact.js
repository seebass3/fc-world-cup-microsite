import React from 'react';
import TremblantForm from './tremblant-form';
import {FormattedMessage} from 'gatsby-plugin-react-intl';

const TremblantContact = () => (
    <section id="contact">
        <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-fcPurple flex lg:justify-center">
                <div className="flex flex-col px-10 py-6 justify-center">
                    <div className="flex my-4">
                        <h1 className="text-white"><FormattedMessage id="contact.requests"/></h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white"><FormattedMessage id="contact.freestyle"/></p>
                        <a href="mailto:sabrina@freestylecanada.ski">
                            <p className="text-white font-bold underline">sabrina@freestylecanada.ski</p>
                        </a>
                        <p className="text-white mb-1 underline"><FormattedMessage id="contact.include"/></p>
                        <ul className="text-white list-disc">
                            <li><FormattedMessage id="contact.include_name"/></li>
                            <li><FormattedMessage id="contact.include_contact"/></li>
                            <li><FormattedMessage id="contact.include_media"/></li>
                        </ul>
                    </div>
                    <a
                        className="bg-black text-white font-ultra uppercase flex items-center justify-center w-64 h-12"
                        href="https://freestylecanada.ski/wp-content/uploads/2021/12/FIS_Covid-19_Media_Guidelines_2021-22.pdf"
                        rel="noopener noreferrer"
                        target="_blank"><FormattedMessage id="contact.guidlines"/></a>
                </div>
            </div>
            <div className="bg-black">
                <TremblantForm/>
            </div>
        </div>
    </section>
);

export default TremblantContact