import * as React from 'react';

import Layout from '../components/layout';
import WinsportLanding from '../components/winsport/winsport-landing';
import WinsportInfo from '../components/winsport/winsport-info';
import WinsportSchedule from '../components/winsport/winsport-schedule';
import WinsportAthletes from '../components/winsport/winsport-athletes';
import WinsportContact from '../components/winsport/winsport-contact';
import WinsportPartners from '../components/winsport/winsport-partners';
import WinsportExtra from '../components/winsport/winsport-extra';
import {useIntl} from 'gatsby-plugin-react-intl';
import Seo from '../components/seo';

const WinsportPage = () => {
    const intl = useIntl();
    return (
        <Layout>
            <Seo
                lang={intl.locale}
                title={intl.formatMessage({id: "winsport_info.sub_header"})}
                decription={intl.formatMessage({id: "winsport_info.text"})}
                keywords={[
                `snow rodeo`,
                'winsport world cup',
                'calgary',
                'halfpipe',
                `freestyle canada`,
                `freestyle events`
            ]}/>
            <WinsportLanding/>
            <WinsportInfo/>
            <WinsportSchedule/>
            <WinsportAthletes/>
            <WinsportContact/>
            <WinsportPartners/>
            <WinsportExtra/>
        </Layout>
    )
};

export default WinsportPage;