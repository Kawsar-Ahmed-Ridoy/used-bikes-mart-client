import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../Home/SocialLogin/SocialLogin";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const radio = form.gander.value;
    setError("");
    console.log(name, email, password, radio);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken(result.user);
        toast.success("User Created Successfully");
        const userInfo = {
          displayName: name,
          reloadListener: radio,
          photoURL: radio,
          tenantId: radio
        };

        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <div className="hero py-12">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
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
                  <span className="label-text font-bold text-primary">
                    Select
                  </span>
                </label>
                <div className="ml-2 font-bold flex  text-primary ">
                  <div className="flex">
                    <input
                      type="radio"
                      name="gander"
                      className="radio"
                      value="buyer"
                      required
                    />
                    <span className="ml-2 mr-6">Buyer</span>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      name="gander"
                      className="radio"
                      value="seller"
                      required
                    />
                    <span className="ml-2">Seller</span>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
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
                      <span className="font-bold text-primary">Login</span>
                    </Link>
                  </small>
                </label>
                <small className="ml-1 text-red-600">{error}</small>
              </div>
              <div className="form-control ">
                <input
                  className="btn text-accent px-36"
                  type="submit"
                  value="Register"
                />
                <div className="divider ">OR</div>
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
