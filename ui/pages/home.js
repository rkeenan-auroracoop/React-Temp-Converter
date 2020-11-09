import React from 'react';
import Nav from '../components/nav';
import Logo from '../components/logo';
import About from '../components/about';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="mt-5">Temperature Converter</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}