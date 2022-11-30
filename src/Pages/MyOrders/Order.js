import React from "react";

const Order = ({ myOrder }) => {
  const { name, email, image, brand, model, locations, resale_price } =
    myOrder;
  return (
    <div className=" w-full border h-28 flex  justify-between items-center flex-wrap px-4 ">
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask rounded-md w-24 h-24">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{brand}</div>
          <div className="text-sm opacity-80">{model}</div>
          <div className="">Price: ${resale_price}</div>
        </div>
      </div>

      <div className="max-w-xs center"> 
        <h5 className="font-bold text-center">Location</h5>
        <p className="text-center">{locations}</p>
      </div>

      <div>
        <h4 className="capitalize text-center">
          Name: {name ? name : <small>anonymous</small>}
        </h4>
        <br />
        <span className="badge badge-ghost badge-sm text-center">
          Email: {email}
        </span>
      </div>
      <div>
        <button className="btn btn-primary text-accent">Pay</button>
      </div>
    </div>
  );
};

export default Order;
