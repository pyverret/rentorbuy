import React from 'react';
import {percentageIncrease, compoundInterest} from '../utils/number';

class RentTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Monthly Rent</th>
                        <th>Yearly Rent</th>
                        <th>Amount Invested</th>
                        <th>Value of Investment</th>
                    </tr>
                </thead>
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
            const rentYearly = (rent * 12).toFixed(2);
            const investment = ((this.props.investment * 12) * i).toFixed(2);

            const row = <tr key={i}>
                <td className="year">{i}</td>
                <td className="rent">{rent}</td>
                <td className="rent-yearly">{rentYearly}</td>
                <td className="investment">{investment}</td>
                <td className="investment-value">{compoundInterest(investment, this.props.growth, i)}</td>
            </tr>;
            rentRows.push(row);        
        }

        return rentRows;
    }
}

export default RentTable;