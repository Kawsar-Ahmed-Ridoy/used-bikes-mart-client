import React from 'react';

const Reported = ({report}) => {
    return (
        <div>
            <div key={report._id}className="card w-96 bg-base-100 shadow-xl mb-8">
            
            <figure>
              <img src={report.image} className='h-56 w-full' alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Brand: {report.brand}
              </h2>
              <div className="flex justify-between"> 
              <div>
              <span>Model: {report.model}</span> <br/>
              <span>Purchase: {report.manufacture}</span> <br/>
              <span>Engine: {report.engine} CC</span> <br/>
              <span>New Price: ${report.original_price}</span> <br/>
              <span>Year Of Used: {report.years_use} years</span> <br/>
              </div>
              <div>
               <br/>
              <span>Condition: {report.condition}</span> <br/>
              <span>Resale Price: ${report.resale_price}</span> <br/>
              <span>Mileage: {report.mileage} kmpl</span> <br/>
              <span>Seller Name: {report.seller_name}</span> <br/>
              </div>
              </div>
              <div className="">
              <span>Post: {report.published_date}</span> <br/>
              <span>Location: {report.location}</span> <br/>
              <p>Details: {report.details.slice(0, 120)+ "read-more..."}</p>
              </div>

            </div>
          </div>
        </div>
    );
};

export default Reported;