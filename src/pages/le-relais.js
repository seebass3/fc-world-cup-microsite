import * as React from 'react';

import Layout from '../components/layout';
import RelaisLanding from '../components/le-relais/relais-landing';
import RelaisInfo from '../components/le-relais/relais-info';
import RelaisSchedule from '../components/le-relais/relais-schedule';
import Watch from '../components/watch';
import RelaisAthletes from '../components/le-relais/relais-athletes';
import RelaisContact from '../components/le-relais/relais-contact';
import RelaisPartners from '../components/le-relais/relais-partners';
import RelaisExtra from '../components/le-relais/relais-extra';
import {useIntl} from 'gatsby-plugin-react-intl';
import Seo from '../components/seo';

const LeRelaisPage = () => {
    const intl = useIntl();
    return (
        <Layout>
            <Seo
                lang={intl.locale}
                title={intl.formatMessage({id: "relais_info.sub_header"})}
                decription={intl.formatMessage({id: "relais_info.text"})}
                keywords={['le relais world cup', 'le relais', 'moguls', 'freestyle canada', 'freestyle events']}/>
            <RelaisLanding/>
            <RelaisInfo/>
            <RelaisSchedule/>
            <Watch color="bg-fcOrange" stream=""/>
            <RelaisAthletes/>
            <RelaisContact/>
            <RelaisPartners/>
            <RelaisExtra/>
        </Layout>
    )
};

export default LeRelaisPage;