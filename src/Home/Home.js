import React, {Component} from 'react';
import Courses from '../Courses/Courses';

import { Button, ButtonToolbar } from 'react-bootstrap';

export default class Home extends Component {
        state = {
          username : "Pooja Prakash",
          person: [
            {
            name : "pooja",
            age : "21",
            },
            {
            name : "prakash",
            age : "50",
            },
            {
            name : "ambuja",
            age : "44",
            }
          ]
        }
      
        SwitchNameHandler = (newName) => {
          this.setState( {
            person : [
              {
                name : newName,
                age : "21",
                },
                {
                name : "Prakash",
                age : "50",
                },
                {
                name : "Ambuja Prakash",
                age : "44",
                }
            ]
          })
        }
        nameChangedHandler = (event) => {
          this.setState( {
            person : [
              {
              name : "Chinni",
              age : "21",
              },
              {
              name : "Prakash",
              age : "50",
              },
              {
              name : event.target.value,
              age : "44",
              }
            ]
          })
        }
        render() {
          return (
            <div>
                <h1>Hello {this.state.username}</h1>
                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.SwitchNameHandler.bind(this, "Jaanu")}>Switch Name</Button>
                </ButtonToolbar>
                <Courses name={this.state.person[0].name} age={this.state.person[0].age}></Courses>
                <Courses name={this.state.person[1].name} age={this.state.person[1].age} click={this.SwitchNameHandler.bind(this, "Puttu")}>
                  <h2>
                    Hobbies : Watching TV
                  </h2>
                </Courses>
                <Courses name={this.state.person[2].name} age={this.state.person[2].age} changed={this.nameChangedHandler}> </Courses>
            </div>
          );
        }
}
