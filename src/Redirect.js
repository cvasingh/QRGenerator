import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { domainName, data } from './data'

const Redirect = () => {
    const navigate = useNavigate();
    var index = parseInt(useParams().index.replace(':', ''));
    console.log(index);
    const link = data[index];
    console.log(link);
    const handleLogin = ()=>{
        navigate('/QRGenerator/login')
    }
    return <div class="contener">
      <h1>Your QRs</h1>
      <div class="signout">
        <button class="btn btn-sm btn-light" type="submit" name="signout"
          value="signout" onClick={handleLogin}>Login</button>
      </div>
        <div>{index}</div>
        <div>{link}</div>
    </div>
}
export default Redirect;