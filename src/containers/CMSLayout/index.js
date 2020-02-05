import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard, Setting, ListUser, DetailUser } from "../../view/page cms";

const CMSHeader = React.lazy(() => import('./CMSHeader'));

class CMSLayout extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
            <div className="app-cms">
                <CMSHeader></CMSHeader>
                <div className="app-body-cms">
                    <main className="main-cms">
                        <Suspense fallback={this.loading()}>
                            <Switch>
                                <Route exact path="/cms/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route path="/cms/setting">
                                    <Setting />
                                </Route>
                                <Route exact path="/cms/list-user">
                                    <ListUser />
                                </Route>
                                <Route path="/cms/list-user/:id">
                                    <DetailUser />
                                </Route>
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </div>
        );
    }
}

export default CMSLayout;
