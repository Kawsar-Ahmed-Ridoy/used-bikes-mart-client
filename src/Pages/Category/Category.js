import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";

import Items from "./Items";

const Category = () => {

  const [modalItems, setModalItems] = useState(null)
  const categories = useLoaderData();

  return (
    <div className="mb-16 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-center text-4xl font-bold mt-8">Category</h1>
      </div>
      <div className="flex justify-around  align-middle flex-wrap ">
        {categories.map((category) => (
          
          <Items 
          key={category._id}
          category={category}
          setModalItems={setModalItems}
          ></Items>

        ))}
     
      </div>
      
      { modalItems &&
        <BookingModal
        key={modalItems._id}
        modalItems={modalItems}
        setModalItems={setModalItems}
        ></BookingModal>
      }
      
    </div>
  );
};

export default Category;
