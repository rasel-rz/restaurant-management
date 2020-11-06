import React, { Component } from 'react';

export default class ManualCard extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 databox ">
                <div className="data_status move_table">
                    <span>입장가능</span>
                </div>
                <div className="card shadow mb-4 dashboard_item_shadow br-10 move_table_databox">
                    <h3 className="card_head">대기 1</h3>

                    <div className="card_data">
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">대기시작시간</label>
                            <div className="col-sm-8">
                                <p className="data_time">
                                    <span className="data_date">2020-09-20</span>
                                    <span className="data_hour">10:00:23</span>
                                </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">연락처</label>
                            <div className="col-sm-8">
                                <p className="data_time data_number">
                                    010-6589-9665
                                                    </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">대기시작시간</label>
                            <div className="col-sm-8">
                                <p className="data_time">
                                    2명
                                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="card_footer_button">
                        <a className="btn btn-dark cancle_w_list_btn" href="#" role="button">대기취소</a>
                        <a className="btn btn-danger" href="#" role="button">호출</a>
                    </div>
                </div>
            </div>
        )
    }
}