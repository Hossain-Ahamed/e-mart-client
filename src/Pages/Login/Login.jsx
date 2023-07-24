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
    const [showSignUpModal, setShowSignUpModal] = useState(false); // Add state for the sign-up modal

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

    const handleCreateAccountClick = () => {
      setShowSignUpModal(true);
    };
  
    const handleCloseSignUpModal = () => {
      setShowSignUpModal(false);
    };
  
  
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch( error => {
            console.error('error: ', error);
        })
    }
    return (
        <>
        <input type='checkbox' id="my_modal_3" className="modal-toggle" />
  <div className="modal">
    <div className='modal-box relative'>
    <label htmlFor='my_modal_3' className='btn btn-sm btn-circle absolute top-2 right-2'>X</label>

    <div className="my-12">
        <h3 className='text-3xl'>Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <br />
          <input type="email" {...register("email", { required:"Email Address is required"})} placeholder="email" className="input-bordered w-full " />
          {errors.email && <p role='alert'>{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <br />
          <input type="password" {...register("password", { required: "Password is required", minLength: {value:6, message:"Your Password Should At Least 6 Characters"} })} placeholder="password" className="input-bordered w-full " />
          {errors.password && <p role='alert'>{errors.password?.message}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn hover:bg-yellow-600 rounded-none text-white border-0" value="Login" />
        </div>
        <div>
        {loginError && <p>{loginError}</p>}
        </div>
        </form>

        <div className='mt-6 grid grid-cols-3 items-center'>
            <hr />
            <p className='text-center'>Or</p>
            <hr />
        </div>

          <div className='grid grid-cols-2 gap-2 mt-4'>
          <button onClick={handleGoogleSignIn} className="btn hover:bg-yellow-600 text-white rounded-none border-0">Google</button>
          <button onClick={handleCreateAccountClick} className="btn hover:bg-yellow-600 text-white rounded-none border-0">Create Account</button>
            
          </div>
          </div>
    </div>
  </div>

  {/* Sign-up Modal */}
  <input type='checkbox' id="my_modal_4" className="modal-toggle" />
      <div className="modal">
        <div className='modal-box relative'>
          <label htmlFor='my_modal_4' className='btn btn-sm btn-circle absolute top-2 right-2'>X</label>

          <SignUp closeModal={handleCloseSignUpModal} />
        </div>
      </div>
    
        </>
    );
};

export default Login;