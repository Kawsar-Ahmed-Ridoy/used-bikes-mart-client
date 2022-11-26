import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import { FaCheckCircle } from 'react-icons/fa';

const Category = () => {
  const categories = useLoaderData();

  console.log(categories);
  return (
    <div className="mb-16 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-center text-4xl font-bold mt-8">Category</h1>
      </div>
      <div className="flex justify-around  align-middle flex-wrap ">
        {categories.map((category) => (
          <div key={category.category_id} className="card w-96 bg-base-100 shadow-xl mb-8">
            <figure>
              <img src={category.image} className='h-56 w-full' alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Brand: {category.brand}
              </h2>
              <div className="flex justify-between"> 
              <div>
              <span>Model: {category.model}</span> <br/>
              <span>Year Of Purchase: {category.manufacture}</span> <br/>
              <span>Engine: {category.engine} CC</span> <br/>
              <span>New Price: ${category.original_price}</span> <br/>
              <span>Year Of Used: {category.years_use} years</span> <br/>
              </div>
              <div>
               <br/>
              <span>Condition: {category.condition}</span> <br/>
              <span>Resale Price: ${category.resale_price}</span> <br/>
              <span>Mileage: {category.mileage} kmp</span> <br/>
              <span>Seller Name: {category.seller_name}</span> <br/>
              </div>
              </div>
              <div className="">
              <span>Post: {category.published_date}</span> <br/>
              <span>Location: {category.location}</span> <br/>
              <p>Details: {category.details.slice(0, 120)+ "read-more..."}</p>
              </div>
              <div className="card-actions justify-between">
              {/* category_id, brand, model , manufacture, engine, mileage, original_Price, resale_Price, condition, seller_name, years_use, location, published_date, image, details */}
                <div className=" btn btn-xs badge-outline text-primary hover:text-accent">Report To Admin</div>
                <div className="badge badge-outline text-blue-600"><FaCheckCircle/></div>
              </div>
              <label
                htmlFor="booking-modal"
                className="btn btn-primary text-center text-xl font-bold text-accent hover:bg-outline border-none mt-2"
              >
                Book Now
              </label>
            </div>
          </div>
        ))}
      </div>
      <BookingModal></BookingModal>
    </div>
  );
};

export default Category;
