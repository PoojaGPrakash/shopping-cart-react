import React, {Component} from 'react';
import './Login.css';

import {Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button, HelpBlock} from 'react-bootstrap';
import FieldGroup from 'react-bootstrap';

export default class Login extends Component {
    render() {
        function FieldGroup({ id, label, help, ...props }) {
            return (
              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
              </FormGroup>
            );
          }
        return(
            <div className="login-form">
                <h3 className="text-center">Login</h3>
                <form>
                    <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                    />
                    <FieldGroup 
                    id="formControlsPassword" 
                    label="Password" 
                    type="password"
                    placeholder="Enter Password"
                     />
                    <FormGroup>  
                        <Checkbox>Remember me</Checkbox> 
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Login</Button>
                    </FormGroup>
                    </form>
            </div>
        );
    }
}