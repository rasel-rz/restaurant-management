import React, { Component } from 'react';

export default class QrCard extends Component {
    render() {
        const {phoneNumber, numberOfPerson, createdAt, serialNumber, isFirst} = this.props.data
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 databox">
                <div className={"data_status "+ (isFirst?"move":"waiting")  +"_table"}>
                    <span>입장가능</span>
                </div>
                <div className={"card shadow mb-4 dashboard_item_shadow br-10 "+ (isFirst?"move":"waiting") +"_table_databox"}>
                    <h3 className="card_head">대기 {serialNumber}</h3>

                    <div className="card_data">
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">대기시작시간</label>
                            <div className="col-sm-8">
                                <p className="data_time">
                                    <span className="data_date">{createdAt}</span>
                                </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">연락처</label>
                            <div className="col-sm-8">
                                <p className="data_time data_number">
                                    {phoneNumber}
                                                    </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">대기시작시간</label>
                            <div className="col-sm-8">
                                <p className="data_time">
                                    {numberOfPerson}명
                                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="card_footer_button">
                        <a className="btn btn-default t_t_table_btn" href="#" role="button">입장</a>
                        <a className="btn btn-dark cancle_w_list_btn" href="#" role="button">대기취소</a>
                        <a className="btn btn-danger" href="#" role="button">호출</a>
                    </div>
                </div>
            </div>
        )
    }
}