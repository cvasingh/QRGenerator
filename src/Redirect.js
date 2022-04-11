import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Redirect = ({ index, link }) => {
    const navigate = useNavigate();
    console.log(index);
    console.log(link);
    const handleLogin = () => {
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