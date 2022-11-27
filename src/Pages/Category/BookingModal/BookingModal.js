import React from "react";
import toast from "react-hot-toast";

const BookingModal = ({modalItems, setModalItems}) => {

const { model , engine, mileage,  resale_price, condition, } = modalItems;
console.log(modalItems);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.locations.value
    console.log(phone, location);
    setModalItems(null)
    toast.success('Item Booked Successfully')
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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 mt-5">
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
              name="locations"
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
