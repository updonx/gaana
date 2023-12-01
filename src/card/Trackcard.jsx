
function Trackcard({thumbnall,artist, title}) {
    return ( <>

    <div className="img2">
    <img  className ="img23"src={thumbnall} alt="" />
    <button  className="premium" type="submit">Premium</button>
    <p className="st">{title}</p>
    <p className="ar">{artist[0].name}</p>
    <p className="st1">{title}</p>
    </div>
    




    </> );
}

export default Trackcard;