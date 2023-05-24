// https://6461f008491f9402f4ae1eea.mockapi.io/crud
import Axios  from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Read from './Read';
function Create() {
  const [name,setname]=useState('');
  const [age,setage]=useState('');
  const [email,setemail]=useState('');
  const navi = useNavigate();
const handlesubmit=(e)=>{
e.preventDefault();
Axios.post("https://6461f008491f9402f4ae1eea.mockapi.io/crud",{
  e_name:name,
  e_age:age,
  e_email:email
}).then(()=>{
// console.log(response.data);
navi('/');
})
}
  return (
    <div className='row'>
        <div className='col-md-4'>


        <div className='mb-2 mt-2'>
                <Link to='/Read'>
                <button className='btn btn-primary'>Read Data</button>
                </Link>
        </div>


        <div className='bg-primary p-4 text-center'>
            <h1>Create Data</h1>
        </div>
                <form onSubmit={handlesubmit}>
                <div className='form-group'>
                <label>Enter Task Name: </label>
                <input type='text' placeholder='Task Name' className='form-control' onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className='form-group'>
                <label>Choose Deadline: </label>
                <input type='date' placeholder='Date' className='form-control'  onChange={(e)=>setage(e.target.value)}/>
                </div>  
                <div className='form-group'>
                <label>Task Summary: </label>
                <input type='text' placeholder='Enter Summary' className='form-control'  onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <br></br>
                {/* <div className='d-grid'>
                <input type='submit' value="Submit" className='btn btn-primary'/>

                </div> */}
                <Link to='/Read'>
                <button className='btn btn-primary'>Submit Data</button>
                </Link>
                </form>
                {/* {name}
                <br></br>
                {age}
                < br></br>
                {email}
                 */}
        </div>

    </div>
  )
}

export default Create