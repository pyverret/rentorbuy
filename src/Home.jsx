import React from 'react';
import RentTable from './components/RentTable';
import {onlyPositiveNumber} from './utils/number';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.inputFieldsRent = [
            {name:'rent-monthly', value: 0, text:'Monthly Rent Cost', type: 'number'},
            {name:'rent-increase-percentage', value: 0, text:'Yearly Rent Increase', type: 'number'},
            {name:'duration', value: 0, text:'Duration', type: 'number'},
            {name:'investment', value: 0, text:'Investment Per Month', type: 'number'},
            {name:'growth', value: 0, text:'Investment growth', type: 'number'}
        ];

        this.state = this.createDefaultStates();

        this.onChange = this.onChange.bind(this);
    }

    createDefaultStates() {
        const state = {};

        this.inputFieldsRent.forEach((input) => {
            state[input.name] = input.value;
        });
        
        return state;
    }

    render () {
        return <div>
                <p>Home Text</p>
                {this.createRentInputs()}
                <hr/>
                <RentTable 
                    duration={this.state['duration']}
                    rent={this.state['rent-monthly']}
                    increase={this.state['rent-increase-percentage']}
                    investment={this.state['investment']}
                    growth={this.state['growth']} />
            </div>
    }

    createRentInputs() {
        const inputs = [];

        this.inputFieldsRent.forEach((input) => {
            inputs.push(
                <div key={input.name}>
                    <label htmlFor={input.name}>{input.text}</label>
                    <input id={input.name} type={input.type} value={this.state[input.name]} onChange={this.onChange(input.name, input.type)} />
                </div>
            );
        });

        return inputs;
    }

    onChange = (key, type) => (event) => {
        const value = type === 'number' 
            ? onlyPositiveNumber(event.target.value) 
            : event.target.value;

        this.setState({[key]: value});
    }
}

export default Home;