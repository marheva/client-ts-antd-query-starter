import React from 'react';
import { Layout, LayoutHeader, LayoutContent, LayoutFooter } from '../../../../components/common/Layout';
import Footer from '../../Footer';
import Header from '../../Header';
import Main from '../../Main';


function HomeLayout({ children }: HomeLayoutPropsTypes): JSX.Element {
    return (
        <Layout>
            <LayoutHeader children={<Header />} />
            <LayoutContent children={<Main children={children} />} />
            <LayoutFooter children={<Footer />} />
        </Layout>
    );
}

export default HomeLayout


