import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.inputFields = [
            {name:'rent-montly', value: 0, text:'Montly Rent Cost'},
            {name:'rent-increase-percentage', value: 0, text:'Rent Increase'}
        ];

        this.state = this.createDefaultStates();

        this.onChangeNumeric = this.onChangeNumeric.bind(this);
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
                    <input id={input.name} type="number" value={this.state[input.name]} onChange={this.onChangeNumeric} />
                </div>
            );
        });

        return inputs;
    }

    onChangeNumeric (event) {
        const key = event.target.id;
        const value = isNaN(parseInt(event.target.value)) || parseInt(event.target.value) < 0 ? 0 : event.target.value;
   
        this.setState({[key]: value});
    }
}

export default Home;