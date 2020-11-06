import React, { Component } from 'react';
import BodyContent from './BodyContent';
import BodyContentHeader from './BodyContentHeader';

export default class DashboardBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabState: 0,
        }
    }

    setTab = (tabId) => {
        this.setState({tabState: tabId});
    }

    render(){
        return (
            <div className="container-fluid dashboard_item">
                <BodyContentHeader tabState={this.state.tabState} handler={this.setTab} />
                <BodyContent tabState={this.state.tabState} />
            </div>
        )
    }
}