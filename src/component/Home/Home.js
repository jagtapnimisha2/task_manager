import React from 'react'
import { Link } from 'react-router-dom'
function Home(props) {
  return (
    
    <div>
    <h1>dsks</h1>
        <div>
            <h1>
                <Link to="/login">Login</Link>
            </h1>
            <br></br>
            <Link to="/singup">Singup</Link>
            {/* <Link to="/signup">Signup</Link> */}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2>{props.name ? `welcom -${props.name}` : "Login please"} </h2>
    </div>
  )
}

export default Home

// import React from "react";
// import { Link } from "react-router-dom";

// function Home(props) {
//   return (
//     <div>
//       <div>
//         <h1>
//           <Link to="/login">Login</Link>
//         </h1>
//         <br />
//         <h1>
//           <Link to="/signup">Signup</Link>
//         </h1>
//       </div>

//       <br />
//       <br />
//       <br />

//       <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
//     </div>
//   );
// }

// export default Home;