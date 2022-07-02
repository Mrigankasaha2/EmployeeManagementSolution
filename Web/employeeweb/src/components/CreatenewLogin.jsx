import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AiOutlineLock } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function CreatenewLogin() {
  const [confirmpasswordvalid, setconfirmpasswordvalid] = useState(true);
  const [newpassword, setNewpassword] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const SubmitForm = (value) => {
    axios
      .post('https://localhost:7243/newlogin', value)
      .then((res) => {
        toast.success('Login Created Successfully', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    <div className="form-contriner">
      <div className="mb-2">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link
            to="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Go Back to Login Page
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(SubmitForm)}>
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
            type="password"
            placeholder="New Password"
            {...register('password', { required: true })}
            className="form-control"
            onChange={(event) => {
              setNewpassword(event.target.value);
            }}
            maxLength="8"
          />
          <p className="text-red-500">
            {errors.password?.type === 'required' && 'Password is required'}
          </p>
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Confirm New Password"
            className="form-control"
            onChange={(event) => {
              setconfirmpasswordvalid(
                event.target.value === newpassword && newpassword !== ''
              );
            }}
            maxLength="8"
          />
          <p className="text-red-500">
            {!confirmpasswordvalid
              ? 'The confirm password is not matching'
              : null}
          </p>
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={!confirmpasswordvalid}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <AiOutlineLock
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Submit
        </button>
      </form>
    </div>
  );
}
