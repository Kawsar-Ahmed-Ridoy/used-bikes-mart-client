import React from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';

const Items = ({category, setModalItems}) => {
  const handleReport = ()=>{
    
    fetch("http://localhost:5000/reportedItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`
      },
      body: JSON.stringify(category)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Item Report Successfully");
          
        }
      })
      .catch((err) => console.error(err));

  }


    return (
        <div>
            <div key={category._id}className="card w-96 bg-base-100 shadow-xl mb-8">
            
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
              <span>Purchase: {category.manufacture}</span> <br/>
              <span>Engine: {category.engine} CC</span> <br/>
              <span>New Price: ${category.original_price}</span> <br/>
              <span>Year Of Used: {category.years_use} years</span> <br/>
              </div>
              <div>
               <br/>
              <span>Condition: {category.condition}</span> <br/>
              <span>Resale Price: ${category.resale_price}</span> <br/>
              <span>Mileage: {category.mileage} kmpl</span> <br/>
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
                <div onClick={handleReport} className=" btn btn-xs badge-outline text-primary hover:text-accent">Report To Admin</div>
                {
                  category.status? <div className="badge badge-outline text-blue-600"><FaCheckCircle/></div> : ' '
                }
              </div>
              
              <label
                onClick={()=> setModalItems(category)}
                htmlFor="booking-modal"
                className="btn btn-primary text-center text-xl font-bold text-accent hover:bg-outline border-none mt-2"
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
    );
};

export default Items;