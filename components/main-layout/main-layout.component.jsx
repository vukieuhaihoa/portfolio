import React from 'react';
import PropTypes from 'prop-types';
import classes from './main-layout.styles.module.scss';
import { Layout } from 'antd';
import MainHeader from './main-header/main-header.component';
import MainFooter from './main-footer/main-footer.component';
const { Content } = Layout;

MainLayout.propTypes = {

};

function MainLayout(props) {
  return (
    <Layout>
      <MainHeader />
      <Content>
        {props.children}
      </Content>
      <MainFooter />
    </Layout>
  );
}

export default MainLayout;