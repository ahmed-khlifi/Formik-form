const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    repassword: '',
    gender:'',
    email: '',
    phone: '',
    question: '',
    answer: ''
}

const validate = values => {
    const errors = {}
    
    // manage errors
    if(!values.firstName) errors.firstName = 'required'

    if(!values.lastName) errors.lastName = 'required'

    if(!values.password) errors.password = 'required'
    if(!values.repassword) errors.repassword = 'required'
    if(values.password !== values.repassword) errors.repassword = 'passwords don\'t much'
    
    if(!values.gender) errors.gender = 'You must select your gender'
    
    if(!values.email) errors.email = 'required'
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'enter a valid email'
    
    if(!values.question) errors.question = 'required'
    
    if(!values.answer) errors.answer = 'required'

    return errors;

}

export {initialValues, validate}