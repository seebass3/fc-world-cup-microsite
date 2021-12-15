import * as React from 'react';

import Layout from '../components/layout';
import TremblantLanding from '../components/tremblant/tremblant-landing';
import TremblantInfo from '../components/tremblant/tremblant-info';
import TremblantSchedule from '../components/tremblant/tremblant-schedule';
import TremblantAthletes from '../components/tremblant/tremblant-athletes';
import TremblantContact from '../components/tremblant/tremblant-contact';
import TremblantPartners from '../components/tremblant/tremblant-partners';
import TremblantExtra from '../components/tremblant/tremblant-extra';
import {useIntl} from 'gatsby-plugin-react-intl';
import Seo from '../components/seo';

const TremblantPage = () => {
    const intl = useIntl();
    return (
        <Layout>
            <Seo
                lang={intl.locale}
                title={intl.formatMessage({id: "tremblant_info.sub_header"})}
                decription={intl.formatMessage({id: "tremblant_info.text"})}
                keywords={['tremblant world cup', 'tremblant', 'moguls', 'freestyle canada', 'freestyle events']}/>
            <TremblantLanding/>
            <TremblantInfo/>
            <TremblantSchedule/>
            <TremblantAthletes/>
            <TremblantContact/>
            <TremblantPartners/>
            <TremblantExtra/>
        </Layout>
    )
}

export default TremblantPage;