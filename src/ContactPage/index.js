import React from 'react'
import ContactForm from './ReduxForm'

export default class ContactPage extends React.Component {

    submit = values => {
        alert(JSON.stringify(values, null, 6))
    };

    render() {
        return (
            <ContactForm onSubmit={this.submit}/>
        )
    }
}
