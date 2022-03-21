import { render } from "@testing-library/react";
// import React from "react";
import React, { Component } from "react";
import BeforeAfterSlider from 'react-before-after-slider';
import Testimonial from 'react-testimonial';
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Blog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="blogs">
            <div className="">
                 <img src="assets/images/our_blogs.jpg" height="80%" width="100%"/>
            </div>

            <div class="container" style={{marginTop:"5%"}}>
                    <div class="row">
                        <div class="col-md-7">
                            <Slider {...settings}>
                            <div>
                            <img src="assets/images/Bounce-Rate-cover2.jpg" height="100%" width="100%"/>
                            </div>
                            <div>
                            <img src="assets/images/seo-cover.jpg" height="100%" width="100%"/>
                            </div>
                            <div>
                            <img src="assets/images/Influencer_Marketing.jpg" height="100%" width="100%"/>
                            </div>
                            </Slider>
                        </div>

                        <div class="col-md-5">
                           <div class="row-md-6">
                           <div class="content"> <a href="#">
                    <div class="content-overlay"></div> <img class="content-image" src="assets/images/remarketing-blog-cover.jpg"/>
                    <div class="content-details fadeIn-bottom">
                        <p class="content-title" style={{fontSize:"20px",fontWeight:"600"}}>Easy Product Photography Solutions for Small Business</p>
                    </div>
                </a> </div>
                           </div>
                           
                           <div class="row-md-6"style={{marginTop:"4%"}}>
                           <div class="content"> <a href="#">
                    <div class="content-overlay"></div> <img class="content-image" src="assets/images/product-photography-blog-cover.jpg"/>
                    <div class="content-details fadeIn-bottom">
                        <p class="content-title"  style={{fontSize:"20px",fontWeight:"600"}}>Easy Product Photography Solutions for Small Business</p>
                    </div>
                </a> </div>
                            </div>
                            
                        </div>
                    </div>
            </div>

            <div class="container">
                <h1 style={{textAlign:"center",marginTop:"6%",fontFamily:"poppins",fontWeight:"600"}}>OUR
                 FEATURED BLOGS</h1>
                <br/>
                <div class="row">
                    <div class="col-md-6" style={{height:"max-content"}}>
                    <img src="assets/images/latestblog.jpg" height="70%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins"}}>7 Creative Winter
                         Marketing Ideas for E-commerce Businesses</p>
                         <p style={{textAlign:"justify"}}>The beginning of winter fills our minds with numerous excitements.
                          It’s the season of Christmas, snowfall, and New Year. With a sudden change in weather and to prepare 
                          for the upcoming occasions, everyone requires a change in their wardrobe as well.  “Winter is not a 
                          season, it’s a celebration” Anamika MishraIndian</p>
                    </div>

                    <div class="col-md-3">
                        <div class="row-md-6">
                        <img src="assets/images/latestblog.jpg" height="100%" width="100%"/>
                        <p style={{fontWeight:"600",fontFamily:"poppins"}}>7 Creative Winter
                         Marketing Ideas for E-commerce Businesses</p>
                        </div>
                        <div class="row-md-6">
                        <img src="assets/images/Blog-21.jpg" height="100%" width="100%"/>
                        <p style={{fontWeight:"600",fontFamily:"poppins"}}>Top Shopify Marketing Strategy for Sellers</p>
                        </div>
                    </div>

                    <div class="col-md-3">
                    <div class="row-md-6">
                    <img src="assets/images/Blog-23.jpg" height="100%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins"}}>Easy Product Photography Solutions
                     for Small Business</p>
                    </div>
                        <br/>
                    <div class="row-md-6">
                     <a href="/postphotography" target='_blank'style={{textDecoration:"none"}}>   
                    <img src="assets/images/Blog-20.jpg" height="100%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>5 Important Photography Tips for Beginners</p></a>
                    </div>
                        
                    </div>
                </div>
            </div>

            <div class="container">
            <h1 style={{textAlign:"center",marginTop:"6%",fontFamily:"poppins",fontWeight:"600"}}>LATEST BY CATEGORY</h1>
        <br/>
            <div class="row">
                <div class="col-md-3">
                <div class="row-md-6">
                    <img src="assets/images/latestblog.jpg" height="100%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins"}}>7 Creative Winter
                         Marketing Ideas for E-commerce Businesses</p>
                    </div>

                    <div class="row-md-6">
                    <img src="assets/images/Blog-21.jpg" height="100%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins"}}>Top Shopify Marketing Strategy for Sellers</p>
                    </div>
                </div>


                <div class="col-md-6">
                    <img src="assets/images/latestblog.jpg" height="67%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins"}}>7 Creative Winter Marketing Ideas
                     for E-commerce Businesses</p>
                     <p style={{textAlign:"justify"}}>The beginning of winter fills our minds with numerous excitements. It’s the season 
                         of Christmas, snowfall, and New Year. With a sudden change in weather and to prepare
                          for the upcoming occasions, everyone requires a change in their wardrobe as well. 
                           “Winter is</p>
                    
                    <button id="button10">Read More</button>
                    </div>


                <div class="col-md-3">
                <div class="row-md-6">
                    <img src="assets/images/seo-cover.jpg" height="100%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins"}}>SEO Basics You Need to Know</p>
                    </div>

                    <div class="row-md-6">
                    <img src="assets/images/Influencer_Marketing_2.jpg" height="100%" width="100%"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins"}}>Influencer Marketing: How to Find the Right One</p>
                    </div>
                </div>

            </div>

         </div>

            <br/>
        </div>

    );
}

export default Blog;