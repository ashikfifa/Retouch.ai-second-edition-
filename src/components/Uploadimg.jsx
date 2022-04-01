import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

function Uploadimg() {
  return (
 <div className="uploadimg">
<div class="container">
    <div class="row">

        <div class="col-md-3">
 <div class="card" style={{width: "100%",borderRadius:"10px"}}>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
 </div>
        </div>

        <div class="col-md-3">
 <div class="card" style={{width: "100%",borderRadius:"10px"}}>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
 </div>
        </div>


        <div class="col-md-3">
 <div class="card" style={{width: "100%",borderRadius:"10px"}}>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
 </div>
        </div>


        <div class="col-md-3">
 <div class="card" style={{width: "100%",borderRadius:"10px"}}>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
 </div>
        </div>
</div>


<div class="card" style={{width: "100%",borderRadius:"10px",backgroundColor:"#f3f5f7"}}>
    <div class="card-body">
    <div class="row">
<div class="col-md-8">
<div class="card">
<div style={{padding:"23% 23%",backgroundColor:"white"}}>
        <p style={{textAlign:"center",fontSize:"25px"}} class="card-text">Select a service and <br/>upload your images</p>
        <i class="fa fa-cloud-upload" style={{fontSize:"80px",marginLeft:"40%"}}></i> <br/><br/>
        <div class="text-center">
        <button id="uploadbtn">Upload</button>
        </div>
 </div>      
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





 </div>
</div>
  );
}

export default Uploadimg;