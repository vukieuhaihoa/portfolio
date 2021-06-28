import React from 'react';
import PropTypes from 'prop-types';
import classes from './main-header.styles.module.scss';
import { Layout } from 'antd';
const { Header } = Layout;
MainHeader.propTypes = {

};

function MainHeader(props) {
  return (
    <Header>
      <div className="container-fluid">
        <div className={classes.logo}>
          Logo.
        </div>
      </div>
    </Header>
  );
}

export default MainHeader;