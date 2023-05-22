import React, { useState } from 'react';

const Singup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };
  const handleImgChange = (newImg) => {
    setImg(newEmail);
  };
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  return (
    <form className='signupform'>
        <div id='description'>
            <h3 id='singupword' >Rgister Yourserlf</h3>
            <p id='maddow'>Begin You jerney with us today</p>
        </div>
        <div id='emailandpassword'>

        <input placeholder='  Email' id='singupemail'></input>
         <input placeholder='  First Name' id='singupusername'></input> 
        <input placeholder='  Last Name' id='singupusername'></input>
        <input placeholder='  Password' id='singuppassword'></input> 
        <input placeholder='  Confirm Password' id='singupconfirmpassword'></input> 

        <input placeholder='  You Image URL' id='singupuserimage'></input>
        <button id='singupsubmit'>Continue</button>
        </div>
        <div id='termsofuse'> <input type="checkbox" id="checkbox"></input>I agree to the terms  of use</div>
        <div id="aleadyhaveaccount">Already signed up? <a href="/login">  Log In</a></div>


    </form>
  );
};

export default Singup;
