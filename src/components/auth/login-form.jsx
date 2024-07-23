
import { useState } from 'react'
// import { useNavigate } from "react-router-dom"


import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { useLogin } from '../../hooks/use-login'

export const LoginForm = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const [error, setError] = useState({ email: '', password: '' });

    const { login, isLoading } = useLogin()


    // let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = credentials;

        if (!email) {
            setError((prevState) => ({ ...prevState, email: 'Email is required' }));
        }
        if (!password) {
            setError((prevState) => ({ ...prevState, password: 'Password is required' }));
        }


        if (email && password) {
            // Handle form submission
            await login(email, password)
        }

        // const res = await fetch("http://localhost:3000/api/user/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        // });

        // console.log(res);

        // const json = await res.json();
        // console.log("LOGIN_FORM::", json);
        // console.log("LOGIN_FORM::", json.accessToken);
        // if (!res.ok) {
        // throw new Error(res.message);

        // } else {
        // localStorage.setItem("accessToken", json.accessToken);
        // navigate('/')

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setError({ ...error, email: '', password: '' })
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full mx-auto mt-8 p-6 border-2 rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <Input
                        type="email"
                        value={credentials.email}
                        onChange={onChange}
                        placeholder="Enter your email"
                        name="email"
                        error={error.email}
                    />
                    <Input
                        type="password"
                        alue={credentials.password}
                        onChange={onChange}
                        placeholder="Enter your password"
                        label="Password"
                        name="password"
                        error={error.password}
                    />
                    <Button type="submit" variant="primary" size="md" disabled={isLoading} className="">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}




