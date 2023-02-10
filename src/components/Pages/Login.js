import React, {useState} from 'react'
import Form from '../Form';
import InputWithLabel from '../InputWithLabel';
import Button from '../Button';

const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <Form>
        <InputWithLabel>Username</InputWithLabel>
        <InputWithLabel type='password'>Password</InputWithLabel>
        <Button>Login</Button>
    </Form>
  )
}

export default Login