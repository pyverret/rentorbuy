import React from 'react';

class BuyTable extends React.Component {
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
                <tr>
                    <th>Year</th>
                    <th>Monthly Rent</th>
                    <th>Yearly Rent</th>
                    <th>Amount Invested</th>
                    <th>Value of Investment</th>
                    <th>Worth</th>
                </tr>
                </tbody>
            </table>;
    }
}

export default BuyTable;