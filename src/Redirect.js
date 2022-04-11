import React from 'react'
import { useParams } from 'react-router-dom';
import { domainName, data } from './data'

const Redirect = () => {
    var index = parseInt(useParams().index.replace(':', ''));
    console.log(index);
    const link = data[index];
    console.log(link);
    return <>
        <div>{index}</div>
        <div>{link}</div>
    </>
}
export default Redirect;