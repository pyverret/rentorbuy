import React from 'react';
import RentTable from './components/RentTable';
import {onlyPositiveNumber} from './utils/number';
import * as Inputs from './utils/input';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.createDefaultStates();

        this.onChange = this.onChange.bind(this);
    }

    createDefaultStates() {
        const state = {};
        const inputList = [];

        inputList.push(...Inputs.commonFields);
        inputList.push(...Inputs.rentFields);
        inputList.push(...Inputs.ownershipFields);

        inputList.forEach((input) => {
            state[input.name] = input.value;
        });
        
        return state;
    }

    render () {
        return <div>
                <h1>Home Text</h1>
                <p>Energy cost is being ignored because you will mostlikely need to pay them no mather what.</p>
                <p><strong>TODO: Ownership table</strong></p>
                <p><strong>TODO: ADD (i) next to input with statistics</strong></p>
                <p><strong>TODO: Investment Per Month Amount Growth?</strong></p>
                <p><strong>TODO: Yearly lost/gained?</strong></p>
                <p><strong>TODO: Diff rent vs ownership per year?</strong></p>
                <hr/>
                {this.createInputs(Inputs.commonFields)}
                <hr/>
                <h2>Renting</h2>
                {this.createInputs(Inputs.rentFields)}
                <hr/>
                <h2>Ownership</h2>
                {this.createInputs(Inputs.ownershipFields)}
                <hr/>
                <RentTable 
                    duration={this.state['duration']}
                    rent={this.state['rent-monthly']}
                    increase={this.state['rent-increase-percentage']}
                    investment={this.state['investment']}
                    growth={this.state['growth']} />
            </div>
    }

    createInputs (inputList) {
        const inputs = [];

        inputList.forEach((input) => {
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