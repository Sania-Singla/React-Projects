//* the difference between <Link> and navigate is that navigate will programatically redirect the user to some url but link needs a click.
//* FLOW: but we do is we use a handleSubmit(ourEventHandler) and we dont have to manage the states for the inputs because we will use register there that will just take out the value of the input and pass it to the handlelogin method which will then execute our login handler with the data in the register as an auto argument 

import {Logo,Input,Button} from "./index"
import { Link, useNavigate } from "react-router-dom"
import authService from "../appwriteServices/authService"
import { useDispatch } from "react-redux"
import { login } from "../store/authSlice"
import { useForm } from "react-hook-form"
import { useState } from "react"


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [error,setError] = useState("");

    const {register,handleSubmit} = useForm()

    async function loginHandler(data) {
        setError('')
        try {
            const session = await authService.login(data);          //it doesnt give the userData it gives the session
            if(session) 
            {
                const userData = await authService.getCurrentUser()
                if(userData)
                {
                    dispatch(login(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(loginHandler)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            id="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />

                        <Input
                            label="Password: "
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        
                        <Button
                            type="submit"
                            className="w-full"
                            btnText="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;