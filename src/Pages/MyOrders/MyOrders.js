import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Order from "./Order";

const MyOrders = () => {
    const {user, logOut} = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/ordersBook?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`
      }
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyOrders(data);
      })
      .catch((err) => console.error(err));
    },[user?.email, logOut])

console.log(myOrders);
  return (
    <div className="mb-16 max-w-screen-xl mx-auto">
        <div className="my-8">
        <h2 className="text-center text-4xl font-bold ">
          My Orders
        </h2>
      </div>
      {
        myOrders?.map(myOrder => <Order
        key={myOrder._id}
        myOrder={myOrder}
        ></Order>)
      }
    </div>
  );
};

export default MyOrders;
