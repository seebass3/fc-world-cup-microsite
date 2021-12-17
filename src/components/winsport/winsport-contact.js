import React from 'react';
import WinsportForm from './winsport-form';
import {FormattedMessage} from 'gatsby-plugin-react-intl';

const WinsportContact = () => (
    <section id="contact">
        <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-rodeoGold flex lg:justify-center">
                <div className="flex flex-col px-10 py-6 justify-center">
                    <div className="flex my-4">
                        <h1 className="text-white"><FormattedMessage id="contact.requests"/></h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white"><FormattedMessage id="contact.form_1"/></p>
                        <p className="text-white"><FormattedMessage id="contact.form_2"/></p>
                        <p className="text-white"><FormattedMessage id="contact.form_3"/></p>
                    </div>
                    <div className="flex mt-4 mb-4 flex-wrap">
                        <a
                            className="bg-black text-white font-ultra uppercase flex items-center justify-center w-64 h-12 mr-4 mb-4"
                            href="https://forms.gle/CzszinQxV6PMJa3j9"
                            rel="noopener noreferrer"
                            target="_blank"><FormattedMessage id="contact.click"/></a>
                             <a
                            className="bg-black text-white font-ultra uppercase flex items-center justify-center w-64 h-12"
                            href="https://freestylecanada.ski/wp-content/uploads/2021/12/FIS_Covid-19_Media_Guidelines_2021-22.pdf"
                            rel="noopener noreferrer"
                            target="_blank"><FormattedMessage id="contact.guidlines"/></a>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <WinsportForm/>
            </div>
        </div>
    </section>
);

export default WinsportContact