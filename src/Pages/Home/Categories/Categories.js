import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loading from '../../Shared/Loading/Loading'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Categories = () => {
  const [items, setItems] = useState([]);
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/itemsKey`)
      .then((res) => {
        setItems(res.data)
      })
  }, []);

  if(loading){
    return <Loading></Loading>
  }
  return (
    
    <div className="mb-16 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h2 className="text-center text-4xl font-bold ">
          Brows Items By Category
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="flex justify-around text-center align-middle flex-wrap">
        {items.map((item) => (
          <div key={item._id} className="card w-96 h-96 py-7 shadow-xl pb-0 mb-4">
            <figure>
              <img src={item.imgs} className='w-full' alt="Shoes" />
            </figure>
            <div className="card-body">
              <Link to={`/category/${item.id}`} className="btn text-center text-2xl font-bold mt-4 text-accent hover:bg-primary border-none ">
               {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
