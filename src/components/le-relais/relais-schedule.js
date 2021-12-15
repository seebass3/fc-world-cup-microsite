import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-react-intl';

const RelaisSchedule = () => {
    return (
        <section id="schedule" className="container mx-auto lg:py-12">
            <div className="text-center pb-12">
                <h1>
                    <FormattedMessage id="navigation.schedule"/>
                </h1>
            </div>
            <div className="w-full">
                <div className="bg-white shadow-md">
                    <table className="text-left w-full">
                        <thead className="bg-fcOrange bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="saturday"/>, Jan 01 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="arrival"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-fcOrange bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="sunday"/>, Jan 02 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="training"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-fcOrange bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="monday"/>, Jan 03 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="training"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-fcOrange bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="tuesday"/>, Jan 04 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="training"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-fcOrange bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="wednesday"/>, Jan 05 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><FormattedMessage id="qualifications"/></td>
                            </tr>
                            <tr>
                                <td><FormattedMessage id="finals"/></td>
                            </tr>
                        </tbody>
                        <thead className="bg-fcOrange bg-opacity-70 top-0">
                            <tr>
                                <th
                                    className="py-2 px-3 bg-grey-lightest uppercase text-white border-b border-grey-light"><FormattedMessage id="thursday"/>, Jan 06 2022</th>
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
                className="bg-fcOrange text-white font-ultra mt-8 mx-auto uppercase flex items-center justify-center w-64 h-12"
                href="https://medias3.fis-ski.com/pdf/2022/FS/8158/2022FS8158PROG.pdf"
                rel="noopener noreferrer"
                to
                target="_blank"><FormattedMessage id="full_schedule"/></a>
        </section>

    )
};

export default RelaisSchedule;