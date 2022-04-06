import React from "react"
import {Helmet} from "react-helmet";
import axios from 'axios';

<Helmet>
    <script src="resource.js" type="text/javascript"> </script>
</Helmet>


function Uploadimg() {

return (
 <div className="uploadimg">
<div class="container">
    <div class="row" style={{marginTop:"3%",marginBottom:"3%"}}>

        <div class="col-md-3">
 <div class="card">
    <div class="card-body">
     <div class="row">
         <div class="col-md-4">
        <img src="assets/images/ba-08.png"  height= "68px" alt=""/>
        </div>
        <div class="col-md-8">
        <p class="card-text">Background Remove</p>
         </div>
     </div>
    </div>
 </div>
        </div>

        <div class="col-md-3">
        <div class="card">
    <div class="card-body">
     <div class="row">
         <div class="col-md-4">
        <img src="assets/images/ba-08.png"  height= "68px" alt=""/>
        </div>
        <div class="col-md-8">
        <p class="card-text">Background Remove</p>
         </div>
     </div>
    </div>
 </div>
        </div>


<div class="col-md-3">
<div class="card">
    <div class="card-body">
     <div class="row">
         <div class="col-md-4">
        <img src="assets/images/ba-08.png"  height= "68px" alt=""/>
        </div>
        <div class="col-md-8">
        <p class="card-text">Background Remove</p>
         </div>
     </div>
    </div>
</div>
   </div>


        <div class="col-md-3">
        <div class="card">
    <div class="card-body">
     <div class="row">
         <div class="col-md-4">
        <img src="assets/images/ba-08.png"  height= "68px" alt=""/>
        </div>
        <div class="col-md-8">
        <p class="card-text">Background Remove</p>
         </div>
     </div>
    </div>
 </div>
        </div>
</div>








<div class="card" style={{width: "100%",borderRadius:"10px",backgroundColor:"#f3f5f7"}}>
    <div class="card-body">
    <div class="row">


<div class="col-md-8">
<div class="card">
<div style={{padding:"17% 8%",backgroundColor:"white"}}>
        <p style={{textAlign:"center",fontSize:"25px"}} class="card-text">Select a service and <br/>upload your images</p>
       
       <div class="text-center">
        <div class="upload-btn-wrapper">
                 <i class="fa fa-cloud-upload" style={{fontSize:"80px"}}></i> <br/>
                
            <button style={{marginTop:"8%"}} class="uploadbtn">Upload a file</button>
            <input type="file" name="myfile" />
        </div>
        </div>

   </div>      
</div>
<br/>
    <div class="text-center">
        <button style={{border:"none",padding:"5px 38px",backgroundColor:"red",color:"white",borderRadius:"15px"}}>START</button>
    </div>

</div>

    

 <div class="col-md-4">
 <div style={{padding:"50% 25%"}}>
     <button id="dwnl">Download</button> <p style={{textAlign:"center",marginBottom:"-1%"}}>or</p>
     <button id="dwnlall">Download All</button>
     </div>
 </div>

</div>
</div>
 </div>


    <button onChange={"loadFile(event)"}>abcde</button>
     


 </div>
</div>
  );
}




export default Uploadimg;