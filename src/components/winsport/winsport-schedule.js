import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-react-intl';

const WinsportSchedule = () => {
    return (
        <section id="schedule" className="container mx-auto py-12">
            <div className="text-center pb-12">
                <h1>
                    <FormattedMessage id="navigation.schedule"/>
                </h1>
            </div>
            <div className="w-full">
                <div className="bg-white shadow-md">
                    <table className="text-left w-full">
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="monday"/>, Dec 27 2021</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="arrival"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="tuesday"/>, Dec 28 2021</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="training"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="wednesday"/>, Dec 29 2021</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="training"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="thursday"/>, Dec 30 2021</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="qualifications"/></td>
                            </tr>
                            <tr>
                                <td><FormattedMessage id="finals_night"/></td>

                            </tr>
                        </tbody>
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="friday"/>, Dec 31 2021</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="training"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="saturday"/>, Jan 1 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="qualifications"/></td>
                            </tr>
                            <tr>
                                <td><FormattedMessage id="finals_night"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="sunday"/>, Jan 2 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="reserve"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-rodeoGold bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="monday"/>, Jan 3 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="departure"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a
                className="bg-rodeoGold text-white font-ultra mt-8 mx-auto uppercase flex items-center justify-center w-64 h-12"
                href="https://medias3.fis-ski.com/pdf/2022/FS/8150/2022FS8150PROG.pdf"
                rel="noopener noreferrer"
                to
                target="_blank"><FormattedMessage id="full_schedule"/></a>
        </section>

    )
};

export default WinsportSchedule;