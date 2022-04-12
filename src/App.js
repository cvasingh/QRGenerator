import React, { useEffect, useState } from 'react'
import './App.css';
import { QRgen } from './QRgen';
import { domainName, data } from './data'
import Redirect from './Redirect';

function App() {
  var [url, setUrl] = useState(window.location.href);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    url.split("#")[1] ? setRedirect(true) : setRedirect(false)
  }, [])
  console.log(url);
  console.log(redirect);



  const [arr, setArr] = useState(data);
  const [addnew, setAddnew] = useState('');
  const handleGenerate = (e) => {
    setArr([...arr, addnew])
    console.log(arr);
    e.preventDefault();
  }
  const handleChange = (link, index) => {
    alert('change can not be done')
  }
  const handleUPdate = (e) => {
    alert('database required')
    e.preventDefault();
  }
  return <>
    <div class="contener">
      <h1>Your QRs</h1>
      <div class="signout">
        <button class="btn btn-sm btn-light" type="submit" name="signout"
          value="signout" onclick="singOut()">Sign Out</button>
      </div>
      <div class="main">
        <div class="rightbar">
          <table>
            <tr>
              <td>
                <div class="linkbox">
                  <div class="addbutton">
                    <p>+</p>
                    <form onSubmit={handleGenerate}>
                      <input class="form-control" name="link" placeholder="Type something..." required
                        value={addnew} onChange={(e) => setAddnew(e.target.value)} /><br />
                      <button class="btn btn-sm btn-light" type="submit" name="+" value="+">
                        GENERATE</button>
                    </form>
                  </div>
                </div>
              </td>
              {arr.reverse().map((item, index) => {
                return <td>
                  <div class="linkbox">
                    <div class="qrbox">
                      <QRgen link={domainName + index} />
                    </div>
                    <div>
                      <form onSubmit={handleUPdate}>
                        <input hidden type="name" name="qr_id" value={index} />
                        <input class="form-control" name="link" placeholder="Type something..." value={item} required /><br />
                        <button class="btn btn-sm btn-light" type="submit" name="update"
                          value="update" onChange={(e) => handleChange(e, index)}>UPDATE</button>
                      </form>
                    </div>
                  </div>
                </td>
              })}
            </tr>
          </table>
        </div>
      </div>
    </div>
    {redirect && <Redirect index={url.split("#")[1]} />}
  </>
}

export default App;
