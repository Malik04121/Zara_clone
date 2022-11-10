import {Link} from "react-router-dom"
 import React from "react";
// import {FullPage,Slide} from "react-full-page"
// import {Carousel} from "react-responsive-carousel"
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import {Carousel} from  'react-bootstrap';
import "./home.css";
import {useState} from "react"

function Home(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  };
        
          return (
            <>
            <div className="homepage">
               <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                <Link to="/women"><img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/1366/IMAGE-landscape-fill-c68605f6-1f94-4830-8f4a-0f3bf22017e2-default_0.jpg?ts=1663579002306"
              alt="First slide"
            /></Link>
                </Carousel.Item>

                <Carousel.Item>
                <Link to="/men"><img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-party/subhome-xmedia-43//w/808/IMAGE-portrait-ipad-fill-df09c20c-d8c6-4941-9678-46241cfe8fd7-default_0.jpg?ts=1666959407829"
              alt="First slide"
            /></Link>
                </Carousel.Item>
            <Carousel.Item>
                <img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-44//w/808/IMAGE-portrait-ipad-fill-c1e6f970-86aa-42e2-af45-b607a07f8827-default_0.jpg?ts=1667488811836"
              alt="First slide"
            />
             <img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-45//w/808/IMAGE-portrait-ipad-default-fill-edb4d83d-fc32-4ded-b32f-d425f2d5353a-default_0.jpg?ts=1667838067556"
              alt="First slide"
            />
                </Carousel.Item>
               </Carousel>

            </div>
            
            </> 
          );
        
      }



export default Home
