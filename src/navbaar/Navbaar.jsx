
import "./navbaar.css";
import Sidebaar from '../sidebaar/Sidebaar'
import {  useState,useRef } from "react";

function Navbaar() {
    const side=useRef(0)

    function hidesidebaar(e){
        
    }
    
    const[showSidebar,setSidebar]=useState(false)
  const inputStyle = {
    padding: '10px 200px 10px 30px',
  };

  return (
    <>
    
      <div className="container" >
      {  showSidebar && <div ref={side}><Sidebaar/> </div>}
        <div className="left">
            <div className="svg" onClick={()=>setSidebar(!showSidebar)}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              className="svg_color"
              fill="#000"
              fillRule="nonzero"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          </svg>
          </div>

          <div className="logo">
            <img
              src="https://logodix.com/logo/661491.jpg"
              alt=""
              height={35}
              width={100}
            />
          </div>
          <div className="input">
            <input style={inputStyle} id="r" type="text" placeholder="Search Artists, Song, Albums" />
          </div>
        </div>
        <div className="right">
            <div className="btngana">
       <button  type="submit">Get Gaana Plus</button></div>
         <div className="img">
            <img src="https://img.icons8.com/?size=48&id=31016&format=png" alt="" height={40} />
         </div>
         <div className="nightmode">
            <img  className="n"src="https://img.icons8.com/?size=80&id=5zRLjXR6dEuN&format=png" alt="" height={35}/>
            <div className="login">
            <p className="login">Login/ Signup</p>
            </div>
         </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbaar;
