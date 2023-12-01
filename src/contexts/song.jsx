import React, { useState } from "react"
 export const song=React.createContext()


 export  const Appprovider= ({children})=>{
    const [cruntsong,setCruntsong]=useState(10)
    const [thumbnail,setThumbnail]=useState()
    const [title,setTitle]=useState()
    return (
        <song.Provider value={{cruntsong,setCruntsong,thumbnail,setThumbnail,title,setTitle}}>{children}</song.Provider>
      );

}