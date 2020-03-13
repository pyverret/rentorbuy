import React from 'react';
import NumberInput from './components/NumberInput';

class Home extends React.Component {
    render () {
        return <div>
                <p>Home Text</p>
                <NumberInput name="rent-montly" text="Montly Rent Cost" />
                <NumberInput name="rent-increase-percentage" text="Rent Increase" />
            </div>
    }
}

export default Home;