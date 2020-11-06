import React, { Component } from 'react';
import ManualCard from './ManualCard';

export default class Manual extends Component{
    render() {
        return (
            <div className="row data_row">
                <ManualCard />
                <ManualCard />
                <ManualCard />
                <ManualCard />
                <ManualCard />
                <ManualCard />
                <ManualCard />
            </div>
        )
    }
}