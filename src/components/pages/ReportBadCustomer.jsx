import React, { Component } from 'react'
import './ReportBadCustomer.css'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div>
        <h2 className='report'>Report the bad customers who have treated you bad.</h2>
        <Form className='whole'>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Select}
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
          <Form.Field
          className='text_field'
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />
          <Form.Field
            className='agree'
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field className='button' control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  } 
}

export default FormExampleFieldControl