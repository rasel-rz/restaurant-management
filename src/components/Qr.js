import React, { Component } from 'react';
import axios from 'axios'
import QrCard from './QrCard';

export default class Qr extends Component{
    constructor(props){
        super(props);
        this.state = {
            qrData: [],
        }
    }

    loadQrData = () => {
        const url = "http://localhost:4000/api/reservations/qr-code";
        axios.get(url)
            .then(response => {
                this.setState({qrData: response.data.data});
                console.log(response.data);
            })
    }

    componentDidMount = () => {
        this.loadQrData();
    }


    render() {
        return (
            <div className="row data_row">
                { this.state.qrData.map((qr, index) => {
                    qr.isFirst = (index == 0)? true: false;
                    return (
                        <QrCard key={qr._id} data={qr} />
                    )
                })

                }
            </div>
        )
    }
}