import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';

const Login = () =>
{
    const [signForm, setSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () =>
    {
        //validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!signForm)
        {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) =>
                {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) =>
                {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
        else
        {
            // sign in logic


            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) =>
                {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) =>
                {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }


        //sign / sign up
    };
    return (
        <div style={{
            backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%',
            position: 'relative'
        }}>
            <Header />

            <form onSubmit={(e) => e.preventDefault()} className='p-12 text-white bg-black bg-opacity-70 my-24 w-3/12 mx-auto right-0 left-0 rounded'>
                <h1 className='text-white font-bold text-3xl py-4'>  {signForm === true ? 'Sign in' : 'Sign Up'} </h1>

                <div className='flex flex-col gap-4'>

                    {signForm === true ? '' : <input
                        type='text'
                        placeholder='Name'
                        className='p-4 bg-gray-700 bg-opacity-80 text-white rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600'
                    />

                    }
                    <input ref={email}
                        type='text'
                        placeholder='Email Address'
                        className='p-4 bg-gray-700 bg-opacity-80 text-white rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600'
                    />

                    <input ref={password}
                        type='password'
                        placeholder='Password'
                        className='p-4 bg-gray-700 bg-opacity-80 text-white rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600'
                    />
                    <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

                    <button onClick={handleButtonClick}
                        type='submit'
                        className='p-3 mt-6 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors'
                    >
                        {signForm === true ? "Sign in" : "Sign up"}
                    </button>
                </div>

                <div className='mt-4 text-gray-400 text-sm'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input type='checkbox' id='remember' className='mr-1' />
                            <label htmlFor='remember'>Remember me</label>
                        </div>
                        <a href='#' className='hover:underline'>Need help?</a>
                    </div>
                </div>

                <div className='mt-16'>
                    <p className='text-gray-400'>
                        <a onClick={() => setSignForm(!signForm)
                        } className='text-white hover:underline cursor-pointer'> {signForm === true ? "New to Netflix ? Sign up now" : "Already a member"}</a>
                    </p>
                    <p>

                    </p>
                </div>
            </form >
        </div >
    );
};
export default Login;