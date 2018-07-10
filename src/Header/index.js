import React, {Component} from 'react';
import {newColour} from "../Header/headerActions";
import {connect} from "react-redux";
import {bindActionCreators,} from 'redux'

class Header extends Component {

    handleChange(event) {
        this.props.newColour(event.target.value);
    }

    render() {
        const {fontColour} = this.props.headerProps;
        return (
            <div>
                <h1 style={{color: fontColour}}>{this.props.title}</h1>
                <label>Cím színe:
                    <select
                        value={fontColour}
                        onChange={this.handleChange.bind(this)}>
                        <option value="black">Fekete</option>
                        <option value="blue">Kék</option>
                        <option value="red">Piros</option>
                        <option value="green">Zöld</option>
                    </select>
                </label>
                <hr/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    newColour,
}, dispatch);

const mapStateToProps = state => ({
    headerProps: state.headerState
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);