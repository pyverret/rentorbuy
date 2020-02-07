import React from 'react';

class NumberInput extends React.Component {
    static defaultProps = {
        name: '',
        text: ''
    }

    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.onChange = this.onChange.bind(this);
    }

    render () {
        return <div>
                    <label htmlFor={this.props.name}>{this.props.text}</label>
                    <input id={this.props.name} type="number" value={this.state.value} onChange={this.onChange} />
                </div>
    }

    onChange (event) {
        const inputValue =
        isNaN(parseInt(event.target.value)) || parseInt(event.target.value) < 0 ? 0 : event.target.value;
  
        this.setState({value: inputValue});
    }
}

export default NumberInput;