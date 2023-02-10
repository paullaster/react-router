import React, {useState} from 'react'
import Form from '../Form';
import InputWithLabel from '../InputWithLabel';
import Button from '../Button';

const Login = ({setUser}) => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName || !password) return;
        
        console.log (userName, password);
    };

  return (
    <Form handleSubmit={handleSubmit}>
        <InputWithLabel type='email' setInputValue={setUsername}>Username</InputWithLabel>
        <InputWithLabel type='password' setInputValue={setPassword}>Password</InputWithLabel>
        <Button type='submit'>Login</Button>
    </Form>
  )
}

export default Login