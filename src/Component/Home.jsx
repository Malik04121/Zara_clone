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
               <Carousel activeIndex={index} interval={1000} onSelect={handleSelect}>
               <Carousel.Item>
               <Link to="/kids">
               <video width="100%" height='60%' autoPlay="autoPlay" loop={true} muted> <source src="https://static.zara.net/video///mkt/2021/12/aw21-happy-new-year-subhomes/subhome-xmedia-video-52-2/w/1808//large-landscape/subhome-xmedia-video-52-2_0.mp4?ts=1640882484837" type="video/mp4"/></video>
                <img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-44//w/808/IMAGE-portrait-ipad-fill-c1e6f970-86aa-42e2-af45-b607a07f8827-default_0.jpg?ts=1667488811836"
              alt="First slide"
            />
            
            </Link>
             
                </Carousel.Item>
               <Carousel.Item>
                <Link to="/women"><img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-party/subhome-xmedia-45-2//w/1366/IMAGE-landscape-default-fill-92c17c8f-160b-4edc-a2bb-b49d1e165b21-default_0.jpg?ts=1668167617711"
              alt="First slide"
            /><img
            className="itemimage"
            src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-45-2//w/1366/IMAGE-landscape-fill-a4f9c169-be06-4827-9cd3-041d7d62c12d-default_0.jpg?ts=1668167950339"
            alt="First slide"
          />
            </Link>
                </Carousel.Item>

                <Carousel.Item>
                <Link to="/men">
                <img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-man-north-shoesandbags/subhome-xmedia-45//w/1366/IMAGE-landscape-fill-679da43c-4bbb-46f4-9589-0b32e3ca7f37-default_0.jpg?ts=1668174271535"
              alt="First slide"
              />
                  <img
              className="itemimage"
              src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-party/subhome-xmedia-43//w/808/IMAGE-portrait-ipad-fill-df09c20c-d8c6-4941-9678-46241cfe8fd7-default_0.jpg?ts=1666959407829"
              alt="First slide"
            /></Link>
                </Carousel.Item>
            
               </Carousel>

            </div>
            
            </> 
          );
        
      }



export default Home
