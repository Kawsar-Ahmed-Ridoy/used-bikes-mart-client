import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Home/SocialLogin/SocialLogin";

const Register = () => {
  return (
    <div>
      <div className="hero py-24">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name "
                  className="input input-bordered"
                  require
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select</span>
                </label>
                <div className="ml-2 font-bold">
                  <div className="flex mb-2">
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio"
                      value='buyer'
                      checked
                    />
                    <span className="ml-2">Buyer</span>
                  </div>
                  <div className="flex">
                    <input type="radio" name="radio-1" className="radio" value='seller' />
                    <span className="ml-2">Seller</span>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small className="label-text-alt link link-hover">
                    <Link to="/login">
                      Already have an account?{" "}
                      <span className="font-bold">Login</span>
                    </Link>
                  </small>
                </label>
                <small className="ml-1 text-red-600"></small>
              </div>
              <div className="form-control ">
                <input
                  className="btn btn-outline px-36"
                  type="submit"
                  value="Register"
                />
                <span className="text-center font-bold">or</span>
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
