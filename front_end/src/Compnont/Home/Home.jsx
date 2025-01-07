import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom"

import "./Home.css";

function Home() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    swipeToSlide: true,
    slidesToShow: 5, // Default for desktop
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2, // Show 3 cards on tablets
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 3 cards on mobiles
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  

  return (
    <>

    {/* slider image */}



      <div className="slider_image-div">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./media/slider_img.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./media/slider4.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./media/slider3.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* colom  */}

      <div className="card-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card_image-div">
                <img src="./media/card1.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card_image-div">
                <img src="./media/card2.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card_image-div">
                <img src="./media/card3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Our_Products">
        <h3>Our Products</h3>
      </div>

      {/* card slider  */}

      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider_cardimg-div">
            <img src="./media/coton2.png" alt="Cotton Bag 1" />
            <div><button>Cotton Bags</button></div>
          </div>
          <div className="slider_cardimg-div">
            <img src="./media/coton3.jpg" alt="Cotton Bag 2" />
            <div><button>Cotton Bags</button></div>
          </div>
          <div className="slider_cardimg-div">
            <img src="./media/cotton4.webp" alt="Cotton Bag 3" />
            <div><button>Cotton Bags</button></div>
          </div>
          <div className="slider_cardimg-div">
            <img src="./media/coton1.png" alt="Cotton Bag 4" />
            <div><button>Cotton Bags</button></div>
          </div>
          <div className="slider_cardimg-div">
            <img src="./media/coton2.png" alt="Cotton Bag 5" />
            <div><button>Cotton Bags</button></div>
          </div>
        </Slider>
      </div>


      {/* Testimonial */}

        <div className="Testimonial_container">
 
      {/* <div className="row"> */}
      <div className="col-md-6">
      <div className="Impex_Forbes-div">
    <div className="md_container">
    <h2>Sekawati Impex at Forbes India</h2>
     <div className="gupata_container">
     
     <Link to={"/"}><img src="./media/gupta-img.jpg" alt=""/></Link>
     </div>
    </div>
</div>

        </div>
        <div className="col-md-6">
        <div className="Testimonial_div">
          <h2>Testimonial</h2>
          <div className="text_slider">
           
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <p>"Congratulations!!! This is awesome!!! You truly are the Indian BAGMAN! I always liked that Sekawati focused on particular product. Not many business owners can do that. </p>

      <p> People tend to expand their business in wrong way (in my opinion). And I appreciate your flexibility that you accepted my request for sourcing organic cotton for my bags, even the order was so small back then!"</p>

      <h5>ASAKO MARUNO</h5>
      <h6>GREEN TEE , JAPAN</h6>
    </div>
    <div class="carousel-item">
    <p>"Congratulations!!! This is awesome!!! You truly are the Indian BAGMAN! I always liked that Sekawati focused on particular product. Not many business owners can do that. </p>

<p> People tend to expand their business in wrong way (in my opinion). And I appreciate your flexibility that you accepted my request for sourcing organic cotton for my bags, even the order was so small back then!"</p>

<h5>ASAKO MARUNO</h5>
<h6>Vikash  , JAPAN</h6>
    </div>
    <div class="carousel-item">
    <p>"Congratulations!!! This is awesome!!! You truly are the Indian BAGMAN! I always liked that Sekawati focused on particular product. Not many business owners can do that. </p>

<p> People tend to expand their business in wrong way (in my opinion). And I appreciate your flexibility that you accepted my request for sourcing organic cotton for my bags, even the order was so small back then!"</p>

<h5>ASAKO MARUNO</h5>
<h6>Rakesh , JAPAN</h6>
    </div>
  </div>
</div>
          </div>
        </div>

        </div>
      </div>
     
      {/* About Company */}
       
       <div className="About_Company-container">
        <h3 className="about">About Company</h3>
       
        <p>Sekawati is An ISO 9001:2015 & Sedex certified social complied company since last 25 years and we cater to the global marketplace. We are one of the largest producers of eco-friendly bags made of cotton and canvas.</p>
       
       
        <div className="container-xl">
      <div className="row">
        <div className="col-md-4">
          <div className="Business-Manufacturer">
          <img src="./media/about-icon-1.png"/>
          <p>Nature of Business-Manufacturer</p>
          
          </div>
        </div>

        <div className="col-md-4">
          <div className="Business-Manufacturer">
          <img src="./media/about-icon-2.png"/>
          <p>Total Number of Employees- 101 to 500r</p>
          
          </div>
        </div>

        <div className="col-md-4">
          <div className="Business-Manufacturer">
          <img src="./media/about-icon-3.png"/>
          <p>Year of Establishment- 1991</p>
          
          </div>
        </div>
      </div>

      <div className="Manufacturer_2div">

     


      <div className="row">
        <div className="col-md-4">
          <div className="Business-Manufacturer_2">
          <img src="./media/about-icon-4.png"/>
          <p>Legal Status Firm- Proprietorship</p>
          
          </div>
        </div>

        <div className="col-md-4">
          <div className="Business-Manufacturer_2">
          <img src="./media/about-icon-6.png"/>
          <p>GST No. 08ADSPG8203G1ZG</p>
          
          </div>
        </div>

       
      </div>

      </div>
      </div>
       
            
      <div className="white_div">

     </div>



     {/* You Looking */}

     <div className="You_Looking-container">
     <h3>Tell Us What Are You Looking For ?</h3>

     <div className="container">
     <div className="row">
     <div className="col-md-6">
     <div className="youtube_video">
     <div class="ratio ratio-16x9">
      <iframe src="https://youtu.be/OalU-s7Pyok?si=ZEVY5FZJFIM-EzyT" title="YouTube video" allowfullscreen></iframe>
      
      </div>
     </div>

     </div>
     <div className="col-md-6">
     <div className="Looking_form-div">
     <label  class="form-label">Name</label>
     <input type="text" class="form-control"/>

     <label  class="form-label">Phone Number</label>
     <input type="Number" class="form-control no-spinner"/>
     <label for="floatingTextarea">Comments</label>
     <textarea class="form-control"></textarea>
     <button type="button" class="btn btn">Message</button>
     </div>

        </div>

     </div>

     </div>

     </div>
       </div>
 

   
    </>
  );
}

export default Home;