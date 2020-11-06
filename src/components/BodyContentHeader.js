import React, { Component } from 'react';

export default class BodyContentHeader extends Component {

    setTab = (tabId) => {
        this.props.handler(tabId);
    }

    render() {
        // const { tabState } = this.state;
        return (
            <div className="row">
                        <div className="col-xl-12 col-md-12 mb-12 mb-3">
                            <div className="card h-100 py-2 dashboard_header ">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary">
                                                <nav>
                                                    <div className="nav nav-tabs nav_tabs_custom" id="nav-tab"
                                                        role="tablist">
                                                        <a className={(this.props.tabState == 0) ? "nav-item nav-link nav_link_custom active pr-5": "nav-item nav-link nav_link_custom pr-5"}
                                                            id="nav-home-tab" data-toggle="tab" onClick={this.setTab.bind(this, 0)}
                                                            role="tab" aria-controls="nav-home"
                                                            aria-selected="true">매장대기</a>
                                                        <a className={(this.props.tabState == 1) ? "nav-item nav-link nav_link_custom active": "nav-item nav-link nav_link_custom"}
                                                            id="nav-profile-tab" data-toggle="tab" onClick={this.setTab.bind(this, 1)}
                                                            role="tab" aria-controls="nav-profile"
                                                            aria-selected="false">예약대기</a>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}