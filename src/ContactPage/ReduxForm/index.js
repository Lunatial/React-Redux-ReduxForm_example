import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {customInput, customSelect,} from './field';
import {required, maxLength, minLength, emailVal} from "./validation";

class ContactForm extends React.Component {
    render() {
        const {handleSubmit,} = this.props;
        return (
            <form
                style={{
                    lineHeight: 2,
                    marginTop: '18px',
                    margin: '0 auto',
                    width: '40%',
                    boxShadow: '5px 4px 10px #888888'
                }}
                onSubmit={handleSubmit}
            >
                <Field
                    label="Keresztnév *"
                    name="firstName"
                    component={customInput}
                    validate={[required, minLength, maxLength]}
                    required={true}
                    type="text"
                />
                <Field
                    label="Vezetéknév *"
                    name="lastName"
                    component={customInput}
                    validate={[required, minLength, maxLength]}
                    type="text"
                />
                <Field
                    label="E-mail cím *"
                    name="email"
                    component={customInput}
                    validate={[required, emailVal]}
                    // type="email"
                />
                <Field
                    label="Időtartam "
                    name="select"
                    component={customSelect}
                />
                <Field
                    label="Hírlevél"
                    name="newsletter"
                    component={customInput}
                    type="checkbox"
                />

                <button type="submit">Feliratkozás</button>
            </form>
        )
    }
}

export default ContactForm = reduxForm({
    form: 'mirkoTesztFormReduxFormmal'
})(ContactForm);