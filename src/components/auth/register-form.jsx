import { useState } from 'react'

// UI Components
import { Input } from '../ui/input'
import { Button } from '../ui/button'

//Hook
import { useSignup } from '../../hooks/use-signup'


export const RegisterForm = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "", username: "", })
    const [error, setError] = useState({ email: '', password: '', username: '', });
    const [valid, setValid] = useState(false)
    // let navigate = useNavigate();

    const { signup, isLoading, response, error: signUpError, setError:setSignUpError, setResponse } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password, username, } = credentials;

        if (!email) {
            setError((prevState) => ({ ...prevState, email: 'Email is required' }));
        }
        if (!password) {
            setError((prevState) => ({ ...prevState, password: 'Password is required' }));
        }
        if (!username) {
            setError((prevState) => ({ ...prevState, username: 'Username is required' }));
        }

        if (email && password && username) {
            await signup(email, password, username,)
        }
    }

    const onChange = (e) => {
        setValid(true)
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setError({ ...error, email: '', password: '', username: '' })
    }

    const onClear = () => {
        setCredentials({ username: "", email: "", password: "" })
        setValid(false)
        setSignUpError(null)
        setResponse(null)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full mx-auto mt-8 p-6 border-2 rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-6"> Create an account</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <Input
                        type="text"
                        value={credentials.email}
                        onChange={onChange}
                        placeholder="Enter your email"
                        name="email"
                        error={error.email}
                    />
                    <Input
                        type="password"
                        value={credentials.password}
                        onChange={onChange}
                        placeholder="Enter your password"
                        name="password"
                        error={error.password}
                    />

                    <Input
                        type='text'
                        value={credentials.username}
                        onChange={onChange}
                        placeholder="Enter your username"
                        name="username"
                        error={error.username}
                    />

                    {
                        response &&
                        <div className={response.status < 400 ? `text-white mb-3 border-2 border-green-500 rounded-md p-1 ` : `text-red-400 mb-3 border-2 border-red-500 rounded-md p-1 `}>
                            {response.message}
                        </div>
                    }
                    {/* {
                        response &&
                        <div className={response.status == 200 ? `text-white mb-3 border-2 border-green-500 rounded-md p-1 `:`text-red-400 mb-3 border-2 border-red-500 rounded-md p-1 `}>
                            {response.extraDetails}
                        </div>
                    } */}
                    {
                        signUpError &&
                        <div className="text-red-400 mb-3 border-2 border-red-500 rounded-md p-1">
                            {signUpError}
                        </div>
                    }
                    <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                        Register
                    </Button>
                    {valid && <p onClick={onClear} className='text-sm mt-2 cursor-pointer hover:underline text-blue-500'>Clear form</p>}
                </form>
            </div>
        </div>
    )
}




