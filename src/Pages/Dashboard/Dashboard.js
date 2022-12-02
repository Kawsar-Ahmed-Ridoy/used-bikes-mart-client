import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import AddProduct from '../AddProduct/AddProduct';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
    const {user , loading} = useContext(AuthContext)
    const [userLoad, setUserLoad] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`
          }
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setUserLoad(data);
          })
          .catch((err) => console.error(err));
      }, [user?.email]);

      if(loading){
        return <Loading></Loading>
      }

    return (
        <div >
            {
                userLoad?.map(users => users.seller?<AddProduct
                key={users._id}
                users={users}
                ></AddProduct> : ''
                
                )
            }
            
        </div>
    );
};

export default Dashboard;