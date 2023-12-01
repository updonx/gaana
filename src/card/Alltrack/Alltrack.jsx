import { useContext } from "react";
import { AppContext, AppProvider } from "../../contexts/context";
import Trackcard from "../Trackcard";
import "./alltrack.css"

 function Alltrack() {
     const songaray=useContext(AppContext)
     console.log(songaray)
    return (  <>
        {
            songaray.map((music,key)=>{
                return(
                 
                  <Trackcard   key={key}hedding ={music.appType} artist={music.artist} creaditat={music.createdAt} fetured={music.featured} likedBy={music.likedBy} thumbnall={music.thumbnail} title={music.title} type={music.type} v={music._v} id={music._id} url={music.audio_url}/>
                )
            })
        }
    </>);
 }
 
 export default Alltrack;