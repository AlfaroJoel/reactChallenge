import Button from 'react-bootstrap/Button';
import { Formik, Form, Field } from 'formik';
import './LoginPage.css'

const LoginPage = () => {

    const emailUser = 'challenge@alkemy.org';
    const passwordUser = 'react';

    const handleSubmit = (email, pass) => {
        console.log('entrar');
    }

    const validateEmail = (email) => {
        if (email !== emailUser) {
            return 'Email incorrecto'
        }
    }

    const validatePassword = (pass) => {
        console.log(pass);
        if (pass !== passwordUser) {
            return 'Password incorrecto';
        }
    }

    return (
        <div className='loginPage d-flex justify-content-center align-items-center'>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className='d-flex flex-column m-4'>
                        <h1>Signup</h1>
                        <div className='my-4 d-flex flex-column text-left'>
                            <label htmlFor='email'>Email</label>
                            <Field className='form-control' name='email' type='email' validate={validateEmail} placeholder='challenge@alkemy.org'/>
                            {errors.email && touched.email && <div className='form-text text-danger'>{errors.email}</div>}
                        </div>
                        <div className='my-3 mb-5 d-flex flex-column text-left'>
                            <label htmlFor='password'>Password</label>
                            <Field className='form-control' name='password' type='password' validate={validatePassword} placeholder='react'/>
                            {errors.password && touched.password && <div className='form-text text-danger'>{errors.password}</div>}
                        </div>

                        <Button type="submit" variant='success'>Login</Button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default LoginPage;