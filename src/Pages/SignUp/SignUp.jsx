import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }
    return (
        <>
        <Helmet>
            <title>E-Mart | SignUp</title>
        </Helmet>
        <div className='w-80 mx-auto mt-12'>
        <form onSubmit={handleSubmit(handleSignUp)}>     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required:"User name is required"})} placeholder="name" className="input-bordered w-full max-w-xs" />
          {errors.name && <p role='alert'>{errors.name?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required:"Email Address is required"})} placeholder="email" className="input-bordered w-full max-w-xs" />
          {errors.email && <p role='alert'>{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: "Password is required", minLength: {value:6, message:"Your Password Should At Least 6 Characters"} })} placeholder="password" className="input-bordered w-full max-w-xs" />
          {errors.password && <p role='alert'>{errors.password?.message}</p>}
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn btn-black rounded-none text-white" value="Sing Up" />
        </div>
        </form>
        <Link to="/login" className='btn bg-[#c35a5a] text-white rounded-none border-0'>Already have an account !</Link>
        </div>
        </>
    );
};

export default SignUp;