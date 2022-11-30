import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
const AddProduct = ({users}) => {
    
    const { user } = useContext(AuthContext);
console.log(users);

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
              disabled
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              disabled
              placeholder="Model"
              defaultValue={`Model: `}
              className="input input-bordered w-full"
            />

            <div className="flex justify-between">
              <input
                type="text"
                disabled
                placeholder="Purchase"
                defaultValue={`Engine:  cc`}
                className="input input-bordered w-48"
              />

              <input
                type="text"
                disabled
                placeholder="Condition"
                defaultValue={`Mileage:  kmpl`}
                className="input input-bordered w-48"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                disabled
                placeholder="Purchase"
                defaultValue={`Engine:  cc`}
                className="input input-bordered w-48"
              />

              <input
                type="text"
                disabled
                placeholder="Condition"
                defaultValue={`Mileage:  kmpl`}
                className="input input-bordered w-48"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                disabled
                placeholder="Purchase"
                defaultValue={`Engine:  cc`}
                className="input input-bordered w-48"
              />

              <input
                type="text"
                disabled
                placeholder="Condition"
                defaultValue={`Mileage:  kmpl`}
                className="input input-bordered w-48"
              />
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                disabled
                placeholder="Price"
                defaultValue={`Price: $`}
                className="input input-bordered w-48"
              />

              <input
                type="text"
                disabled
                placeholder="Condition"
                defaultValue={`Condition: `}
                className="input input-bordered w-48"
              />
            </div>

            <input
              name="phone"
              type="number"
              placeholder="Phone"
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