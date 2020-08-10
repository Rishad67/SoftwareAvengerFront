import React, { Component } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopNavbar from '../Components/TopNavbar';

export default class Projects extends Component {
    render() {
        return (
            <>
                <TopNavbar/>
                <section className="white-bg container-fluid">
                    <h2 style={{textAlign: 'center',margin: 'auto'}}>Comming soon</h2>
                </section>
                <Footer/>
            </>
        )
    }
}
