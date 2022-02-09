import React from 'react'
import Form from '../components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FormPage() {
  return (
    <div className='form-container'>
        <div className='l-form'>
        <FontAwesomeIcon icon="fa-solid fa-shuttle-space" />
          <div>
            <p>Welcom</p>
            <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </span>
          </div>
          <input type="button" className='btn' value="Login" />
        </div>
        <Form />
    </div>
  )
}
