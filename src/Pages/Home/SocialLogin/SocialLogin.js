import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider';

const SocialLogin = () => {
  const { googleLogIn, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = ()=>{
    googleLogIn()
    .then(result =>{
      const user = result.user;
      console.log(user);
      setLoading(false);
      toast.success('Login Successfully')
      setAuthToken(user)
      navigate(from, {replace: true})
    })
    .catch(err => console.log(err))
  }
    return (
        <div>
            <div className="form-control">
        <button onClick={handleGoogleLogIn} className="btn btn-primary text-accent">
          Google Login
        </button>
      </div>
        </div>
    );
};

export default SocialLogin;