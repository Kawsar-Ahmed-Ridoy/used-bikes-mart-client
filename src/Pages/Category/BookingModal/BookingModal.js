import React from "react";

const BookingModal = ({modalItems}) => {

const { model , engine, mileage,  resale_price, condition, } = modalItems;
console.log(modalItems);
  const handleSubmit = (event) => {
    event.preventDefault();

  };
  return (
    <>

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">Name</h3>
          <form onClick={handleSubmit} className="grid grid-cols-1 gap-5">
            <input
              name="name"
              type="name"
              disabled
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              disabled
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              disabled
              placeholder="Model"
              defaultValue={`Model: ${model}`}
              className="input input-bordered w-full"
            />

            <div className="flex justify-between">
              <input
                type="text"
                disabled
                placeholder="Purchase"
                defaultValue={`Engine: ${engine} cc`}
                className="input input-bordered w-48"
              />

              <input
                type="text"
                disabled
                placeholder="Condition"
                defaultValue={`Mileage: ${mileage} kmpl`}
                className="input input-bordered w-48"
              />
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                disabled
                placeholder="Price"
                defaultValue={`Price: $${resale_price}`}
                className="input input-bordered w-48"
              />

              <input
                type="text"
                disabled
                placeholder="Condition"
                defaultValue={`Condition: ${condition}`}
                className="input input-bordered w-48"
              />
            </div>

            <input
              name="phone"
              type="number"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input input-bordered w-full"
            />
            <input
              className="btn btn-primary text-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
