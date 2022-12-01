import React from 'react';
const AddProduct = () => {
    


    return (
        <div className="mb-16 max-w-screen-xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className=" text-4xl font-bold mt-8">Add A Product</h1>
              <span>______________</span>
            </div>
            <div className="flex justify-around  align-middle flex-wrap ">

          <form  className="grid grid-cols-1 gap-5 mt-5">
            <input
              name="name"
              type="name"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
              <input
                type="text"
                placeholder="Model"
                className="input input-bordered w-full"
                required
              />
            <input
              name="files"
              type="file"
              placeholder="Image"
              className="input input-bordered w-full"
              required
            />


            <div className="flex justify-between">
              <input
              name='manufacture'
                type="number"
                placeholder="Manufacture Year"
                className="input input-bordered w-48"
                required
              />

              <input
              name='engine'
                type="number"
                placeholder="Engine cc"
                className="input input-bordered w-48"
                required
              />
            </div>
            <div className="flex justify-between">
              <input
              name='mileage'
                type="number"
                placeholder="Mileage"
                className="input input-bordered w-48"
                required
              />

              <input
              name='original_price'
                type="number"
                placeholder="Market Price"
                className="input input-bordered w-48"
                required
              />
            </div>
            <div className="flex justify-between">
              <input
              name='resale_price'
                type="number"
                placeholder="Resale Price"
                className="input input-bordered w-48"
                required
              />

              <input
              name='years_use'
                type="number"
                placeholder="Years Of Use"
                className="input input-bordered w-48"
                required
              />
            </div>

            <div className="flex justify-between">
              <input
              name='published_date'
                type="date"
                className="input input-bordered w-48"
                required
              />

              <input
                type="text"
                placeholder="Condition: Good, Fair"
                className="input input-bordered w-48"
                required
              />
            </div>
            <span className='text-center text-primary font-bold'>Category</span>
            <div className="flex justify-between">
              <div className="">
                <input name="gander" type="radio" value='1' className="radio " required/>
                <label htmlFor="">YAMAHA</label>
              </div>
              <div className="">
                <input name="gander" type="radio" value='2' className="radio" required/>
                <label htmlFor="">SUZUKI</label>
              </div>
              <div className="">
                <input name="gander" type="radio" value='3' className="radio" required/>
                <label htmlFor="">KTM</label>
              </div>
            </div>
            

            <input
              name="details"
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
              required
            />
            <input
              name="locations"
              type="text"
              placeholder="Location"
              className="input input-bordered w-full"
              required
            />
            <input
              className="btn btn-primary text-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>


    );
};

export default AddProduct;