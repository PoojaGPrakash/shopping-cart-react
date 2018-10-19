import React, {Component} from 'react';
import './Signup.css';
import {FieldGroup} from 'react-bootstrap';
import { Radio,FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';

export default class Signup extends Component {
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
            <div className="signup-form">
                <h3 className="text-center">Sign Up</h3>
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
                    <FieldGroup
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="upload your photo here"
                    />
                    <FormGroup>
                    <ControlLabel>Gender :</ControlLabel>
                    <Radio name="radioGroup" inline>
                        Male
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        Female
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        Other
                    </Radio>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">Country</option>
                        <option value="other">...</option>
                    </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>State</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        <option value="select">select (multiple)</option>
                        <option value="other">...</option>
                    </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Address</ControlLabel>
                    <FormControl componentClass="textarea" rows="5" placeholder="Enter Your Address" />
                    </FormGroup>
                    
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}