import React from 'react';
import PropTypes from 'prop-types';
import classes from './main-footer.styles.module.scss';
import { Layout } from 'antd';
const { Footer } = Layout;
MainFooter.propTypes = {

};

function MainFooter(props) {
  return (
    <Footer>
      <div className="container-fluid">
        <div className={classes.logo}>
          Logo.
        </div>
        <div className={classes.socialContact}>
          <ul className={classes.list}>
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className={classes.copyRight}>
          <p>Copyright © 2021 HaiHoa</p>
        </div>
      </div>
    </Footer>
  );
}

export default MainFooter;