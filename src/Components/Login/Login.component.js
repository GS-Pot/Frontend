import React, { useState } from 'react'
import axios from "axios";
import { API_URI } from "../../Constants/apiUrl";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function Login() {
    // const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleLogin = () => {
        const data = {
            email,
            password,
        }
        axios.post(`${API_URI}/auth/login`, data)
            .then(res => {
                console.log(res.data)
                // setUser(res.data.data)
                Cookies.set('uid', res.data.data.id)
                toast.success(`Login Successful`)
                // navigate('/')
            }).catch(err => {
                console.log(err)
                toast.error(`Login Failed`)
            })
    }
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => { e.preventDefault(); handleLogin() }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            <div className="flex items-center justify-between">
                                <button type={'submit'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                    Sign In
                                </button>
                                <Link to="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login