import { NavLink } from "react-router-dom";
import "./homecard.css"

function Homecard({thumbnall,id}) {
    
    return (<>
    <NavLink to={`music/${id}`} >
    <div className="contener_homecard">

  < img className="himage" src={thumbnall} alt="" height={250} width={300} />
  
  </div>
  </NavLink>
  

    </>  );
}

export default Homecard;