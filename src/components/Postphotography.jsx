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

 function Postphotography(props) {

    return(
        <div className="postphoto">

            <div id="button_back"style={{marginTop:"9%"}}>
                <p id="headpost">5 Important Photography Tips For Beginners</p>
            </div>


            <div class="container" style={{marginTop:"4%"}}>
            <div class="row">

            <div class="col-md-8" style={{height:"max-content"}}>
                <img src="assets/images/blog-20.jpg"  width="100%" height="20%" alt=""/>

                 <p style={{textAlign:"justify",marginTop:"4%",fontFamily:"poppins"}}>Photographs help us freeze a certain moment and 
                    then relive it again and again. It enables us to 
                    capture our happiest memories into a frame and then 
                    recall them when we’re sad or gloomy. It’s not just a random piece 
                    of paper; it’s an amalgamation of emotions, stories and people. As Ed Sheeran rightly 
                    says, we do keep our love in photographs. Whether it’s professional, lifestyle, personal
                     or product photography, it’s a skill you need to master from scratch. In this blog, we
                      will highlight some important photography tips to get you started on this amazing memory 
                      capturing journey.</p>
         
    <img src="assets/images/professional-photographer.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt=""/>           
<br/>
                   <i style={{fontSize:"20px",fontWeight:"700"}}>“Photography is the
                story I fail to put into words”</i>        

                <p style={{textAlign:"right",fontFamily:"poppins",fontSize:"18px"}}>Destin Sparks<br/>
Award Winning Landscape Photographer</p>

<p style={{textAlign:"justify"}}>No matter how accurate a description you provide for a scenario you saw; a product on your online store or of a memory 
from the past, it can be no match for a vibrant high quality photograph. That is the magical thing about 
photographs- they can speak a thousand words to the viewers in one glance.</p>
           
           <p style={{fontSize:"20px",fontWeight:"700"}}>Top 5 Tips for Professional Photography</p>

           <p style={{fontSize:"18px",fontWeight:"700"}}>Tip 1: Always shoot in RAW:</p>

           <p style={{textAlign:"justify"}}>Whether it’s your phone or the camera you own, you’ll notice
            both devices have some filters to enhance the brightness and quality of your photo.
             Other than that, each camera has some pre-installed processing features as well.
             Using all this, your camera will normally produce JPG/JPEG photographs that are already 
             compressed and processed to some extent. Although these features are appropriate for a
              non-photographer, the processing level is clearly not enough for a professional photographer
               like you. This is why; we encourage the use of RAW images. RAW files are unprocessed and
                uncompressed image file that will capture all your image data and allow you to edit the 
                pictures exactly the way you want and not the way the camera thinks is appropriate.</p>


         <p style={{fontSize:"18px",fontWeight:"700"}}>Tip 2: Use your exposure triangle effectively</p>

         <p style={{textAlign:"justify"}}>The exposure triangle helps you understand how your photograph 
         will look before capturing it by illustrating the relationship between 3 controls- ISO, shutter 
         speed and aperture.    These three things are complementary to each other and adjusting one means 
         you’ll probably have to adjust the others as well. As a beginner, you can shoot in the Automatic or 
         Priority mode but in order to develop yourself as a professional, it’s important that you adjust them
          according to the setting and theme. To incorporate in adjustment, you’ll simply have to go to your
           camera’s manual mode, select the three controls one after one and adjust their values accordingly
            and then take a test photo to review and see if you’re happy with your settings.</p>
                 

        <img src="assets/images/product-photography-blog-cover.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt=""/>        
           <br/>
        <p style={{textAlign:"justify"}}>For example- Aperture works like the iris of your eyes. 
        It lets you control how much of external light will go into the lens and therefore the image. 
        If you input a small number, it will widen the lens and allow more lights into the image. Shutter
         speed, on the other hand, determines how long the lens stays open for. If it’s faster, it will make
          a motion stay still and if it’s slow, it will blur an image. Lastly, by changing ISO settings you 
          control the sensitivity of digital sensor to light. If you increase ISO, it will bring in more lights
           into a darker setting and make it seem brighter. But a low ISO is appropriate when working with a 
           very bright setting</p>

           <p style={{fontSize:"18px",fontWeight:"700"}}>Tip 3: Rules for the rangefinder</p>


           <p style={{textAlign:"justify"}}>You may have seen in movies how photographers close one eye while
            looking through the rangefinder. While that may seem cool, it’s better if you keep both your eyes
             open. Keeping your eyes open with help you get a better understanding of the setting and help 
             you know when the subject comes in. This is especially helpful in wildlife photography. Also, 
             keep the camera at a distance where you can see both the range through the camera and the photo
              setting. This will help you make sure that the setting is according to your requirement and adjust
               it according to your requirement.</p>

               <p style={{fontSize:"18px",fontWeight:"700"}}>Tip 4: The Rule of Thirds</p>


           <p style={{textAlign:"justify"}}>If you have a passion for capturing aesthetic and creative pictures,
            this trick is perfect for you. To implement this, you’ll have to imagine two horizontal and two 
            vertical lines inside your frame. This will create a nine grid box dividing the frame equally.
             While most of us focus on getting the center view while capturing a photo, the rule of third 
             emphasizes on getting the subject on any of the four corners or where the lines intersect. Placing
              the photos this way will make them look more interesting and unique and provide your viewers with
               a better understand of the surroundings.  Remember, you don’t have to use this rule on all your
                photographs. You need to put on your creative glasses first and use this where you feel is more
                 accurate.</p>

                 <img src="assets/images/using-camera-flash.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt=""/>
<br/>
                 <p style={{fontSize:"18px",fontWeight:"700"}}>Tip 5: Check and adjust your on-camera flash before every photoshoot</p>

                 <p style={{textAlign:"justify"}}>For a beginner, it’s often difficult to spend heavily
                  on external lights and other accessories. This is when on-camera flashes come to your rescue.
                   On-camera flashes are used when the setting doesn’t have enough light. Unlike external
                    lighting, as the feature is built in; it can often create difficulties if you don’t adjust 
                    the lighting properly. For example- for night time or low light photography, using on-camera
                     flashes can reflect unnecessarily on the eyes and highlight the subject in an unwanted manner.
                      In such a situation, it’s better to increase your ISO to bring in more lights into the photo.
                       Another alternative can be to adjust the brightness setting of the flash so it doesn’t produce
                        any hard effects. Other than that, you can also put a piece of white paper or cloth on top
                         of the flash to soften and reflect the light all over rather than centering it at a single
                          point. This will create an effect similar to a softbox.<br/>

Photography is a skill that will require a lot of your effort and practice. It’s not something you’ll master 
in a day or a week. You’re bound to get blur, shaky and overexposed photos in your beginning days. But if you
 are patient and don’t give up, you’ll soon start to realize the improvements within yourself and what magical
  craft photography actually is!</p>



             
             </div>

            <div className="col-md-4">
                <div class="row">
                <div class="col-4 col-md-4">
                    <div class="row-8">
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                    </div>
                
                {/* <div class="row-4"style={{marginTop:"37%"}}>
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                </div> */}
                </div>

                <div class="col-8 col-md-8">
                <div class="row-4">
                    <p style={{fontSize:"18px",fontFamily:"poppins"}}>7 Creative Winter Marketing Ideas For E-Commerce Businesses</p>
                    </div>
                <div class="row-8">
                    <p>The beginning of winter fills our minds with numerous excitements.
                         It’s the season of Christmas, snowfall, and New Year. With a sudden change in weather</p>
                </div>    
                </div>
                </div>


                <div class="row">
                <div class="col-4 col-md-4">
                    <div class="row-8">
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                    </div>
                
                {/* <div class="row-4"style={{marginTop:"37%"}}>
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                </div> */}
                </div>

                <div class="col-8 col-md-8">
                <div class="row-4">
                    <p style={{fontSize:"18px",fontFamily:"poppins"}}>7 Creative Winter Marketing Ideas For E-Commerce Businesses</p>
                    </div>
                <div class="row-8">
                    <p>The beginning of winter fills our minds with numerous excitements.
                         It’s the season of Christmas, snowfall, and New Year. With a sudden change in weather</p>
                </div>    
                </div>
                </div>



                <div class="row">
                <div class="col-4 col-md-4">
                    <div class="row-8">
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                    </div>
                
                {/* <div class="row-4"style={{marginTop:"37%"}}>
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                </div> */}
                </div>

                <div class="col-8 col-md-8">
                <div class="row-4">
                    <p style={{fontSize:"18px",fontFamily:"poppins"}}>7 Creative Winter Marketing Ideas For E-Commerce Businesses</p>
                    </div>
                <div class="row-8">
                    <p>The beginning of winter fills our minds with numerous excitements.
                         It’s the season of Christmas, snowfall, and New Year. With a sudden change in weather</p>
                </div>    
                </div>
                </div>

                <div class="row">
                <div class="col-4 col-md-4">
                    <div class="row-8">
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                    </div>
                
                {/* <div class="row-4"style={{marginTop:"37%"}}>
                <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                </div> */}
                </div>

                <div class="col-8 col-md-8">
                <div class="row-4">
                    <p style={{fontSize:"18px",fontFamily:"poppins"}}>7 Creative Winter Marketing Ideas For E-Commerce Businesses</p>
                    </div>
                <div class="row-8">
                    <p>The beginning of winter fills our minds with numerous excitements.
                         It’s the season of Christmas, snowfall, and New Year. With a sudden change in weather</p>
                </div>    
                </div>
                </div>
<br/>
<br/>
               <p style={{fontWeight:"700",fontSize:"20px",fontFamily:"poppins"}}>Share:</p>
               <hr style={{width:"80%",border:"3px solid",backgroundColor:"black",opacity:"1",marginTop:"-3%"}}></hr>

        <div class="row">
             <div class="col-4 col-md-4">
               <img src="assets/images/facebookblack.png" alt=""/>
            </div>

            <div class="col-4 col-md-4">
               <img src="assets/images/facebookblack.png" alt=""/>
            </div>

            <div class="col-4 col-md-4">
               <img src="assets/images/facebookblack.png" alt=""/>
            </div>
        </div>

    </div>
<p style={{textAlign:"center"}}>Copyright</p>
            </div>
        </div>

        </div>
    );

 }

 export default Postphotography;