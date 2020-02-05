import React, {Component, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
// import { About, Contact, Home, Register, Login } from "../../view";

import { About, Contact, Home, Register, Login } from "../../view/page home"; // path này cũng đúng


const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


    render() {
        return (
            <div className="app">
                <DefaultHeader/>
                <div className="app-body">
                    <main className="main">
                        <Suspense fallback={this.loading()}>
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/contact">
                                    <Contact/>
                                </Route>
                                <Route path="/login">
                                    <Login/>
                                </Route>
                                <Route path="/register">
                                    <Register/>
                                </Route>
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
