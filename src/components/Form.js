import React from 'react'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import { initialValues, validate } from '../errors/FormHandler'

export default function FormC() {

    // radio button 

    
  return (
    <div className='r-form'>
    <h1>Register</h1>
    <Formik 
        validate={validate}
        initialValues={initialValues}
    >
        
        <Form>
            <div className='f-sec'>
                <Field type="text" placeholder='First Name' name="firstName"/>
                <ErrorMessage name='firstName' component={ErrorText}/>

                <Field type="text" placeholder='Last Name' name="lastName"/>
                <ErrorMessage name='lastName' component={ErrorText}/>

                <Field type="password" placeholder='Password' name="password"/>
                <ErrorMessage name='password' component={ErrorText}/>

                <Field type="password" placeholder='Confirm password' name="repassword"/>
                <ErrorMessage name='repassword' component={ErrorText}/>

                <div className="radio-group">
                    <Field type="radio" id="Male" name="gender" value='male'/>
                    <label for="Male">Male</label>
                    <Field type="radio" id="Female" name="gender" value='female'/>
                    <label for="Female">Female</label>
                </div>
                <ErrorMessage name='gender' component={ErrorText}/>

            </div>
            <div  className='f-sec'>
                <Field type="email" placeholder='Your email'  name="email"/>
                <ErrorMessage name='email' component={ErrorText}/>

                <Field type="tel"  placeholder='Your phone' name="phone"/>
                <ErrorMessage name='phone' component={ErrorText}/>

                <Field name='question' as="select">
                    <option selected={true} >Select a security question</option>
                    <option>What is your first car ?</option>
                    <option>What is your pet name</option>
                    <option>What did they call you when you was young ?</option>
                </Field>
                <ErrorMessage name='question' component={ErrorText}/>

                <Field type="text"  placeholder='your answer' name="answer"/>
                <ErrorMessage name='answer' component={ErrorText} />

                <Field type="submit" className='btn' value="Register" />
            </div>
        </Form>
    </Formik>
    </div>
  )
}

const ErrorText = (props) => {
    return(
        <small style={{color: "red"}}>
            {props.children}
        </small>
    )
}

