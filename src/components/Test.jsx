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
                <div class="title"><i class="material-icons">account_box</i> USERNAME</div><input class="text" type="text" placeholder="" />
            </div>
            <div class="input">
                <div class="title"><i class="material-icons">lock</i> PASSWORD</div><input class="text" type="password" placeholder="" />
            </div>
            <div class="input"><input type="submit" value="ENTER" /></div>
        </div>
        <div class="page signup">
            <div class="input">
                <div class="title"><i class="material-icons">person</i> NAME</div><input class="text" type="text" placeholder="" />
            </div>
            <div class="input">
                <div class="title"><i class="material-icons">markunread_mailbox</i> EMAIL</div><input class="text" type="password" placeholder="" />
            </div>

            <div class="input">
                <div class="title"><i class="material-icons">markunread_mailbox</i> Password</div><input class="text" type="password" placeholder="" />
            </div>
            <div class="input">
                <div class="title"><i class="material-icons">markunread_mailbox</i> Confirm Password</div><input class="text" type="password" placeholder="" />
            </div>
            <div class="input"><input type="submit" value="SIGN ME UP!" /></div>
        </div>
    </div>
  
</div>
    </div>
  );
 
}

export default Test;
