import React, {Component} from "react";
import styles from './Auth.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Type correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Type correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }

            }
        }
    }

    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitHandler = e => {
        e.preventDefault()
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                />
            )
        })
    }
    render() {
        return (
            <div className={styles.Auth}>
               <div>
                   <h1>
                       Authorization
                   </h1>
                   <form onSubmit={this.submitHandler} className={styles.AuthForm}>
                       { this.renderInputs() }
                       <Button
                           type='success'
                           onClick={this.loginHandler}
                       >
                           Login
                       </Button>
                       <Button
                           type='primary'
                           onClick={this.registerHandler}
                       >
                           Create account
                       </Button>
                   </form>
               </div>
            </div>
        )
    }
}

export default Auth;
