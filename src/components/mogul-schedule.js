import React, {Fragment} from "react";
import {useStaticQuery, graphql} from "gatsby";

const MogulSchedule = () => {
    const data = useStaticQuery(graphql `
    query mogulSchedule {
        allIcal(filter: {sourceInstanceName: {eq: "moguls"}}) {
          nodes {
            start(formatString: "MMMM, DD YYYY")
            location
            summary
            description
          }
        }
      }
`)

    const info = data.allIcal.nodes

    return (
        <section id="mogul-schedule">
            <div className="container mx-auto">
                <div className="bg-white shadow-md rounded-lg my-6 overflow-y-scroll h-half">
                    <table className="text-left w-full">
                        <thead className="bg-fisBlue">
                            <tr>
                                <th
                                    className="py-4 px-6 bg-grey-lightest font-bold uppercase text-white border-b border-grey-light">Date</th>
                                <th
                                    className="py-4 px-6 bg-grey-lightest font-bold uppercase text-white border-b border-grey-light">Location</th>
                                <th
                                    className="py-4 px-6 bg-grey-lightest font-bold uppercase text-white border-b border-grey-light">Event</th>
                                <th
                                    className="py-4 px-6 bg-grey-lightest font-bold uppercase text-white border-b border-grey-light">FIS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((item, i) => {
                                return (
                                    <Fragment>
                                        <tr key={i}>
                                            <td>{item.start}</td>
                                            <td>{item.location}</td>
                                            <td>{item
                                                    .summary
                                                    .substring(item.summary.indexOf('FS') + 2)}</td>
                                            <td>
                                                <a
                                                    class="bg-fisYellow text-white text-xs font-ultra uppercase flex items-center justify-center w-32 h-8"
                                                    href={item
                                                    .description
                                                    .substring(item.description.indexOf("Startlist:") + 12, item.description.indexOf("Organisation") - 1)}>Event Info</a>
                                            </td>
                                        </tr>
                                    </Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    )
};

export default MogulSchedule