
import axios from 'axios'
import './user.css';
import { useEffect, useState } from 'react';

function Data(){
    const [ data,setData] = useState([])
    useEffect(() => {
       axios .get('https://jsonplaceholder.typicode.com/users')
        .then(r =>setData(r.data))
        .catch(e =>console.log(e));
       },[])

    return(
        <div className='container'>  
           <h1> Fetch User Data</h1>
           <table className='table'>
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                 data.map((user,index) =>{
                    return<tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                         </tr>
                    })
                }
              </tbody>
           </table>
       </div>
    );
}
export default Data;