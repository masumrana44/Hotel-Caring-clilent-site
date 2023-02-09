import React from 'react';
import './Register.css'
import { Button, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Register = () => {
    const handleRegister=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password=form.password.value;
        const conPassword=form.conPass.value;
       console.log(password,conPassword,email)
    }
    return (
       <div>
         <div className='mt-5' id='regiter-field'>
            <h1 className='text-center mt-5 ' id='login-title'>Register</h1>
            <Form onSubmit={handleRegister} className='w-75 mx-auto mt-5' id='form-register'>
                <Form.Group className="mb-3 height-25" controlId="formBasicName">
                    <Form.Label id='input-title' className='h4 text-secondary'>Name </Form.Label>
                    <Form.Control name='name' accordian-bodytype='text'  placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3 height-25" controlId="formBasicEmail">
                    <Form.Label id='input-title' className='h4 text-secondary'>Email </Form.Label>
                    <Form.Control name='email' accordion-bodytype="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label id='input-title' className='h4 text-secondary'>Password</Form.Label>
                    <Form.Control  type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConPassword">
                    <Form.Label id='input-title' className='h4 text-secondary'>Confrim Password</Form.Label>
                    <Form.Control  name='conPass' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary"   type="submit">
                    Register
                </Button>
                 
            
            </Form>
          
         
        </div>
        <Footer/>
       </div>
    );
};

export default Register;