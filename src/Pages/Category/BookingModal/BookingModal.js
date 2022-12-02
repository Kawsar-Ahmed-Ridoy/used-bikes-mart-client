import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ modalItems, setModalItems }) => {
  const { user } = useContext(AuthContext);
  const {
    category_id,
    brand,
    model,
    manufacture,
    engine,
    mileage,
    original_price,
    resale_price,
    condition,
    seller_name,
    years_use,
    location,
    published_date,
    image,
    details,
    status
  } = modalItems;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const locations = form.locations.value;
    console.log(phone, location);

    const productBooking = {
      category_id,
      brand,
      model,
      manufacture,
      engine,
      mileage,
      original_price,
      resale_price,
      condition,
      seller_name,
      years_use,
      location,
      published_date,
      image,
      details,
      status,
      locations,
      phone,
      name: user?.displayName,
      email: user?.email
    };
    console.log(productBooking);

    fetch(`${process.env.REACT_APP_API_URL}/ordersBook`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`
      },
      body: JSON.stringify(productBooking)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setModalItems(null);
          toast.success("Item Booked Successfully");
        }
      })
      .catch((err) => console.error(err));
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
    </>
  );
};

export default BookingModal;
