import React from "react";

function Test() {

  return (
    <div className="test">
        <div class="containerss"><input type="radio" name="tab" id="signin" checked="checked" /><input type="radio" name="tab" id="register" />
        <div class="tabs"><label class="tab" for="signin">
            <div class="text">Sign In</div>
        </label><label class="tab" for="register">
            <div class="text">Register</div>
        </label></div>
    <div class="pages">
        <div class="page">
        <div class="input">
            <input class="text" type="text" placeholder="Username" />
           </div>
            <div class="input">
                <input class="text" type="password" placeholder="Password" />
            </div>
            <div class="input"><input type="submit" value="ENTER" /></div>
        </div>
        <div class="page signup">
            <div class="input">
                <input class="text" type="text" placeholder="Name" />
            </div>
            <div class="input">
                <input class="text" type="password" placeholder="Email" />
            </div>

            <div class="input">
                <input class="text" type="password" placeholder="Password" />
            </div>
            <div class="input">
                <input class="text" type="password" placeholder="Confirm Password" />
            </div>
            <div class="input"><input type="submit" value="Agree & Join" /></div>
            <p style={{fontSize:"12px",textAlign:"center",marginTop:"2%",color:"#c5c7c8"}}>By clicking Agree & Join,You Agree To The <u>Terms & Conditions</u></p>

            <button style={{color:"#bcbfc6"}} class="btngoogle"><img style={{float:"left",paddingTop: "11px"}} src="https://img.icons8.com/office/16/000000/google-logo.png"/> Sign Up With Google</button>
            <p style={{fontSize:"14px",textAlign:"center",marginTop:"2%",color:"#c5c7c8"}}>Already on RestouchedAi? <u style={{color:"#ada9ae"}}>Sign in</u></p>
        </div>
    </div>
  
</div>
    </div>
  );
 
}

export default Test;
