import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import axios from 'axios';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = data => {
        
        createUser(data.email, data.password)
        .then(result =>{
          const user = result.user;
            console.log(user)
            updateUserProfile(data.name)
            .then(() => {
              const saveUser = { name: data.name, email: data.email}
              // axios.post('http://localhost:5000/users', saveUser, {withCredentials: true})
              // fetch('http://localhost:5000/users', {
              //               method: 'POST',
              //               headers: {
              //                   'content-type': 'application/json'
              //               },
              //               body: JSON.stringify(saveUser)
              //           })
              //           .then(res => res.json())
              //           .then(data => {
              //               if (data.insertedId) {
              //                   reset();
              //     Swal.fire({
              //       position: 'top-end',
              //       icon: 'success',
              //       title: 'User created successfully.',
              //       showConfirmButton: false,
              //       timer: 1500
              //   });
                
              //   }
              // })
              navigate('/');
            })
        })
        .catch(error => console.log(error));
    }
    return (
        <>
        <Helmet>
            <title>E-Mart | SignUp</title>
        </Helmet>
        <div className='w-80 mx-auto mt-12 bg-white p-10 rounded-xl shadow-xl'>
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
          <input type='submit' className="btn btn-black border-none rounded-none text-white hover:bg-accent" value="Sing Up" />
        </div>
        </form>
        <Link to="/login" className='text-accent italic'>Already have an account !</Link>
        </div>
        </>
    );
};

export default SignUp;