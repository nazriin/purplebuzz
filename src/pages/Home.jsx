import React from "react";
import "../pages/main.scss";
import { GoGift } from "react-icons/go";
import { FaBoxArchive } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <div className="getstarted">
        <div className="startedtext">
          <h1>HTML CSS Template with Bootstrap 5 Beta 1</h1>
          <p>
            You are not allowed to re-distribute this Purple Buzz HTML template
            as a downloadable ZIP file on any kind of Free CSS collection
            websites. This is strongly prohibited. Please contact TemplateMo for
            more information.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="services">
        <div className="servicescontainer">
          <h1>Services</h1>
          <div className="gift">
          <span><GoGift />Make Success for future</span>
          </div>
            <p>
              You are free to use this template for your commercial or business
              websites. You are not allowed to re-distribute this template ZIP
              file on any template collection websites. It is too easy to
              illegally copy and repost this template.
            </p>
        </div>
      </div>

      <div className="category">
        <div className="categorycontainer">
          <span className="all">All</span>
          <span>Graphics</span>
          <span>UI/UX</span>
          <span>Branding</span>
        </div>
      </div>

      <div className="cards">
        <div className="cardscontainer">
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-01.jpg)"}} >
            <div className="cardtxt">
              <span>UI/UX design</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-02.jpg)"}} >
            <div className="cardtxt">
              <span>Social Media</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-03.jpg)"}} >
            <div className="cardtxt">
              <span>Marketing</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-04.jpg)"}} >
            <div className="cardtxt">
              <span>Graphic</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-05.jpg)"}} >
            <div className="cardtxt">
              <span>Digital Marketing</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-06.jpg)"}} >
            <div className="cardtxt">
              <span>Market Research</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-07.jpg)"}} >
            <div className="cardtxt">
              <span>Business</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="card" style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-08.jpg)"}} >
            <div className="cardtxt">
              <span>Branding</span><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="view">
        <div className="viewcontainer">
          <div className="box"><FaBoxArchive /></div>
        <div className="viewtxt"><h4>Great transformations successful
        Quis ipsum suspendisse ultrices gravida.</h4></div>
        <button>View Our Work</button>
        </div>
       
      </div>
    </>
  );
};

export default Home;
