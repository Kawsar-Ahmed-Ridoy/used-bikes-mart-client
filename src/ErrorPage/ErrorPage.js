import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from '../assets/errorimg.png'

const ErrorPage = () => {
    return (
        <div
      style={{ height: "100vh" }}
      className="flex  justify-center align-middle w-full text-center  "
    >
      <div className="my-auto ">
        <img className='w-96' src={errorimg} alt="" />
        <Link to={"/"}>
          <button className="btn btn-outline">Back To Home Page</button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;