import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import Reported from './Reported';

const ReportedItems = () => {
    const [reported, setReported] = useState([])
    const {loading} = useContext(AuthContext)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/reportedItem`)
        .then((res) => {
            setReported(res.data)
        })
    }, []);
    
    console.log(reported);
if(loading){
  return <Loading></Loading>
}
    return (
        <div className="mb-16 max-w-screen-xl mx-auto ">
      <div className="mb-8">
        <h1 className="text-center text-4xl font-bold mt-8">Reported Items</h1>
      </div>
      <div className="flex justify-around  align-middle flex-wrap ">
      {reported?.length ? (
        <>
          {reported?.map((report) => (
            <Reported key={report._id} report={report}></Reported>
          ))}
        </>
      ) : (
        <div
          style={{ height: "52vh" }}
          className="flex  justify-center align-middle w-full text-center"
        >
          <h4 className="text-5xl text-center my-auto text-primary">
          Reported Items Not Found!!!
          </h4>
        </div>
      )}
        

        </div>
        </div>
    );
};

export default ReportedItems;