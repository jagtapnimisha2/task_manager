import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import create from './Create';
import create from './Create';
function Read() {
    const [dataa,setdataa] = useState([]);
    function getdata(){
        axios.get("https://6461f008491f9402f4ae1eea.mockapi.io/crud").then((response)=>{
            setdataa(response.data);
        })

    }
    function handlerDelet(id){
        axios.delete(`https://6461f008491f9402f4ae1eea.mockapi.io/crud/${id}`)
        .then(()=>{
            getdata();
        })
    }
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div className='row'>
        <div className='col-md-12'>
           <div className='mb-2 mt-2'>
                <Link to='/create'>
                <button className='btn btn-primary'>Create Data</button>
                </Link>
           </div>
            <table className='table table-bordered table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>Task No.</th>
                        <th>Task</th>
                        <th>Deadline</th>
                        <th>Task Summary</th>
                        
                        {/* <th>EDIT</th> */}
                        <th>DELETE</th>
                    </tr>
                 </thead>
                <tbody>
                   {
                       dataa.map((item)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.e_name}</td>
                                        <td>{item.e_age}</td>
                                        <td>{item.e_email}</td>
                                        {/* <td>
                                            <Link to='/edit'>
                                            <button className='btn btn-primary'>EDIT</button>
                                            </Link>
                                        </td> */}
                                        <td>
                                            <button className='btn btn-danger' onClick={()=>{if(window.confirm("Are you sure ? ")){handlerDelet(item.id)}}}>DELETE</button>
                                        </td>
                                    </tr>
                                </>
                            )
                       })
                   }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Read