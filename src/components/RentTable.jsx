import React from 'react';

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

        for(var i = 1; i <= this.props.duration; i++) {
            rentRows.push(<tr key={i}><td>{i}</td></tr>);        
        }

        return rentRows;
    }
}

export default RentTable;