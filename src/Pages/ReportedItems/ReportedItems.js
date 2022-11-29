import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import Reported from './Reported';

const ReportedItems = () => {
    const [reported, setReported] = useState({})
    const {loading} = useContext(AuthContext)

    useEffect(() => {
        axios.get('http://localhost:5000/reportedItem')
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
        {
            reported.map(report => <Reported
            key={report._id}
            report={report}
            ></Reported>)
        }
        

        </div>
        </div>
    );
};

export default ReportedItems;