import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar bg-base-100 px-8 sticky top-0 z-50 bg-gray-100">
      <div className="navbar-start ">
        <div className="dropdown text-primary">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li className="font-bold ">Home</li>
            </Link>
            <Link to="/blog">
              <li className="font-bold">Blog</li>
            </Link>
            {user?.uid ? (
              <Link to="/dashboard">
                <li className="font-bold mx-4">Dashboard</li>
              </Link>
            ) : (
              <></>
            )}
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-primary text-accent text-xl font-serif "
        >
          Used Bikes Mart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-primary">
        <ul className="menu menu-horizontal p-0">
          <Link to="/">
            <li className="font-bold mx-4 ">Home</li>
          </Link>
          <Link to="/blog">
            <li className="font-bold mx-4">Blog</li>
          </Link>
          {user?.uid ? (
            <Link to="/dashboard">
              <li className="font-bold mx-4">Dashboard</li>
            </Link>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <button
            onClick={handleLogOut}
            to="/login"
            className="btn btn-primary text-accent"
          >
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary text-accent">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
