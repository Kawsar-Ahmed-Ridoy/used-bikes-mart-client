import React from "react";

const BookingModal = () => {
    const handleSubmit = event =>{
        event.preventDefault()
    }
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
              className="input input-bordered w-full"
            />

            <div className="flex justify-between">
            <input
              type="text"
              disabled
              placeholder="Price"
              className="input input-bordered w-48"
            />
            
            <input
              type="text"
              disabled
              placeholder="Condition"
              className="input input-bordered w-48"
            />
            </div>

            <input
              name="phone"
              type="text"
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
