import React from 'react'
import { Link } from 'react-router-dom';
function Edit() {
  return (
    <div className='row'>
        <div className='col-md-4'>


        <div className='mb-2 mt-2'>
            <Link>
                <button className='btn btn-primary'>Read Data</button>
            </Link>
        </div>


        <div className='bg-primary p-4 text-center'>
            <h1>Update Data</h1>
        </div>
                <form>
                <div className='form-group'>
                <label>enter name : </label>
                <input type='text' placeholder='name' className='form-control'/>
                </div>
                <div className='form-group'>
                <label>enter age : </label>
                <input type='number' placeholder='age' className='form-control'/>
                </div>  
                <div className='form-group'>
                <label>enter email : </label>
                <input type='email' placeholder='email' className='form-control'/>
                </div>
                <br></br>
                <div className='d-grid'>
                <input type='submit' value="Update" className='btn btn-primary' />
                </div>
                </form>
                
        </div>

    </div>
  )
}

export default Edit