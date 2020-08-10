import React, { Component } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopNavbar from '../Components/TopNavbar';
import TechnologySection from '../Components/TechnologySection';
import OurService from '../Image/connected-system.svg';

export default class Home extends Component {
    render() {
        return (
            <>
                <TopNavbar/>
                <Header/>
                <section className="grad-bg container-fluid" id="about">
                    <div className="row">
                        <div className='col-md-6'>
                            
                        </div>
                        <div className='col-md-6'>
                            <h1 className="swing-right white-text">Who we Are?</h1>
                        </div>
                    </div>
                </section>
                <section className="white-bg container-fluid" id="services">
                    <h1 className="text-center swing-left">Our Services</h1>
                    <div className="row">
                        <div className='col-md-6'>
                            <img src={OurService} width="80%" alt=""/>
                        </div>
                        <div className='col-md-6'>

                        </div>
                    </div>
                </section>
                <section className="why-bg container-fluid">
                    <div className="row">
                        <div className='col-md-6'>

                        </div>
                        <div className='col-md-6'>
                            <h1 className="swing-right why-work-heading">Why work with us?</h1>
                        </div>
                    </div>
                </section>
                <section className="white-bg container-fluid">
                    <h1 className="text-center swing-left">Technologies We Use</h1>
                    <div>
                        <TechnologySection/>
                    </div>
                </section>
                <section className="white-bg container-fluid">
                    <h1 className="text-center swing-right">Our Vission</h1>
                    <div className="row">
                        <div className='col-md-6'>

                        </div>
                        <div className='col-md-6'>
                            
                        </div>
                    </div>
                </section>
                <section className="white-bg" id="contact">
                    <h1 className="text-center swing-left">Send A Proposal</h1>
                </section>
                <Footer/>
            </>
        )
    }
}