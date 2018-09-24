import React from 'react';

class FlavourForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit =event => {
        this.props.onFlavourChange(this.state.value);
        event.preventDefault();
        this.setState({
            value: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Kedvenc ízed:</label>
                <br/>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <br/>
                <br/>
                <label>Kedvenc ízed:</label>
                <br/>
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <option value="Grapefruit">Grapefruit</option>
                    <option value="Lime">Lime</option>
                    <option value="Coconut">Coconut</option>
                    <option value="Mango">Mango</option>
                </select>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
                <p>{this.state.value}</p>
            </form>
        );
    }
}

export default FlavourForm;