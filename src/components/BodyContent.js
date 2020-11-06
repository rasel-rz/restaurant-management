import React, { Component } from 'react';
import Manual from './Manual';
import Qr from './Qr';

export default class BodyContent extends Component {
    render() {
        return (
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    {(this.props.tabState == 0) && <Qr />}
                    {(this.props.tabState == 1) && <Manual />}
                </div>
            </div>
        )
    }
}