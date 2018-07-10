import React from 'react';
import FlavourForm from './FlavourForm';

import {connect} from 'react-redux';
import {newFlavour} from './contentActions';

class Content extends React.Component {

    setFlavour = flavour => {
        this.props.newFlavour(flavour);
    };

    render() {
        const {contentProps} = this.props;
        return (
            <div>
                <h1>A kedvenc ízem: {contentProps.favouriteFlavour}</h1>
                <FlavourForm onFlavourChange={this.setFlavour}/>
                <hr/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    contentProps: state.flavourState
});

export default connect(mapStateToProps, {
    newFlavour
})(Content);
