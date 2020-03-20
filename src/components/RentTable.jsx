import React from 'react';
import {percentageIncrease} from '../utils/number';

class RentTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <table>
                <tbody>
                    {this.createRows()}
                </tbody>
            </table>;
    }

    createRows () {
        const rentRows = [];
        let rent = this.props.rent;

        for(var i = 1; i <= this.props.duration; i++) {
            rent = percentageIncrease(rent, this.props.increase, i);

            const row = <tr key={i}>
                <td className="year">{i}</td>
                <td className="rent">{rent.toFixed(2)}</td>
            </tr>;
            rentRows.push(row);        
        }

        return rentRows;
    }
}

export default RentTable;