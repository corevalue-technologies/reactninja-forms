import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import t from 'tcomb-form';

const Form = t.form.Form;

// define your domain model with tcomb
// https://github.com/gcanti/tcomb
const Person = t.struct({
  name: t.String,
  subject: t.String
});

class App extends Component {

  save() {
    // call getValue() to get the values of the form
    var submitted_person = this.refs.form.getValue();
    // if validation fails, value will be null
    if (submitted_person) {
      // value here is an instance of Person
      console.log(submitted_person);
    }
  };

  render() {
    return (
      <div>
        <Form
          ref="form"
          type={Person}
        />
        <button onClick={this.save}>Save</button>
      </div>
    );
  };

}

export default App;