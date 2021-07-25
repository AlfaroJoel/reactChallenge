import { useState, useContext } from 'react';
import UserContext from '../store/UserContext'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory, Redirect } from 'react-router';
import { Formik, Form, Field } from 'formik';
import './LoginPage.css'

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [error, setError] = useState('');

    const ctxUser = useContext(UserContext);
    const history = useHistory()

    const handleSubmit = async () => {
        setLoading(true);
        const response = await fetchApiLogin();
        if(response){
            ctxUser.setAuthenticated(true);
            localStorage.setItem('token', response.token);
            history.push("/home");
        }
    }

    const validateEmail = (value) => {
        let error;
        if (!value) {
            error = 'Email required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }else{
            setUserEmail(value);
            return;
        }
        return error;
    }

    const validatePassword = (pass) => {
        if (pass.length < 5) {
            return 'Very short password (min 5 char)';
        }else{
            setUserPass(pass);
            return;
        }
    }

    const fetchApiLogin = async () => {
        try {
            const response = await fetch('http://challenge-react.alkemy.org/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'email': userEmail, 'password': userPass }) // body data type must match "Content-Type" header
            });
            if (!response.ok) {
                throw new Error('Email or password invalid')
            }
            const data = await response.json();
            if (data.response !== 'error') {
                return data;
            }else{
                throw new Error(data.response)
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
            return null;
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
                            <Field className='form-control' name='email' type='email' validate={validateEmail} placeholder='challenge@alkemy.org' />
                            {errors.email && touched.email && <div className='form-text text-danger'>{errors.email}</div>}
                        </div>
                        <div className='my-3 mb-5 d-flex flex-column text-left'>
                            <label htmlFor='password'>Password</label>
                            <Field className='form-control' name='password' type='password' validate={validatePassword} placeholder='react' />
                            {errors.password && touched.password && <div className='form-text text-danger'>{errors.password}</div>}
                        </div>

                        <Button type="submit" variant='success'>{loading ? <Spinner size="sm" animation="border" /> : 'Login'}</Button>
                        {error !== '' && <p className='form-text text-danger mx-auto my-2'>{error}</p>}
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default LoginPage;