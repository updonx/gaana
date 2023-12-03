import React, { useContext } from "react";
import { AppContext } from "../contexts/context";
import Homecard from "../card/Homecard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
  const name = useContext(AppContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="caro">
    <Carousel responsive={responsive} >
      {name.map((music, key) => (
       <div  key={key} className="slider-image">

        <Homecard
         
          hedding={music.appType}
          artist={music.artist}
          creaditat={music.createdAt}
          fetured={music.featured}
          likedBy={music.likedBy}
          thumbnall={music.thumbnail}
          title={music.title}
          type={music.type}
          v={music._v}
          id={music._id}
          url={music.audio_url}
          
        />
        </div>
      ))}
    </Carousel>
    </div>
  );
}

export default Home;
