import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import SignUp from '../SignUp/SignUp';

const Login = () => {
    const auth = getAuth(app)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {logIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
    }
  
  
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch( error => {
            console.error('error: ', error);
        })
    }
    return (
        <>
    <div className="w-80 my-12 mx-auto">
        <h3 className='text-3xl'>Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <br />
          <input type="email" {...register("email", { required:"Email Address is required"})} placeholder="email" className="input-bordered w-full max-w-xs" />
          {errors.email && <p role='alert'>{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <br />
          <input type="password" {...register("password", { required: "Password is required", minLength: {value:6, message:"Your Password Should At Least 6 Characters"} })} placeholder="password" className="input-bordered w-full max-w-xs" />
          {errors.password && <p role='alert'>{errors.password?.message}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn hover:bg-yellow-600 rounded-none text-white border-0 max-w-xs" value="Login" />
        </div>
        <div>
        {loginError && <p>{loginError}</p>}
        </div>
        </form>

        <div className='mt-6 grid grid-cols-3 items-center max-w-xs'>
            <hr />
            <p className='text-center'>Or</p>
            <hr />
        </div>

          <div className='grid grid-cols-2 gap-2 mt-4 max-w-xs'>
          <button onClick={handleGoogleSignIn} className="btn hover:bg-yellow-600 text-white rounded-none border-0">Google</button>
          <Link to="/signUp" className="btn hover:bg-yellow-600 text-white rounded-none border-0">Create Account</Link>
            
          </div>
          </div>
        </>
    );
};

export default Login;