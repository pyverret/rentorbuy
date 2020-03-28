import React from 'react';
import {percentageIncrease, investmentAmount, compoundInterest} from '../utils/number';

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
                        <th>Worth</th>
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
        let totalRentPaid = 0;

        for(var i = 1; i <= this.props.duration; i++) {
            rent = percentageIncrease(rent, this.props.increase, i);
            const rentYearly = (rent * 12).toFixed(2);
            totalRentPaid = (parseFloat(totalRentPaid) + parseFloat(rentYearly)).toFixed(2);
            const investment = investmentAmount(this.props.investment, i);
            const investmentTotalValue = compoundInterest(investment, this.props.growth, i);

            const row = <tr key={i}>
                <td className="year">{i}</td>
                <td className="rent">{rent}</td>
                <td className="rent-yearly">{rentYearly}</td>
                <td className="investment">{investment}</td>
                <td className="investment-value">{investmentTotalValue}</td>
                <td className="value">{(parseFloat(investmentTotalValue) - parseFloat(totalRentPaid)).toFixed(2)}</td>
            </tr>;

            rentRows.push(row);        
        }

        return rentRows;
    }
}

export default RentTable;