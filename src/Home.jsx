import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.inputFields = [
            {name:'rent-monthly', value: 0, text:'Monthly Rent Cost', type: 'number'},
            {name:'rent-increase-percentage', value: 0, text:'Rent Increase', type: 'number'}
        ];

        this.state = this.createDefaultStates();

        this.onChange = this.onChange.bind(this);
    }

    createDefaultStates() {
        const state = {};

        this.inputFields.forEach((input) => {
            state[input.name] = input.value;
        });
        
        return state;
    }

    render () {
        return <div>
                <p>Home Text</p>
                {this.createInputs()}
            </div>
    }

    createInputs() {
        const inputs = [];

        this.inputFields.forEach((input) => {
            inputs.push(
                <div key={input.name}>
                    <label htmlFor={input.name}>{input.text}</label>
                    <input id={input.name} type={input.type} value={this.state[input.name]} onChange={this.onChange} />
                </div>
            );
        });

        return inputs;
    }

    onChange (event) {
        const key = event.target.id;
        const value = event.target.type === 'number' 
            ? isNaN(parseInt(event.target.value)) || parseInt(event.target.value) < 0 ? 0 : parseInt(event.target.value) 
            : event.target.value;

        this.setState({[key]: value});
    }
}

export default Home;