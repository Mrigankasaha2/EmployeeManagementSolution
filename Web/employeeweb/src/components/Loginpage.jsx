import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineLock } from 'react-icons/ai';

export default function Loginpage() {
  const [showpassword, setShowpassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const formSubmit = (value) => {
    axios
      .post('https://localhost:7243/login', value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="flex flex-col bg-slate-100 md:w-8/12 lg:w-5/12 lg:ml-20 p-6 rounded">
      <div className="mb-2">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
            Create New Account
          </span>
        </p>
      </div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="mb-6">
          <input
            type="text"
            placeholder="User Name"
            {...register('userName', { required: true })}
            className="form-control"
          />
          <p className="text-red-500">
            {errors.userName?.type === 'required' && 'Username is required'}
          </p>
        </div>
        <div className="mb-6">
          <input
            type={showpassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', { required: true })}
            className="form-control"
          />
          <p className="text-red-500">
            {errors.password?.type === 'required' && 'Password is required'}
          </p>
        </div>
        <div className="form-check mb-6">
          <input
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            onChange={(event) => {
              setShowpassword(event.target.checked);
            }}
          />
          <label className="form-check-label inline-block text-gray-800">
            Show Password
          </label>
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <AiOutlineLock
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Login
        </button>
      </form>
    </div>
  );
}
