import React from 'react';
import FooterBg from '../Image/footer-bg.svg';

function Footer() {
  return (
  <div className="Footer white-bg container-fluid">
    <div className="row">
      <img src={FooterBg} className="footer-bg" alt="" width="100%" height="500px"/>
      <div className="col-sm-12 col-md-7">
        <h1>Software Avenger</h1>
        <h4>Gohail Road, Bogra Sadar, Bogra-5800</h4>
        <h4>Bangladesh</h4>
      </div>
      <div className="col-sm-12 col-md-5">
        <h4>Email: avenger.software@gmail.com</h4>
        <h4>Contact: 01767012839, 01521443012, 01516139691, 01716746328</h4>
        <h4>Privacy Policy</h4>
        <h4>Terms & Condition</h4>
      </div>
    </div>
  </div>
  );
}

export default Footer;
