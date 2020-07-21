import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import './styles/global.css';

export default function App() {
    return(
        <div>
            <Router>
                <Nav />
                <div className='content'>
                    <Switch>
                        <Route path='/portfolio' exact component={Portfolio} />
                        <Route path='/contact' exact component={Contact} />
                        <Route component={About} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}