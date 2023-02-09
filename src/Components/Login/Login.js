import React from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub} from "react-icons/fa";
import Footer from '../Footer/Footer';

const Login = () => {
    return (
       <div>
         <div className='mt-5' id='login-field'>
            <h1 className='text-center mt-5 ' id='login-title'>Login</h1>
             <Form className='w-75 mx-auto mt-5' id='form'>
      <Form.Group className="mb-3 height-25" controlId="formBasicEmail">
        <Form.Label className='h4 text-secondary' id='input-title'>Email </Form.Label>
        <Form.Control name='email' accordion-bodytype="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='h4 text-secondary' id='input-title'>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary"     type="submit">
        Login
      </Button>

      <div className='d-flex justify-content-center align-items-center mt-4 text-dark gap-4 '>
        <hr/> or <hr></hr>
      </div>
    </Form>
    <div className='d-flex justify-content-center align-item-center gap-3' id='auth-login'>
    <button type="button" className="btn btn-outline-success"><FaGoogle/> Login With Google</button>
    <button type="button" className="btn btn-outline-dark"><FaGithub/> Login with GitHub</button>
    </div>
    
        </div>
        <Footer/>
       </div>
    );
};

export default Login;