import useState from "react";

const Login = () => {
 





return (
  <div id="singupelement">
  <form className="signupform">
    <div id="description">
      <h3 id="singupword">Rgister Yourserlf</h3>
      <p id="maddow">Begin You jerney with us today</p>
    </div>
    <div id="emailandpassword">
      <input
        placeholder="  Email"
        id="singupemail"
 
      />
      <p className="massage"></p>
           
      <input
        placeholder="  Password"
        id="singuppassword"
       
      />
      <p className="massage"></p>
      
      
      <button type="button" id="singupsubmit">
        Continue
      </button>
    </div>
    <div id="termsofuse">
      <input type="checkbox" id="checkbox" />
      <span>I agree to the terms of use</span>
    </div>
    <div id="aleadyhaveaccount">
      Already signed up?
      <a href="/login"> Log In</a>
    </div>
  </form>
</div>



)
}
export default Login;